import React, { FC, PropsWithChildren } from 'react'
import { DashboardPostsInterface } from './types';
import { FlexColumn } from '../shared/flex';

interface PropsInterface {
   post: DashboardPostsInterface;
}

export const PostItem: FC<PropsInterface> = ({ post }) => {
   const {userId, id, title, body} = post; 
  return (
    <FlexColumn
      width="90%"
      background="lightgray"
      margin="5px"
      padding="10px"
      gap="8px">
         
      <p>{title}</p>
      <p>{body}</p>
    </FlexColumn>
  )
}
