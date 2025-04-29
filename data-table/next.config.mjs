/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      new URL(
        "https://cdn.prod.website-files.com/66df39e52e08c9b81c286f7c/66e1d4939fc69d24fbf0fc7b_Gaana.png"
      ),
    ],
  },
  transpilePackages: [
    "antd",
    "rc-util",
    "@babel/runtime",
    "@ant-design/icons",
    "@ant-design/icons-svg",
    "rc-pagination",
    "rc-picker",
    "rc-tree",
    "rc-table",
    "rc-input",
    "@ant-design",
    "rc-notification",
    "rc-tooltip",
  ],
};

export default nextConfig;
