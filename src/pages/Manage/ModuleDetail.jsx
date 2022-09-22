import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useInput } from '../../util/common'
import axiosC from '../../../config/AxiosC'
import OtherHeader from '../../components/OtherHeader'
import Nav from './Nav'
import '../../../styles/moduleDetail.scss'

export default function ModuleDetail() {
  const module = useInput()
  const loading = useInput(true)
  const { id } = useParams()

  useEffect(() => {
    const callApi = async () => {
      const url = `http://localhost:8000/api/module/${id}`
      const { result, data } = await (await axiosC.get(url)).data
      if (result) {
        module.setItem(data)
        loading.setItem(false)
      }
    }
    callApi()
  }, [])

  console.log(loading.item)
  console.log(module.item)
  if (loading.item) return null
  return (
    <div className="moduleDetail_list">
      <OtherHeader />
      <div className="wrap">
        <Nav />
        <div class="moduleDetail_div">
          <div className="moduleDetail_inBbox">
            <h2>{module.item.name}</h2>
            <div className="module_data_list">
              <hr />
              <Link to={`/board/texteditor/${module.item.id}`}>
                <button>판매하기</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
