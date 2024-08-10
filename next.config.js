/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com'
      },
      {
        protocol: 'https',
        hostname: '*.public.blob.vercel-storage.com'
      },
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com'
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co'
      },
    ]
  }
};

module.exports = nextConfig;