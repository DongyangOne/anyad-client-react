import HomeHeader from "../components/HomeHeader";
import "../../styles/home.scss";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AxiosC from "../../config/AxiosC";

export default function Home() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState();
  const [data, setData] = useState([]);

  const searchOnPress = (e) => {
    if (e.key == "Enter") keyword && navigate(`/board/search/${keyword}`);
  };

  useEffect(() => {
    AxiosC({
      method: "get",
      url: "http://210.90.136.10:3000/api/board",
    }).then((res) => {
      res.data.result && setData(() => res.data.data);
    });
  }, []);

  console.log(data);

  return (
    <div>
      <HomeHeader />
      <div className="home_div">
        <div className="search_out_box">
          <div className="search_in_box">
            <h2>ANYAD</h2>
            <input
              placeholder="광고 할 지역을 입력하세요."
              onChange={(e) => setKeyword(e.target.value)}
              onKeyPress={searchOnPress}
              type="text"
            />
            <div className="btn">
              <button className="search_btn">버스광고</button>
              <button className="search_btn">지하철광고</button>
              <button className="search_btn">병원광고</button>
              <button className="search_btn">강남역인근</button>
            </div>
          </div>
        </div>
        <div className="category_nav">
          <div className="btn">
            <button className="btn">아파트</button>
            <button className="btn">지하철</button>
            <button className="btn">버스</button>
            <button className="btn">정류장</button>
            <button className="btn">거리</button>
            <button className="btn">공항</button>
            <button className="btn">극장</button>
          </div>
        </div>
        <div className="wrap">
          <div className="wrap1">
            {data.map((item) => (
              <Link to={`/board/${item.id}`}>
                <div className="board_div">
                  <div className="img_box2">
                    <img
                      src={`http://210.90.136.10:3000/source/images/${item.image}`}
                    />
                  </div>
                  <div className="text_box">
                    <h4>{item.title}</h4>
                    <h4>광고비 : {item.price}</h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
