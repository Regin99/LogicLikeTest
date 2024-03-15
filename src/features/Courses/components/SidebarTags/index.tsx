import './style.scss';

type SidebarTagsProps = {
  currentTag: string;
  onTagClick: (tag: string) => void;
  tags: string[];
};

export const SidebarTags = ({
  currentTag,
  onTagClick,
  tags
}: SidebarTagsProps) => {
  return (
    <div className='tagsContainer'>
      {tags.map((tag) => (
        <p
          key={tag}
          onClick={() => onTagClick(tag)}
          className={tag === currentTag ? 'tag active' : 'tag'}
        >
          {tag}
        </p>
      ))}
    </div>
  );
};
