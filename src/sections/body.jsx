import React, { Fragment } from "react";
import { AdCard } from "../components/ad-card";
import { useAppContext } from "../app-context";
import { Outlet } from "react-router-dom";

export const Body = () => {
  const { product } = useAppContext();
  return (
    <section>
      <h2>Facebook Posts Ads</h2>
      <p>Product name: {product?.productName}</p>

      <div>
        <form method="post">
          <button type="submit">Add new post</button>
        </form>
      </div>

      {product?.prodAds?.map((post) => (
        <Fragment key={post.id}>
          <AdCard
            post={post}
            productImage={product?.productImage}
            productName={product?.productName}
          />
          <Outlet />
        </Fragment>
      ))}
    </section>
  );
};
