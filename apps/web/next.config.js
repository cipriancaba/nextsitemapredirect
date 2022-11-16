/** @type {import('next').NextConfig} */


module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  experimental: {
    transpilePackages: ["@7879/ui"],
    appDir: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};
