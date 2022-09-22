import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axiosC from '../../../config/AxiosC'
import Nav from './Nav'
import '../../../styles/module.scss'
import OtherHeader from '../../components/OtherHeader'
import { useInput } from '../../util/common'

export default function ModuleList() {
  const module = useInput([])

  useEffect(() => {
    const callApi = async () => {
      const url = 'http://localhost:8000/api/module'
      const { result, data } = await (await axiosC.get(url)).data
      if (result) module.setItem(data)
    }
    callApi()
  }, [])
  return (
    <div className="module_list">
      <OtherHeader />
      <div className="wrap">
        <Nav />
        <div class="module_div">
          <div className="module_inBbox">
            <h2>내 광고</h2>
            <div className="module_data_list">
              <ul>
                <li className="row_name">이름</li>
                <li className="row_name">위치</li>
                <li className="row_name">권한 판매</li>
              </ul>
              <hr />
              <ul>
                {module.item.map((item) => (
                  <Link key={item.id} to={`/manage/module/${item.id}`}>
                    <div className="list">
                      <li className="module_h2">{item.name}</li>
                    </div>
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
