import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useState } from "react";

const BlogDetails = () => {
    const history = useHistory();
    const { id } = useParams();
    const { data : blog , error , isLoading } = useFetch(`http://localhost:8000/blogs/${id}`);
    const [ isDeleting , setIsDeleting ] = useState(false);
    const handleDelete = (blogId) =>{
      fetch(`http://localhost:8000/blogs/${blogId}`,{
            method:'DELETE',
            headers:{
                "Content-Type": "application/json"
            }          
        })
        .then(res =>{
            setIsDeleting(false);
            return res.json();
        })
        .then((res) =>{
            history.push('/');
        })
    }
    return ( 
        <div className="blogInfo">
           { isDeleting   && <div> <p>Loadding... </p></div>}
           { isLoading   && <div> <p>Loadding... </p></div>}
           { error && <div className="error"> <p>{error}</p> </div> } 
           { blog && 
                <div className="blog-title">
                <div className="blog">
                  <div className="blog-details">
                    <label htmlFor="Title">Title: </label>
                    <span> {blog.title} </span>
                  </div>
                  <label htmlFor="Description">Description: </label>
                  <span> {blog.body} </span>
                  <button onClick={() => handleDelete(blog.id) } >Delete</button>
                </div>             
              </div>
              } 
        </div>
     );
}
 
export default BlogDetails;