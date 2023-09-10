import SectionHeading from "@/common/components/elements/SectionHeading";
import ViewOptions from "../blog/components/ViewOptions";
import { BsCameraVideo, BsFolder, BsPerson, BsRocket, BsRss, BsTools } from "react-icons/bs";


interface Props {
    categoryOption: string,
    setCategoryOption: (option: string) => void;
}

export default function BookmarkListHeader({categoryOption, setCategoryOption} : Props) {
    return <div className="flex items-center justify-between text-[15px] mb-5">
        <SectionHeading title="Categories" />
        <div className="flex gap-2 px-1 cursor-pointer">
            <ViewOptions
                option={categoryOption}
                setViewOption={setCategoryOption}
                type="portofolio"
                icon={<BsPerson size={24} className="p-0.5" />}
                label="portofolio-icon"
            />
            <ViewOptions
                option={categoryOption}
                setViewOption={setCategoryOption}
                type="tools"
                icon={<BsTools size={24} className="p-0.5" />}
                label="tools-icon"
            />
            <ViewOptions
                option={categoryOption}
                setViewOption={setCategoryOption}
                type="artikel"
                icon={<BsRss size={24} className="p-0.5" />}
                label="arikel-icon"
            />
            <ViewOptions
                option={categoryOption}
                setViewOption={setCategoryOption}
                type="inspirasi"
                icon={<BsRocket size={24} className="p-0.5" />}
                label="inspirasi-icon"
            />
            <ViewOptions
                option={categoryOption}
                setViewOption={setCategoryOption}
                type="all"
                icon={<BsFolder size={24} className="p-0.5" />}
                label="all-icon"
            />
        </div>
    </div>
}