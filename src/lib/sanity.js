import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'bts2dxhz', // Provided by user
  dataset: 'production',
  apiVersion: '2024-05-26', // Use current date
  useCdn: import.meta.env.PROD, // Auto-enables global CDN cache in production for maximum speed; disables in dev for instant live reload
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};
