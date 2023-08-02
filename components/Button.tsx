import { cva, VariantProps } from 'class-variance-authority';
import classNames from 'classnames';
import Link from 'next/link';

interface ButtonProps extends VariantProps<typeof buttonClasses> {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export const buttonClasses = cva(
  'rounded-full inline-flex items-center rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200',
  {
    variants: {
      variant: {
        outline: 'bg-white border-2 border-black hover:bg-gray-100 text-black ',
        primary:
          'bg-black text-white hover:bg-gray-800  border-2 border-transparent',
        inverted: 'bg-white text-black-100   border-2 border-transparent',
        muted: 'bg-gray-100 hover:bg-gray-200   border-2 border-transparent',
      },
      size: {
        small: 'text-sm h-4 px-2',
        medium: 'text-md h-6 px-4',
        large: 'text-lg h-12 px-6',
      },
      defaultVariants: {
        variant: 'primary',
        size: 'medium',
      },
    },
  }
);

export const Button = ({
  children,
  href,
  variant,
  size,
  className,
}: ButtonProps) => {
  return (
    <Link
      className={classNames(buttonClasses({ variant, size }), className)}
      href={href || '/'}
    >
      {children}
    </Link>
  );
};
