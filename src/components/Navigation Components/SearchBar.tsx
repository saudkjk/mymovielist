"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { z } from "zod";
import { GrSearch } from "react-icons/gr";

const searchSchema = z.object({
  query: z
    .string()
    .min(1, "Search query must not be empty")
    .max(100, "Search query is too long"),
});

export default function SearchBar() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSearch = (searchQuery: string) => {
    const validationResult = searchSchema.safeParse({ query: searchQuery });

    const params = new URLSearchParams();
    if (validationResult.success) params.set("query", searchQuery);

    router.replace(`/search?${params.toString()}`);
  };

  return (
    <form className="relative flex w-[50%] items-center justify-end">
      <div className="w-full justify-end">
        <input
          type="text"
          placeholder="Search for Movies..."
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get("query")?.toString()}
          className={`w-full items-center rounded-md border border-gray-200 bg-transparent px-2 py-1.5 text-sm placeholder-gray-200 transition-all duration-300 ease-in-out md:text-base md:outline-none`}
        />
        <GrSearch
          size={24}
          className="absolute right-2 top-1/2 hidden -translate-y-1/2 transform text-3xl md:block"
        />
      </div>
      <button type="submit" className="hidden">
        Search
      </button>
    </form>
  );
}
