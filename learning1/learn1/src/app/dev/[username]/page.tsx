import { notFound } from 'next/navigation';

type Props = {
  searchParams: {
    name?: string;
    bio?: string;
    picture?: string;
    skills?: string;
  };
};

export default function DevProfile({ searchParams }: Props) {
  if (!searchParams.name) return notFound(); // en cas de lien invalide

  const skills = searchParams.skills?.split(',') ?? [];

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Profil de {searchParams.name}</h1>
      <div className="flex gap-6 items-center">
        <img
          src={searchParams.picture}
          alt={searchParams.name}
          className="w-32 h-32 rounded-full"
        />
        <div>
          <p className="text-lg">{searchParams.bio}</p>
          <h2 className="mt-4 text-xl font-semibold">Compétences</h2>
          <ul className="list-disc ml-5">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
