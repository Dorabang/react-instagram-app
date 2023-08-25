import { UserInfoProps } from '../components/Auth/AuthForm';

function getItem(key: string) {
  const value = sessionStorage.getItem(key);

  if (key === 'searchList' || key === 'user')
    return value === null ? null : JSON.parse(value);
  else return value === null ? [] : JSON.parse(value);
}

function setItem(key: string, value: string[] | UserInfoProps[]) {
  if (value === null || value === undefined) return;

  const toJson = JSON.stringify(value);

  sessionStorage.setItem(key, toJson);
}

export { getItem, setItem };
