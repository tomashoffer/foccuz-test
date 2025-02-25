import { Injectable, NotFoundException } from '@nestjs/common';
import axios from 'axios';
import { BookDto } from './dto/book.dto';
import { LibraryDto } from './dto/library.dto';

@Injectable()
export class BooksService {
  private books: BookDto[] = [];

  constructor() {
    this.fetchBooks();
  }

  async fetchBooks() {
    try {
      const apiUrl = process.env.API_URL;
      if (!apiUrl) {
        throw new Error('API_URL is not defined in the environment variables');
      }
      const response = await axios.get<LibraryDto>(apiUrl);
      this.books = response.data.library.map(item => item.book);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  }

  getAllBooks(): BookDto[] {
    return this.books;
  }

  getBookByISBN(isbn: string): BookDto {
    const book = this.books.find(book => book.ISBN === isbn);
    if (!book) {
      throw new NotFoundException(`Book not found`);
    }
    return book;
  }

  getBooksByAuthor(authorName: string): BookDto[] {
    console.log('authorName', authorName);
    const filteredBooks = this.books.filter(book => book.author.name.toLowerCase() === authorName.toLowerCase());
    console.log('filteredBooks', filteredBooks);
    return filteredBooks;
  }
}
