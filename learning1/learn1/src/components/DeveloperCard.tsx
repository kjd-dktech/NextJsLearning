type Dev = {
  username: string;
  name: string;
  skills: string[];
  bio: string;
};

export default function DeveloperCard({ dev }: { dev: Dev }) {
  return (
    <div className="border p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-bold">{dev.name}</h2>
      <p className="text-sm text-gray-600">{dev.bio}</p>
      <p className="mt-2 text-sm text-blue-600">
        Compétences : {dev.skills.join(", ")}
      </p>
      <a
        href={`/dev/${dev.username}`}
        className="inline-block mt-4 text-blue-500 hover:underline"
      >
        Voir le profil →
      </a>
    </div>
  );
}
