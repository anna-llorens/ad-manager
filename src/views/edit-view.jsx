import { Form } from "react-router-dom";
import { useAppContext } from "../app-context";
import { FacebookCard } from "../components/facebook-card";

export default function EditView() {
  const { ad } = useAppContext();
  return (
    <Form method="post" id="contact-form" className="edit">
      <h1>Edit Post</h1>
      <p>
        <b>Post ad: </b> {ad?.postName}
      </p>

      <FacebookCard />
    </Form>
  );
}
