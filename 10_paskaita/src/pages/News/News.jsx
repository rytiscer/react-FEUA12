import { useEffect, useState } from "react";
import { fetchPosts } from "../../api";
import styles from "../News/News.module.css";

const News = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts()
      .then((response) => setPosts(response.slice(0, 2)))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className={styles.mainNews}>
      <h1>News Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <span className={styles.postTitle}>{post.title}</span> <br />{" "}
            {post.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
