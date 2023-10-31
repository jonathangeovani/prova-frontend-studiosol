import "./styles.css";

type CategoryButtonProps = {
  text: string;
  isActive?: boolean;
};

const CategoryButton = ({ text, isActive = false }: CategoryButtonProps) => {
  return (
    <button className={`category-button ${isActive && "active-button"}`}>
      {text}
    </button>
  );
};
export default CategoryButton;
