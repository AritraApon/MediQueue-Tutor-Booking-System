/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // এই ডাবল স্টার দিলেই পৃথিবীর সব ওয়েবসাইট থেকে ছবি সাপোর্ট করবে
      },
    ],
  },
};

export default nextConfig;
