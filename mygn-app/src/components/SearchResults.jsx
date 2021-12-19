import React from 'react'

export default function SearchResults(props) {
    //console.log("from search results: ",props)
  
    const showBook = (id) => {
        console.log(props.props)
        props.props.history.push(`/details/${id}`)
    }

    return (
        <div className="search-container">
            {props.displayGenre.map((book, idx)=> ( 
                <div key={idx} className="book-card" onClick={() => showBook(book._id)}>
                    <h3>{book.title}</h3>
                    <img src={book.image} alt={book.name} />
                    <p>Add to Wish List</p>
                    <p>Add to Inventory</p>
                </div>
            ))}    
  
        </div>
    )
}
