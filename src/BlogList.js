import {Link} from "react-router-dom"
const BlogList = ({blogs, title}) => {
    // can be destructed to get only what you need {blogs, title}
    // const blogs= props.blogs;
    // const title=props.title;

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
              {blogs.map( (blog)=> (
                // the contents inside () uses jsx, each element of a list must have a key or unique id value
                <div className="blog-preview" key={blog.id}>
                    <Link to= {`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>
                    
                   {/* <button onClick={() => handleDelete(blog.id)}>delete blog</button> */}
                </div>
            ) )}

        </div>
     );
}
 
export default BlogList;