import React from "react";
import PostsTable from "@/components/posts/PostsTable";
import BackButton from "@/components/BackButton";
export default function PostsPage() {
  return (
    <>
      <BackButton link="/" text="Go Back"></BackButton>
      <PostsTable />
    </>
  );
}
