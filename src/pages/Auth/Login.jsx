import { Link } from "react-router-dom";
import axiosC from "../../../config/AxiosC";
import { useNavigate } from "react-router-dom";
import { useInput, useLogin, useNull } from "../../util/common";
import "../../../styles/login.scss";

export default function Login() {
  const navigate = useNavigate();
  const id = useInput();
  const pw = useInput();

  // const callApi = async () => {
  //   if (!useNull([id.item, pw.item])) return alert('Enter ID, PW')
  //   const config = {
  //     url: 'http://localhost:8000/api/auth',
  //     method: 'post',
  //     data: {
  //       email: id.item,
  //       pw: pw.item,
  //     },
  //   }
  //   const { result, info, token } = await (await axiosC(config)).data
  //   if (!result) return alert('ERROR')
  //   useLogin(info, token)
  //   navigate('/')
  // }

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
