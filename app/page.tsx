import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => <PostPreview {...post} />);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
  );
};

export default HomePage;
