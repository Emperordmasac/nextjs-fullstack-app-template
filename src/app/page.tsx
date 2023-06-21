import { mockCatCardProps } from '@/components/cards/cat/CardCard.mocks';
import CatCard from '@/components/cards/cat/CatCard';

export default function Home() {
  return (
    <section className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <CatCard {...mockCatCardProps.base} />
    </section>
  );
}
