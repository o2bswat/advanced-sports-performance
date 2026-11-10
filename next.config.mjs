/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // Caps next build's static-generation worker processes. The sandbox has 2 vCPUs, so Next's own
  // default (cores minus 1) already lands here — pinned so a larger sandbox never raises it for us.
  experimental: { cpus: 1 },
};
export default nextConfig;
