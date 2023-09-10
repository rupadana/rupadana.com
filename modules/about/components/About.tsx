import Breakline from '@/common/components/elements/Breakline';

import Summary from './Summary';
import Tiktok from './Tiktok';
import CareerList from '@/modules/home/components/CareerList';

export default function About() {
  return (
    <section className="flex flex-col">
      <Summary />
      <Breakline className="mt-8 mb-6" />
      <CareerList />
    </section>
  );
}
