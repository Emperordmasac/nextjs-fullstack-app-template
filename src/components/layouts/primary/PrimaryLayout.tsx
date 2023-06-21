import Head from 'next/head';

import Footer from '../../../components/navigation/footer/Footer';
import Header from '../../../components/navigation/header/Header';

export interface IPrimaryLayout {
  children: any;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>NextJs Fullstack App Template</title>
      </Head>
      <div className="min-h-screen flex flex-col items-center">
        <Header />
        <div className="my-20"></div>
        <main>{children}</main>
        <div className="m-auto" />
        <Footer />
      </div>
    </>
  );
};

export default PrimaryLayout;
