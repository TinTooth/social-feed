import React, {useState} from 'react';
import './CreatePost.css'


const CreatePost = ({AddPost}) => {
    const [name,setName] = useState('Enter Your Name');
    const [post,setPost] = useState('Write Your Post');
    const [nameclick, setNClick] = useState(true);
    const [postclick, setPClick] = useState(true);

    function handleSubmit(e){
        e.preventDefault();
        let date = new Date();
        let newPost = {name:name,post:post,time:date};
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
        <form onSubmit={handleSubmit} className = 'bg p-3 rounded shadow-lg mb-4'>
            <div className="mb-3">
                <label className = 'h5'> Name </label>
                <input type = 'string' className = 'form-control' value = {name} onChange = {(e) => setName(e.target.value)} onClick = {handleNClick}/>
            </div>
            <div className="mb-3">
                <label className = 'h5'>Post</label>
                <textarea type = 'string' className = 'form-control height' value = {post} onChange = {(e) => setPost(e.target.value)} onClick = {handlPClick}/>
            </div>
            <div className = 'd-flex justify-content-end'>
            <button type = 'submit' className = 'btns rounded' >Create Post</button>
            </div>
        </form>
    );
}
 
export default CreatePost;