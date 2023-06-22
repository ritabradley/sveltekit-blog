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

export const getPostBySlug = async (
  /** @type {string} */
  slug
) => {
  const client = sanityClient();
  const postQuery =
    '*[_type == "post" && slug.current == $slug]{title, "slug": slug.current, author->{ name }, "date": publishedAt, "content": body}';
  const post = await client.fetch(postQuery, { slug });
  return post;
};
