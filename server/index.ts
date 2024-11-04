import { slugify, printUser } from '~/shared/utils/utils';

/* Shared type and utility functions */

console.log(
  slugify('I AM SPACED OUT TEXT TO BE SLUGIFIED USING A SHARED NPM UTILITY!')
);

const user = {
  username: 'Ian',
  password: 'letmein',
};
printUser(user);
