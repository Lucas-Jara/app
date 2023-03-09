import { client } from "@/lib/sanity.client";
import { Post } from "@/typings";
import { GetStaticProps } from "next";
import Link from "next/link";

type Props = {
  posts: Post[];
};

const Home = ({ posts }: Props) => {
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/post/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await client.fetch(`*[_type == "post"]{
    title,
    "slug":slug.current
  }`);

  return {
    props: {
      posts,
    },
  };
};
