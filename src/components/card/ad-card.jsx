import { Form, useLocation } from "react-router-dom";
import { Button } from "../button";
import "./ad-card.css";
import { FacebookCard } from "./facebook-card";

export const AdCard = ({ post }) => {
  const location = useLocation();

  const onDeleteAd = () => {
    alert("Are you sure you want to delete this ad? // TODO");
  };

  return (
    <div className="ad-card box-container">
      <div className="flex-space-between">
        <div>{post?.postName ?? "No campain name"}</div>
        <div>
          Show on Facebook:{" "}
          <input type="checkbox" id="switch" className="checkbox" />
          <label htmlFor="switch" className="toggle"></label>
        </div>
      </div>

      <div className="body-card">
        <FacebookCard className="width-50" isCondensed />
        <div className="cta">
          <Form action={`/${location.pathname}/${post.id}/edit`}>
            <Button type="submit">Edit</Button>
          </Form>
          <Form method="post" action="destroy" onSubmit={onDeleteAd}>
            <Button type="submit">Delete</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
