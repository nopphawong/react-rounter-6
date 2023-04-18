import { Navigate, useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  setTimeout(() => {
    navigate('/')
  }, 2000);
  return <h1>NotFound</h1>
}

// NOTE: Navigate
// const NotFound = () => {
//   return <Navigate to='/' />
// }

export default NotFound
