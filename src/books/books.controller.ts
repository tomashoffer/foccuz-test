import { Controller, Get, Param, Query, NotFoundException, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { BooksService } from './books.service';
import { BookDto } from './dto/book.dto';

@ApiTags('Books')
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Obtener todos los libros' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Lista de todos los libros', type: [BookDto] })
  async getAllBooks(): Promise<BookDto[]> {
    return this.booksService.getAllBooks();
  }
  
  @Get('author')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Buscar libros por nombre de autor' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Lista de libros del autor', type: [BookDto] })
  async getBooksByAuthor(@Query('search') authorName: string): Promise<BookDto[]> {
    console.log('Controller: authorName', authorName); // <--- Asegúrate de que esto aparece en los logs
    return this.booksService.getBooksByAuthor(authorName);
  }

  @Get(':isbn')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Obtener un libro por ISBN' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Libro encontrado', type: BookDto })
  @ApiResponse({ status: 404, description: 'Libro no encontrado' })
  async getBookByISBN(@Param('isbn') isbn: string): Promise<BookDto> {
    const book = this.booksService.getBookByISBN(isbn);
    if (!book) {
      throw new NotFoundException({ error: 'Book not found' });
    }
    return book;
  }
}
