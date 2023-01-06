//import { useEffect } from "react";
import { PostService } from "./services";
import { useQuery } from "react-query";

const formData = {
  userId: 3,
  title: 'test',
  body: 'test'
}

function App() {

  // useEffect(() => {
  //   PostService.getPosts().then(res => console.log(res));
  //   PostService.getPostDetail(2).then(res => console.log(res));
  //   PostService.newPost({
  //     userId: 3,
  //     title: 'test',
  //     body: 'test'
  //   }).then(res => console.log(res));
  // })

  const getPosts = useQuery(
    ["getPosts"],
    () => PostService.getPosts(),
    { staleTime: 60000 }
  );

  console.log("getPost data: ", getPosts.data);

  const getPostDetail = useQuery(
    ["getPostDetail"],
    () => PostService.getPostDetail(2),
    { staleTime: 60000 }
  );

  console.log("getPostDetail data: ", getPostDetail.data);

  const newPost = useQuery(
    ["newPost"],
    () => PostService.newPost(formData),
    { staleTime: 60000 }
  );

  console.log("New Post data: ", newPost.data);

  return (
    <>
    
    </>
  );
}

export default App;
