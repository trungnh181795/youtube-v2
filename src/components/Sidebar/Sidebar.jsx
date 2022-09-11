import {
  ContainerStack,
  CategoryButton,
  CategoryIcon,
  CategoryName,
} from "./style";

import { categories } from "../../utils";

const Sidebar = ({ selectedCategory, onCategoryChange }) => {
  const handleOnClick = (category) => {
    onCategoryChange(category);
  };

  return (
    <ContainerStack direction="row">
      {categories.map((category) => (
        <CategoryButton
          category={category}
          selectedCategory={selectedCategory}
          className="category-btn"
          key={category.name}
          onClick={() => handleOnClick(category.name)}
        >
          <CategoryIcon category={category} selectedCategory={selectedCategory}>
            {category.icon}
          </CategoryIcon>
          <CategoryName category={category} selectedCategory={selectedCategory}>
            {category.name}
          </CategoryName>
        </CategoryButton>
      ))}
    </ContainerStack>
  );
};

export default Sidebar;
