import { Course } from '../../../../rtk/api/types';
import './style.scss';

type CourseCardProps = {
  course: Course;
};

export const CourseCard = ({ course }: CourseCardProps) => (
  <div key={course.id} className='cardContainer'>
    <div
      className='cardBackground'
      style={{
        backgroundColor: course.bgColor
      }}
    >
      <img className='cardImage' src={course.image} alt={course.name} />
    </div>
    <p className='cardTitle'>{course.name}</p>
  </div>
);
