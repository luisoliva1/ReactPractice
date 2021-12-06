import React, { useEffect } from 'react'
import { useBookApi } from '../../hooks/useBookApi'
import { BookLoadingList } from "../BookLoadingList";
import {BookList} from "../BookList";

export const BookSearchView = () => {
  const {
    books,
    getBooks,
    loading
  } = useBookApi()

  useEffect(() => {
    getBooks(1)
  }, [])

  useEffect(() => {
    if (books.length > 0) {
      console.log('$ DEBUG books[0]', books[0])
    }
  }, [books])

  return <>
    {
      loading ?
        <BookLoadingList /> :
        <BookList books={books} />
    }
  </>
}