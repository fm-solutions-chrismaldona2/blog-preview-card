import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import CreatePostForm from "./components/Forms/CreatePostForm/CreatePostForm";
import Post from "./components/Post/Post";
import initialPostThumbnail from "./assets/images/illustration-article.svg";
import initialAuthorAvatar from "./assets/images/image-avatar.webp";
import anonymousAuthorAvatar from "./assets/images/anonymous-avatar.webp";
import PostsGrid from "./components/PostsGrid/PostsGrid";
import { FormatDate } from "./utils/FormatDate";
import { useState } from "react";

const initialPosts = [
  {
    id: 1,
    thumbnail: initialPostThumbnail,
    category: "Learning",
    date: "21 Dec 2023",
    title: "HTML & CSS foundations",
    description:
      "These languages are the backbone of every website, defining structure, content, and presentation.",
    author: { avatar: initialAuthorAvatar, name: "Greg Hooper" },
  },
];

function App() {
  const [posts, setPosts] = useState(initialPosts);

  const handleSubmit = (formData) => {
    const newPost = {
      id: posts.length + 1,
      thumbnail: URL.createObjectURL(formData.thumbnail),
      category: formData.category,
      date: FormatDate(new Date()),
      title: formData.title,
      description: formData.description,
      author: { avatar: anonymousAuthorAvatar, name: "Anonymous" },
    };

    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <>
      <HomePage>
        <CreatePostForm onSubmit={handleSubmit} />
        <PostsGrid>
          {posts.map((post) => (
            <Post key={post.id} postData={post} />
          ))}
        </PostsGrid>
      </HomePage>
    </>
  );
}

export default App;
