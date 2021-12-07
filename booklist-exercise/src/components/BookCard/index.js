import {BookCardContainer} from "./styles";

export const BookCard = ({book}) => {
  return <div style={{...BookCardContainer()}}>
    <img src={book.formats['image/jpeg']} width={100} height={180}/>
    <small>
      {book.title}
    </small>
  </div>
}