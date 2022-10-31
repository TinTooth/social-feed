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
        }
        else{
            e.target.src = arrowBU;
            likeClicked = false;
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

    function dateString(post){
        return 'Posted  on ' + (post.time.getMonth()+1) + '-' + 
        post.time.getDate() +"-"+ post.time.getFullYear() +"  at  "
        + post.time.getHours()+":"+ post.time.getMinutes()+":"+post.time.getSeconds();
    }


    return (
        <ul className = 'mt-3'>
            {posts.map((post,i)=> {
                return (
                    <li className = 'bg-light border-bottom shadow m-2' key = {i}>
                        <div className = 'm-2 h5'>{post.name}</div>
                        <div className = 'm-4'>{post.post}</div>
                        <div className = 'd-flex justify-content-end'>
                            <div className = 'time'> {dateString(post)}</div>
                            <img key = {i+101} onClick = {(e) => handleLikeClick(e)} className = 'arrow' src = {arrowBU}></img>
                            <img key = {i+201} onClick = {(e) => handleDislikeClick(e)} className = 'arrow' src = {arrowBD}></img>
                        </div>

                    </li>
                )
            })}
        </ul>

      );
}
 
export default PostList;