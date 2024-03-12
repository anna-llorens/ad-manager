import { FacebookPost, Card, Tooltip } from "../components";

export const EditPost = () => {
  return (
    <Card title="Edit product post" action={{ copy: "Save ad", cta: "save" }}>
      <FacebookPost />
    </Card>
  );
};
