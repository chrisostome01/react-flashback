import { Link } from "react-router-dom";

const BlogList = ({ blogs, title  })=> {
    return ( 
        <div className="content">
        <p>{ title }</p>
        {
          blogs.map((blog) => (
            <Link to={`/blogs/${blog.id}`} className="blog-preview"  key={blog.id}>
              <div className="blog-title">
                <div className="blog">
                  <div className="blog-details">
                    <label htmlFor="Title">Title: </label>
                    <span> { blog.title } </span>
                  </div>
                  <label htmlFor="Description">Description: </label>
                  <span> {blog.body} </span>
                </div>             
              </div>
            </Link>
          ))
        }

      </div>
     );
}

export default BlogList;