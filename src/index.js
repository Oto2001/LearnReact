import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

// Setup variables

const booksArray = [
	{
		id: 1,
		img: 'https://images-na.ssl-images-amazon.com/images/I/51j8IiHZUtL._SX329_BO1,204,203,200_.jpg',
		title: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones Hardcover',
		author: 'James Clear',
	},
	{
		id: 2,
		img: 'https://images-na.ssl-images-amazon.com/images/I/51FBhyphRKL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
		title: 'Call Us What We Carry: Poems',
		author: 'Amanda Gorman',
	},
	{
		id: 3,
		img: 'https://images-na.ssl-images-amazon.com/images/I/51csugYPrJL._SX331_BO1,204,203,200_.jpg',
		title: 'Interesting Stories For Curious People: A Collection of Fascinating Stories About History, Science, Pop Culture and Just About Anything Else You Can Think of',
		author: "Bill O'Neill",
	},
];

function BookList(book) {
	return (
		<section className="booklist">
			{booksArray.map((book) => {
				// const { img, title, author } = booksArray;
				return <Book key={book.id} {...book}></Book>;
			})}
		</section>
	);
}

const Book = ({ id, img, title, author }) => {
	return (
		<article className="book">
			<img src={img} alt="alt" />
			<h1>{title}</h1>
			<h4>{author}</h4>
		</article>
	);
};

ReactDom.render(<BookList />, document.getElementById('root'));
