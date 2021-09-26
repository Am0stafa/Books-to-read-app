
//normal way 
import React, { useState , createContext , useEffect}from 'react'
import {v4 as uuid} from 'uuid';
export const BookContext = createContext();

const BookContextProvider = ({children}) => {
//the third value is a function that return a value which it takes as the default value
const [books, setBooks] = useState(()=>{
    const localData= localStorage.getItem('books');
    return  JSON.parse(localData) || [{title: 'Think and grow rich',author: 'Napoleon Hill', id: 1},
                                        {title: 'Who moved my cheese',author: 'Spencer Johnson', id: 2},
                                        {title: 'My ego is my enemy', author: 'Ryan Holiday', id: 3}
]
    })
    
    
    useEffect(()=>{
     localStorage.setItem('books', JSON.stringify(books));
    },[books])
 const addBook = (title, author) =>{
 //try putting {}
    setBooks((prev)=> [...prev, {title: title, author: author, id: uuid()}]);
 }   
 
 const removeBook = (id) =>{
    setBooks((prev)=> prev.filter(prev => prev.id !== id))
 }
  
    return (
        <BookContext.Provider value={{books,setBooks,addBook,removeBook }}>
            {children}
        </BookContext.Provider>
    )
}


export default BookContextProvider
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Reducer way **same way to save to local storage**
//reducer is used to store all the functions rather than doing the function and passing it in the value we simple use Dispatch


// import React, { useState , useReducer}from 'react'
//import {bookReducer} from './BookReducer'
// export const BookContext = createContext();

// const BookContextProvider = ({children}) => {
// const [books, dispatch] = useReducer(bookReducer, [
//     {title: 'Think and grow rich',author: 'Napoleon Hill', id: 1},
//     {title: 'Who moved my cheese',author: 'Spencer Johnson', id: 2},
//     {title: 'My ego is my enemy', author: 'Ryan Holiday', id: 3}
//     ])

  
//     return (
//         <BookContext.Provider value={{books,dispatch }}>
//             {children}
//         </BookContext.Provider>
//     )
// }
