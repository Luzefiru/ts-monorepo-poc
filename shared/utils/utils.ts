import { default as externalSlugify } from '@sindresorhus/slugify';
import { User } from 'types/User';

export function printUser(user: User) {
  console.log(
    `Good day, ${user.username}. I hacked your password and it is: ${user.password}`
  );
}

export function slugify(str: string) {
  return externalSlugify(str);
}
