import { Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import PostList from './pages/PostList'
import Post from './pages/Post'
import NewPost from './pages/NewPost'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/posts'>Posts</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts'>
          <Route index element={<PostList />} />
          <Route path=':id' element={<Post />} />
          <Route path='new' element={<NewPost />} />
        </Route>
        {/* <Route path='/posts' element={<PostList />} />
        <Route path='/posts/:id' element={<Post />} />
        <Route path='/posts/new' element={<NewPost />} /> */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
