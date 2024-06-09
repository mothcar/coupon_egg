import { BsList } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useTitleStore } from "../store/titleStore.js"

export default function Item(props) {
  // const backGround = "https://liptong.com/web/product/small/201809/00abbc074c127de3e6a807c0404cc999.jpg"
  const data = props    // Object 
  const card = data.card // Object in Object 

  const navigate = useNavigate()
  const { setTitle } = useTitleStore()

  function cardClickHandler() {
    navigate("/goDetail", {state: card})
    setTitle("디테일")
  }

  return (
    <>
      <div onClick={cardClickHandler} className="w-full p-4 sm:p-8">
        <div className="flow-root">
          <div
            role="list"
            className="divide-y divide-gray-200"
          >
            <div className="py-1 flex justify-start items-start">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="w-24 h-24 md:w-40 md:h-40 rounded-sm object-cover"
                    src={card.image}
                    alt="Neil image"
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-md font-medium text-gray-900 truncate mb-1">
                    {card.type=="구함"?"[ 구함 ]":"[ *드림* ]"}  {card.title}
                  </p>
                  <p className="text-sm text-gray-500 truncate mb-1">
                    {card.place}
                  </p>
                  
                  <div className="flex justify-items-start gap-5">
                    <p className="text-md text-black truncate">
                      {card.count} 장
                    </p>
                    {/* <p className="text-sm text-black truncate">
                      {card.price} 원
                    </p> */}
                  </div>
                </div>
                {/* <div className="inline-flex items-center text-base font-semibold text-gray-900">
                  <BsList></BsList>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
