import React, { useContext, useMemo } from 'react'
import { useFetchData } from '../../hooks/useFetchData';
import { FlexColumn } from '../shared/flex';
import { CommentInterface } from './types';
import { CommentItem } from './CommentItem';
import { SearchContext } from '../../contexts/SearchContext';
import { Search } from '../shared/Search';

export const CommentsList = () => {
   const {comments, commentsSearchResult, value} = useContext(SearchContext)!;
 
  return (
   <FlexColumn width="100%" alignItems="center" gap="10px">
      <h1>Comments</h1>
      <Search />
      {(value ? commentsSearchResult : comments).map((comment, i)=> <CommentItem key={`${comment.id}-${i}`} comment={comment}/>)}
   </FlexColumn>
  )
}
