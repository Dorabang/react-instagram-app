import React from 'react';
import PostCard from 'components/PostCard';
import RecommendUser from 'components/RecommendUser';

const Home = () => {
  return (
    <>
      <PostCard />
      <div>
        <RecommendUser />
      </div>
    </>
  );
};

export default Home;
