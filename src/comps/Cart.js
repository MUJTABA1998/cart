import { useGlobalContext } from "../AppContext";
import Footer from "./Footer";
import Product from "./Product";

const Cart = () => {
  const { cart } = useGlobalContext();

  return (
    <div className="w-full h-auto py-12">
      <div className="flex flex-col w-full gap-10 py-3">
        {cart.map((item) => (
          <Product item={item} key={item.id} />
        ))}
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
