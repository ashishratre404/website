import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // Silence workspace root inference warning when multiple lockfiles exist
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
