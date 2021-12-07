import './BoookCard.styles.css'

export const BookCard = ({ book }) => {
    return (
        <div className={'book-card'}>
            <img
                alt={book.title}
                src={book.formats['image/jpeg']}
                width={100}
            />
            <small>{book.title}</small>
        </div>
    )
}
