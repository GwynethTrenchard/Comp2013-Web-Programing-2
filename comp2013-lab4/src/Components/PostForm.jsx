export default function PostForm({
  newPost = { title: "placeholder", body: "placeholder" },
  handleCreatePost,
  handleOnChange,
}) {
  return (
    <div>
      <h2>Post Form</h2>

      <form action="">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          defaultValue={newPost.title}
          onChange={(e) => handleOnChange(e)}
        />
        <br />
        <label htmlFor="body">Body:</label>
        <input
          type="text"
          name="body"
          id="body"
          defaultValue={newPost.body}
          onChange={(e) => handleOnChange(e)}
        />
        <br />
        <button onClick={(e) => handleCreatePost(e)}>submit</button>
      </form>
    </div>
  );
}
