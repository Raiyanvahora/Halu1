/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Local placeholder images live in /public/images. No remote domains needed.
    formats: ["image/webp"],
  },
};

export default nextConfig;
