import React, { useEffect, useState } from 'react';
import arrowBU from "../../Images/ArrowBU.png";
import arrowBD from "../../Images/ArrowBD.png";
import arrowPD from "../../Images/ArrowPD.png";
import arrowPU from "../../Images/ArrowPU.png";
import './PostList.css'


const PostList = ({posts,updatePosts}) => {
 
   const [refresh, setRefresh] = useState(0);
//    I played around with this alot. seeing how useState worked and what I could do inline with functions for styling.
//    Is creating a refresh state like this okay since there was no state in this component to begin with?
//    I couldnt get useEffect to work. It wouldnt detect a change to a key:value of a post object in the array of posts.
//    Doing setRefresh()  in the handleFunctions worked but could save 4 lines of code if useEffect could work. Did i miss something?

    function handleLikeClick(i) {
        if (!posts[i].likeClicked){

            posts[i].likeClicked = true;
            posts[i].dislikeClicked = false;
            updatePosts(posts);
            setRefresh(refresh+1);
        }
        else{
            posts[i].likeClicked = false;
            updatePosts(posts);
            setRefresh(refresh+1);
        }
    }

    function handleDislikeClick(i) {
        if(!posts[i].dislikeClicked) {

            posts[i].dislikeClicked = true;
            posts[i].likeClicked = false;
            updatePosts(posts);
            setRefresh(refresh+1);
        }
        else{
            posts[i].dislikeClicked = false;
            updatePosts(posts);
            setRefresh(refresh+1);
        }
    }

    function dateString(post){
        return 'Posted  on ' + (post.time.getMonth()+1) + '-' + 
        post.time.getDate() +"-"+ post.time.getFullYear() +"  at  "
        + post.time.getHours()+":"+ post.time.getMinutes()+":"+post.time.getSeconds();
    }

    function likeArrow(post){
        if (!post.likeClicked){
            return arrowBU
        }
        else{
            return arrowPU
        }
    }
    function dislikeArrow(post){
        if (!post.dislikeClicked){
            return arrowBD
        }
        else{
            return arrowPD
        }
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
                            <img key = {i+101} onClick = {(e) => handleLikeClick(i)} className = 'arrow' src = {likeArrow(post)}></img>
                            <img key = {i+201} onClick = {(e) => handleDislikeClick(i)} className = 'arrow' src = {dislikeArrow(post)}></img>
                        </div>

                    </li>
                )
            })}
        </ul>

      );
}
 
export default PostList;