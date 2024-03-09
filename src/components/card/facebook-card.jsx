import { useAppContext } from "../../app-context";
import "./facebook-card.css";
import { ReactComponent as Like } from "../../static/like.svg";
import { ReactComponent as Comment } from "../../static/comment.svg";
import { ReactComponent as Share } from "../../static/share.svg";

export const FacebookCard = ({ isCondensed = false, className }) => {
  const { product, ad, company } = useAppContext();

  return (
    <div className={`post ${className ?? ""}`}>
      <div className="post-header">
        <div className="company-info">
          <img
            className="company-logo avatar"
            src={company?.logo}
            alt="Company logo"
          />
          <div className="top-card-container">
            <div className="company-link text-ellipsis">{company?.url}</div>
            <div className="facebook-ad-info text-ellipsis">Sponsored · 🌎</div>
          </div>
        </div>
        <div>{ad?.postMessage}</div>
      </div>

      <img className="post-image" src={product?.productImage} alt="product" />

      <div className="post-body flex-space-between">
        <div className="company-data">
          <div className="company-web-site text-ellipsis">
            {company?.url.toUpperCase()}
          </div>
          <div className="company-name text-ellipsis">{company?.name}</div>
          {!isCondensed ? (
            <div className="company-description text-ellipsis">
              {company?.description}
            </div>
          ) : null}
        </div>
        {!isCondensed ? (
          <div className="post-cta" type="button">
            Shop now
          </div>
        ) : null}
      </div>

      <div className="post-footer">
        <div className="social-button">
          <Like className="social-icon" />
          Like
        </div>

        <div className="social-button">
          <Share className="social-icon" />
          Share
        </div>
        {!isCondensed ? (
          <div className="social-button">
            <Comment className="social-icon" />
            Comment
          </div>
        ) : null}
      </div>
    </div>
  );
};
