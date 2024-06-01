import {lists} from "../data/fake.js"


export default function Home() {
  console.log('Get data : ', lists)
  return (
    <div>
      <div>
        {
          lists.map(list=><h3 key={list.title}>{list.title}</h3>)
        }
      </div>
    </div>
  )
}
