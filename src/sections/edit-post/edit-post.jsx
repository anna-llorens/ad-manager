import { Form } from "react-router-dom";
import { useAppContext } from "../../app-context";
import { Card } from "../../components";
import { FacebookPost } from "../../components";

export const EditPost = ({ className }) => {
  const { ad } = useAppContext();
  return (
    <Form method="post" id="contact-form" className={`${className ?? ""} edit`}>
      <Card title="Edit product post" cta={{ copy: "Save ad", action: "save" }}>
        <p>
          <b>Post ad: </b> {ad?.postName}
        </p>
        <FacebookPost />
      </Card>
    </Form>
  );
};
