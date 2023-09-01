import { PostList } from 'constants/PostList';
import { atom } from 'recoil';

export const navState = atom({
  key: 'navState', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const modalOpenState = atom({
  key: 'modalOpenState', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const inputState = atom({
  key: 'inputState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

export const postState = atom({
  key: 'postState', // unique ID (with respect to other atoms/selectors)
  default: PostList, // default value (aka initial value)
});
