import { useEffect, useState } from 'react'

export const useBookApi = () => {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)
    const options = {
        mode: 'cors',
    }

    useEffect(() => {
        books.length > 0 && setLoading(false)
    }, [books])

    const getBooks = (page) => {
        setLoading(true)
        fetch('http://gutendex.com/books/?page=' + (page || '1'), options)
            .then((response) => response.json())
            .then((data) => {
                setBooks(data.results)
                return data
            })
    }

    return {
        books,
        setBooks,
        getBooks,
        loading,
    }
}
