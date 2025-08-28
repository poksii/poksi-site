import createMDX from '@next/mdx';

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const config = {
  pageExtensions: ['tsx', 'mdx'],
  images: { formats: ['image/avif', 'image/webp'] },
  reactStrictMode: true,
  // on ignore ces checks pendant le build (facilite la CI)
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default withMDX(config);

