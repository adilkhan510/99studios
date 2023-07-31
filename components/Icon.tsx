import { FC } from 'react';
import cx from 'classnames';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  href?: string;
  size?: 'sm' | 'md' | 'lg';
}

const IconButton: FC<Props> = ({ size = 'md', color = 'pink', ...props }) => {
  return (
    <div
      {...props}
      className={cx({
        'text-current rounded-full p-1 h-10 min-h-full w-10 min-w-full': true,
        'uppercase inline-flex items-center justify-center': true,
        'transition ease-in duration-200 text-center': true,
        'hover:bg-pink-500/20 focus:ring-pink-500/30': color === 'pink',
        [`focus:outline-none focus:ring-2`]: true,
        [props.className!]: Boolean(props.className),
      })}
    />
  );
};

export default IconButton;
