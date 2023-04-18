import { Link } from 'react-router-dom'

const PostList = () => {
  return (
    <>
      <h1>PostList</h1>
      <Link to='/posts/1'>Post 1</Link>
      <br />
      <Link to='/posts/2'>Post 2</Link>
      <br />
      <Link to='/posts/new'>New Post</Link>
    </>
  )
}

export default PostList
