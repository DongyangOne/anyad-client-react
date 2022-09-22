import '../../../styles/adminpage.scss'
import OtherHeader from '../../components/OtherHeader'
import Nav from './Nav'

export default function AdminPage() {
  const info = JSON.parse(localStorage.getItem('info'))
  return (
    <div className="admin_page">
      <OtherHeader />
      <div className="wrap">
        <Nav />
        <div class="profile_div">
          <div className="profile_inbox">
            <div className="top">
              <h2>김인후</h2>
              <button>정보 수정</button>
              <hr />
            </div>
            <div className="bottom">
              <h2>이메일</h2>
              <h2>SNS 연동</h2>
              Google
              <input type="checkbox" id="toggle" hidden />
              <label for="toggle" class="toggleSwitch">
                <span class="toggleButton"></span>
              </label>
              Kakao
              <input type="checkbox" id="toggle1" hidden />
              <label for="toggle1" class="toggleSwitch1">
                <span class="toggleButton1"></span>
              </label>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
