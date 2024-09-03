import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryClick }) {
  const categoryButtons = categories.map((category) => {
    const categoryClass = category === selectedCategory ? "selected" : "";
    return (
      <button
        key={category}
        className={categoryClass}
        onClick={() => onCategoryClick(category)}
      >
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
