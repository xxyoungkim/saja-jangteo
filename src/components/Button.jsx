import "../style/Button.css";

const Button = ({ onClick }) => {
  return (
    <button
      className="button"
      onClick={onClick}
    >
      버튼
    </button>
  );
};

export default Button;
