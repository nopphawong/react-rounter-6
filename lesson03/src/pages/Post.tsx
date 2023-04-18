import { useOutletContext, useParams } from "react-router-dom"

const Post = () => {
  const { id } = useParams()
  const obj = useOutletContext<any>()
  return <h1>Post {id} {obj.hey}</h1>
}

export default Post
