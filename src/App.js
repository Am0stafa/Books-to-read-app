import React from 'react'
import BookForm from './componets/BookForm';
import BookList from './componets/BookList';
import Navbar from './componets/Navbar';
import BookContextProvider from './context/BookContext';

export const App = () => {
  return (
  <BookContextProvider>
    <div class="App">
      <Navbar/>
      <BookList/>
      <BookForm/>
    </div>
  </BookContextProvider>
  )
}

export default App;
