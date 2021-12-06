export const BookList = ({ books }) => {
  return <>
    <ul>
      {
        books.map(book => {
          return <li key={book.id}>
            {book.title}
          </li>
        })
      }
    </ul>

  </>
}