import dynamic from 'next/dynamic'

// Server Component:
const ServerComponent = dynamic(() => import('./Earth'));

const EarthComponent = () => {
  return (
    <div> <ServerComponent/></div>
  )
}

export default EarthComponent