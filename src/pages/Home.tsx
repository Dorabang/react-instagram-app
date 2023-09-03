import React from 'react';
import PostCard from 'components/PostCard';
import RecommendUser from 'components/RecommendUser';
import PostModal from 'components/PostModal';
import { useRecoilValue } from 'recoil';
import { postModalState, postState } from 'recoil/atoms';

const Home = () => {
  const modalId = useRecoilValue(postModalState);
  const posts = useRecoilValue(postState);
  const post = posts.find((post) => post.id === modalId);

  return (
    <>
      <PostCard />
      {modalId !== null ? <PostModal id={modalId} post={post} /> : null}
      <div className='hidden xl:block pl-16'>
        <RecommendUser />
      </div>
    </>
  );
};

export default Home;
