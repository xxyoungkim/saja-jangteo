import "../style/HeaderButton.css";

const HeaderButton = ({ icon, text }) => {
  return (
    <div className="HeaderButton">
      <div className="header-button-icon">{icon}</div>
      <div className="header-button-text">{text}</div>
    </div>
  );
};

export default HeaderButton;
