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
    <div className='mx-auto max-w-[1200px]' {...props}>
      {children}
    </div>
  );
}
