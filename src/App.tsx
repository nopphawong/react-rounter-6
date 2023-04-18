import { Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Home'
import PostList from './pages/PostList'

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
        <Route path='/posts' element={<PostList />} />
      </Routes>
    </>
  )
}

export default App
