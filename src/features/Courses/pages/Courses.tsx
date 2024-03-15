import { useMemo, useState } from 'react';
import { useGetCoursesQuery } from '../../../rtk/api/courses';
import { CourseCard, SidebarTags } from '../components';

import './style.scss';

export const Courses = () => {
  const { data, isLoading, isError } = useGetCoursesQuery();
  const [currentTag, setCurrentTag] = useState('Все темы');
  const tags = Array.from(new Set(data?.map((course) => course.tags).flat()));
  const filteredData = useMemo(() => {
    if (currentTag === 'Все темы') return data;
    return data?.filter((course) => course.tags.includes(currentTag));
  }, [currentTag, data]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div className='pageContainer'>
      <SidebarTags
        tags={['Все темы', ...tags]}
        onTagClick={setCurrentTag}
        currentTag={currentTag}
      />
      <div className='coursesContainer'>
        {filteredData?.map((course) => (
          <CourseCard course={course} key={course.id} />
        ))}
      </div>
    </div>
  );
};
