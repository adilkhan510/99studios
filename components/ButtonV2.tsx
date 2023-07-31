import Link from 'next/link';

const Button = ({
  href
  block = false,
  size = 'lg',
  style = 'primary',
  className,
  children,
  ...rest
}) => {
  const sizes = {
    lg: 'px-5 py-2.5',
    md: 'px-4 py-2',
  };

  const styles = {
    outline: 'bg-white border-2 border-black hover:bg-gray-100 text-black ',
    primary:
      'bg-black text-white hover:bg-gray-800  border-2 border-transparent',
    inverted: 'bg-white text-black   border-2 border-transparent',
    muted: 'bg-gray-100 hover:bg-gray-200   border-2 border-transparent',
  };

  const buttonClass = `rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 ${
    block ? 'w-full' : ''
  } ${sizes[size]} ${styles[style]} ${className}`;

  return (
    <Link href={href} legacyBehavior>
      <a {...rest} className={buttonClass}>
        {children}
      </a>
    </Link>
  );
};

export default Button;
