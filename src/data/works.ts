import { Work, ErrorMessage } from '@/types';
import * as prismic from '@prismicio/client';

const getPrismicProjects = async () =>{
  const client = prismic.createClient('https://luan-santos-dev.prismic.io/api/v2');
  const data = await client.getAllByType('projects');  
  return data;
};

const getWorks = async (): Promise<Work[]> => {
  const response = await Promise.resolve(getPrismicProjects());
  const projects: Work[] = [];

  response.forEach((val) => {
    let projectObj = {
      id: val.id,
      title: val.data.title,
      category: val.data.category,
      thumbnailUrl: val.data.thumbnail.url,
      description: val.data.description,
      images: val.data.images,
      previewUrl: val.data.previewUrl.url,
      featureList: val.data.features,
    };
    projects.push(projectObj);
  });
  return projects;
};

export const works = getWorks().then((res) => {
  return(res);
});
