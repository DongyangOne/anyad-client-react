import { Link } from 'react-router-dom'
import '../../../styles/register.scss'
import axiosC from '../../../config/AxiosC'
import { useInput, useNull, useCheck } from '../../util/common'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const navigate = useNavigate()
  const name = useInput()
  const pw = useInput()
  const pwc = useInput()

  const callApi = async () => {
    if (!useNull([name.item, pw.item, pwc.item])) return alert('NULL FALSE')
    if (!useCheck(pw.item, pwc.item)) return alert('CHECK FALSE')
    const config = {
      url: 'http://localhost:8000/api/auth/register',
      method: 'post',
      data: {
        email: localStorage.getItem('email'),
        pw: pw.item,
        name: name.item,
      },
    }
    const { result } = await (await axiosC(config)).data
    if (!result) return alert('ERROR')
    localStorage.removeItem('email')
    navigate('/auth')
  }

  return (
    <div className="register_div">
      <div className="blue_box">
        <Link to={'/'}>
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
  )
}
