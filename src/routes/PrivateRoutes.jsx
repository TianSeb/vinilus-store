import { Navigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

export default function PrivateRoute({ children }) {
  const { cart } = useCartContext();

  return (cart.length > 0) ? children : <Navigate to="/" />;
}