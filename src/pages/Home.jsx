import {lists} from "../data/fake.js"
import Card from "../components/Item.jsx"


export default function Home() {
  // console.log('Get data : ', lists)
  return (
    <div>
      
      <div>
        {
          lists.map(list=>(
            <Card className="" key={list.id} id={lists.id} title={list.title} image={list.image} content={list.content} />
          ))
        }
      </div>
    </div>
  )
}
