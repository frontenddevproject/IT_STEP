import React, { useContext, useMemo } from "react";
import { useFetchData } from "../../hooks/useFetchData";
import { DashboardPostsInterface } from "./types";
import { FlexColumn } from "../shared/flex";
import { PostItem } from "./PostItem";
import { SearchContext } from "../../contexts/SearchContext";
import { Search } from "../shared/Search";

export const PostsList = () => {

  const {posts, postsSearchResult, value} = useContext(SearchContext)!;
  return (
    <FlexColumn width="100%" alignItems="center" gap="10px">
      <h1>Posts</h1>
      <Search />
      {(value ? postsSearchResult : posts).map((post, i) => (
        <PostItem key={`${post.userId}-${i}`} post={post}></PostItem>
      ))}
    </FlexColumn>
  );
};
