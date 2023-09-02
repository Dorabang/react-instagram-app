import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <h2 className='text-2xl font-bold'>
        죄송합니다. 페이지를 사용할 수 없습니다.
      </h2>
      <p>
        클릭하신 링크가 잘못되었거나 페이지가 삭제되었습니다.{' '}
        <Link to='/' className='text-sky-800'>
          Instagram으로 돌아가기.
        </Link>
      </p>
    </div>
  );
};

export default ErrorPage;
