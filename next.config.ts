import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dugrangranitos.com.br',
        pathname: '/wp-content/uploads/**', // Permite todas as imagens na pasta uploads
      },
    ],
  }
};

export default nextConfig;