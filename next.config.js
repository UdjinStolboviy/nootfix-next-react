/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
      "https://res.cloudinary.com",
      "http://localhost:3000/",
      "https://nootfix-next-react.vercel.app/",
      "nootfix-next-react.vercel.app",
    ],
  },
};

module.exports = nextConfig;
