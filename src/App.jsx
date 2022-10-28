import React, { useState, useEffect } from 'react';
import CreatePost from './Components/CreatePost/CreatePost';
import NavBar from './Components/NavBar/NavBar';
import PostList from './Components/PostList/PostList';
import './App.css';
import image from "./Fox.jpg";
import "./fonts/BunchBlossomsPersonalUse-0nA4.ttf"


function App() {
  const [posts,setPosts] = useState([]);

  function AddPost(post){
    let tempPosts = [...posts,post];
    setPosts(tempPosts);
  }

  return (
    <div>
      <NavBar />
    <div className='container-fluid background full pt-5'>
        <div className="row justify-content-md-center">
      <div className='col-md-5'>
          <div class = 'd-flex justify-content-center pb-4'>
          <img class = 'logo shadow-lg' src= {image} alt = "Fox HERE"></img>
          </div>
          <div className="bb rounded shadow">
          <CreatePost AddPost={AddPost}/>
          </div>

      </div>
      <div className='col-md-6'>
          <div className =" rounded shadow-lg screen-height overflow-auto bg">
          <PostList posts={posts}/>
          </div>
      </div>
        </div>
    </div>
    </div>
  );
}

export default App;
