import { Link, Outlet } from 'react-router-dom'

const PostLayout = () => {
  return (
    <>
      <Link to='/posts/1'>Post 1</Link>
      <br />
      <Link to='/posts/2'>Post 2</Link>
      <br />
      <Link to='/posts/new'>New Post</Link>
      <Outlet context={{ hey: 'React' }} />
    </>
  )
}

export default PostLayout
