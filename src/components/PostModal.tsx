import React from 'react';
import { PostListProps } from 'constants/PostList';
import Modal from './Modal';
import { IoCloseOutline, IoEllipsisHorizontal } from 'react-icons/io5';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { postModalState, postState } from 'recoil/atoms';
import UserList from 'constants/UserList';
import ProfileIcon from './ProfileIcon';
import { fromNow } from 'utils/dayjs';
import { LiaHeart, LiaHeartSolid } from 'react-icons/lia';
import getCurrentUser from 'utils/getUserInfo';
import PostButton from './PostButton';

const PostModal = ({
  id,
  post,
}: {
  id: number | null;
  post?: PostListProps;
}) => {
  console.log('🚀 ~ file: PostModal.tsx:21 ~ post:', post);
  const setModalId = useSetRecoilState(postModalState);
  const postUser = UserList.find((user) => user.nickName === post?.nickName);
  const [posts, setPosts] = useRecoilState<PostListProps[]>(postState);

  /* class */
  const nickNameClass = 'font-semibold text-xs text-gray-800';
  const createdAtClass = 'text-xs text-gray-500 pt-2';
  const size = 14;
  const generalClass = 'hover:opacity-70 cursor-pointer';

  const currentUser = getCurrentUser();

  const hasCommentLikes = (commentIdx: number) => {
    const commentLikes = (commentIdx && post?.comment[commentIdx].like) || [];
    return currentUser && commentLikes.includes(currentUser?.nickName);
  };

  const toggleCommentLikes = (commentIdx: number) => {
    const postIdx = posts.findIndex((item) => item.id === id);

    let updatedCommentLikes;
    let pushed;
    let updatedComment: any;
    let updatedComments: any;
    let updatedPost: any;

    if (
      currentUser &&
      commentIdx &&
      post?.comment[commentIdx].like.includes(currentUser?.nickName)
    ) {
      updatedCommentLikes = post?.comment[commentIdx].like.filter(
        (item) => item !== currentUser?.nickName
      );
      console.log(
        '🚀 ~ file: PostModal.tsx:55 ~ toggleCommentLikes ~ updatedCommentLikes:',
        updatedCommentLikes
      );
    } else {
      updatedCommentLikes =
        currentUser && commentIdx ? post?.comment[commentIdx].like.slice() : [];

      console.log(
        '🚀 ~ file: PostModal.tsx:58 ~ toggleCommentLikes ~ updatedCommentLikes:',
        updatedCommentLikes
      );

      pushed =
        currentUser &&
        updatedCommentLikes &&
        updatedCommentLikes.push(currentUser?.nickName);
    }

    updatedComment = {
      nickName: post?.comment[commentIdx].nickName,
      message: post?.comment[commentIdx].message,
      createdAt: post?.comment[commentIdx].createdAt,
      like: updatedCommentLikes,
    };

    updatedComments = post?.comment && [
      ...post.comment.slice(0, commentIdx),
      updatedComment,
      ...post.comment.slice(commentIdx + 1),
    ];

    updatedPost = {
      id: post?.id,
      nickName: post?.nickName,
      description: post?.description,
      createdAt: post?.createdAt,
      like: post?.like,
      bookmarks: post?.bookmarks,
      imageSrc: post?.imageSrc,
      comment: updatedComments,
    };

    setPosts((currentPosts) => [
      ...currentPosts.slice(0, postIdx),
      updatedPost,
      ...currentPosts.slice(postIdx + 1),
    ]);
  };

  return (
    <div
      className='fixed top-0 left-0 z-10
      w-screen h-screen bg-black/70
      flex items-center
    '
    >
      <div className='relative w-full h-[883px] flex justify-center items-center overflow-hidden'>
        <Modal>
          <div className='flex'>
            {/* img */}
            <div className='h-[883px] max-w-[883px]'>
              <img
                src={post?.imageSrc}
                alt={`${post?.nickName}가 업로드한 사진`}
                className='w-full h-full object-cover'
              />
            </div>

            {/* post */}
            <div
              className='rounded-e-md bg-white
            max-w-[500px] min-w-[405px]
            flex
            flex-col'
            >
              {/* post > userProfile */}
              <div
                className='
                  w-full py-[14px] pl-4 pr-1
                  flex gap-2 justify-between items-center
                  border-b border-gray-200
                '
              >
                <div className='mr-1'>
                  <ProfileIcon
                    userName={postUser?.userName}
                    size='sm'
                    profile={postUser?.imageSrc}
                  />
                </div>
                <span className={`flex-grow ${nickNameClass}`}>
                  {postUser?.nickName}
                </span>
                <div className='p-2 cursor-pointer active:opacity-70'>
                  <IoEllipsisHorizontal size={18} />
                </div>
              </div>

              <div className='flex flex-col gap-2 w-full h-full py-[14px] px-4  overflow-hidden overflow-y-scroll scrollbar-hide'>
                {/* post > comments */}

                {/* post > content */}
                <div className='flex flex-row gap-2'>
                  <div className='mr-1'>
                    <ProfileIcon
                      userName={postUser?.userName}
                      size='sm'
                      profile={postUser?.imageSrc}
                    />
                  </div>

                  {post && (
                    <div>
                      <p className='text-sm'>
                        <span className={`${nickNameClass} pr-2`}>
                          {postUser?.nickName}
                        </span>
                        {post?.description}
                      </p>
                      <p className={`${createdAtClass}`}>
                        {fromNow(post?.createdAt)}
                      </p>
                    </div>
                  )}
                </div>
                <ul>
                  {post?.comment.map((comment, idx) => {
                    const commentUser = UserList.find(
                      (user) => user.nickName === comment.nickName
                    );
                    return (
                      <li key={idx} className='flex gap-2 pt-3'>
                        <ProfileIcon profile={commentUser?.imageSrc} />
                        <div className='flex-grow'>
                          <span className={`pl-1 pr-2 ${nickNameClass}`}>
                            {commentUser?.nickName}
                          </span>
                          {comment.message}
                          <p className={`${createdAtClass}`}>
                            <span className='pl-1'>
                              {fromNow(comment.createdAt)}
                            </span>
                            {comment?.like && comment?.like.length ? (
                              <span className='pl-2'>
                                좋아요 {comment?.like.length}개
                              </span>
                            ) : null}
                            <span className='cursor-pointer pl-2'>
                              답글 달기
                            </span>
                          </p>
                        </div>
                        <div>
                          <span onClick={() => toggleCommentLikes(idx)}>
                            {hasCommentLikes(idx) ? (
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
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* post > addNewComment */}
              <div className='bg-white border-t border-gray-200 w-full'>
                {post && <PostButton post={post} type='modal' />}
              </div>
            </div>
          </div>
        </Modal>
      </div>
      <div
        className='
        fixed right-[10px] top-[10px]
        w-[34px] h-[34px]
        cursor-pointer
        flex justify-center items-center
        '
        onClick={() => setModalId(null)}
      >
        <IoCloseOutline size={30} className='text-white' />
      </div>
    </div>
  );
};

export default PostModal;
