import PostCard from "./PostCard";

export default function PostContainer({ data }) {
  return (
    <div>
      {/* {data.map((item) => ( */}
      <PostCard {...data} />
      {/* ))} */}
    </div>
  );
}
