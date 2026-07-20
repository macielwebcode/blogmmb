import Link from "next/link";
import Image from "next/image";

type PostCoverImageProps = {
    href: string;
    src: string
}

export default function PostCoverImage({ href, src }: PostCoverImageProps){
    return(
        <Link className="w-full h-full overflow-hidden rounded-xl" href={href}>
            <Image
                className='w-full h-full objct-cover object-center group-hover:scale-105 transition'
                src={src}
                width={1200}
                height={720}
                alt="titulo do post"
                priority
            />
        </Link>
    )
}