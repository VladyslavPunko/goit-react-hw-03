import css from "./SearchBox.module.css";

const SearchBox = () => {
  return (
    <label className={css.label}>
      Finde contacts by name
      <input />
    </label>
  );
};

export default SearchBox;
