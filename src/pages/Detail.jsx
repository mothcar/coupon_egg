import { useLocation } from "react-router-dom";
import "./common.css";
import { BsPerson } from "react-icons/bs";

export default function Detail() {
  const { state } = useLocation();

  return (
    <>
      <div className="common">
        
        <div className="flex justify-center items-center">
          <img
            className="h-auto max-w-full"
            src={state.image}
            alt="image description"
          />
        </div>
        <div className="mt-2 flex items-center gap-3">
          <div>{state.userImage?<img src={state.userImage} alt="" />:<BsPerson fontSize={30}/>}</div>
          <div>
            <div className="text-lg font-bold">{state.userName}</div>
            <dir className="text-sm font-thin">{state.addressDepth3}</dir>
          </div>
        </div>
        <div className="mt-5 text-xl font-bold">{state.title}</div>
        <div className="text-sm text-gray-600">{state.shopName}</div>
        <div className="mt-5 min-h-20 text-base">{state.content}</div>
        <div className="mt-5 flex justify-between">
          <div className="text-base font-bold">거래희망장소</div>
          <div>{state.place}</div>
        </div>
      </div>
    </>
  );
}
