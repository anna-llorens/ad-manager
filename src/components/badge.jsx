import "./badge.scss";
export const Badge = ({ status }) => {
  return <div className={`status ${status}`}>{status}</div>;
};
