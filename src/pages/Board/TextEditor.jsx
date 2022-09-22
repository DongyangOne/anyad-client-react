import { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { getCookie } from '../../../config/Cookie'
import { useParams } from 'react-router-dom'

export default function TextEditor() {
  const [text, setText] = useState()
  const [title, setTItle] = useState()
  const [price, setPrice] = useState()
  const { id } = useParams()
  // const [image, setImage] = useState({
  //   image_file: '',
  //   preview_URL: '',
  // })
  // const [display, setDisplay] = useState({
  //   display: 'none',
  // })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('image', e.target.image.files[0])
    formData.append('text', text)
    formData.append('title', title)
    formData.append('price', price)

    try {
      await fetch(`http://localhost:8000/api/board/${id}`, {
        method: 'post',
        body: formData,
        headers: {
          accessToken: getCookie('accessToken'),
        },
      })
        .then((res) => res.json())
        .then((data) => window.location.replace('/'))
    } catch (err) {
      console.log(err)
    }
  }

  // const saveImage = (e) => {
  //   e.preventDefault()
  //   const fileReader = new FileReader()

  //   if (e.target.files[0]) fileReader.readAsDataURL(e.target.files[0])

  //   fileReader.onload = () => {
  //     setImage({
  //       image_file: e.target.files[0],
  //       preview_URL: fileReader.result,
  //     })
  //     setDisplay({
  //       display: 'block',
  //       width: '300px',
  //       heigh: '300px',
  //     })
  //   }
  // }

  return (
    <div>
      <h1>게시글 작성하기</h1>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <input placeholder="Title" onChange={(e) => setTItle(e.target.value)} />
        <input
          type="number"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello world</p>"
          onChange={(event, editor) => {
            const data = editor.getData().replace(/<(\/p|p)([^>]*)>/gi, '')
            setText(data)
          }}
        />
        <button type="submit">게시글 추가</button>
        <input name="image" type="file" accept="image/*" />
        {/* <input name="image" type="file" accept="image/*" onChange={saveImage} /> */}
      </form>
      <div>
        {/* <div contentEditable="true">
          <div>
            <img src={image.preview_URL} style={display} alt="haaa" />
          </div>
        </div> */}
      </div>
    </div>
  )
}
