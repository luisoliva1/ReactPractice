import { BookCard } from '../BookCard'
import './BookList.styles.css'

export const BookList = ({ books }) => {
    return (
        <>
            <div id={'layout'} className={'book-list'}>
                {books.map((book) => {
                    return <BookCard key={book.id} book={book} />
                })}
            </div>
        </>
    )
}
