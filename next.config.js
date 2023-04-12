/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "http://localhost:3000/",
      "https://nootfix-next-react.vercel.app/",
      "nootfix-next-react.vercel.app",
    ],
  },
};

module.exports = nextConfig;
