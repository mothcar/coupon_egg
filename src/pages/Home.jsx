import { lists } from "../data/fake.js";
import Item from "../components/Item.jsx";
import AddButton from "../components/AddButton.jsx";
import { useEffect, useState } from "react";
import axios from "../api/axios";

const url = import.meta.env.VITE_LOCAL;

export default function Home() {
  // console.log('Get data : ', lists)
  const [coupons, setCoupons] = useState([])
  useEffect(()=>{
    async function getData() {
      const couponList = await axios.get(url+"/coupons")
      // console.log('Coupon List : ', couponList.data.item)
      setCoupons(couponList.data.item)
    }
    getData()
  },[])
  return (
    <>
      <div className="mt-10 text-lg font-bold">Get List :  {coupons.length}</div>
      <div className="pt-2 pb-16 divide-y divide-solid divide-gray-200">
        {coupons.map((list) => (
          // <Card className="" key={list.id} id={lists.id} title={list.title} image={list.image} content={list.content} />
          <Item className="" key={list._id} card={list} />
        ))}
      </div>
      <AddButton />
    </>
  );
}
