import { client } from "@/lib/sanity.client";
import { urlFor } from "@/lib/urlFor";
import { Post } from "@/typings";
import { getImageDimensions } from "@sanity/asset-utils";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";

type Props = {
  posts: Post[];
};

const Home = ({ posts }: Props) => {
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li
            key={post.slug}
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              marginBottom:"15px"
            }}
          >
            <Image
              src={urlFor(post.image).url()}
              alt={post.title}
              width={160}
              height={90}
              style={{
                objectFit: "cover",
              }}
              placeholder="blur"
              blurDataURL={urlFor(post.image)
                .width(160)
                .height(90)
                .blur(10)
                .url()}
            />
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
    "slug": slug.current,
    "image": mainImage,
  }`);

  return {
    props: {
      posts,
    },
  };
};
