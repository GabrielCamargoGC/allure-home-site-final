import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: '1u3odbyv',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-07-25',
});