import { client } from '@/lib/sanity';
import AboutPageContent from '@/components/AboutPageContent';

async function getAboutData() {
  const query = `*[_type == "aboutPage"][0]`; 
  const data = await client.fetch(query);
  return data;
}

export default async function SobrePage() {
  const pageData = await getAboutData();
  return (
    <AboutPageContent pageData={pageData} />
  );
}