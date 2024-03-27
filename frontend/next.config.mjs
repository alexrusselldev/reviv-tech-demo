/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'effortless-blessing-dc4b98bb43.media.strapiapp.com',
      },
    ],
  },
};

export default nextConfig;
