import React from "react";
import { useParams } from "react-router-dom";
import { Post } from "../components/post";
import { mockedData } from "../data";

export const Posts = () => {
  const { productId } = useParams();
  const product = mockedData.products.find(
    (product) => product.id === productId
  );
  const productPosts = mockedData.products.find(
    (product) => product.id === productId
  )
    ? {
        productImage: product?.productImage,
        productName: product?.productName,
        prodAds: product?.prodAds,
      }
    : {};

  return (
    <section>
      <h2>Facebook Posts</h2>
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
