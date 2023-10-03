import { Dispatch, FC, PropsWithChildren, createContext, useMemo, useState } from "react"
import { DashboardPostsInterface } from "../components/posts/types"
import { DashboardUserInterface } from "../components/users/types"
import { useFetchData } from "../hooks/useFetchData";
import { CommentInterface } from "../components/comments/types";

interface SearchContextInterface {
   users: DashboardUserInterface[],
   posts: DashboardPostsInterface[],
   comments: CommentInterface[],

   value: string,
   setValue: Dispatch<string>,
   userSearchResult: DashboardUserInterface[],
   postsSearchResult: DashboardPostsInterface[],
   commentsSearchResult: CommentInterface[]
}

export const SearchContext = createContext<SearchContextInterface | null>(null);

export const SearchContextProvider: FC<PropsWithChildren> = ({children}) => {


   const [value, setValue] = useState<string>("");

   const { data: users} = useFetchData<DashboardUserInterface[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
    const { data: posts} = useFetchData<DashboardPostsInterface[]>(
      "https://jsonplaceholder.typicode.com/posts"
    );

    const {data: comments} = useFetchData<CommentInterface[]>(
      "https://jsonplaceholder.typicode.com/comments"
    );

      const userSearchResult = users ? users?.filter(({name}) => name.includes(value)) : []
   
      const postsSearchResult = posts ? posts?.filter(({title}) => title.includes(value)) : [];

      const commentsSearchResult =  comments ? comments?.filter(({name}) => name.includes(value)) : []

   return <SearchContext.Provider value={{
      value,
      setValue,
      users: users || [],
      posts: posts || [],
      comments: comments || [],
      commentsSearchResult,
      postsSearchResult,
      userSearchResult
      }}>
      {children}
   </SearchContext.Provider>
}