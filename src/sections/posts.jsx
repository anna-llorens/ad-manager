import React from "react";
import { Post } from "../components/post";
import { useAppContext } from "../app-context";

export const Posts = () => {
  const { productPosts } = useAppContext();
  return (
    <section>
      <h2>Facebook Posts Ads</h2>
      <p>Product name: {productPosts.productName}</p>
      <div>
        <form method="post">
          <button type="submit">Add new post</button>
        </form>
      </div>

      {productPosts?.prodAds?.map((post) => (
        <Post
          key={post.id}
          post={post}
          productImage={productPosts?.productImage}
          productName={productPosts?.productName}
        />
      ))}
    </section>
  );
};
