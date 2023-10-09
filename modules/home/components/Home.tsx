import Breakline from '@/common/components/elements/Breakline';

import CareerList from './CareerList';
import Introduction from './Introduction';
import SkillList from './SkillList';
import Contributions from '@/modules/dashboard/components/Contributions';
import { SiShell } from 'react-icons/si';
import Sponsors from '@/modules/dashboard/components/Sponsors/Sponsors';

interface HomeProps {
  githubData: any;
  githubSponsors: any;
}

export default async function Home({githubData, githubSponsors} : HomeProps) {


  return (
    <>
      <Introduction />
      {
        githubSponsors.length > 0 && (
          <>
            <Breakline className="mt-8 mb-6" />
            <Sponsors githubSponsors={githubSponsors}/>
          </>
        )
      }
      <Breakline className="mt-8 mb-6" />
      <Contributions githubData={githubData} />
      <Breakline className="mt-8 mb-6" />
      <SkillList />
    </>
  );
}
