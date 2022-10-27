import React, { useState, useEffect } from 'react';
import CreatePost from './Components/CreatePost/CreatePost';
import NavBar from './Components/NavBar/NavBar';
import PostList from './Components/PostList/PostList';
import './App.css';


function App() {
  const [posts,setPosts] = useState([]);

  function AddPost(post){
    let tempPosts = [...posts,post];
    setPosts(tempPosts);
  }

  return (
    <div className='container-fluid background'>
      <NavBar />
        <div className="row">
      <div className='col-md-6'>
          <div className="boarder">
          <CreatePost AddPost={AddPost}/>
          </div>

      </div>
      <div className='col-md-6'>
          <div className ="boarder screen-height overflow-auto">
          <PostList posts={posts}/>
          </div>
      </div>
        </div>
    </div>
  );
}

export default App;
