import { useState, useEffect } from "react";
//useEffect
import PostForm from "./PostForm";
import PostContainer from "./PostsContainer";

export default function FakeApiApp() {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const [data, setData] = useState([]);
  //   const [postList, setPostList] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [newPost, setNewPost] = useState({
    title: "",
    body: "",
  });

  const fetchPost = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    // console.log(data[1].body);
    // let index = 0;
    // data.forEach((data) => {
    //   setData({ title: data[index].title, body: data[index].body });
    //   console.log(data[index].body);
    //   index++;
    // });
    setData({ title: data[1].title, body: data[1].body });
    setIsLoading(false);
  };
  useEffect(() => {
    fetchPost();
  }, []);

  //////////// handlers ////////////
  const handleCreatePost = (e) => {
    e.preventDefault();
    if (newPost.title === "" || newPost.body === "") {
      alert("Please add a title before posting!") ||
        alert("Your post is empty! Please write something before posting!");
    }
    //else {
    //   setData((prevList) => {
    //     return [...prevList, newPost];
    //   });
    setNewPost({
      title: "",
      body: "",
    });
    //}
  };

  const handleOnChange = (e) => {
    setNewPost((prevNewPost) => {
      return {
        ...prevNewPost,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div>
      <h1>FakeApi</h1>
      <PostForm
        handleCreatePost={handleCreatePost}
        handleOnChange={handleOnChange}
        newPost={newPost}
      />
      <PostContainer data={data} />
    </div>
  );
}
