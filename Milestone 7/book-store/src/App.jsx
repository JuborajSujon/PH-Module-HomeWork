import Title from "./components/Title";
function App() {
  return (
    <>
      <Title />
      <section className="container  flex w-full justify-between flex-col lg:flex-row gap-5 max-w-[1400px] mx-auto">
        <div
          id="productContainer"
          className="pt-7 w-full lg:w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-12">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="p-5 rounded-md">
              <img
                className="rounded-md"
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Product Name</h2>
              <p>Price : 399Tk</p>
              <p>Rating : 5</p>
              <div className="card-actions justify-start">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
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
                <tr>
                  <td className="border p-2">Book Name</td>
                  <td className="border p-2">Book Price</td>
                  <td className="border p-2">Remove</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
