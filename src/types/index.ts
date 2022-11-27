import { Url } from 'url';

export type Experience = {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type Education = {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type Service = {
  name: string;
  description: string;
  image: string;
};

export type Work = {
  id: string;
  title: string;
  category: string;
  thumbnailUrl: string;
  description?: [
    {
      type: string;
      text: string;
      spans: string;
    }
  ];
  images: [{
    screenshot:{
      url: string;
    }
  }];
  previewUrl: string;
  featureList: string;
};

export type Post = {
  id: number;
  title: string;
  publishedAt: string;
  thumbnailUrl: string;
  imageUrl: string;
  authorName: string;
  content: string;
};

export type Review = {
  author: {
    name: string;
    imageUrl: string;
    designation: string;
    company: string;
  };
  comment: string;
};

export type ErrorMessage = {
  status: string;
  message: string;
}
