import { useLocation } from "react-router-dom";
import "./common.css";
import { BsPerson } from "react-icons/bs";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import useWindowDimensions from "../data/useWindowDimensions";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTitleStore } from "../store/titleStore.js"

export default function Detail() {
  // console.log("Env : ", import.meta.env.VITE_KAKAO_KEY);
  useEffect(()=>{
    window.scrollTo(0, 0)
    setTitle("Detail")
  },[])
  const navigate = useNavigate();
  const { setTitle } = useTitleStore()
  const { state } = useLocation();
  const { width, height } = useWindowDimensions();
  const widthNew = width - 50 + "px";
  const heightNew = height / 3 + "px";
  // console.log("width : ", width, " height : ", heightNew);
  const tradeHandler = ()=>{
    navigate("/suggest", {state: state})
    // setTitle("제안하기")
    // console.log('Trade Handler..........')
  }

  return (
    <>
      <div>
        <div className="mt-10">
          <img
            className="h-80 w-full object-cover"
            src={state.coupon_image}
            alt="image description"
          />
        </div>
        <div className="common">
        <div className="flex items-center gap-3">
            <div>
              {state.userImage ? (
                <img src={state.userImage} alt="" />
              ) : (
                <BsPerson fontSize={30} />
              )}
            </div>
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
          <Map
            center={{ lat: 33.5563, lng: 126.79581 }}
            style={{ width: widthNew, height: heightNew }}
            className="mb-14 rounded-lg"
          >
            <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
              <div style={{ color: "#000" }}>{state.place}</div>
            </MapMarker>
          </Map>
          <div className="fixed inset-x-0 bottom-0 text-center z-10">
            <button
              type="button"
              onClick={tradeHandler}
              className=" w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 rounded"
            >
              교환제안,제안하기
            </button>
          </div>
        </div>
        
      </div>
    </>
  );
}
