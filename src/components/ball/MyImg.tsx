import Image from 'next/image'
export default function MyImg(){

  return (
<Image className="  rounded-full object-cover"
src="/gmail-linkdin-twitter.jpg"
width={200}
height={600}
alt="Picture of the author"
/>
  )
}