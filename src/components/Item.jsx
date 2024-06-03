export default function Item({id, title, image, content}) {
  const backGround = "https://liptong.com/web/product/small/201809/00abbc074c127de3e6a807c0404cc999.jpg"
  console.log('Get image url : ', image)
  return (
    <>
      {/* <div className="w-full max-w-full flex">
      <div className="h-auto w-48 flex-none bg-cover rounded-t rounded-l text-center overflow-hidden" style={{backgroundImage: `url(${backGround})`}} title="Woman holding a mug">
      </div>
      <div className="border-r border-b border-l-0 border-t border-gray-400 bg-white rounded-b-none rounded-r p-4 flex flex-col justify-between leading-normal">
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
    </div> */}

<div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    {/* <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
        <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
            View all
        </a>
   </div> */}
   <div className="flow-root">
        <div role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="py-1">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <img className="w-20 h-20 rounded-sm " src={image} alt="Neil image" />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {title}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {content}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            10장
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      <i className="fa-solid fa-bars"></i>
                    </div>
                </div>
            </div>
            
        </div>
   </div>
</div>
    </>
  )
}
