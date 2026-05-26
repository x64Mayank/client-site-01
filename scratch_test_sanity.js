import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: 'bts2dxhz',
  dataset: 'production',
  apiVersion: '2024-05-26',
  useCdn: false,
});

const builder = imageUrlBuilder(client);
const urlFor = (source) => builder.image(source);

async function run() {
  try {
    const query = `*[_type == "project"] | order(_createdAt asc) {
      _id,
      title,
      fullCategory,
      location,
      year,
      status,
      images
    }`;
    const sanityProjects = await client.fetch(query);
    const formatted = sanityProjects.map(proj => ({
      title: proj.title,
      img: proj.images && proj.images[0] ? urlFor(proj.images[0]).url() : 'NO IMG',
      images: proj.images ? proj.images.map(img => urlFor(img).url()) : 'NO IMGS',
    }));
    console.log("FORMATTED IMAGES:", JSON.stringify(formatted, null, 2));
  } catch (err) {
    console.error("ERROR:", err);
  }
}

run();
