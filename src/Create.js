import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./App.css";

const Create = () => {
    const [ title ,setTitle ] = useState('');
    const [ author , setAuthor ] = useState('Micheal');
    const [ body , setBody ] = useState('');
    const [ isSubmiting , setIsSubmiting] = useState(false);
    const history = useHistory();
    const handelSubmit = (e) => {
        e.preventDefault();
        const newBlog = {
            title,
            author,
            body
        }
        setIsSubmiting(true);
        fetch(`http://localhost:8000/blogs`,{
            method:'POST',
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                newBlog
            )            
        })
        .then(res =>{
            setIsSubmiting(false);
            return res.json();
        })
        .then((res) =>{
            history.push('/');
        })
    }
    return (
        <div className="create">
            <h1>Add new  blog</h1>
            <form onSubmit={handelSubmit}>
                <input type="text" value={title} placeholder="Blog name" onChange={(e) => setTitle(e.target.value) } />
                <textarea placeholder="Blog details" value={body}  onChange={ (e) => setBody(e.target.value) } ></textarea>
                <select value={author} onChange={(e) => setAuthor(e.target.value)} >
                    <option value="Micheal">Micheal</option>
                    <option value="Chrysostome">Chryso</option>
                </select>
                { !isSubmiting && <button>Create</button>}
                { isSubmiting && <button disabled >Creating ....</button>}
            </form>            
        </div>
      );
}
 
export default Create;