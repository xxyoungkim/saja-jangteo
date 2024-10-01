import "../style/Header.css";
import AccountMenu from "./AccountMenu";
import MainHeader from "./MainHeader";
import CategoryMenu from "./CategoryMenu";

const Header = () => {
  return (
    <div className="Header">
      <AccountMenu />
      <MainHeader />
      <CategoryMenu />
    </div>
  );
};

export default Header;
