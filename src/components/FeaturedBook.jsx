
import React from "react";
import BookCard from "./BookCard";

 
const FeaturedBook = async () => {
  const res = await fetch("https://book-nest-tau-sable.vercel.app/data.json");
  const books = await res.json();
  
 

  return (
    <div className="container mx-auto"> 
      <h1 className="text-3xl font-bold mt-5 animate__animated animate__bounce ">Featured Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 space-y-6 mt-10">
        {books.slice(0, 8).map((book) => (
          <BookCard key={book.id} book={book}></BookCard>
        ))}
      </div>
      <div>
        {/* why read with us */}
        <h1 className="text-3xl font-bold mt-5 animate__animated animate__bounce">Why Read With Us</h1>
        <div className="mt-10">
          <section
            style={{
              padding: "40px",
              textAlign: "center",
              background: "#f9f9f9",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "40px",
                marginTop: "20px",
              }}
            >
              <div>
                <p style={{ fontSize: "40px" }}>📚</p>
                <h4>Huge Collection</h4>
                <p>Thousands of books across all genres.</p>
              </div>

              <div>
                <p style={{ fontSize: "40px" }}>🚚</p>
                <h4>Fast Delivery</h4>
                <p>Get your books delivered to your door.</p>
              </div>

              <div>
                <p style={{ fontSize: "40px" }}>💳</p>
                <h4>Easy Membership</h4>
                <p>Affordable plans for every reader.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
       

       {/* newsletter */}

      <h1 className="text-3xl font-bold mt-5 animate__animated animate__bounce">Newsletter Signup</h1>
      <div className="mt-10">
        <section
          style={{
            padding: "40px",
            textAlign: "center",
            background: "#eef6ff",
          }}
        >
          <h2>📬 Stay Updated!</h2>
          <p>Subscribe to get the latest book arrivals and exclusive deals.</p>

          <div style={{ marginTop: "20px" }}>
            <input
              type="email"
              placeholder="Enter your email..."
              style={{
                padding: "10px",
                width: "250px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
            <button
               //onClick={handleSubscribe}
              style={{
                padding: "10px 20px",
                marginLeft: "10px",
                background: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FeaturedBook;
