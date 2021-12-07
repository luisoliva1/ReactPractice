import React, { useEffect } from 'react'
import { useBookApi } from '../../hooks/useBookApi'
import { BookLoadingList } from '../BookLoadingList'
import { BookList } from '../BookList'
import { BookFilters } from '../BookFilters'

export const BookSearchView = () => {
    const { books, setBooks, getBooks, loading } = useBookApi()

    useEffect(() => {
        getBooks(1)
        //eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (books.length > 0) {
            console.log('$ DEBUG books[4]', books[4])
        }
    }, [books])

    return (
        <div>
            <h1>Project Guttenberg catalog</h1>
            <BookFilters books={books} setBooks={setBooks} />
            {loading ? <BookLoadingList /> : <BookList books={books} />}
        </div>
    )
}
