// App atom components
import "./components.scss";
import { useRouteError } from "react-router-dom";

export const Avatar = ({ src, alt, size }) => (
  <img
    className={`avatar ${size === "small" ? size : ""}`}
    src={src}
    alt={alt}
  />
);

export const Badge = ({ status, size }) => (
  <div className={`badge ${status} ${size === "small" ?? ""}`}>
    {status.toUpperCase()}
  </div>
);

export const Button = ({ children, ...props }) => (
  <button className="button" {...props}>
    {children}
  </button>
);

export const Card = ({ title, className, action, children }) => (
  <div className={`card ${className ?? ""}`}>
    <div className="flex-space-between">
      {title ?? null}
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

export const SocialButton = ({ Icon, label }) => (
  <div className="social-button">
    <Icon className="social-icon" />
    {label}
  </div>
);

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="error-view">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
