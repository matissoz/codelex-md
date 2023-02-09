import { useQuery } from '@tanstack/react-query'
import { Route, Routes } from 'react-router-dom';
import { getPosts } from './api/api';
import './App.css'
import Footer from './components/Footer/footer';
import Header from './components/Header/Header';
import About from './pages/About';
import Blog from './pages/Blog';
import CreatePost from './pages/createPost';
import Home from './pages/Home';
import SinglePostPage from './pages/SinglePostPage';


function App() {

  const getQuery = useQuery({
    queryKey: ['data'],
    queryFn: getPosts,
    keepPreviousData: true,
  });

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/blog" element={
          <Blog 
            getQuery={getQuery}
          />
        }/>
        <Route path="/createpost" element={<CreatePost />}/>
        <Route path="/blog/:id" element={
          <SinglePostPage />
        }/>
        <Route path="/about" element={<About />}/>
      </Routes>
      <footer>
        <Footer/>
        Original by original footer
      </footer>
    </>
  )
}

export default App
