import { createClient } from '@sanity/client';
import { env } from '$env/dynamic/private';

function sanityClient() {
  const config = {
    projectId: env.SANITY_PROJECT_ID,
    dataset: env.SANITY_PROJECT_DATASET,
    apiVersion: '2021-10-21',
  };
  return createClient({ ...config });
}

export const getAllPosts = async () => {
  const client = sanityClient();
  const allPostsQuery = '*[_type == "post"]{title, "slug": slug.current, "date": publishedAt}';
  const allPosts = await client.fetch(allPostsQuery);
  return allPosts;
};
