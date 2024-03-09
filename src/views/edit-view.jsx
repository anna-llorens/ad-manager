import { Form } from "react-router-dom";
import { useAppContext } from "../app-context";
import { FacebookCard } from "../components/card/facebook-card";
import { AppCard } from "../components/card/app-card";

export default function EditView({ className }) {
  const { ad } = useAppContext();
  return (
    <Form method="post" id="contact-form" className={`${className ?? ""} edit`}>
      <AppCard
        title="Edit product post"
        cta={{ copy: "Save ad", action: "save" }}
      >
        <p>
          <b>Post ad: </b> {ad?.postName}
        </p>
        <FacebookCard />
      </AppCard>
    </Form>
  );
}
