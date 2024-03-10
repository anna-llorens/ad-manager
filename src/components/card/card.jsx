import { Button } from "../button";
import "./card.scss";

export const Card = ({ title, className, cta, children }) => {
  return (
    <div className={`card ${className ?? ""}`}>
      <div className="flex-space-between">
        {title ? <h4>{title}</h4> : null}
        {cta ? (
          <Button type="submit" action={cta?.action}>
            {cta?.copy}
          </Button>
        ) : null}
      </div>
      {children}
    </div>
  );
};
