import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PostListProps } from 'constants/PostList';
import ProfileIcon from './ProfileIcon';
import getCurrentUser from 'utils/getUserInfo';
import UserList from 'constants/UserList';
import { fromNow } from 'utils/dayjs';
import CommentForm from 'components/CommentForm';
import { useRecoilState } from 'recoil';
import { postState } from 'recoil/atoms';

/* icon */
import { LiaHeart, LiaHeartSolid } from 'react-icons/lia';
import {
  IoEllipsisHorizontal,
  IoChatbubbleOutline,
  IoBookmarkOutline,
  IoBookmark,
  IoPaperPlaneOutline,
} from 'react-icons/io5';

const PostCard = () => {
  const currentUser = getCurrentUser();
  const size = 28;
  const generalClass = 'hover:opacity-70 cursor-pointer';

  const [posts, setPosts] = useRecoilState<PostListProps[]>(postState);
  const [moreId, setMoreId] = useState<number>(0);

  const navigate = useNavigate();

  const updatedSetPosts = (value: PostListProps[]) => {
    setPosts(value);
  };

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
    type: string,
    commentIdx?: number
  ) => {
    const post = posts.find((item) => item.id === id);
    if (type === 'likes') {
      const likes = post?.like || [];
      return currentUser && likes.includes(currentUser?.nickName);
    } else if (type === 'bookmarks') {
      const bookmarks = post?.bookmarks || [];
      return currentUser && bookmarks.includes(currentUser?.nickName);
    } else if (type === 'commentLikes') {
      const commentLikes = (commentIdx && post?.comment[commentIdx].like) || [];
      return currentUser && commentLikes.includes(currentUser?.nickName);
    }
  };

  const toggleLikesAndBookmarks = (
    id: number,
    type?: string,
    commentIdx?: number
  ) => {
    const post = posts.find((item) => item.id === id);
    const postIdx = posts.findIndex((item) => item.id === id);

    if (currentUser === null) {
      navigate(0);
    }

    let updatedBookmarks;
    let updatedLikes;
    let updatedCommentLikes;
    let updatedPost: any;

    if (type === 'likes') {
      if (currentUser && post?.like.includes(currentUser?.nickName)) {
        updatedLikes = post?.like.filter(
          (item) => item !== currentUser?.nickName
        );

        post.like = updatedLikes;
      } else {
        updatedLikes = currentUser && post?.like.push(currentUser?.nickName);
      }

      const modifyPosts: any[] = [
        ...posts.slice(0, postIdx),
        post,
        ...posts.slice(postIdx + 1),
      ];

      setPosts(modifyPosts);
    } else if (type === 'bookmarks') {
      if (currentUser && post?.bookmarks.includes(currentUser?.nickName)) {
        updatedBookmarks = post?.like.filter(
          (item) => item !== currentUser?.nickName
        );

        post.bookmarks = updatedBookmarks;
      } else {
        updatedBookmarks =
          currentUser && post?.bookmarks.push(currentUser?.nickName);
      }

      const modifyPosts: any[] = [
        ...posts.slice(0, postIdx),
        post,
        ...posts.slice(postIdx + 1),
      ];

      setPosts(modifyPosts);
    } else if (type === 'commentLikes') {
      if (
        currentUser &&
        commentIdx &&
        post?.comment[commentIdx].like.includes(currentUser?.nickName)
      ) {
        updatedCommentLikes = post?.comment[commentIdx].like.filter(
          (item) => item !== currentUser?.nickName
        );

        post.comment[commentIdx].like = updatedCommentLikes;
      } else {
        console.log('tlqkf');
        if (currentUser && commentIdx) {
          updatedCommentLikes = commentIdx
            ? post?.comment[commentIdx].like.slice()
            : undefined;

          console.log(
            '🚀 ~ file: PostCard.tsx:134 ~ PostCard ~ newCommentLike:',
            updatedCommentLikes
          );
        }
        currentUser &&
          updatedCommentLikes &&
          updatedCommentLikes?.push(currentUser?.nickName);

        updatedPost = {
          id: post?.id,
          nickName: post?.nickName,
          description: post?.description,
          createdAt: post?.createdAt,
          like: post?.like,
          bookmarks: post?.bookmarks,
          imageSrc: post?.imageSrc,
          comment: updatedCommentLikes,
        };
      }

      setPosts((currentPosts) => [
        ...currentPosts.slice(0, postIdx),
        updatedPost,
        ...currentPosts.slice(postIdx + 1),
      ]);
    }
  };

  return (
    <div className='w-full max-w-[630px] flex justify-center'>
      <div className='w-[470px] max-w-full overflow-y-visible'>
        <div className='flex flex-col w-full'>
          {posts
            .map((post) => {
              const postUser = UserList.find(
                (user) => user.nickName === post.nickName
              );

              const comment = post?.comment.find(
                (post) => post.nickName === currentUser?.nickName
              );

              const commentIdx = post?.comment.findIndex(
                (post) => post.nickName === currentUser?.nickName
              );

              return (
                <article
                  className='w-full flex flex-col gap-2 border-b py-5 border-gray-200'
                  key={post.id}
                >
                  {/* UserInfo */}
                  <div className='flex gap-2 w-full justify-between items-center'>
                    <div className='mr-2'>
                      <ProfileIcon
                        userName={post.nickName}
                        size={true}
                        profile={postUser?.imageSrc}
                      />
                    </div>
                    <p className='flex-grow'>
                      {post.nickName}
                      <span className='text-gray-500 text-sm'>
                        {' '}
                        · {fromNow(post.createdAt)}
                      </span>
                    </p>
                    <div className='p-2 cursor-pointer active:opacity-70'>
                      <IoEllipsisHorizontal size={18} />
                    </div>
                  </div>

                  {/* photo */}
                  <div className='border border-gray-200 rounded-md overflow-hidden'>
                    <img
                      src={post.imageSrc}
                      alt={`${post.nickName}가 게시한 사진`}
                      className='w-full object-cover'
                    />
                  </div>

                  {/* Buttons */}
                  <div>
                    <div className='flex justify-between pb-2'>
                      <div className='flex gap-2'>
                        <span
                          onClick={() =>
                            toggleLikesAndBookmarks(post.id, 'likes')
                          }
                        >
                          {hasLikesAndBookmarks(post.id, 'likes') ? (
                            <LiaHeartSolid
                              size={size}
                              className={`${generalClass} text-rose-500`}
                            />
                          ) : (
                            <LiaHeart
                              size={size}
                              className={`${generalClass}`}
                            />
                          )}
                        </span>
                        <IoChatbubbleOutline
                          size={size}
                          className={`${generalClass} -scale-x-100`}
                        />
                        <IoPaperPlaneOutline
                          size={size}
                          className={`${generalClass}`}
                        />
                      </div>
                      <span
                        onClick={() =>
                          toggleLikesAndBookmarks(post.id, 'bookmarks')
                        }
                      >
                        {hasLikesAndBookmarks(post.id, 'bookmarks') ? (
                          <IoBookmark
                            size={size}
                            className={`${generalClass}`}
                          />
                        ) : (
                          <IoBookmarkOutline
                            size={size}
                            className={`${generalClass}`}
                          />
                        )}
                      </span>
                    </div>

                    {/* 게시물 정보 */}
                    <div>
                      {post.like.length !== 0 && (
                        <p className='font-bold text-sm pb-2'>
                          종아요 {post.like[post.like.length - 1]}
                          {post.like.length > 1
                            ? `님 외, ${post.like.length - 1} 개`
                            : ''}
                        </p>
                      )}
                      <div className='text-sm'>
                        <span className='font-bold text-gray-700 pr-1'>
                          {post.nickName}
                        </span>
                        <span>
                          {moreId === post.id ? (
                            post.description
                          ) : (
                            <>
                              <span>
                                {handleReduceLetter(post.description)}
                              </span>
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
                        <p className='cursor-pointer text-sm text-gray-500 py-1'>
                          댓글 {post.comment.length} 개 모두 보기
                        </p>
                      )}
                      {comment && (
                        <div className='cursor-pointer text-sm text-black py-1 flex'>
                          <p className='flex-grow'>
                            <span className='font-bold'>
                              {comment.nickName}{' '}
                            </span>
                            {comment.message}
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
                      )}
                      <CommentForm
                        postId={post.id}
                        updatedSetPosts={updatedSetPosts}
                      />
                    </div>
                  </div>
                </article>
              );
            })
            .reverse()}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
