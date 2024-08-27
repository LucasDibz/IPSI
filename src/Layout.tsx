import { Outlet } from 'react-router-dom';
import type { SiteVariants } from './@types/variants';
import { Footer, Header } from './components';

type LayoutProps = {
  theme?: SiteVariants;
};
export function Layout({ theme = 'ipsi' }: LayoutProps) {
  document.querySelector('html')?.setAttribute('data-theme', theme);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
