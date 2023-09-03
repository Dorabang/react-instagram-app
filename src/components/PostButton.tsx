import React, { useState } from 'react';
import CommentForm from './CommentForm';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { PostListProps } from 'constants/PostList';
import { postModalState, postState } from 'recoil/atoms';
import getCurrentUser from 'utils/getUserInfo';
import { LiaHeart, LiaHeartSolid } from 'react-icons/lia';
import {
  IoBookmark,
  IoBookmarkOutline,
  IoChatbubbleOutline,
  IoPaperPlaneOutline,
} from 'react-icons/io5';
import { fromNow } from 'utils/dayjs';

const PostButton = ({
  post,
  type,
}: {
  post: PostListProps;
  type: 'card' | 'modal';
}) => {
  const currentUser = getCurrentUser();

  const [posts, setPosts] = useRecoilState<PostListProps[]>(postState);
  const [moreId, setMoreId] = useState<number>(0);

  const setModalId = useSetRecoilState<number | null>(postModalState);

  const size = 28;
  const generalClass = 'hover:opacity-70 cursor-pointer';

  const handleReduceLetter = (str: string, length: number = 25) => {
    let result = '';
    if (str.length > length) {
      result = str.substring(0, length - 2) + '...';
    } else {
      result = str;
    }
    return result;
  };

  const hasLikesAndBookmarks = (
    id: number,
    type: 'likes' | 'bookmarks' | 'commentLikes',
    commentIdx?: number
  ) => {
    if (type === 'likes') {
      const likes = post?.like || [];
      return currentUser && likes.includes(currentUser?.nickName);
    } else if (type === 'bookmarks') {
      const bookmarks = post?.bookmarks || [];
      return currentUser && bookmarks.includes(currentUser?.nickName);
    } /* else if (type === 'commentLikes') {
      const commentLikes = (commentIdx && post?.comment[commentIdx].like) || [];
      return currentUser && commentLikes.includes(currentUser?.nickName);
    } */
  };

  const toggleLikesAndBookmarks = (
    id: number,
    type: 'likes' | 'bookmarks' | 'commentLikes',
    commentIdx?: number
  ) => {
    const post = posts.find((post) => post.id === id);
    const postIdx = posts.findIndex((item) => item.id === id);

    let updatedLikes;
    let updatedBookmarks;
    let updatedCommentLikes;
    let pushed;
    let updatedPost: any;

    if (type === 'likes') {
      if (currentUser && post?.like.includes(currentUser?.nickName)) {
        console.log('postbtn 80');
        updatedLikes = post?.like.filter(
          (item) => item !== currentUser?.nickName
        );
      } else {
        updatedLikes = currentUser && post?.like.slice();

        pushed =
          currentUser &&
          updatedLikes &&
          updatedLikes?.push(currentUser?.nickName);
        /*         currentUser &&
          updatedLikes &&
          updatedLikes?.unshift(currentUser?.nickName); */
      }

      updatedPost = {
        id: post?.id,
        nickName: post?.nickName,
        description: post?.description,
        createdAt: post?.createdAt,
        like: updatedLikes,
        bookmarks: post?.bookmarks,
        imageSrc: post?.imageSrc,
        comment: post?.comment,
      };
    }

    if (type === 'bookmarks') {
      if (currentUser && post?.bookmarks.includes(currentUser?.nickName)) {
        updatedBookmarks = post?.like.filter(
          (item) => item !== currentUser?.nickName
        );
      } else {
        updatedBookmarks = currentUser && post?.like.slice();
        pushed =
          currentUser &&
          updatedBookmarks &&
          updatedBookmarks.push(currentUser?.nickName);
      }

      updatedPost = {
        id: post?.id,
        nickName: post?.nickName,
        description: post?.description,
        createdAt: post?.createdAt,
        like: post?.like,
        bookmarks: updatedBookmarks,
        imageSrc: post?.imageSrc,
        comment: post?.comment,
      };
    }

    setPosts((currentPosts) => [
      ...currentPosts.slice(0, postIdx),
      updatedPost,
      ...currentPosts.slice(postIdx + 1),
    ]);
  };

  return (
    <div>
      <div
        className={`flex justify-between
          ${type === 'modal' ? 'py-[14px] px-4 pr-2' : 'pb-2'}
          `}
      >
        <div className='flex gap-2'>
          <span onClick={() => toggleLikesAndBookmarks(post.id, 'likes')}>
            {hasLikesAndBookmarks(post.id, 'likes') ? (
              <LiaHeartSolid
                size={size}
                className={`${generalClass} text-rose-500`}
              />
            ) : (
              <LiaHeart size={size} className={`${generalClass}`} />
            )}
          </span>
          <IoChatbubbleOutline
            size={size}
            className={`${generalClass} -scale-x-100`}
            onClick={() => setModalId(post.id)}
          />
          <IoPaperPlaneOutline size={size} className={`${generalClass}`} />
        </div>
        <span onClick={() => toggleLikesAndBookmarks(post.id, 'bookmarks')}>
          {hasLikesAndBookmarks(post.id, 'bookmarks') ? (
            <IoBookmark size={size} className={`${generalClass}`} />
          ) : (
            <IoBookmarkOutline size={size} className={`${generalClass}`} />
          )}
        </span>
      </div>

      {/* 게시물 정보 */}
      <div className={`${type === 'modal' ? 'pb-[14px] px-4 pr-2' : ''}`}>
        {post.like && (
          <p className='font-bold text-sm pb-2'>
            종아요 {post.like[post.like.length - 1]}
            {post.like.length > 1 ? `님 외, ${post.like.length - 1} 개` : ''}
          </p>
        )}

        {type === 'card' ? (
          <>
            <div className='text-sm'>
              <span className='font-bold text-gray-700 pr-1'>
                {post.nickName}
              </span>
              <span>
                {moreId === post.id ? (
                  post.description
                ) : (
                  <>
                    <span>{handleReduceLetter(post.description)}</span>
                    {post.description.length >= 25 && (
                      <p
                        className='text-gray-500 cursor-pointer'
                        onClick={() => setMoreId(post.id)}
                      >
                        더 보기
                      </p>
                    )}
                  </>
                )}
              </span>
            </div>
            {post.comment.length !== 0 && (
              <p
                className='cursor-pointer text-sm text-gray-500 py-1 active:opacity-70'
                onClick={() => setModalId(post.id)}
              >
                댓글 {post.comment.length} 개 모두 보기
              </p>
            )}
          </>
        ) : (
          <p className='text-xs text-gray-500'>{fromNow(post.createdAt)}</p>
        )}

        {/*  {comment && (
        <div className='cursor-pointer text-sm text-black py-1 flex'>
          <p className='flex-grow'>
            <span className='font-bold'>
              {comment?.nickName}{' '}
            </span>
            {comment && comment?.message}
          </p>
          <span
            onClick={() =>
              toggleLikesAndBookmarks(
                post.id,
                'commentLikes',
                commentIdx
              )
            }
          >
            {hasLikesAndBookmarks(
              post.id,
              'commentLikes',
              commentIdx
            ) ? (
              <LiaHeartSolid
                size={14}
                className={`${generalClass} text-rose-500`}
              />
            ) : (
              <LiaHeart
                size={14}
                className={`${generalClass}`}
              />
            )}
          </span>
        </div>
      )} */}
      </div>
      <div
        className={`
          ${type === 'modal' ? 'border-t border-gray-200' : ''}
          ${type === 'modal' ? 'py-[14px] px-4 pr-2' : ''}
          `}
      >
        <CommentForm postId={post.id} />
      </div>
    </div>
  );
};

export default PostButton;
