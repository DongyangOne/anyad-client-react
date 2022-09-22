import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosC from "../../../config/AxiosC";
import { getCookie } from "../../../config/Cookie";
import { useInput } from "../../util/common";
import OtherHeader from "../../components/OtherHeader";
import Nav from "./Nav";
import "../../../styles/accessDetail.scss";

export default function AccessDeatil() {
  const loading = useInput(true);
  const managerDetail = useInput();
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("video", e.target.video.files[0]);
    try {
      const url = `http://localhost:8000/api/video/${id}`;
      const config = {
        method: "post",
        body: formData,
        headers: {
          accessToken: getCookie("accessToken"),
        },
      };
      const res = await fetch(url, config);
      alert("영상 업로드 성공");
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   const callApi = async () => {
  //     const url = `http://localhost:8000/api/access/${id}`
  //     const { result, data } = await (await axiosC.get(url)).data
  //     if (!result) return alert('ERROR')
  //     managerDetail.setItem(() => data)
  //     loading.setItem(() => false)
  //   }
  //   callApi()
  // }, [id])

  if (loading.item) return null;
  return (
    <div className="accessDetail_box">
      <OtherHeader />
      <div className="wrap">
        <Nav />
        <div class="accessDetail_div">
          <div className="accessDetail_inBox">
            <h2>내 권한</h2>
            <h4>
              권한 구매기간 : XXXXXXXX , 모듈 : {managerDetail.module_id}, 모듈
              소유자: {managerDetail.user_id}
            </h4>

            <form encType="multipart/form-data" onSubmit={handleSubmit}>
              <input type="file" name="video" />
              <button type="submit">UPLOAD</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
