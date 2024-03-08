import { useAppContext } from "../app-context";
import "./facebook-card.css";

export const FacebookCard = () => {
  const { product, ad, company } = useAppContext();

  return (
    <div className="post">
      <div className="post-header">
        <div className="company-info">
          <img
            className="company-logo"
            src={company?.logo}
            alt="Company logo"
          />
          <div>
            <div className="company-link">{company?.url}</div>
            <div className="company-info-label">Sponsored · 🌎</div>
          </div>
        </div>
        <div>{ad?.postMessage}</div>
      </div>

      <img className="post-image" src={product?.productImage} alt="product" />

      <div className="post-body">
        <div>
          {company?.url.toUpperCase()}
          <div className="company-name">{company?.name}</div>
          <div className="company-description">{company?.description}</div>
        </div>
        <div className="post-cta" type="button">
          Shop now
        </div>
      </div>

      <div className="post-footer">
        <button type="button">Cancel</button>
        <button type="submit">Save</button>
      </div>
    </div>
  );
};
