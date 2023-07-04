import { cva, VariantProps } from 'class-variance-authority';
import Link from 'next/link';

interface ButtonProps extends VariantProps<typeof buttonClasses> {
  children: React.ReactNode;
  href: string;
}

export const buttonClasses = cva('rounded-full inline-flex items-center', {
  variants: {
    variant: {
      primary: 'bg-linear-gradient',
      secondary: '',
      tertiary: '',
    },
    size: {
      small: 'text-sm h-4 px-2',
      medium: 'text-md h-6 px-4',
      large: 'text-lg h-12 px-6',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
});

export const Button = ({ children, href, variant, size }: ButtonProps) => {
  return (
    <Link className={buttonClasses({ variant, size })} href={href}>
      {children}
    </Link>
  );
};
