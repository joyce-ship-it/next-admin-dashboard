import React from "react";
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "@/components/ui/table";
import Link from "next/link";
import { Post } from "@/types/posts";
import posts from "@/data/posts";

interface PostTableProps {
  limit?: number;
  title?: string;
}

export default function PostsTable({ limit, title }: PostTableProps) {
  const sortedPosts: Post[] = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  const filteredPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts;
  return (
    <div className="mt-10">
      <h3 className="mb-5 text-2xl font-semibold">{title ? title : "Posts"}</h3>
      <Table>
        <TableCaption>List of recent posts</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">Author</TableHead>
            <TableHead className="hidden text-right md:table-cell">
              Date
            </TableHead>
            <TableHead>View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredPosts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.title}</TableCell>
              <TableCell className="hidden md:table-cell">
                {post.author}
              </TableCell>
              <TableCell className="hidden text-right md:table-cell">
                {post.date}
              </TableCell>
              <TableCell>
                <Link href={`/posts/edit/${post.id}`}>
                  <button className="rounded-md bg-blue-500 px-4 py-2 text-xs text-white hover:bg-blue-700">
                    Edit
                  </button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
