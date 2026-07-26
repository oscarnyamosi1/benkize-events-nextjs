// lib/posts.js

const posts = [
  {
    slug: "how-to-cook-eggs",
    title: "How to Cook Eggs",
    content: "Eggs are versatile..."
  },
  {
    slug: "best-fried-rice",
    title: "Best Fried Rice",
    content: "Here's how..."
  }
];

export async function getPostBySlug(slug) {
  return posts.find(post => post.slug === slug);
}