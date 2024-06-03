export default function Item() {
  const backGround = "https://liptong.com/web/product/small/201809/00abbc074c127de3e6a807c0404cc999.jpg"
  return (
    <>
      <div className="w-full max-w-full flex">
      <div className="h-48 h-auto w-48 flex-none bg-cover rounded-t rounded-t-none rounded-l text-center overflow-hidden" style={{backgroundImage: `url(${backGround})`}} title="Woman holding a mug">
      </div>
      <div className="border-r border-b border-l border-gray-400 border-l-0 border-t border-gray-400 bg-white rounded-b rounded-b-none rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          
          <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
          <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
          <p className="text-sm text-gray-600 flex items-center">
            <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            Members only
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
