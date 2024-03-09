import { Form } from "react-router-dom";
import { useAppContext } from "../app-context";
import { FacebookCard } from "../components/card/facebook-card";

export default function EditView({ className }) {
  const { ad } = useAppContext();
  return (
    <Form method="post" id="contact-form" className={`${className ?? ""} edit`}>
      <h1>Edit Post Ad</h1>
      <p>
        <b>Post ad: </b> {ad?.postName}
      </p>
      <FacebookCard />
    </Form>
  );
}
