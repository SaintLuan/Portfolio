import { works } from '@/data/works';
import AppLayout from '@/layouts/AppLayout';
import { Work } from '@/types';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Slider, { Settings } from 'react-slick';

const settings: Settings = {
  dots: true,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  arrows: true,
  fade: true,
};

type Props = {
  work: Work & {
    description: string;
    images: string[];
    publishedAt: string;
    previewUrl: string;
  };
};

const WorkDetail: React.FunctionComponent<Props> = ({ work }) => {
  console.log(work);
  return (
    <AppLayout title={work.title}>
      <div className="container">
        <div className="mt-24 flex flex-col items-center justify-center">
          <h1 className="text-center text-2xl font-semibold sm:text-3xl md:text-4xl">{work.title}</h1>
          <p className="mt-4 flex items-center text-gray-400">
            <span>{work.category}</span>
            {/* <span className="mx-2 h-1.5 w-1.5 rounded-full bg-primary-500"></span>
            <span>{work.publishedAt}</span> */}
          </p>
        </div>
        <div className="my-10">
          <h3 className="text-xl font-semibold">Summary</h3>

          <article className="mt-4">
            {
              work.description.map((description) => (
                description.type === 'paragraph' ?
                  <p key={description.text}>
                    {description.text}
                  </p>
                  :
                  <>
                    {description.text}
                  </>
                
              ))
            }
          </article>
          
          {/* <p className="mt-4">
            
          </p> */}
          
        </div>

        <div className="mt-10">
          <Slider {...settings}>
            {work.images.map((image, index) => (
              <div className="overflow-hidden rounded-xl" key={index}>
                <Image src={image.screenshot.url} height={400} width={750} layout="responsive" alt={work.title} />
              </div>
            ))}
          </Slider>
          <div className="mt-6 flex justify-center">
            <Link href={work.previewUrl} target="_blank">
              <a className="btn">Live Preview</a>
            </Link>
          </div>
        </div>

        

        

        <div className="mb-10 flex h-48 flex-col items-center justify-center">
          <h2 className="text-4xl font-semibold">Want to Build a project like this?</h2>
          <p className="mt-4">I can design and develop beautiful websites, apps for you</p>
          <Link href="/contact">
            <a className="mt-5 rounded-full bg-primary-500 px-8 py-2 font-semibold tracking-wide text-white hover:bg-primary-600 focus:ring-2 focus:ring-primary-200">
              Start a project
            </a>
          </Link>
        </div>
      </div>
    </AppLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id as string;
  const work = await works.then((res) => {
    return res.find((work) => work.id === id);
  });

  if (work) {
    return {
      props: {
        work,
      },
    };
  }
  return {
    notFound: true,
  };
};
export default WorkDetail;
