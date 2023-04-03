import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

export default function PostPreview(props: PostMetadata) {
  return (
    <div>
      <Link href={`/posts/${props.slug}`}>
        <h2>{props.title}</h2>
      </Link>
      <p>{props.subtitle}</p>
      <p>{props.date}</p>
    </div>
  );
}
