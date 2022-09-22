import axiosC from '../../../config/AxiosC'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import OtherHeader from '../../components/OtherHeader'
import { useInput } from '../../util/common'
import '../../../styles/home.scss'

export default function ListSearch() {
  const { id } = useParams()
  const boardList = useInput([])

  useEffect(() => {
    const callApi = async () => {
      const url = 'http://localhost/api/board/search'
      const config = { params: { keyword: id } }
      const { data } = await (await axiosC.get(url, config)).data
      boardList.setItem(data)
    }
    callApi()
  }, [id])
  console.log(boardList.item)

  return (
    <div>
      <OtherHeader />
      <h1>게시글 목록</h1>
      <div className="wrap">
        <div className="wrap1">
          {boardList.item.map((item) => (
            <Link to={`/board/detail/${item.id}`}>
              <div className="board_div">
                <div className="img_box2">
                  <img
                    src={`http://210.90.136.10:8000/source/images/${item.image}`}
                  />
                </div>
                <div className="text_box">
                  <h2>{item.title}</h2>
                  <h4>광고비 : {item.price}</h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
