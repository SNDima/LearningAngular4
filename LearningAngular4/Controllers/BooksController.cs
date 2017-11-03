using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LearningAngular4.Models;
using Microsoft.AspNetCore.Mvc;

namespace LearningAngular4.Controllers
{
    [Route("api/[controller]")]
    public class BooksController : Controller
    {
        [HttpGet("")]
        public IEnumerable<Book> GetBooks()
        {
            return Books;
        }

        [HttpGet("{id}")]
        public Book GetBook(int id)
        {
            return Books.FirstOrDefault(b => b.Id == id);
        }

        [HttpPut("")]
        public IActionResult UpdateBook([FromBody] Book book)
        {
            var bookToUpdate = Books.FirstOrDefault(b => b.Id == book.Id);
            bookToUpdate.Name = book.Name;
            return Ok();
        }

        [HttpPost("")]
        public Book CreateBook([FromBody] string name)
        {
            var book = new Book
            {
                Id = Books.Last().Id + 1,
                Name = name
            };
            Books.Add(book);
            return book;
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteBook(int id)
        {
            var book = Books.FirstOrDefault(b => b.Id == id);
            Books.Remove(book);
            return Ok();
        }

        [HttpGet("search/{name}")]
        public IEnumerable<Book> Search(string name)
        {
            return Books.Where(b => b.Name.Contains(name));
        }

        private static List<Book> Books = new List<Book>
        {
            new Book
            {
                Id = 11,
                Name = "Острова и море"
            },
            new Book
            {
                Id = 12,
                Name = "Портрет Дориана Грея"
            },
            new Book
            {
                Id = 13,
                Name = "Путешествие к центру Земли"
            },
            new Book
            {
                Id = 14,
                Name = "Три товарища"
            },
            new Book
            {
                Id = 15,
                Name = "Анна Каренина"
            },
            new Book
            {
                Id = 16,
                Name = "Приключения Оливера Твиста"
            },
            new Book
            {
                Id = 17,
                Name = "Человек, который смеётся"
            },
            new Book
            {
                Id = 18,
                Name = "Улица младшего сына"
            },
            new Book
            {
                Id = 19,
                Name = "Триумфальная арка"
            }
        };
    }
}
