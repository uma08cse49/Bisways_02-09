
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
     basePath: '/bisways',
     assetPrefix: '/bisways',         // 👈 ensures assets like JS/CSS load properly
     trailingSlash: true
   }
   
   module.exports = nextConfig