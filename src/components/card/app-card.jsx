import { Button } from "../button";
import "./app-card.css";

export const AppCard = ({ title, className, cta, children }) => {
  return (
    <div className={`app-card  ${className ?? ""}`}>
      <div className="flex-space-between">
        <h4>{title}</h4>

        <form method="cta">
          <Button type="submit" action={cta?.action}>
            {cta?.copy}
          </Button>
        </form>
      </div>
      {children}
    </div>
  );
};
