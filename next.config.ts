import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Pin the root to this project so a stray lockfile in a parent
    // directory (e.g. ~/code/yarn.lock) isn't picked up.
    root: __dirname,
  },
};

export default nextConfig;
