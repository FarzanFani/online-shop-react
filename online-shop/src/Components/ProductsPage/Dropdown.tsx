const cssClass =
  "border-2 border-black rounded-md h-9 col-span-6 sm:col-span-3 ps-2";

const Dropdown = () => {
  return (
    <select className={cssClass}>
      <option value="" selected>
        Category
      </option>
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
    </select>
  );
};

export default Dropdown;
