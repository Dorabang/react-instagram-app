function getItem(key: string) {
  const value = sessionStorage.getItem(key);

  if (key === 'searchList') return value === null ? null : JSON.parse(value);
  else return value === null ? [] : JSON.parse(value);
}

function setItem(key: string, value: string[]) {
  if (value === null || value === undefined) return;

  const toJson = JSON.stringify(value);

  sessionStorage.setItem(key, toJson);
}

export { getItem, setItem };
