import React from "react";
import { AdItem } from "./ad-item";
import { useAppContext } from "../../app-context";
import { Card } from "../../components";
import "./ads-section.scss";

export const AdsSection = () => {
  const { product } = useAppContext();

  return (
    <section>
      <Card
        title={
          <>
            <h4>Ads for: </h4> <h2>{product?.productName}</h2>
          </>
        }
        action={{ copy: "Add new post", action: "submit" }}
      >
        <div className="ads-list">
          {product?.prodAds?.map((post) => (
            <div key={post.id} className="post-container">
              <AdItem
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
