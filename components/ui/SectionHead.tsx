import classNames from 'classnames';

interface SectionHeadProps {
  align?: 'center' | 'left';
  title?: string;
  description?: string;
  blue?: boolean;
}

export default function SectionHead({
  align = 'center',
  title = 'Title',
  description = 'Some description goes here',
  blue = false,
}: SectionHeadProps) {
  const titleClasses = classNames(
    'text-4xl lg:text-5xl font-bold lg:tracking-tight',
    {
      'text-blue-300': blue,
    }
  );

  const descClasses = classNames('text-lg mt-4', {
    'text-gray-400': blue,
  });

  return (
    <div className={`mt-16 ${align === 'center' ? 'text-center' : ''}`}>
      <h1 className={titleClasses}>{title}</h1>
      <p className={descClasses}>{description}</p>
    </div>
  );
}
