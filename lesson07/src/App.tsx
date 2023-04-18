import { Route, Routes, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import PostList from './pages/PostList'
import Post from './pages/Post'
import NewPost from './pages/NewPost'
import NotFound from './pages/NotFound'
import PostLayout from './PostLayout'
import './style.css'

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive ? { color: 'red' } : {}
              }}
              to='/'
            >
              {({ isActive }) => {
                return isActive ? 'Active Home' : 'Home'
              }}
            </NavLink>
          </li>
          <li>
            <NavLink to='/posts'>Posts</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts' element={<PostLayout />}>
          <Route index element={<PostList />} />
          <Route path=':id' element={<Post />} />
          <Route path='new' element={<NewPost />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
