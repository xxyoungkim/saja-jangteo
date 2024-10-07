import "../style/MainHeader.css";
import SearchBar from "./SearchBar";
import HeaderButton from "./HeaderButton";

const MainHeader = () => {
  //로고, 검색창, 사자톡, MY, 등록하기
  return (
    <div className="MainHeader">
      <div className="header-logo">
        <h1>사자장터</h1>
      </div>
      <div className="header-search">
        <SearchBar />
      </div>
      <div className="header-info">
        <HeaderButton text={"사자톡"} />
        <HeaderButton text={"MY"} />
        <HeaderButton text={"등록"} />
      </div>
    </div>
  );
};

export default MainHeader;
