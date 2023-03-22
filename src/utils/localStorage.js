export const getLocalStorage = (key) => localStorage.getItem(key);

export const getLocalStorageJson = (key) => {
  const data = localStorage.getItem(key);
  return data !== 'undefined' || data ? JSON.parse(data) : data;
};

export const setLocalStorage = (key, val) => {
  localStorage.setItem(key, val);
};

export const removeLocalStorage = (key) => {
  localStorage.removeItem(key);
};

export const setLocalStorageJson = (key, val) => {
  localStorage.setItem(key, JSON.stringify(val));
};