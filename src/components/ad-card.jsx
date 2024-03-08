import { Form, useLocation } from "react-router-dom";

export const AdCard = ({ post }) => {
  const location = useLocation();
  const onDeleteAd = () => {
    alert("Are you sure you want to delete this ad? // TODO");
  };

  return (
    <div className="post">
      <div>
        <h3>{post?.postName ?? "No campain name"}</h3>
        <div>
          Show on Facebook:
          <input type="checkbox" id="switch" class="checkbox" />
          <label for="switch" class="toggle"></label>
        </div>
        <div>
          <Form action={`/${location.pathname}/${post.id}/edit`}>
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
