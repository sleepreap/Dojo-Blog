import BlogList from "./BlogList";
import useFetch from "./useFetch";
// need hook to create an 'reactive' element that would update itself when it is click etc. 
// Hook would start with Use.

const Home = () => {
    // useState is a function, 'mario' is an initial value. To store the value of the function, 
    // we use an array. First value of the array is the initial value, second value is a function that 
    // can change the first value.

    // const [name, setName]= useState('mario');
    // const [age, setAge] = useState(25);

  
    //   handlerfunction created her so that we can use setBlogs to edit states of an element 
      // const handleDelete = (id) =>{
      //   const newBlogs= blogs.filter((blog) => blog.id !== id);
      //   setBlogs(newBlogs);
      // }
    // useEffect(() =>{
    //     console.log("use effect ran");
    //     console.log(name);
    //     //useEffect will be invoked everytime there is a render of the dom ie state change for the element
    //     //to control when useEffect will be invoked, we can make use of dependency []. If [] is empty, useEffect will only run once.
    //     //If there is dependency [name], useEffect will only run when the state of [name] changes
    // }, [name]);
    
    // const handleClick = (e) =>{
    //     setName('luigi');
    //     setAge(30);
    //     // when setName is invoked, react will rerender with the updated value
    // }

    // const handleClickAgain = (name,e) =>{
    //     console.log('hello ' + name, e.target);
    // }
    const {data:blogs , isPending, error} = useFetch("http://localhost:8000/blogs ");

    return ( 
        <div className="home">
            {/* we use prop to pass in data from parent component to child component
            data passed in can be dynamic using{} or just value */}
         {/* you can also pass in a function as a prop e.g handleDelete= {handleDelete} */}
         {error && <div>{error} </div>}
          {isPending &&  <div>Loading... </div>}
         { blogs && <BlogList blogs= {blogs} title="All blogs!" />}
         {/* this ^ is a conditional template, if blogs== null, rhs not loaded, if blogs != null, load rhs  */}


          {/* you can reuse the same array but filtered out data for same component
          filter does not change the original array but creates a new array */}
          {/* <BlogList blogs= {blogs.filter((blog) => blog.author=== 'mario')} title="Mario's blogs" /> */}
            {/* <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button> */}
            {/* cannot put handleclick(argument) as handleClick() would mean the 
            function would be invoke regardless of click. 
            Hence need use another function to wrap the function that takes the arguments */}
            {/* <button onClick={ (e) => {handleClickAgain('mario', e)} }>Click me again</button> */}
            {/* <button onClick={ () => setName('luigi')}>change name</button>
            <p>{name}</p> */}
        </div>
     );
}
 
export default Home;