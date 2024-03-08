import { Form } from "react-router-dom";
import "./components.css";

export const Post = ({ post, productImage, productName }) => {
  const onDeleteAd = () => {
    alert("Are you sure you want to delete this ad? // TODO");
  };

  return (
    <div className="post">
      <div>
        <img src={productImage} alt="product" />
      </div>
      <div>
        <h1>{post?.postName ?? "No campain name"}</h1>
        {productName ?? <p>{productName}</p>}
        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form method="post" action="destroy" onSubmit={onDeleteAd}>
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
};
