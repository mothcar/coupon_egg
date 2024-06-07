import { useState } from "react"
import axios from "../api/axios"

export default function AddPost() {
  const [file, setFile] = useState()
  const upload = () => {
    const formData = new FormData()
    formData.append("file", file)
    axios
      .post("http://localhost:3000/upload", formData)
      .then((res) => {})
      .catch((err) => console.log(err))
      alert("등록완료")
  }
  return (
    <div className="move-file-select">
      <div>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      </div>
      <button type="button" onClick={upload}>
        등록
      </button>
    </div>
  )
}
