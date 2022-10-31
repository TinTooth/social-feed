import React, { useState } from 'react';
import CreatePost from './Components/CreatePost/CreatePost';
import NavBar from './Components/NavBar/NavBar';
import PostList from './Components/PostList/PostList';
import './App.css';
import image from "./Images/Fox.jpg";
import "./fonts/BunchBlossomsPersonalUse-0nA4.ttf"


function App() {
  const [posts,setPosts] = useState([]);

  function addPost(post){
    let tempPosts = [...posts,post];
    setPosts(tempPosts);
  }

  function updatePosts(posts){
    setPosts(posts);
  }

  return (
    <div>
      <NavBar />
    <div className='container-fluid background pt-5'>
        <div className="row justify-content-md-center">
      <div className='col-md-5'>
          <div className = 'd-flex justify-content-center pb-4'>
          <img className = 'logo shadow-lg' src= {image} alt = "Fox HERE"></img>
          </div>
          <div className="bb rounded shadow">
          <CreatePost AddPost={addPost}/>
          </div>

      </div>
      <div className='col-md-6'>
          <div className =" rounded shadow-lg screen-height overflow-auto bg">
          <PostList updatePosts={updatePosts} posts={posts}/>
          </div>
      </div>
        </div>
    </div>
    </div>
  );
}

export default App;
