export const BookCard = ({book}) => {
  return <>
    <img src={book.formats['image/jpeg']} width={100} height={180}/>
    <small>
      { book.title }
    </small>
  </>
}