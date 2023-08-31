import { PostList, PostListProps } from 'constants/PostList';
import React, { useState } from 'react';
import ProfileIcon from './ProfileIcon';
import getCurrentUser from 'utils/getUserInfo';
import UserList from 'constants/UserList';
import { fromNow } from 'utils/dayjs';
import { LiaHeart, LiaHeartSolid } from 'react-icons/lia';
import {
  IoEllipsisHorizontal,
  IoChatbubbleOutline,
  IoBookmarkOutline,
  IoBookmark,
  IoPaperPlaneOutline,
} from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const PostCard = () => {
  const currentUser = getCurrentUser();
  const size = 28;
  const generalClass = 'hover:opacity-70 cursor-pointer';

  const [posts, setPosts] = useState<PostListProps[]>(PostList);
  const [moreId, setMoreId] = useState<number>(0);

  const moreDecr = (str: string, length: number = 25) => {
    let result = '';
    if (str.length > length) {
      result = str.substring(0, length - 2) + '...';
    } else {
      result = str;
    }
    return result;
  };

  const navigate = useNavigate();

  const hasLikesAndBookmarks = (id: number, type: string) => {
    const post = posts.find((item) => item.id === id);
    if (type === 'likes') {
      const likes = post?.like || [];
      return currentUser && likes.includes(currentUser?.nickName);
    } else if (type === 'bookmarks') {
      const bookmarks = post?.bookmarks || [];
      return currentUser && bookmarks.includes(currentUser?.nickName);
    }
  };

  const toggleBookmarks = (id: number) => {
    const post = posts.find((item) => item.id === id);
    const postIdx = posts.findIndex((item) => item.id === id);

    if (currentUser === null) {
      navigate(0);
    }

    let updatedBookmarks;
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
  };

  const toggleLikes = (id: number) => {
    const post = posts.find((item) => item.id === id);
    const postIdx = posts.findIndex((item) => item.id === id);

    if (currentUser === null) {
      navigate(0);
    }

    let updatedLikes;
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
  };

  return (
    <div className='w-full max-w-[630px]'>
      <div className='w-[470px] max-w-full overflow-y-visible'>
        <div className='flex flex-col w-full'>
          {posts
            .map((post) => {
              const postUser = UserList.find(
                (user) => user.nickName === post.nickName
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
                        <span onClick={() => toggleLikes(post.id)}>
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
                      <span onClick={() => toggleBookmarks(post.id)}>
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
                      <p className='font-bold text-sm pb-2'>
                        종아요 {post.like[post.like.length - 1]}
                        {post.like.length > 1
                          ? `님 외, ${post.like.length - 1} 개`
                          : ''}
                      </p>
                      <div className='text-sm'>
                        <span className='font-bold text-gray-700 pr-1'>
                          {post.nickName}
                        </span>
                        <span>
                          {moreId === post.id ? (
                            post.description
                          ) : (
                            <>
                              <span>{moreDecr(post.description)}</span>
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
