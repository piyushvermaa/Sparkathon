import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
    title: string;
    className?: string;
    image?: string;
}

const GridOption = ({ title, className, image }: Props) => {
  return (
    <Link
        href={{
            pathname: "/search",
            query: { q: title }
        }}
        className={cn("grid-option relative border border-black rounded-lg shadow-md hover:shadow-xl ", className)}
    >
        
        <div className="text-sm inline-flex items-center gap-2 bg-yellow-400 border border-black/40 rounded-full m-2 z-20 text-black px-2 py-1">{title}<ArrowRight size={10}/> </div>
        <div className="rounded-lg">
        {image && (
            <>
            <div className="absolute top-2 left-2 z-20 text-sm inline-flex items-center gap-2 bg-yellow-400 border border-black/40 rounded-full px-2 py-1 text-black">
                {title} <ArrowRight size={10} />
            </div>
            <Image 
                src={image}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg opacity-85 hover:opacity-100"
            />
        </>
        )}
        </div>
    </Link>
  )
}

export default GridOption