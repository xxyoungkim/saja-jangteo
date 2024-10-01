import "../style/MainHeader.css";
import SearchBar from "./SearchBar";

const MainHeader = () => {
  //로고, 검색창, 사자톡, MY, 등록하기
  return (
    <div className="MainHeader">
      <div className="header-logo">logo</div>
      <div className="header-search">
        <SearchBar />
      </div>
      <div className="header-info">sajatalk, my, add</div>
    </div>
  );
};

export default MainHeader;
