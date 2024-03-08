import React from "react";
import { useParams } from "react-router-dom";
import Post from "../components/post";
import { mockedData } from "../mocks";

const AdsList = () => {
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
      <h3>Facebook Ads</h3>
      <div>
        <form method="post">
          <button type="submit">Add new post</button>
        </form>
      </div>

      {productPosts?.prodAds?.map((ad, index) => (
        <Post
          key={index}
          ad={ad}
          productImage={productPosts?.productImage}
          productName={productPosts?.productName}
        />
      ))}
    </section>
  );
};

export default AdsList;
