
import { useRouter } from 'next/router';

export default function BlogPost({ post }) {
  const router = useRouter();

  if (!post) {
    return <h1>Chargement...</h1>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="mt-4">{post.body}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  const paths = posts.map(post => ({
    params: { id: post.id.toString() }
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await res.json();

  return { props: { post } };
}
