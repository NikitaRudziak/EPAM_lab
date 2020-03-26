import { mockedResponse } from './mockedResponse';

export const apiCall = () => (
  new Promise((resolve) => {
    setTimeout(() => resolve(mockedResponse), 2000);
  })
);
