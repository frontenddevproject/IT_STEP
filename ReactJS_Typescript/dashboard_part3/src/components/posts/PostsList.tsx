import React from "react";
import { useFetchData } from "../../hooks/useFetchData";
import { DashboardPostsInterface } from "./types";
import { FlexColumn } from "../shared/flex";
import { PostItem } from "./PostItem";

export const PostsList = () => {
  const { data, isLoading } = useFetchData<DashboardPostsInterface[]>(
    "https://jsonplaceholder.typicode.com/posts",
    { method: "GET" }
  );

  return (
    <FlexColumn width="100%" alignItems="center" gap="10px">
      <h1>Posts</h1>
      {data?.map((post, i) => (
        <PostItem key={`${post.userId}-${i}`} post={post}></PostItem>
      ))}
    </FlexColumn>
  );
};
