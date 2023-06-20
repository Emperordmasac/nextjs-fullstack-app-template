import styles from './page.module.css';

import { mockCarCardProps } from '@/components/cards/cat/CardCard.mocks';
import CatCard from '@/components/cards/cat/CatCard';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <CatCard {...mockCarCardProps.base} />
      </div>
    </main>
  );
}
