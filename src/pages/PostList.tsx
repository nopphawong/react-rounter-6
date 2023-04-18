import { Link } from 'react-router-dom'

const PostList = () => {
  return (
    <>
      <h1>PostList</h1>
      <Link to='/posts/1'>Post 1</Link>
      <Link to='/posts/2'>Post 2</Link>
    </>
  )
}

export default PostList
