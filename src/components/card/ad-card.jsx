import { Form, useLocation } from "react-router-dom";
import { Button } from "../button";

import { FacebookCard } from "./facebook-card";
import { Card } from "./card";
import { CheckBox } from "../check-box";

export const AdCard = ({ post }) => {
  const location = useLocation();

  const onDeleteAd = () => {
    alert("Are you sure you want to delete this ad? // TODO");
  };

  return (
    <Card title={post?.postName} cta={{ copy: "ACTIVE", action: "submit" }}>
      <CheckBox label="Show on facebook: " />
      <div className="flex-space-between">
        <FacebookCard isCondensed />
        <div className="d-flex">
          <Form action={`/${location.pathname}/${post.id}/edit`}>
            <Button type="submit">Edit</Button>
          </Form>
          <Form method="post" action="destroy" onSubmit={onDeleteAd}>
            <Button type="submit">Delete</Button>
          </Form>
        </div>
      </div>
    </Card>
  );
};
