import Portfolio from '@/components/shared/Portfolio';
import SectionTitle from '@/components/shared/SectionTitle';
import { works } from '@/data/works';
import { Work } from '@/types';
import Link from 'next/link';
import { useEffect, useState } from 'react';


const RecentWorkSection = () => {
  
  
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState<Work[]>([]);

  useEffect(() => {

    works.then((res) => {
      setProjects(res);
    });
    
    setIsLoading(false);
  },[]);

  if(isLoading){
    
    return(
      <>
        Loading...
      </>
    );
  }

  return (
    <>
      <SectionTitle>Recent Works</SectionTitle>
      <div className="mt-10 grid gap-4 xs:grid-cols-2 md:grid-cols-3 md:gap-8">
        {
          projects ?
            projects.filter((_, index) => index < 6).map((work) => (
              <Portfolio
                key={work.id}
                imageUrl={work.thumbnailUrl}
                category={work.category}
                title={work.title}
                href={`/works/${work.id}`}
              />
            ))
            :
            <>
              <span>Carregando projetos...</span>
            </>
        }
      </div>

      <div className="mt-10 flex justify-center">
        <Link href={'/works'}>
          <a className="btn">View All</a>
        </Link>
      </div>
    </>
  );
};

export default RecentWorkSection;
