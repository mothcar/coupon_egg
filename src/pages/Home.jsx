import {lists} from "../data/fake.js"
import Card from "../components/Item.jsx"


export default function Home() {
  // console.log('Get data : ', lists)
  return (
    <>
      <div className="pt-5 pb-16">
        {
          lists.map(list=>(
            // <Card className="" key={list.id} id={lists.id} title={list.title} image={list.image} content={list.content} />
            <Card className="" key={list.id} card={list} />
          ))
        }
      </div>
    </>
  )
}
