import { client } from "@/lib/sanity.client";
import { GetStaticPaths, GetStaticProps } from "next";
import { Post } from "@/typings";

type Props = {
  post: Post;
};

const Post = ({ post }: Props) => {
  return <div>{post.title}</div>;
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await client.fetch(`*[_type == "post"]{
        "params":{"slug":slug.current}
      }`);

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = ctx.params as { slug: string };

  const post = await client.fetch(
    `*[_type == "post" && $slug == slug.current][0]{
      title,
      "slug":slug.current
    }`,
    { slug }
  );

  return {
    props: {
      post,
    },
  };
};
