import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  // return (
//     <div className="categories">
//       <h5>Category filters</h5>
//       {/* render <button> elements for each category here */}
//     </div>
//   );
// }
const categoryButtons = categories.map((category) => (
  <button
    key={category}
    className={category === selectedCategory ? "selected" : ""}
    onClick={() => onCategoryChange(category)}
  >
    {category}
  </button>
));

return <div className="categories">{categoryButtons}</div>;
}

export default CategoryFilter;
