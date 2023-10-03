import React, { FC } from 'react'
import { CommentInterface } from './types';
import { ContentWrapper } from '../shared/Common';

interface PropsInterface {
   comment: CommentInterface;
}

export const CommentItem: FC<PropsInterface> = ( {comment} ) => {

   const {name, email, body} = comment;

  return (
   <ContentWrapper flexDirection="column">
      <h3>{email}</h3>
      <h4>{name}</h4>
      <p>{body}</p>
 </ContentWrapper>
  )
}
