import axiosC from "../../../config/AxiosC";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../../styles/look.scss";
import OtherHeader from "../../components/OtherHeader";
import { useInput } from "../../util/common";

export default function CallContent() {
  const boardData = useInput();
  const loading = useInput(true);
  const { id } = useParams();

  // useEffect(() => {
  //   const callApi = async () => {
  //     const url = `http://localhost:8000/api/board/${id}`
  //     const { data } = await (await axiosC.get(url)).data
  //     console.log(data)
  //     boardData.setItem(() => data)
  //     loading.setItem(() => false)
  //   }
  //   callApi()
  // }, [])

  // const callBuy = async () => {
  //   console.log(boardData.item.module_id)
  //   const url = `http://localhost:8000/api/access/${boardData.item.module_id}`
  //   console.log(url)
  //   const { result } = await (await axiosC.patch(url)).data
  //   console.log(result)
  //   result ? alert('구매 완료') : alert('구매 실패')
  // }

  if (loading.item) return null;
  return (
    <div className="board_detail">
      <OtherHeader />
      <div className="wrap">
        <div className="wrap2">
          <div className="img_box">
            <img
              width="100%"
              height="100%"
              alt="Null"
              src={`http://localhost:8000/source/images/${boardData.item.image}`}
            />
          </div>
          <div className="price_box">
            <div className="price_1">
              <h3>지금 바로 결제해보세요!</h3>
            </div>
            <div className="price_2">
              <hr />
              <div className="chk">
                <input type="radio" name="month" id="r1" />
                <label htmlFor="r1">
                  <h2 className="chk_black">1개월 {boardData.item.price}</h2>
                </label>
              </div>
              <hr />
              <div className="chk">
                <input type="radio" name="month" id="r1" />
                <label htmlFor="r1">
                  <h2 className="chk_black">
                    6개월 {boardData.item.price * 6}
                  </h2>
                </label>
              </div>
            </div>
            <div onClick={callBuy} className="price_3">
              <h2>구매</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
