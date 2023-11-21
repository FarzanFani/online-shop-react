import { cartTableStyle as style } from "./ShoppingCartStyles";

const TableHeader: React.FC = () => {
  return (
    <thead>
      <tr>
        <th className={style.tableHeader}>Number</th>
        <th className={style.tableHeader}>Title</th>
        <th className={style.tableHeader}>Description</th>
        <th className={style.tableHeader}>Quantity</th>
        <th className={style.tableHeader}>Price</th>
        <th className={style.tableHeader}>Total Price</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
