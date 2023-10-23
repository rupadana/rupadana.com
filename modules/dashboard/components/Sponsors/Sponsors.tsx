import Image from "@/common/components/elements/Image";
import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import Tooltip from "@/common/components/elements/Tooltip";
import { PROFILE_URL } from "@/common/constant";
import { GITHUB_ACCOUNTS } from "@/common/constant/github";
import { GithubIcon } from "lucide-react";

import Link from "next/link";

interface Props {
    githubSponsors: any;
}

export default function Sponsors({ githubSponsors }: Props) {
    return (
        <section className="flex flex-col gap-y-2">
            <SectionHeading title="Sponsors" icon={<GithubIcon className="mr-1" />} />

            <SectionSubHeading>
                <p className="dark:text-neutral-400">Thank to all my Sponsors on Github</p>
                <Link
                    href={`https://github.com/sponsors/${GITHUB_ACCOUNTS.username}`}
                    target="_blank"
                    passHref
                    className="text-sm font-code text-neutral-400 dark:text-neutral-600 hover:text-neutral-700 hover:dark:text-neutral-400"
                >
                    @{GITHUB_ACCOUNTS.username}
                </Link>
            </SectionSubHeading>

            <div className="flex gap-2">
                {githubSponsors.map((sponsor: any) => (
                    <Tooltip title={sponsor.node.login}>
                        <Link
                            href={sponsor.node.url}
                            target="_blank">
                            <Image
                                src={sponsor.node.avatarUrl}
                                alt="profile"
                                width={50}
                                height={50}
                                rounded="rounded-full"
                                className="lg:hover:scale-105"
                            />
                        </Link>
                    </Tooltip>
                ))}
            </div>
        </section>
    );
}