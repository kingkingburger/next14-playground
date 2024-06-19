// page.tsx

import Link from "next/link";
import ApiService, { PostData } from "@/lib/fetch";

export interface PostType {
  id: string;
  title: string;
  content: string;
}
export default async function Home() {
  const apiService = new ApiService();
  const postResultList = await apiService.fetchPosts();
  console.log("postResultList = ", postResultList);
  const typedPostList = postResultList as PostData[];
  return (
    <div className="bg-gray-900 p-4">
      <h1 className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 p-4">
        게시판
      </h1>
      <main className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 p-4">
        {typedPostList?.map((post) => (
          <Link key={post.id} href={`post/${post.id}`} passHref>
            <div className="bg-gray-800 p-4 rounded shadow transition transform hover:bg-gray-700 hover:scale-105 h-48">
              <h2 className="text-white font-bold line-clamp-4 whitespace-pre-line">
                {post.title}
              </h2>
              <p className="text-gray-400 line-clamp-4 whitespace-pre-line">
                {post.content}
              </p>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
}
