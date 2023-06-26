import React from "react";

function CategoryFilter({ categories, catSelected, setCatSelected }) {
  function handleButtonClick(category) {
    setCatSelected(category);
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      { categories.map(category => <button key={ category } className={catSelected === category ? "selected" : null} onClick={() => handleButtonClick(category)}>{ category }</button>)}
    </div>
  );
}

export default CategoryFilter;
