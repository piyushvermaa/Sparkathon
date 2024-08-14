/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'links.papareact.com',
          },
          {
            protocol: 'https',
            hostname: 'i.imgur.com',
          },
          {
            protocol: 'https',
            hostname: 'i5.walmartimages.com',
          },
          {
            protocol: 'http',
            hostname: 'tinyurl.com',
          },
        ],
        domains: ['images.unsplash.com', 'i.ibb.co', 'images.app.goo.gl','scontent.fmaa8-1.fna.fbcdn.net','encrypted-tbn0.gstatic.com','assets.petco.com','www.cio.com','warrantyvalet.com'],
    },
};

export default nextConfig;