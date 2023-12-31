// NoSSR component that has everything inside it not use SSR anymore
import dynamic from 'next/dynamic';
import React from 'react';

function NoSSR({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default dynamic(() => Promise.resolve(NoSSR), {
  ssr: false,
});
