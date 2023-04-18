import { Link, Outlet, useSearchParams } from 'react-router-dom'

const PostLayout = () => {
  const [searchParams, setSearchParams] = useSearchParams({ n: '3' })
  const number = Number(searchParams.get('n'))
  return (
    <>
      <Link to='/posts/1'>Post 1</Link>
      <br />
      <Link to='/posts/2'>Post 2</Link>
      <br />
      <Link to={`/posts/${number}`}>Post {number}</Link>
      <br />
      <Link to='/posts/new'>New Post</Link>
      <Outlet context={{ hey: 'React' }} />
      <input
        type='number'
        value={number}
        onChange={(e) => setSearchParams({ n: e.target.value })}
      />
    </>
  )
}

export default PostLayout
