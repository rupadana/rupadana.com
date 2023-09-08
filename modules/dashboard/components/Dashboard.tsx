import Breakline from '@/common/components/elements/Breakline';

import Contributions from './Contributions';
import PageSpeed from './PageSpeed';

interface DashboardProps {
  githubData: any;
}
export default function Dashboard({ githubData }: DashboardProps) {
  return (
    <section className="flex flex-col">
      <Contributions githubData={githubData} />
    </section>
  );
}
