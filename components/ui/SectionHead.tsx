import classNames from 'classnames';

interface SectionHeadProps {
  align?: 'center' | 'left';
  title?: string;
  description?: string;
  stylish?: boolean;
}

export default function SectionHead({
  align = 'center',
  title = 'Title',
  description = 'Some description goes here',
  stylish = false,
}: SectionHeadProps) {
  const titleClasses = classNames(
    'text-4xl lg:text-5xl font-bold lg:tracking-tight',
    {
      'text-pink-500': stylish,
    }
  );

  const descClasses = classNames('text-lg mt-4', {
    'text-slate-600': !stylish,
  });

  return (
    <div className={`mt-16 ${align === 'center' ? 'text-center' : ''}`}>
      <h1 className={titleClasses}>{title}</h1>
      <p className={descClasses}>{description}</p>
    </div>
  );
}
