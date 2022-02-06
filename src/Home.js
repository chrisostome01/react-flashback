import "./App.css";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

function Home() {
  const { data : blogs , isLoading , error} = useFetch('http://localhost:8000/blogs');


  return (
      <div className="list">
        { error && <div className="error"> { error } </div> }
        { isLoading && <div> Loading... </div> }
        { blogs && <BlogList blogs={blogs} title={"Blogs"}   />}
        { blogs && <BlogList blogs={blogs.filter(blog => blog.author === 'Micheal')}  title={"Micheal's Blogs"} />}
      </div>
  );
}

export default Home;
