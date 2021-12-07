import './BookFilters.styles.css'
import { LocalSearch } from '../LocalSearch'

export const BookFilters = ({ books, setBooks }) => {
    return (
        <div className={'book-filters'}>
            <LocalSearch books={books} setBooks={setBooks} />
        </div>
    )
}
