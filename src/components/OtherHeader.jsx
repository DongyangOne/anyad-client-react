import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCookie, removeCookie } from "../../config/Cookie";
import "../../styles/header.scss";

export default function OtherHeader() {
  const navigate = useNavigate();

  const [logined, setLogined] = useState(false);
  const [keyword, setKeyword] = useState();

  // const clickLogout = () => {
  //   console.log(logined1);
  // };

  useEffect(() => {
    const token = getCookie("accessToken");
    token ? setLogined(true) : setLogined(false);
  });

  const searchOnPress = (e) => {
    if (e.key == "Enter") keyword && navigate(`/board/${keyword}`);
  };

  return (
    <div id="header">
      <div id="alitem">
        <span></span>
        <Link to={"/"}>
          <h2 class="title">ANYAD</h2>
        </Link>
        <span></span>

        <div class="search">
          <input
            class="search_input"
            placeholder="광고할 지역을 입력하십시오"
            onChange={(e) => setKeyword(e.target.value)}
            onKeyPress={searchOnPress}
          />
          <img
            class="search_ico"
            // src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png"
          ></img>
        </div>
      </div>
      <div>
        {logined ? (
          <ul>
            <Link to={"/manage"}>
              <li>{JSON.parse(localStorage.getItem("info")).name}</li>
            </Link>
            <li onClick={clickLogout}>LOGOUT</li>
          </ul>
        ) : (
          <Link to={"/auth"}>
            <li>로그인</li>
          </Link>
        )}
      </div>
    </div>
  );
}
