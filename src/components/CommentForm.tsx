import React, { useState } from 'react';
import getCurrentUser from 'utils/getUserInfo';
import { PostList, PostListProps } from 'constants/PostList';
import { useRecoilState } from 'recoil';
import { postState } from 'recoil/atoms';

interface CommentProps {
  nickName: string;
  message: string;
  createdAt: Date;
  like: string[];
}

const CommentForm = ({
  postId,
  updatedSetPosts,
}: {
  postId: number;
  updatedSetPosts: (value: PostListProps[]) => void;
}) => {
  const currentUser = getCurrentUser();
  const [posts, setPosts] = useRecoilState<PostListProps[]>(postState);
  const [comment, setComment] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const post = posts.find((post) => post.id === postId);
    const postIdx = posts.findIndex((post) => post.id === postId);

    const newComment: any = {
      nickName: currentUser?.nickName,
      message: comment,
      createdAt: new Date(),
      like: [],
    };

    let newComments = post?.comment.slice();
    newComments?.push(newComment);

    const updatedPost = post?.comment && {
      id: post?.id,
      nickName: post?.nickName,
      description: post?.description,
      createdAt: post?.createdAt,
      like: post?.like,
      bookmarks: post?.bookmarks,
      imageSrc: post?.imageSrc,
      comment: newComments,
    };

    const updatedPosts: any[] = [
      ...posts.slice(0, postIdx),
      updatedPost,
      ...posts.slice(postIdx + 1),
    ];

    setPosts(updatedPosts);
    setComment('');
  };

  return (
    <>
      <form onSubmit={(e) => onSubmit(e)} className='w-full flex py-1'>
        <input
          type='text'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder='댓글 달기...'
          className='flex-grow outline-none placeholder:text-gray-500 text-sm'
        />
        {comment.length !== 0 && (
          <input
            type='submit'
            value='게시'
            className='text-sky-500 mx-2 cursor-pointer text-sm font-bold'
          />
        )}
      </form>
    </>
  );
};

export default CommentForm;
