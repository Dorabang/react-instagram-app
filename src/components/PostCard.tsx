import React from 'react';

import { PostList, PostListProps } from 'constants/PostList';
import ProfileIcon from './ProfileIcon';
import UserList from 'constants/UserList';
import { fromNow } from 'utils/dayjs';
import { useRecoilValue } from 'recoil';
import { postState } from 'recoil/atoms';
import PostButton from './PostButton';

/* icon */
import { IoEllipsisHorizontal } from 'react-icons/io5';

const PostCard = () => {
  const posts = useRecoilValue<PostListProps[]>(postState);

  return (
    <div className='w-full max-w-[630px] flex justify-center'>
      <div className='w-[470px] max-w-full overflow-y-visible'>
        <div className='flex flex-col w-full'>
          {posts
            .map((post) => {
              const postUser = UserList.find(
                (user) => user.nickName === post.nickName
              );

              const newComment = PostList.find(
                (item) => post.comment !== item.comment
              );

              return (
                <article
                  className='w-full flex flex-col gap-2 border-b py-5 border-gray-200'
                  key={post.id}
                >
                  {/* UserInfo */}
                  <div className='flex gap-2 w-full justify-between items-center'>
                    <div className='mr-1'>
                      <ProfileIcon
                        userName={post.nickName}
                        size='sm'
                        profile={postUser?.imageSrc}
                      />
                    </div>
                    <p className='flex-grow font-semibold text-gray-800 text-sm'>
                      {post.nickName}
                      <span className='text-gray-500 text-sm font-normal'>
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
                  <PostButton post={post} type='card' />
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
