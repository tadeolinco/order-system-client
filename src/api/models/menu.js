import options from '../options';

export const getMenus = () => {
  return fetch('/api/menus', {
    method: 'GET',
    ...options
  });
};
