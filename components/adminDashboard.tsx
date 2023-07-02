"use client";
import { IPost } from "@/models/post";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [posts, setPosts] = useState<IPost[] | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("/api/admin/posts", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Cache: "no-cache",
        },
        credentials: "same-origin",
      });

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      setPosts((await res.json()) as IPost[]);
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <table className="w-full text-sm text-left text-black">
        <tbody>
          {posts
            ? posts.map((post: IPost) => (
                <tr className="bg-orange-100" key={post?._id}>
                  <td>{post?.title}</td>
                  <td>{post?.creatorId}</td>
                  <td>{post?.description}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
}
