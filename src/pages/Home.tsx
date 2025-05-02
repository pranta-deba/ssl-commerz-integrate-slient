import { user } from "../constants/user.data";
import useGetCarts from "../hooks/useGetCarts";

const Home = () => {
  const { data, loading, error, totalAmount, totalDiscountedAmount } =
    useGetCarts();

  const localUser = user;
  console.log(localUser);

  const handlePlaceOrder = () => {
    // TODO: Add your order placement logic here
    console.log("Order placed successfully!");

    const payment = {
      email: user.email,
      price: totalAmount,
      transitionId: "",
      date: new Date(),
      discount: totalDiscountedAmount,
      productIds: data?.flatMap((item) => item.products.map((e) => e.id)),
      status: "pending",
    };
    console.log(payment);
  };

  if (loading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <div className="text-center text-lg mt-10">Loading carts...</div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-600 mt-10">{error}</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-black">
        Your Cart Summary
      </h1>

      <div className="space-y-6">
        {data?.map((cart) => (
          <div
            key={cart.id}
            className="border border-gray-300 p-4 rounded-lg shadow-sm bg-white"
          >
            <h2 className="text-xl font-semibold mb-3 text-black">
              Cart #{cart.id}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cart.products.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center border p-3 rounded-md transition hover:shadow-lg hover:border-black group"
                >
                  <div className="w-20 h-20 overflow-hidden rounded mr-4">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-black">
                      {product.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Qty: {product.quantity} × ${product.price}
                    </p>
                    <p className="text-sm">
                      Total:{" "}
                      <span className="font-medium text-black">
                        ${product.total.toFixed(2)}
                      </span>
                    </p>
                    <p className="text-sm text-green-600">
                      Discounted: ${product.discountedTotal.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Totals and Order Button */}
      <div className="mt-10 border-t pt-6">
        <div className="text-lg font-semibold mb-2 text-black">
          Total Amount:{" "}
          <span className="text-blue-700">${totalAmount.toFixed(2)}</span>
        </div>
        <div className="text-lg font-semibold mb-4 text-black">
          Discounted Total:{" "}
          <span className="text-green-700">
            ${totalDiscountedAmount.toFixed(2)}
          </span>
        </div>
        <button
          onClick={handlePlaceOrder}
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-900 transition"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Home;
