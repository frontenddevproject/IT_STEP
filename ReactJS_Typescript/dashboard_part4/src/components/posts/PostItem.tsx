import React, {
  FC,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from "react";
import { DashboardPostsInterface } from "./types";
import { FlexColumn, FlexRow } from "../shared/flex";
import { ContentWrapper } from "../shared/Common";
import { useFetchData } from "../../hooks/useFetchData";
import { DashboardUserInterface } from "../users/types";
import { RxAvatar } from "react-icons/rx";
import { FaRegCommentDots } from "react-icons/fa";
import { CommentInterface } from "../comments/types";

interface PropsInterface {
  post: DashboardPostsInterface;
}

export const PostItem: FC<PropsInterface> = ({ post }) => {
  const options = useMemo(() => ({ method: "GET" }), []);
  const { userId, id, title, body } = post;
  const [isShowComments, setIsShowComments] = useState<boolean>(false);
  const { data, isLoading } = useFetchData<DashboardUserInterface>(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    options
  );

  const { data: comments, isLoading: isCommentsLoading } = useFetchData<
    CommentInterface[]
  >(`https://jsonplaceholder.typicode.com/comments?postId=${id}`, options);

  const onShowCommentsToggle = useCallback(() => {
    setIsShowComments(!isShowComments);
  }, [isShowComments]);

  return (
    <ContentWrapper flexDirection="column" alignItems="flex-start">
      <FlexRow
        alignItems="center"
        gap="10px"
        height="20px"
        margin="10px 0 25px 0"
      >
        <RxAvatar size={30} />
        <h4>{data?.username}</h4>
        <span>{data?.email}</span>
      </FlexRow>
      <h3>{title.toUpperCase()}</h3>
      <p>{body}</p>

      <button onClick={() => onShowCommentsToggle()}>
        {isShowComments ? "Hide" : "Show"} comments
      </button>

      {isShowComments && (
        <FlexColumn width="100%" margin="10px">
          {comments?.map(({ name, body }, i) => (
            <ContentWrapper
              key={`${name}-${i}`}
              flexDirection="row"
              alignItems="center"
              gap="10px"
              margin="5px"
              background="#acacac !important"
            >
              <FaRegCommentDots size={30} />
              <h4>{name}</h4>
              <p>{body}</p>
            </ContentWrapper>
          ))}
        </FlexColumn>
      )}
    </ContentWrapper>
  );
};
