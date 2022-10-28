import React, {useState} from 'react';
import './CreatePost.css'


const CreatePost = ({AddPost}) => {
    const [name,setName] = useState('Enter Your Name');
    const [post,setPost] = useState('Write Your Post');
    const [nameclick, setNClick] = useState(true);
    const [postclick, setPClick] = useState(true);
    
    function handleSubmit(e){
        e.preventDefault();
        let newPost = {name:name,post:post};
        AddPost(newPost);
    }

    function handleNClick(){
        if (nameclick == true){ setName('')
        setNClick(false)}
    }
    
    function handlPClick() {
        if (postclick == true){ setPost('')
        setPClick(false)}
    }

    return (  
        <form onSubmit={handleSubmit} className = 'form rounded shadow-lg'>
            <div className="mb-3">
                <label class> Name </label>
                <input type = 'string' class = 'form-control' value = {name} onChange = {(e) => setName(e.target.value)} onClick = {handleNClick}/>
            </div>
            <div className="mb-3">
                <label class>Post</label>
                <textarea type = 'string' class = 'form-control' value = {post} onChange = {(e) => setPost(e.target.value)} onClick = {handlPClick}/>
            </div>
            <div class = 'd-flex justify-content-end'>
            <button type = 'submit' class = 'btns rounded' >Create Post</button>
            </div>
        </form>
    );
}
 
export default CreatePost;