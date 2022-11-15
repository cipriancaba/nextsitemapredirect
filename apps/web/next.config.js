/** @type {import('next').NextConfig} */


module.exports = {
  reactStrictMode: true,
  swcMinify: true,

  experimental: {
    transpilePackages: ["@7879/ui"],
    appDir: true,
  },
};
