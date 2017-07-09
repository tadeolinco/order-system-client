import options from '../options';

export const getCustomers = () => {
  return fetch('/api/customers', {
    method: 'GET',
    ...options
  });
};
