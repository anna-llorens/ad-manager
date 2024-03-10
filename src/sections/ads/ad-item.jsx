import { Form, useLocation } from "react-router-dom";
import { Button, Card, Badge } from "../../components";
import { FacebookPost } from "../../components";

import "./ad-item.css";

export const AdItem = ({ post }) => {
  const location = useLocation();

  const onDeleteAd = () => {
    alert("Are you sure you want to delete this ad? // TODO");
  };

  return (
    <Card className={post.status}>
      <div>
        <Badge status={post?.status} />
      </div>
      <div className="ad-item-body">
        <FacebookPost isCondensed />
        <div className="cta">
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
