import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import hp2 from '../assets/images/hp2.jpg';
import hp1 from '../assets/images/hp1.jpg';
import hp3 from '../assets/images/hp3.jpg';

const books = [
    {
        id: 1,
        title: "harrry potter and the philosopher's stone",
        author: "jk rowling",
        image: hp2,
        description: "harry potter and the philosopher's stone"
    },
    {
        id: 2,
        title: "harry potter and the chamber of secrets",
        author: "jk rowling",
        image: hp1,
        description: "harry potter and the chamber of secrets"
    },
    {
        id: 3,
        title: "harry potter and the prisoner of azkaban",
        author: "jk rowling",
        image:  hp3,
        description: "harry potter and the prisoner of azkaban"
    }
];

function BookList() {
    return (
        <div className="container">
            <div className="row">
                {books.map(book => (
                    <div className="col-md-4" key={book.id}>
                        <div className="card mb-4">
                            <img src={book.image} className="card-img-top" alt={book.title} />
                            <div className="card-body">
                                <h5 className="card-title">{book.title}</h5>
                                <p className="card-text">by {book.author}</p>
                                <p className="card-text">{book.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BookList;