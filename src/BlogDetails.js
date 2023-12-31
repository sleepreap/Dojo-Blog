import {useHistory, useParams} from "react-router-dom"
import useFetch from "./useFetch";
const BlogDetails = () => {
    const {id }= useParams();
    // useParams() to import parameters from the routing path 
    const {data:blog , isPending, error} = useFetch("http://localhost:8000/blogs/" +id );
    const history = useHistory();

    const handleClick= () =>{
        //DELETE request
        fetch('http://localhost:8000/blogs/'+blog.id, {
            method:'DELETE'
        }).then(()=>{
            history.push('/');
        });
    }

    return (
        <div className="blog-details">
        {isPending &&  <div>Loading... </div>}
        {error && <div>{error} </div>}
        { blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleClick}>Delete</button>
            </article>
        )}
        </div>
    );
}
 
export default BlogDetails;