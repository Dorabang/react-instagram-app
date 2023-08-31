import photo1 from 'assets/post/photo1.jpg';
import photo2 from 'assets/post/photo2.jpg';
import photo3 from 'assets/post/photo3.jpg';
import photo4 from 'assets/post/photo4.jpg';
import photo5 from 'assets/post/photo5.jpg';
import photo6 from 'assets/post/photo6.jpg';
import photo7 from 'assets/post/photo7.jpg';
import photo8 from 'assets/post/photo8.jpg';
import photo9 from 'assets/post/photo9.jpg';
import photo10 from 'assets/post/photo10.jpg';

export interface PostListProps {
  id: number;
  nickName: string;
  description: string;
  createdAt: Date;
  like: string[];
  bookmarks: string[];
  imageSrc: string;
  comment: {
    nickName: string;
    message: string;
    createdAt: Date;
    like: string[];
  }[];
}

export const PostList: PostListProps[] = [
  {
    id: 0,
    nickName: 'dora_bang',
    description: '어느 세월에 다 만들지,,,',
    createdAt: new Date('2023-8-18, 01:17:00'),
    like: ['dora_bang', 'test2', 'test3', 't_est5', 'test__4'],
    bookmarks: ['dora_bang'],
    imageSrc: photo1,
    comment: [
      {
        nickName: 'test1',
        message: 'comment1',
        createdAt: new Date('2023-8-18, 13:32'),
        like: ['dora_bang', 'test2'],
      },
      {
        nickName: 'test2',
        message: 'comment2',
        createdAt: new Date('2023-8-18, 15:58'),
        like: ['dora_bang', 'test7'],
      },
    ],
  },
  {
    id: 1,
    nickName: 'test1',
    description: '테스트 중ㅎㅎ',
    createdAt: new Date('2023-8-20, 11:58'),
    like: ['test_8'],
    bookmarks: ['test3'],
    imageSrc: photo2,
    comment: [
      {
        nickName: 'test1',
        message: 'comment1',
        createdAt: new Date('2023-8-31, 15:10'),
        like: ['test_8', 'test6'],
      },
      {
        nickName: 'test6',
        message: 'comment2',
        createdAt: new Date('2023-8-31, 15:10'),
        like: ['test1', 'test__4'],
      },
      {
        nickName: 'test7',
        message: 'comment3',
        createdAt: new Date('2023-8-31, 15:10'),
        like: ['test3', 'test1'],
      },
      {
        nickName: 'test_8',
        message: 'comment4',
        createdAt: new Date('2023-8-31, 15:10'),
        like: ['test3', 'test__4'],
      },
    ],
  },
  {
    id: 2,
    nickName: 't_est5',
    description: '글자 수 더 보기 버튼이 다같이 열리지 않게 되어야 하는데..',
    createdAt: new Date('2023-8-21, 19:17'),
    like: ['test_8', 'test7', 'test8'],
    bookmarks: ['dora_bang'],
    imageSrc: photo3,
    comment: [
      {
        nickName: 'test_8',
        message: 'comment1',
        createdAt: new Date('2023-8-21, 20:48'),
        like: ['dora_bang', 'test__4'],
      },
      {
        nickName: 'test6',
        message: 'comment2',
        createdAt: new Date('2023-8-21, 20:52'),
        like: ['test7', 'test__4'],
      },
      {
        nickName: 'test2',
        message: 'comment3',
        createdAt: new Date('2023-8-22, 0:19'),
        like: ['test7', 'dora_bang'],
      },
    ],
  },
  {
    id: 3,
    nickName: 'test6',
    description: '글자 수가 많을 때 더 보기 버튼을 누를 수 있게 해야 합니다.',
    createdAt: new Date('2023-8-22, 8:7'),
    like: ['test_8', 'test7'],
    bookmarks: [],
    imageSrc: photo4,
    comment: [
      {
        nickName: 'test_8',
        message: 'comment1',
        createdAt: new Date('2023-8-31, 15:10'),
        like: ['dora_bang', 'test__4'],
      },
      {
        nickName: 'test6',
        message: 'comment2',
        createdAt: new Date('2023, 8, 31, 15, 10'),
        like: ['test7', 'test__4'],
      },
      {
        nickName: 'test2',
        message: 'comment3',
        createdAt: new Date('2023, 8, 31, 15, 10'),
        like: ['test7', 'dora_bang'],
      },
    ],
  },
  {
    id: 4,
    nickName: 'test2',
    description: '새로운 글',
    createdAt: new Date('2023-8-24, 18:31'),
    like: ['test_8', 'test7'],
    bookmarks: [],
    imageSrc: photo5,
    comment: [
      {
        nickName: 'test_8',
        message: 'comment1',
        createdAt: new Date('2023-8-24, 18:43'),
        like: ['dora_bang', 'test__4'],
      },
      {
        nickName: 'test6',
        message: 'comment2',
        createdAt: new Date('2023-8-31, 18:50'),
        like: ['test7', 'test__4'],
      },
      {
        nickName: 'test2',
        message: 'comment3',
        createdAt: new Date('2023-8-31, 21:8'),
        like: ['test7', 'dora_bang'],
      },
    ],
  },
  {
    id: 5,
    nickName: 'test5',
    description: '새로운 글',
    createdAt: new Date('2023-8-26, 10:28'),
    like: ['test_8', 'test7'],
    bookmarks: [],
    imageSrc: photo6,
    comment: [
      {
        nickName: 'test_8',
        message: 'comment1',
        createdAt: new Date('2023-8-26, 11:2'),
        like: ['dora_bang', 'test__4'],
      },
      {
        nickName: 'test6',
        message: 'comment2',
        createdAt: new Date('2023-8-26, 12:19'),
        like: ['test7', 'test__4'],
      },
      {
        nickName: 'test2',
        message: 'comment3',
        createdAt: new Date('2023-8-27, 15:10'),
        like: ['test7', 'dora_bang'],
      },
    ],
  },
  {
    id: 6,
    nickName: 'test__4',
    description: '새로운 글',
    createdAt: new Date('2023-8-27, 1:37'),
    like: ['test_8', 'test7'],
    bookmarks: [],
    imageSrc: photo7,
    comment: [
      {
        nickName: 'test_8',
        message: 'comment1',
        createdAt: new Date('2023-8-27, 2:19'),
        like: ['dora_bang', 'test__4'],
      },
      {
        nickName: 'test6',
        message: 'comment2',
        createdAt: new Date('2023-8-27, 7:6'),
        like: ['test7', 'test__4'],
      },
      {
        nickName: 'test2',
        message: 'comment3',
        createdAt: new Date('2023-8-27, 18:38'),
        like: ['test7', 'dora_bang'],
      },
    ],
  },
  {
    id: 7,
    nickName: 'test3',
    description: '새로운 글',
    createdAt: new Date('2023-8-29, 23:25'),
    like: ['test_8', 'test7'],
    bookmarks: ['dora_bang'],
    imageSrc: photo8,
    comment: [
      {
        nickName: 'test_8',
        message: 'comment1',
        createdAt: new Date('2023-8-29, 12:19'),
        like: ['dora_bang', 'test__4'],
      },
      {
        nickName: 'test6',
        message: 'comment2',
        createdAt: new Date('2023-8-29, 12:19'),
        like: ['test7', 'test__4'],
      },
      {
        nickName: 'test2',
        message: 'comment3',
        createdAt: new Date('2023-8-29, 12:19'),
        like: ['test7', 'dora_bang'],
      },
    ],
  },
  {
    id: 8,
    nickName: 'test7',
    description: '새로운 글',
    createdAt: new Date('2023-8-30, 18:15'),
    like: ['test_8', 'test7'],
    bookmarks: ['dora_bang'],
    imageSrc: photo9,
    comment: [
      {
        nickName: 'test_8',
        message: 'comment1',
        createdAt: new Date('2023-8-31, 15:10'),
        like: ['dora_bang', 'test__4'],
      },
      {
        nickName: 'test6',
        message: 'comment2',
        createdAt: new Date('2023-8-31, 15:10'),
        like: ['test7', 'test__4'],
      },
      {
        nickName: 'test2',
        message: 'comment3',
        createdAt: new Date('2023-8-31, 15:10'),
        like: ['test7', 'dora_bang'],
      },
    ],
  },
  {
    id: 9,
    nickName: 'test_8',
    description: '새로운 글',
    createdAt: new Date('2023-8-31, 15:10'),
    like: ['dora_bang', 'test_8', 'test7'],
    bookmarks: [],
    imageSrc: photo10,
    comment: [
      {
        nickName: 'test3',
        message: 'comment1',
        createdAt: new Date('2023-8-31, 15:12'),
        like: [],
      },
      {
        nickName: 'test6',
        message: 'comment1',
        createdAt: new Date('2023-8-31, 15:14'),
        like: ['test1', 'test__4'],
      },
      {
        nickName: 'test6',
        message: 'comment2',
        createdAt: new Date('2023-8-31, 16:6'),
        like: ['test3', 't_est5'],
      },
      {
        nickName: 'test2',
        message: 'comment3',
        createdAt: new Date('2023-8-31, 18:29'),
        like: ['test7', 'test3'],
      },
      {
        nickName: 't_est5',
        message: 'comment4',
        createdAt: new Date('2023-8-31, 21:52'),
        like: ['dora_bang', 'test7'],
      },
    ],
  },
];
