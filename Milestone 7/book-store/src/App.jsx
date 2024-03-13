import { useEffect } from "react";
import Title from "./components/Title";
import { useState } from "react";
function App() {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("bookStore.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const handleAddToCart = (book) => {
    setCart([...cart, book]);
  };

  return (
    <>
      <Title />
      <section className="container  flex w-full justify-between flex-col lg:flex-row gap-5 max-w-[1400px] mx-auto">
        <div
          id="productContainer"
          className="pt-7 w-full lg:w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-12">
          {books?.map((book) => {
            const { name, originalPrice, discountPrice, rating, image } = book;
            return (
              <div key={book?.id} className="card bg-base-100 shadow-xl">
                <figure className="p-5 rounded-md">
                  <img className="rounded-md" src={image} alt={name} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{name}</h2>
                  <p>Original Price : ${originalPrice}</p>
                  <p>Discount Price : ${discountPrice}</p>
                  <p>Rating : {rating}</p>
                  <div className="card-actions justify-start">
                    <button
                      onClick={() => handleAddToCart(book)}
                      className="btn btn-primary">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="lg:w-[20%] w-full h-[100vh] overflow-y-auto sticky top-3">
          <p className="text-center text-xl font-bold">Total Cart Item</p>
          <p
            className="text-center p-3 text-xl font-bold"
            id="totalPriceDisplay"></p>
          <div className="cartContainer" id="cartContainer">
            <table className="table-auto border w-full text-center">
              <thead>
                <tr>
                  <th className="border p-2">Name</th>
                  <th className="border p-2">Price</th>
                  <th className="border p-2">Action</th>
                </tr>
              </thead>
              <tbody id="tableBody">
                {cart.map((book) => {
                  const { name, originalPrice } = book;
                  return (
                    <tr key={book?.id}>
                      <td className="border p-2">{name}</td>
                      <td className="border p-2">${originalPrice}</td>
                      <td className="border p-2">Remove</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
