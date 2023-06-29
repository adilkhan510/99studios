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
    <div className={classNames('mx-auto max-w-[120rem]', className)} {...props}>
      {children}
    </div>
  );
}
