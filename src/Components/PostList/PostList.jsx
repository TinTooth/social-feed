import React, { useState } from 'react';
import arrowBU from "../../Images/ArrowBU.png";
import arrowBD from "../../Images/ArrowBD.png";
import arrowPD from "../../Images/ArrowPD.png";
import arrowPU from "../../Images/ArrowPU.png";
import './PostList.css'


const PostList = ({posts}) => {
    let likeClicked = false;
    let dislikeClicked = false;

    function handleLikeClick(e) {
        if (!likeClicked){
            e.target.src = arrowPU;
            e.target.nextElementSibling.src = arrowBD;
            likeClicked = true;
            dislikeClicked = false;
            console.log('hello')
        }
        else{
            e.target.src = arrowBU;
            likeClicked = false;
            console.log('goodbye')
        }
    }
    function handleDislikeClick(e) {
        if(!dislikeClicked){
            e.target.src = arrowPD;
            e.target.previousElementSibling.src = arrowBU;
            dislikeClicked = true;
            likeClicked = false;
        }
        else{
            e.target.src = arrowBD;
            dislikeClicked = false;
        }
    }


    return (
        <ul class = 'mt-3'>
            {posts.map((post,i)=> {
                return (
                    <li class = 'bg-light border-bottom shadow m-1' key = {i}>
                        <div class = 'm-2'>{post.name}</div>
                        <div class = 'm-4'>{post.post}</div>
                        <div class = 'like-container'>
                            <img key = {i+101} onClick = {(e) => handleLikeClick(e)} class = 'arrow' src = {arrowBU}></img>
                            <img key = {i+201} onClick = {(e) => handleDislikeClick(e)} class = 'arrow' src = {arrowBD}></img>
                        </div>

                    </li>
                )
            })}
        </ul>

      );
}
 
export default PostList;