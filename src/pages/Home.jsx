import { lists } from "../data/fake.js";
import Item from "../components/Item.jsx";
import AddButton from "../components/AddButton.jsx";

export default function Home() {
  // console.log('Get data : ', lists)
  return (
    <>
      <div className="pt-2 pb-16 divide-y divide-solid divide-gray-200">
        {lists.map((list) => (
          // <Card className="" key={list.id} id={lists.id} title={list.title} image={list.image} content={list.content} />
          <Item className="" key={list.id} card={list} />
        ))}
      </div>
      <AddButton />
    </>
  );
}
