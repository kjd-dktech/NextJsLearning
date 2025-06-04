import Link from "next/link";

type Dev = {
  name: string;
  bio: string;
  username: string;
  skills: string[];
  picture: string;
};

async function getDevs(): Promise<Dev[]> {
  const res = await fetch("https://randomuser.me/api/?results=5");
  const data = await res.json();

  return data.results.map((user: any) => ({
    name: `${user.name.first} ${user.name.last}`,
    bio: `Email: ${user.email}`,
    username: user.login.username,
    picture: user.picture.medium,
    skills: ["Next.js", "TypeScript", "Tailwind"], // skills factices
  }));
}

export default async function Home() {
  const devs = await getDevs();

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Annuaire de développeurs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {devs.map((dev) => <Link
  key={dev.username}
  href={{
    pathname: `/dev/${dev.username}`,
    query: {
      name: dev.name,
      bio: dev.bio,
      picture: dev.picture,
      skills: dev.skills.join(','),
    },
  }}
  className="block border p-4 rounded-xl shadow-md hover:shadow-lg transition"
>
  <div className="flex gap-4 items-center">
    <img
      src={dev.picture}
      alt={dev.name}
      className="w-16 h-16 rounded-full"
    />
    <div>
      <h2 className="text-xl font-bold">{dev.name}</h2>
      <p className="text-sm text-gray-600">{dev.bio}</p>
      <p className="mt-2 text-sm text-blue-600">
        Compétences : {dev.skills.join(', ')}
      </p>
    </div>
  </div>
</Link>
)}
      </div>
    </main>
  );
}


