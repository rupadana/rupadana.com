import Breakline from '@/common/components/elements/Breakline';

import CareerList from './CareerList';
import Introduction from './Introduction';
import SkillList from './SkillList';
import Contributions from '@/modules/dashboard/components/Contributions';

interface HomeProps {
  githubData: any;
}

export default async function Home({githubData} : HomeProps) {


  return (
    <>
      <Introduction />
      <Breakline className="mt-8 mb-6" />
      <Contributions githubData={githubData} />
      <Breakline className="mt-8 mb-6" />
      <SkillList />
    </>
  );
}
