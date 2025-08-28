import createMDX from '@next/mdx';

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const config = {
  pageExtensions: ['tsx', 'mdx'],
  images: { formats: ['image/avif', 'image/webp'] },
  reactStrictMode: true,
  output: 'export'
};

export default withMDX(config);
