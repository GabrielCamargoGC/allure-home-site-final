import { client } from '../lib/sanity';
import ProjectGridClient from './ProjectGridClient';

async function getProjects() {
  const query = `*[_type == "project"] | order(_createdAt desc){
    _id,
    title,
    "imageUrl": mainImage.asset->url
  }`;
  const projects = await client.fetch(query);
  return projects;
}

export default async function ProjectGrid() {
  const projects = await getProjects();

  return <ProjectGridClient projects={projects} />;
}