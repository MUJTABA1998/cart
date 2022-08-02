import Navbar from "./comps/Navbar";
import Cart from "./comps/Cart";
import { useGlobalContext } from "./AppContext";

function App() {
  const { cart } = useGlobalContext();

  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="main-container">
        <h1 className="text-5xl font-bold tracking-widest text-center text-gray-700 uppercase">
          Your bag
        </h1>
        {cart.length === 0 ? (
          <h3 className="text-lg text-center text-gray-500 capitalize mt-7">
            Your cart is empty
          </h3>
        ) : (
          <Cart />
        )}
      </div>
    </div>
  );
}

export default App;
