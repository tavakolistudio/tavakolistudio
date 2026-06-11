import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/lib/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [75, 90, 100],
    minimumCacheTTL: 60,
  },
};

export default withNextIntl(nextConfig);
