import { Link } from "react-router-dom";
import "../../../styles/auth.scss";
export default function Auth() {
  return (
    <div>
      <div className="blue_box">
        <Link to={"/"}>
          <p className="bluebox_anyad">ANYAD</p>
        </Link>
      </div>
      <div className="white_box">
        <div id="wrap">
          <div id="auth_box">
            <p>ANYAD에 오신걸 환영합니다!</p>
            <p className="ex">소셜 디자인으로 ANYAD에 참여해보세요.</p>
            <button className="google">GOOGLE 계정으로 로그인</button>
            <br />
            <button className="kakao">KAKAO 계정으로 로그인</button>
            <div className="line1" />
            <p className="or">또는</p>
            <div className="line2" />
            <Link to={"/auth/login"}>
              <button className="anyad">ANYAD 로그인</button>
            </Link>
            <Link to={"/auth/register/email"}>
              <button className="anyad">ANYAD 회원가입</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
