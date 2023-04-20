import type { ParsedMovie } from "@/src/types";
export default function Movie({ id, title, year, poster, type }: ParsedMovie) {
  return (
    <div
      className="relative flex flex-col group gap-2 items-center col-span-1 w-full h-72 rounded-lg overflow-hidden border-gray-50 border-opacity-25 border-2"
      key={id}
    >
      <div className="absolute flex group-hover:[clip-path:inset(0%_0%_0%_0%)] [clip-path:inset(100%_0%_0%_0%)] transition-all duration-500 text-white font-semibold flex-col gap-2 w-full h-full bg-black bg-opacity-80 justify-center items-center p-1">
        <h2 className="font-bold text-xl text-center">{title}</h2>
        <span>
          {year} - {type}
        </span>
      </div>
      <img className="w-full h-full" src={poster} alt={title} />
    </div>
  );
}
