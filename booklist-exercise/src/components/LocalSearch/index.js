import { useEffect, useRef, useState } from 'react'
import './LocalSearch.styles.css'

export const LocalSearch = ({ books, setBooks }) => {
    const [originalList, setOriginalList] = useState([])
    const firstRun = useRef(true)

    useEffect(() => {
        if (firstRun.current && books.length > 0) {
            console.log('$ DEBUG firstRun', firstRun)
            setOriginalList(books)
            firstRun.current = false
        }
    }, [books])

    const clearSearchField = () => {
        setBooks(originalList)
        firstRun.current = true
    }

    const handleChange = (event) => {
        event.stopPropagation()

        const key = event.target.value
        if (key.length > 0) {
            const results = originalList.filter((book) => {
                return book.title.toLowerCase().includes(key.toLowerCase())
            })
            setBooks(results)
        } else {
            clearSearchField()
        }
    }

    return (
        <input
            className={'local-search'}
            type={'text'}
            placeholder={'Search for a book'}
            onChange={(e) => handleChange(e)}
        />
    )
}
