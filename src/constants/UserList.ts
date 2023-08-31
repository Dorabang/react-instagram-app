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
  followers: string[];
}

const UserList: UserListProps[] = [
  {
    nickName: 'dora_bang',
    userName: '김ㅇㅇ',
    email: 'test0@test.com',
    description: '안녕하세요! 🙋🏻‍♀️',
    createdAt: new Date('2023-8-10, 18:32'),
    followers: [
      'test1',
      'test2',
      'test3',
      'test__4',
      't_est5',
      'test6',
      'test7',
      'test_8',
    ],
  },
  {
    nickName: 'test1',
    userName: '이ㅇㅇ',
    email: 'test1@test.com',
    description: '테스트 중 입니다.',
    imageSrc: profile1,
    createdAt: new Date('2023-8-13, 4:52'),
    followers: [],
  },
  {
    nickName: 'test2',
    userName: '고ㅇㅇ',
    email: 'test2@test.com',
    description: '🖤',
    createdAt: new Date('2023-8-16, 15:43'),
    followers: [],
  },
  {
    nickName: 'test3',
    userName: '박ㅇㅇ',
    email: 'test3@test.com',
    description: '테스트 중 입니다.',
    imageSrc: profile2,
    createdAt: new Date('2023-8-19, 13:25'),
    followers: [],
  },

  {
    nickName: 'test__4',
    userName: '김ㅇㅇ',
    email: 'test4@test.com',
    createdAt: new Date('2023-8-21, 18:9'),
    followers: [],
  },
  {
    nickName: 't_est5',
    userName: '류ㅇㅇ',
    email: 'test5@test.com',
    description: '테스트 중 입니다.',
    imageSrc: profile3,
    createdAt: new Date('2023-8-24, 1:46'),
    followers: [],
  },
  {
    nickName: 'test6',
    userName: '강ㅇㅇ',
    email: 'test6@test.com',
    imageSrc: profile4,
    createdAt: new Date('2023-8-25, 23:18'),
    followers: [],
  },
  {
    nickName: 'test7',
    userName: '서ㅇㅇ',
    email: 'test7@test.com',
    description: '테스트 중 입니다.',
    createdAt: new Date('2023-8-26, 22:7'),
    followers: [],
  },
  {
    nickName: 'test_8',
    userName: '송ㅇㅇ',
    email: 'test8@test.com',
    description: '테스트 중 입니다.',
    createdAt: new Date('2023-8-31, 8:24'),
    imageSrc: profile5,
    followers: [],
  },
  {
    nickName: 'test9',
    userName: '송ㅇㅇ',
    email: 'test9@test.com',
    description: '테스트 중 입니다.',
    createdAt: new Date('2023-8-31, 8:24'),
    imageSrc: profile2,
    followers: [],
  },
  {
    nickName: 'test10',
    userName: '송ㅇㅇ',
    email: 'test10@test.com',
    description: '테스트 중 입니다.',
    createdAt: new Date('2023-8-31, 8:24'),
    imageSrc: profile5,
    followers: [],
  },
  {
    nickName: 'test11',
    userName: '송ㅇㅇ',
    email: 'test11@test.com',
    createdAt: new Date('2023-8-31, 8:24'),
    followers: [],
  },
  {
    nickName: 'test12',
    userName: '송ㅇㅇ',
    email: 'test12@test.com',
    description: '테스트 중 입니다.',
    createdAt: new Date('2023-8-31, 8:24'),
    imageSrc: profile4,
    followers: [],
  },
  {
    nickName: 'test13',
    userName: '송ㅇㅇ',
    email: 'test13@test.com',
    description: '테스트 중 입니다.',
    createdAt: new Date('2023-8-31, 8:24'),
    followers: [],
  },
  {
    nickName: 'test14',
    userName: '송ㅇㅇ',
    email: 'test14@test.com',
    createdAt: new Date('2023-8-31, 8:24'),
    imageSrc: profile2,
    followers: [],
  },
  {
    nickName: 'test15',
    userName: '송ㅇㅇ',
    email: 'test15@test.com',
    description: '테스트 중 입니다.',
    createdAt: new Date('2023-8-31, 8:24'),
    imageSrc: profile4,
    followers: [],
  },
  {
    nickName: 'test16',
    userName: '송ㅇㅇ',
    email: 'test16@test.com',
    createdAt: new Date('2023-8-31, 8:24'),
    followers: [],
  },
  {
    nickName: 'test17',
    userName: '송ㅇㅇ',
    email: 'test17@test.com',
    createdAt: new Date('2023-8-31, 8:24'),
    followers: [],
  },
  {
    nickName: 'test18',
    userName: '송ㅇㅇ',
    email: 'test18@test.com',
    description: '테스트 중 입니다.',
    createdAt: new Date('2023-8-31, 8:24'),
    imageSrc: profile5,
    followers: [],
  },
  {
    nickName: 'test19',
    userName: '송ㅇㅇ',
    email: 'test19@test.com',
    description: '테스트 중 입니다.',
    createdAt: new Date('2023-8-31, 8:24'),
    imageSrc: profile1,
    followers: ['test2'],
  },
];

export default UserList;
