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
      "https://clone-netf-react-next.vercel.app/",
      "clone-netf-react-next.vercel.app",
    ],
  },
};

module.exports = nextConfig;
