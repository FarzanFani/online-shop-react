import { useContext } from "react";
import { CartContext } from "../../Store/ShoppingCardContext";
import CartItem from "./CartItem";

const style: string = "text-red-600 text-center font-bold text-xl";
const emptyItem = (
  <tr>
    <td className={style} colSpan={6}>
      No Item Found
    </td>
  </tr>
);

const TableBody: React.FC = () => {
  const { items } = useContext(CartContext);

  const size = items.length;

  return (
    <tbody>
      {size > 0 &&
        items.map((item, index) => (
          <CartItem key={item.id} item={item} cellNum={index} />
        ))}
      {size === 0 && emptyItem}
    </tbody>
  );
};

export default TableBody;
