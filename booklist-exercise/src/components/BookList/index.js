import {BookCard} from "../BookCard";

export const BookList = ({ books }) => {
  return <>
    <div id={'layout'}>
      {
        books.map(book => {
          return <BookCard key={book.id} book={book} />
        })
      }
    </div>

  </>
}