import createMDX from '@next/mdx';

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
const config = {
  pageExtensions: ['tsx', 'mdx'],
  images: { formats: ['image/avif', 'image/webp'] },
  reactStrictMode: true,
  output: 'export',                 // on exporte statique
  eslint: { ignoreDuringBuilds: true },     // <-- ne bloque pas sur ESLint
  typescript: { ignoreBuildErrors: true },  // <-- ne bloque pas sur TS
};

export default withMDX(config);

