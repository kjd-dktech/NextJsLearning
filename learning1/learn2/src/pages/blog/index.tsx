import Link from 'next/link';

export default function Blog({ posts }) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Blog</h1>
      <ul className="mt-4">
        {posts.map(post => (
          <li key={post.id} className="mb-2">
            <Link href={`/blog/${post.id}`}>
              <span className="text-blue-600 hover:underline">{post.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return { props: { posts } };
}
