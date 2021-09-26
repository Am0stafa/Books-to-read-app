import React,{useContext} from 'react'
import { BookContext } from '../context/BookContext';

const BookDetails = ({book}) => {
    const {removeBook} = useContext(BookContext);
 //const {dispatch} = useContext(BookContext);

    return (
        <li>
            <div className='title'>Title: { book.title }</div>
            <div className='author'>Author: { book.author }</div>
            <span className='cross' onClick={() => removeBook(book.id)}>X</span>
            {/* <span className='cross' onClick={() => dispatch({type:"REMOVE_BOOK", id:book.id})}>X</span> */}
        </li>
    )
}

export default BookDetails
