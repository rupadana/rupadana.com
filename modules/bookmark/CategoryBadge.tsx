import clsxm from "@/common/libs/clsxm";
import clsx from "clsx";

interface Props {
    name: string;
}

export default function CategoryBadge({ name }: Props) {


    const getColor = (name: string) => {

        if (name == 'artikel')  return 'bg-green-700';
        if (name == 'tools') return 'bg-indigo-700';
        if (name == 'video') return 'bg-red-700';
        if (name == 'portofolio') return 'bg-fuchsia-700';

        return "bg-blue-700";
    }
    const divClass = clsxm(
        'rounded-full py-1 px-3',
        getColor(name)
    );


    return <div className={divClass}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
    </div>
}