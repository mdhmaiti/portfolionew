import Image from 'next/image'
export default function MyImg(){

  return (
<Image className="  rounded-full object-cover"
src="/cat-2536662_1280.jpg"
width={200}
height={200}
alt="Picture of the author"
/>
  )
}