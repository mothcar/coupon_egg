import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useTitleStore } from "../store/titleStore.js"



export default function Suggest() {
  const { state } = useLocation();
  const { setTitle } = useTitleStore()
  // console.log("Suggest : ", state);
  useEffect(()=>{
    setTitle("Suggest...")
  },[])
  const image = state.coupon_image;
  return (
    <>
      <div className="common">
        <div className="flex gap-3 ">
          <img src={image} className="h-10 w-10 rounded-md object-cover" alt="" />
          <div>
            <div className="text-sm">{state.title}</div>
            <div className="text-sm">{state.count}장</div>
          </div>
        </div>
        <hr className="my-3 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25" />
      </div>
    </>
  );
}
