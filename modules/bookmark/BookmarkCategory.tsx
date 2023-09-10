import SectionHeading from "@/common/components/elements/SectionHeading"
import { BsFillRssFill } from "react-icons/bs"


export default function BookmarkCategory() {
    return <>
        <section className="flex flex-col gap-y-2">
            <SectionHeading title="Contributions" icon={<BsFillRssFill className="mr-1" />} />
        </section>
    </>
}