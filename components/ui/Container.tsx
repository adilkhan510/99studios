import classNames from 'classnames';

export default function Container({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  props?: any;
}) {
  return (
    <div
      className={classNames('mx-auto max-w-[90rem] px-10', className)}
      {...props}
    >
      {children}
    </div>
  );
}
