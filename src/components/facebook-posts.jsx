import React, { Fragment } from "react";
import { AdCard } from "../components/card/ad-card";
import { useAppContext } from "../app-context";
import { Outlet } from "react-router-dom";
import { Button } from "../components/button";

export const FacebookPosts = () => {
  const { product } = useAppContext();
  return (
    <section>
      <h2>Facebook Posts Ads</h2>
      <div>
        <form method="post">
          <Button type="submit">Add new post</Button>
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
