import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { RegisterUserDto } from './dtos/user.dto';
import { TweetInputDto } from './dtos/tweet.dto';
import { Tweet } from './entities/tweet.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHealth(): string {
    return this.appService.getHealth();
  }

  @Post('sign-up')
  @HttpCode(200)
  signUp(@Body() body: RegisterUserDto): string {
    return this.appService.signUp(body.username, body.avatar);
  }

  @Post('tweets')
  postTweet(@Body() body: TweetInputDto): string {
    return this.appService.postTweet(body.username, body.tweet);
  }

  @Get('tweets')
  getTweets(
    @Query('page')
    page: number | null,
  ): Tweet[] {
    return this.appService.getTweets(page);
  }

  @Get('tweets/:username')
  getUserTweets(@Param('username') username: string) {
    return this.appService.getUserTweets(username);
  }
}