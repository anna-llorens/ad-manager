import { useAppContext } from "../app-context";
import { ReactComponent as Like } from "../static/like.svg";
import { ReactComponent as Comment } from "../static/comment.svg";
import { ReactComponent as Share } from "../static/share.svg";
import { EditableElement } from "./editable-element";
import { useState } from "react";
import { Avatar, Card, Label, SocialButton } from ".";
import "./facebook-post.scss";

export const FacebookPost = ({ isCondensed }) => {
  const { product, ad, company } = useAppContext();

  //todo update context state with value
  const [postName, setValue] = useState(company?.url);

  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <Card className={`post ${isCondensed ? "condensed" : ""}`}>
      <div className="post-header">
        <div className="post-header-body">
          <Avatar src={company?.logo} alt="Company logo" />
          <div className="post-header-section">
            <Label isBold>{company?.url}</Label>
            <EditableElement onChange={handleChange}>
              <div style={{ outline: "none" }}>
                <p>{company?.url}</p>
              </div>
            </EditableElement>
            <Label variant="secondary">Sponsored · 🌎</Label>
          </div>
        </div>
        <div className="width-20">{ad?.postMessage}</div>
      </div>

      <img className="post-image" src={product?.productImage} alt="product" />

      <div className="post-body">
        <div className="company-data">
          {!isCondensed ? (
            <Label variant="secondary">{company?.url.toUpperCase()}</Label>
          ) : null}
          <Label isBold>{company?.name}</Label>
          {!isCondensed ? (
            <Label variant="secondary">{company?.description}</Label>
          ) : null}
        </div>
        <div className="post-cta">Shop now</div>
      </div>

      <div className="post-footer">
        <SocialButton Icon={Like} label="Like" />
        <SocialButton Icon={Share} label="Share" />
        {!isCondensed ? <SocialButton Icon={Comment} label="Comment" /> : null}
      </div>
    </Card>
  );
};
