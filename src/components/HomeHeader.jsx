import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getCookie, removeCookie } from '../../config/Cookie'
import '../../styles/header.scss'

export default function HomeHeader() {
  const navigate = useNavigate()
  const [logined, setLogined] = useState(false)

  const clickLogout = async () => {
    localStorage.removeItem('info')
    removeCookie('accessToken')
    setLogined(false)
    navigate('/')
  }
  useEffect(() => {
    const token = getCookie('accessToken')
    token ? setLogined(true) : setLogined(false)
  }, [logined])

  return (
    <div>
      <div id="header">
        <div id="alitem">
          <span></span>
          <Link to={'/'}>
            <h2 class="title">ANYAD</h2>
          </Link>
          <span></span>
        </div>
        {logined ? (
          <ul>
            <Link to={'/manage'}>
              <li>{JSON.parse(localStorage.getItem('info')).name}</li>
            </Link>
            <li onClick={clickLogout}>LOGOUT</li>
          </ul>
        ) : (
          <Link to={'/auth'}>
            <li>로그인</li>
          </Link>
        )}
      </div>
    </div>
  )
}
