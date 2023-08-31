import profile1 from '../assets/user1.jpg';
import profile2 from '../assets/user2.jpg';
import profile3 from '../assets/user3.jpg';
import profile4 from '../assets/user4.jpg';
import profile5 from '../assets/user5.jpg';

export interface UserListProps {
  nickName: string;
  userName: string;
  email: string;
  imageSrc?: string;
  description?: string;
  createdAt: Date;
}

const UserList: UserListProps[] = [
  {
    nickName: 'dora_bang',
    userName: '김ㅇㅇ',
    email: 'test0@test.com',
    description: '안녕하세요! 🙋🏻‍♀️',
    createdAt: new Date(2023, 8, 10, 18, 32),
  },
  {
    nickName: 'test1',
    userName: '이ㅇㅇ',
    email: 'test1@test.com',
    description: '테스트 중 입니다.',
    imageSrc: profile1,
    createdAt: new Date(2023, 8, 13, 4, 52),
  },
  {
    nickName: 'test2',
    userName: '고ㅇㅇ',
    email: 'test2@test.com',
    description: '🖤',
    createdAt: new Date(2023, 8, 16, 15, 43),
  },
  {
    nickName: 'test3',
    userName: '박ㅇㅇ',
    email: 'test3@test.com',
    description: '테스트 중 입니다.',
    imageSrc: profile2,
    createdAt: new Date(2023, 8, 19, 13, 25),
  },

  {
    nickName: 'test__4',
    userName: '김ㅇㅇ',
    email: 'test4@test.com',
    createdAt: new Date(2023, 8, 21, 18, 9),
  },
  {
    nickName: 't_est5',
    userName: '류ㅇㅇ',
    email: 'test5@test.com',
    description: '테스트 중 입니다.',
    imageSrc: profile3,
    createdAt: new Date(2023, 8, 24, 1, 46),
  },
  {
    nickName: 'test6',
    userName: '강ㅇㅇ',
    email: 'test6@test.com',
    imageSrc: profile4,
    createdAt: new Date(2023, 8, 25, 23, 18),
  },
  {
    nickName: 'test7',
    userName: '서ㅇㅇ',
    email: 'test7@test.com',
    description: '테스트 중 입니다.',
    createdAt: new Date(2023, 8, 26, 22, 7),
  },
  {
    nickName: 'test_8',
    userName: '송ㅇㅇ',
    email: 'test8@test.com',
    description: '테스트 중 입니다.',
    createdAt: new Date(2023, 8, 28, 8, 24),
    imageSrc: profile5,
  },
];

export default UserList;
