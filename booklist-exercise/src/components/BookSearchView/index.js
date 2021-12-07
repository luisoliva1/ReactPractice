import React, { useEffect } from 'react'
import { useBookApi } from '../../hooks/useBookApi'
import { BookLoadingList } from '../BookLoadingList'
import { BookList } from '../BookList'
import { BookFilters } from '../BookFilters'

export const BookSearchView = () => {
    const { books, getBooks, loading } = useBookApi()

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
        <>
            <BookFilters />
            {loading ? <BookLoadingList /> : <BookList books={books} />}
        </>
    )
}
