import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PostList from './pages/PostList';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<PostList />} />
        </Routes>
    );
}

export default App;
