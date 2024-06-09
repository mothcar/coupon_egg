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
            <div className="py-1">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="w-20 h-20 md:w-40 md:h-40 rounded-sm "
                    src={card.image}
                    alt="Neil image"
                  />
                </div>
                <div className="flex-1 min-w-0 ms-4">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {card.title}
                  </p>
                  <p className="text-sm text-gray-500 truncate">
                    {card.content}
                  </p>
                  
                  <div className="flex justify-items-start gap-5">
                    <p className="text-sm text-gray-500 truncate">
                      {card.count} 장
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      {card.price} 원
                    </p>
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
