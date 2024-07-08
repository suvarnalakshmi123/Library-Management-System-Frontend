import React, { useState } from 'react';

const AddBook = ({ onAdd }) => {
    const [book, setBook] = useState({
        name: '',
        category: '',
        author: '',
        isbn: '',
        price: '',
        bookPicture: null
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBook({ ...book, [name]: value });
    };

    const handleFileChange = (e) => {
        setBook({ ...book, bookPicture: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(book);
        setBook({
            name: '',
            category: '',
            author: '',
            isbn: '',
            price: '',
            bookPicture: null
        });
    };

    return (
        <div className="add-book-form">
            <h2>Add Book</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Book Name*</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={book.name} 
                        onChange={handleInputChange} 
                        required 
                    />
                </div>
                <div>
                    <label>Category*</label>
                    <input 
                        type="text" 
                        name="category" 
                        value={book.category} 
                        onChange={handleInputChange} 
                        required 
                    />
                </div>
                <div>
                    <label>Author*</label>
                    <input 
                        type="text" 
                        name="author" 
                        value={book.author} 
                        onChange={handleInputChange} 
                        required 
                    />
                </div>
                <div>
                    <label>ISBN Number*</label>
                    <input 
                        type="text" 
                        name="isbn" 
                        value={book.isbn} 
                        onChange={handleInputChange} 
                        required 
                    />
                </div>
                <div>
                    <label>Price*</label>
                    <input 
                        type="number" 
                        name="price" 
                        value={book.price} 
                        onChange={handleInputChange} 
                        required 
                    />
                </div>
                <div>
                    <label>Book Picture*</label>
                    <input 
                        type="file" 
                        name="bookPicture" 
                        onChange={handleFileChange} 
                        required 
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddBook;
