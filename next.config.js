/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    async redirects() {
      return [
        {
          source: '/home',
          destination: '/',
          permanent: true,
        },
      ]
    },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "",
        },
      ],
    },
  }
