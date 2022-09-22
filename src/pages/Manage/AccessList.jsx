import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axiosC from '../../../config/AxiosC'
import { useInput } from '../../util/common'
import OtherHeader from '../../components/OtherHeader'
import Nav from './Nav'
import '../../../styles/access.scss'

export default function AccessList() {
  const manager = useInput([])
  useEffect(() => {
    const callApi = async () => {
      const url = 'http://localhost:8000/api/access'
      const { result, data } = await (await axiosC.get(url)).data
      if (result) manager.setItem(data)
      console.log(manager.item)
    }
    callApi()
  }, [])
  return (
    <div className="access_box">
      <OtherHeader />
      <div className="wrap">
        <Nav />
        <div class="access_div">
          <div className="access_inBox">
            <h2>내 권한</h2>
            <div className="access_list">
              <ul>
                <li className="row_name">이름</li>
                <li className="row_name">위치</li>
                <li className="row_name">권한 판매</li>
              </ul>
              <hr />
              <ul>
                {manager.item.map((item) => (
                  <Link to={`/manage/access/${item.id}`}>
                    <li>{item.id}번 모듈, XXXX년 XX월 XX일 구매</li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
