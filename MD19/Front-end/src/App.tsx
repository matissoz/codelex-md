import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useMutation, useQuery } from '@tanstack/react-query';
import { addBlog, getBlog } from './api/api';
import { BlogType } from './api/types';
import BlogScrn from './components/blog/blog';
import { BlogContext } from './blogContext';

function App() {

  const [titleValue, setTitleValue] = useState("");
  const [textValue, setTextValue] = useState("");

  const getQuery = useQuery({
    queryKey: ['data'],
    queryFn: getBlog,
    keepPreviousData: true,
  });

  const addBlogMutation = useMutation({
    mutationFn: addBlog,
  })

  const handleSubmit = (() =>{
    addBlogMutation.mutate({
      title: titleValue,
      text: textValue,
    })
  });


  if(getQuery.isLoading) return <div>Loading..</div>;
  if(getQuery.isError) return <div>Loading..</div>;

  const Blog:BlogType[] = getQuery.data;
  

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="form">
          <input type="text" 
            value={titleValue}
            onChange={(e) => setTitleValue(e.target.value)}
            placeholder="Title"
          />
          <input type="text" 
            value={textValue}
            placeholder="Text"
            onChange={(e) => setTextValue(e.target.value)}
          />
          <button>Submit</button>
      </form>
      <BlogContext.Provider value={Blog}>
        <BlogScrn />
      </BlogContext.Provider>
    </div>
  )
}

export default App
