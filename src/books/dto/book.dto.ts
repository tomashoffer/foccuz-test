import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsUrl, IsArray } from 'class-validator';

export class AuthorDto {
  @ApiProperty()
  @IsString()
  name!: string;

  @ApiProperty({ type: [String] })
  @IsArray()
  otherBooks!: string[];
}

export class BookDto {
  @ApiProperty()
  @IsString()
  title!: string;

  @ApiProperty()
  @IsInt()
  pages!: number;

  @ApiProperty()
  @IsString()
  genre!: string;

  @ApiProperty()
  @IsUrl()
  cover!: string;

  @ApiProperty()
  @IsString()
  synopsis!: string;

  @ApiProperty()
  @IsInt()
  year!: number;

  @ApiProperty()
  @IsString()
  ISBN!: string;

  @ApiProperty({ type: AuthorDto })
  author!: AuthorDto;
}
