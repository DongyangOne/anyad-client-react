import { Link } from 'react-router-dom'
import '../../../styles/nav.scss'

export default function Nav() {
  return (
    <div className="nav">
      <div class="LEFT">
        <aside class="pt_left">
          <div>
            <img class="img_pt1" />
            <h2>[닉네임]</h2>
            <button class="btn1">내 광고 관리</button>
            <Link to={'/manage'}>
              <h2>My Profile</h2>
            </Link>
            <Link to={'/manage/module'}>
              <h2>My Module</h2>
            </Link>
            <Link to={'/manage/access'}>
              <h2>My Access</h2>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  )
}
