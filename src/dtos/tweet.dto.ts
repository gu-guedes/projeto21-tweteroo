import { IsNotEmpty, IsString } from 'class-validator';

export class TweetInputDto {
  @IsString()
  @IsNotEmpty({ message: 'All fields are required!' })
  username: string;

  @IsString()
  @IsNotEmpty({ message: 'All fields are required!' })
  tweet: string;
}