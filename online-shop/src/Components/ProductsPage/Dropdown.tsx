const cssClass =
  "border-2 border-black rounded-md h-9 col-span-6 sm:col-span-3 ps-2";

const Dropdown: React.FC<{ options: string[] }> = (props) => {
  return (
    <select className={cssClass}>
      <option value="Category">Category</option>
      <option value="All">All</option>
      {props.options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
