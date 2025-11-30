import React from "react";
import PostsTable from "@/components/posts/PostsTable";
import BackButton from "@/components/BackButton";
import PostsPagination from "@/components/posts/PostsPagination";
export default function PostsPage() {
  return (
    <>
      <BackButton link="/" text="Go Back"></BackButton>
      <PostsTable />
      <PostsPagination />
    </>
  );
}
