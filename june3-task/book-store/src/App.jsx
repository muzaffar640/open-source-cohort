import books from "./bookdb.json";
import "./App.css";

function App() {
  console.log(books);
  return (
    <body>
      <header>
        <h1>Welcome to the Book Store</h1>
      </header>
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Books</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <section>
        <h2>Featured Books</h2>
        {books.map((book, idx) => (
          <div className="book" key={idx}>
            <img src={book.image} alt={book.name} />
            <h3>{book.name}</h3>
            <p>{book.author}</p>
          </div>
        ))}
      </section>
      <footer>
        <p>
          &copy; 2023 Book Store. All rights reserved.
          <a href="https://muzaffarhossain.com/" style={{ color: "#fff" }}>
            Muzaffar Hossain
          </a>
        </p>
      </footer>
    </body>
  );
}

export default App;
