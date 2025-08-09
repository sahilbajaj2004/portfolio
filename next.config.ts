import type { NextConfig } from 'next';
import withPWA from 'next-pwa';

const isDev = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
  /* your other Next.js config options */
};

export default withPWA({
  dest: 'public',
  disable: isDev,
})(nextConfig);
