
interface CardProps {
  title: string;
  description: string;
  author: string;
}

export function Card({ title, description, author }: CardProps) {
  return (
    <div className="bg-zinc-800 p-8 rounded-lg text-white">
      <h1 className="text-3xl">{title}</h1>
      <p className="mt-5">{description}</p>

      <strong className="mt-5 block opacity-60">{author}</strong>
    </div>
  )
}