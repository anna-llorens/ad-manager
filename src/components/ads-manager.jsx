import React from "react";
import { AdCard } from "./card/ad-card";
import { useAppContext } from "../app-context";
import { Card } from "./card/card";
import "./ads-manager.scss";

export const AdsManager = () => {
  const { product } = useAppContext();
  return (
    <section>
      <Card
        title="Manage Facebook ads"
        action={{ copy: "Add new post", action: "submit" }}
      >
        <div className="ads-list">
          {product?.prodAds?.map((post) => (
            <div key={post.id} className="post-container">
              <AdCard
                post={post}
                productImage={product?.productImage}
                productName={product?.productName}
              />
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};
