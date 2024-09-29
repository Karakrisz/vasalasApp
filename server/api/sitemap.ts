interface Post {
  id: number
  slug: string
  modifiedAt?: string
}

export default defineSitemapEventHandler(async (e) => {
  try {
    // Fetch posts from the API
    const response = await fetch('http://127.0.0.1:8000/json-posts')

    // Check if the response is okay
    if (!response.ok) {
      throw new Error('Failed to fetch posts')
    }

    // Parse the response as JSON
    const posts: Post[] = await response.json()

    // Map the posts to the sitemap format
    return posts.map((post: Post) => {
      return {
        loc: `/posts/${post.slug}`,
        lastmod: post.modifiedAt ? new Date(post.modifiedAt) : new Date(), // Adjust this field based on the API response
      }
    })
  } catch (error) {
    console.error('Error fetching posts for sitemap:', error)
    return [] // Return an empty array if there's an error
  }
})
