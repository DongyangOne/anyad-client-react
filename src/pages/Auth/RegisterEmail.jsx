import { Link, useNavigate } from "react-router-dom";
import "../../../styles/registeremail.scss";
import axiosC from "../../../config/AxiosC";
import { useCheck, useInput, useNull } from "../../util/common";

export default function RegisterEmail() {
  const navigate = useNavigate();
  const email = useInput();
  const inputCode = useInput();
  const serverCode = useInput();

  const callApi = async () => {
    if (!useNull([email])) return alert("FALSE");
    const config = {
      url: "http://210.90.136.10:3000/api/user/sendmail",
      method: "post",
      data: {
        email: email.item,
      },
    };
    const { code } = await (await axiosC(config)).data;
    if (!code) return alert("ERR");
    alert("SEND CODE");
    serverCode.setItem(code);
  };

  const checkCode = () => {
    if (!useCheck(serverCode.item, inputCode.item)) return alert("FALSE");
    localStorage.setItem("email", email.item);
    navigate("/auth/register");
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
          <div id="register_email_box">
            <h2>회원가입</h2>
            <div className="input_box">
              <div>이메일</div>
              <input {...email} id="username" type="text" />
            </div>
            <div>
              <button className="submit" onClick={callApi}>
                코드 발송
              </button>
            </div>
            <div className="input_box">
              <div>코드</div>
              <input {...inputCode} id="password" type="password" />
            </div>
            <div>
              <button className="submit" onClick={checkCode}>
                회원가입
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
