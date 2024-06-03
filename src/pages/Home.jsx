import {lists} from "../data/fake.js"
import Card from "../components/Item.jsx"


export default function Home() {
  console.log('Get data : ', lists)
  return (
    <div>
      <Card className=""/>
      <div>
        {
          lists.map(list=><h3 key={list.title}>{list.title}</h3>)
        }
      </div>
    </div>
  )
}
