import { Link } from "react-router-dom";
import axiosC from "../../../config/AxiosC";
import { useNavigate } from "react-router-dom";
import { useInput, useLogin, useNull } from "../../util/common";
import "../../../styles/login.scss";

export default function Login() {
  const navigate = useNavigate();
  const id = useInput();
  const pw = useInput();

  const callApi = async () => {
    if (!useNull([id.item, pw.item])) return alert("Enter ID, PW");
    const config = {
      url: "http://210.90.136.10:3000/api/user/local",
      method: "post",
      data: {
        email: id.item,
        password: pw.item,
      },
    };
    try {
      const res = await axiosC(config);
      console.log(res);
      // useLogin(info, token);
      // navigate("/");
    } catch {
      if (!res) return alert("ERROR");
    }
  };

  return (
    <div>
      <div className="blue_box">
        <Link to={"/"}>
          <p className="bluebox_anyad">ANYAD</p>
        </Link>
      </div>
      <div className="white_box">
        <div id="wrap">
          <div id="login_box">
            <h2>로그인</h2>
            <div className="input_box">
              <div>이메일</div>
              <input id="username" type="text" {...id} />
            </div>
            <div className="input_box">
              <div>비밀번호</div>
              <input id="password" type="password" {...pw} />
            </div>
            <div className="forgot_pw">
              <p>비밀번호 찾기</p>
            </div>
            <div className="chk_box">
              <input className="chk" type="checkbox" />
              <label> 로그인 상태 유지</label>
            </div>
            <div>
              <button className="submit" onClick={callApi}>
                로그인
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
