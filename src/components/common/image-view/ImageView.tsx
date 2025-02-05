import Image from "next/image"

interface Props {
    src: string,
    alt: string,
    width: number,
    height: number,
    className?: string
}
export function ImageView({src, alt,width, height, className = ''}: Props) {
  return (
        <Image src={src} alt={alt} className={className} width={width} height={height}/>
  )
}

