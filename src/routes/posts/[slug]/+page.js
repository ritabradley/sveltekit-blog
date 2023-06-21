import { fakeData } from '../../../lib/fake_db';

/** @type {import('./$types').PageLoad} */

export function load({ params }) {
  const routeSlug = params.slug;
  const getSinglePost = fakeData.filter((post) => post.slug === routeSlug);

  return {
    post: getSinglePost[0],
  };
}
