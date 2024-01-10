import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      // allow: '/',
      // We don't want our site to be indexed while we're developing it.
      disallow: '/',
    },
  }
}