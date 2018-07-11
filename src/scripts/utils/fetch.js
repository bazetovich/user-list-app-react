import USERS from "../data/users";

const DELAY = 3000;

const fetch = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        users: JSON.parse(USERS)
      });
    }, DELAY);
  });
};

export default fetch;
