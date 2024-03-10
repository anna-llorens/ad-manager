import { Button } from "../button";
import { Badge } from "../badge";
import "./card.scss";

export const Card = ({ title, className, action, children }) => {
  return (
    <div className={`card ${className ?? ""}`}>
      <div className="flex-space-between">
        {title ? <h4>{title}</h4> : null}
        {action ? (
          !action?.copy ? (
            <Badge status={action} />
          ) : (
            <Button type="submit" action={action?.action}>
              {action?.copy}
            </Button>
          )
        ) : null}
      </div>
      {children}
    </div>
  );
};
