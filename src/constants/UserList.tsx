import profile1 from '../assets/user1.jpg';
import profile2 from '../assets/user2.jpg';
import profile3 from '../assets/user3.jpg';
import profile4 from '../assets/user4.jpg';
import profile5 from '../assets/user5.jpg';

interface UserListProps {
  nickName: string;
  userName: string;
  email: string;
  imageSrc?: string;
  description?: string;
}

const UserList: UserListProps[] = [
  {
    nickName: 'dora_bang',
    userName: '김ㅇㅇ',
    email: 'test@test.com',
    description: '안녕하세요! 🙋🏻‍♀️',
  },
  {
    nickName: 'test1',
    userName: '이ㅇㅇ',
    email: 'test1@test.com',
    description: '테스트 중 입니다.',
    imageSrc: profile1,
  },
  {
    nickName: 'test2',
    userName: '고ㅇㅇ',
    email: 'test2@test.com',
    description: '🖤',
  },
  {
    nickName: 'test3',
    userName: '박ㅇㅇ',
    email: 'test3@test.com',
    description: '테스트 중 입니다.',
    imageSrc: profile2,
  },
  { nickName: 'test__4', userName: '김ㅇㅇ', email: 'test4@test.com' },
  {
    nickName: 't_est5',
    userName: '류ㅇㅇ',
    email: 'test5@test.com',
    description: '테스트 중 입니다.',
    imageSrc: profile3,
  },
  {
    nickName: 'test6',
    userName: '강ㅇㅇ',
    email: 'test6@test.com',
    imageSrc: profile4,
  },
  {
    nickName: 'test8',
    userName: '서ㅇㅇ',
    email: 'test7@test.com',
    description: '테스트 중 입니다.',
  },
  {
    nickName: 'test_9',
    userName: '송ㅇㅇ',
    email: 'test8@test.com',
    description: '테스트 중 입니다.',
    imageSrc: profile5,
  },
];

export default UserList;
