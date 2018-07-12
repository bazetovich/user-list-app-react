import USERS from "../data/users";
import User from "../data/models/user";

const DELAY = 3000;

const fetch = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        users: JSON.parse(USERS).map(data => new User(data))
      });
    }, DELAY);
  });
};

export default fetch;
