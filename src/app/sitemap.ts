import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://purlsoflove.org";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/patterns/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/donate/`,
      lastModified: new Date(),
    },
  ];
}
