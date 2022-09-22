import { Link } from "react-router-dom";
import "../../../styles/register.scss";
import axiosC from "../../../config/AxiosC";
import { useInput, useNull, useCheck } from "../../util/common";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const name = useInput();
  const pw = useInput();
  const pwc = useInput();

  const callApi = async () => {
    if (!useNull([name.item, pw.item, pwc.item])) return alert("NULL FALSE");
    if (!useCheck(pw.item, pwc.item)) return alert("CHECK FALSE");
    const config = {
      url: "http://210.90.136.10:3000/api/user",
      method: "post",
      data: {
        email: localStorage.getItem("email"),
        password: pw.item,
        name: name.item,
      },
    };
    try {
      const res = await axiosC(config).data;
      localStorage.removeItem("email");
      console.log("good ");
      navigate("/auth");
    } catch {
      if (!res) return alert("ERROR");
    }
  };

  return (
    <div className="register_div">
      <div className="blue_box">
        <Link to={"/"}>
          <p className="bluebox_anyad">ANYAD</p>
        </Link>
      </div>
      <div className="white_box">
        <div id="wrap">
          <div id="register_box">
            <h2>가입하기</h2>
            <div className="input-box">
              <div>이름</div>
              <input id="username" type="text" {...name} />
            </div>
            <div className="input-box">
              <div>비밀번호</div>
              <input id="password" type="password" {...pw} />
            </div>
            <div className="input-box">
              <div>비밀번호 확인</div>
              <input id="password_chk" type="text" {...pwc} />
            </div>
            <div className="chk_box">
              <input type="checkbox" className="chk" />
              <label htmlFor="chk">
                서비스 약관과 개인정보처리방침에 동의합니다.
              </label>
            </div>
            <div>
              <button className="submit" onClick={callApi}>
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
