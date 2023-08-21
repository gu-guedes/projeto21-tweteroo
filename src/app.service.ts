import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Tweet } from './entities/tweet.entity';
import { RegisterUser } from 'src/entities/user.entity';

@Injectable()
export class AppService {
  private users: RegisterUser[] = [];
  private tweets: Tweet[] = [];

  constructor() {
    this.users = [];
    this.tweets = [];
  }

  getHealth(): string {
    return "I'm okay!";
  }

  signUp(username: string, avatar: string): string {
    this.users.push({ username, avatar });
    return 'Success';
  }

  postTweet(username: string, tweet: string): string {
    const user = this.users.find((user) => user.username === username);
    if (!user) {
      throw new UnauthorizedException('You must be logged!');
    }

    this.tweets.push({ username, tweet, avatar: user.avatar });

    return 'Success';
  }

  getTweets(page: number | null): Tweet[] {
    if (page !== undefined && (page < 1 || isNaN(page))) {
      throw new BadRequestException();
    }

    const currentTweetsQtt = this.tweets.length;
    const max = page === undefined ? 15 : page * 10;
    const min = page === undefined ? max - 15 : Math.floor((page * 15) / 2);

    const reversedTweets: Tweet[] = [];

    for (let i = currentTweetsQtt - 1; i >= 0; i--) {
      const currentTweet = this.tweets[i];
      reversedTweets.push(currentTweet);
    }

    return reversedTweets.slice(min, max);
  }

  getUserTweets(username: string): Tweet[] {
    const currentTweetsQtt = this.tweets.length;
    const reversedTweets: Tweet[] = [];

    for (let i = currentTweetsQtt - 1; i >= 0; i--) {
      const currentTweet = this.tweets[i];
      if (currentTweet.username === username) {
        reversedTweets.push(currentTweet);
        continue;
      }
    }
    return reversedTweets;
  }
}