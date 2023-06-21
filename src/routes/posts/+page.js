import { fakeData } from '../../lib/fake_db';

/** @type {import('./$types').PageLoad} */

export function load() {
  return {
    posts: fakeData,
  };
}
