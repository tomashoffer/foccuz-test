import { ApiProperty } from '@nestjs/swagger';
import { IsArray } from 'class-validator';
import { BookDto } from './book.dto';

class LibraryItemDto {
  @ApiProperty({ type: BookDto })
  book!: BookDto;
}

export class LibraryDto {
  @ApiProperty({ type: [LibraryItemDto] })
  @IsArray()
  library!: LibraryItemDto[];
} 