// App atom components
import "./components.scss";

export const Avatar = ({ src, alt, className }) => (
  <img className={`avatar ${className ?? ""}`} src={src} alt={alt} />
);

export const Badge = ({ status }) => (
  <div className={`badge ${status}`}>{status.toUpperCase()}</div>
);

export const Button = ({ children, ...props }) => (
  <button className="button" {...props}>
    {children}
  </button>
);

export const Card = ({ title, className, action, children }) => (
  <div className={`card ${className ?? ""}`}>
    <div className="flex-space-between">
      {title ? <h4>{title}</h4> : null}
      {action ? (
        <Button type="submit" action={action?.action}>
          {action?.copy}
        </Button>
      ) : null}
    </div>
    {children}
  </div>
);

export const Label = ({ isBold, children, variant = "primary", className }) => (
  <span
    className={`label ${isBold ? "bold" : ""} ${variant} text-ellipsis ${
      className ?? ""
    }`}
  >
    {children}
  </span>
);
