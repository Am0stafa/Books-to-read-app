/* eslint-disable default-case */
/* eslint-disable no-undef */
import {v4 as uuid} from 'uuid';
export const bookReducer = (state,actions) => {
    switch (state.type) {
    case 'ADD_BOOK':
        return [...state, {title: actions.book.title, author: actions.book.author, id: uuid()}]
   
    case 'REMOVE_BOOK':
        return state.filter(book => book.id !== actions.id)
        
        default:
        return state;
    } 
    
}

//used in bookdetails and bookform