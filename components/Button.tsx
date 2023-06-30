import { cva, VariantProps } from 'class-variance-authority';
import Link from 'next/link';

interface ButtonProps extends VariantProps<typeof buttonClasses> {
  children: React.ReactNode;
  href: string;
}

export const buttonClasses = cva('', {
  variants: {
    variant: {
      primary: '',
      secondary: '',
      tertiary: '',
    },
    size: {
      small: 'text-sm',
      medium: 'text-md',
      large: 'text-lg',
    },
  },
});

export const Button = ({ children, href, variant, size }: ButtonProps) => {
  return (
    <Link className={buttonClasses({ variant, size })} href={href}>
      {children}
    </Link>
  );
};
