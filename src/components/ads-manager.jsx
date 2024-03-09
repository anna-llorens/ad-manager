import React from "react";
import { AdCard } from "./card/ad-card";
import { useAppContext } from "../app-context";
import { AppCard } from "./card/app-card";
import "./ads-manager.css";

export const AdsManager = () => {
  const { product } = useAppContext();
  return (
    <section>
      <AppCard
        title="Manage Facebook ads"
        cta={{ copy: "Add new post", action: "submit" }}
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
      </AppCard>
    </section>
  );
};
