/* eslint-disable no-unused-vars */
import React,{useContext, useState} from 'react'
import { BookContext } from '../context/BookContext';

const BookForm = () => {
const {addBook} = useContext(BookContext);
// const {dispatch} =  useContext(BookContext);

const [author,setAuthor] = useState('')
const [title , setTitle] = useState('')
const handelchangeTitle = (e) => {
    setTitle(e.target.value)
}
const handelchangeAuth = (e) => {
    setAuthor(e.target.value)
}
const handelsubmit = (e) => {
e.preventDefault();
addBook(title,author);
//dispatch({type:'ADD_BOOK', book:{title:title,author:author}})
setAuthor('');
setTitle('');
}
    return (
        <form onSubmit={handelsubmit}>
            <input type="text" placeholder="Book title" value={title} onChange={handelchangeTitle} required />
            <input type="text" placeholder="Book Author" value={author} onChange={handelchangeAuth} required />
            <input type="submit" value='Add book'/>
        </form>
    )
}

export default BookForm
