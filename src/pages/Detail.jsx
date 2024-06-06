import { useLocation } from "react-router-dom";
import "./common.css";

export default function Detail() {
  const { state } = useLocation();

  return (
    <>
      <div className="common">
        <div>{state.title}</div>
        <div className="flex justify-center items-center">
          <img
            className="h-auto max-w-full"
            src={state.image}
            alt="image description"
          />
        </div>
        <div>{state.image}</div>
        <div>{state.content}</div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          recusandae dolorum voluptas molestias vero voluptatibus illum nisi
          quidem qui animi quis minima blanditiis quo reprehenderit magni quasi,
          esse, possimus id?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          recusandae dolorum voluptas molestias vero voluptatibus illum nisi
          quidem qui animi quis minima blanditiis quo reprehenderit magni quasi,
          esse, possimus id?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          recusandae dolorum voluptas molestias vero voluptatibus illum nisi
          quidem qui animi quis minima blanditiis quo reprehenderit magni quasi,
          esse, possimus id?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          recusandae dolorum voluptas molestias vero voluptatibus illum nisi
          quidem qui animi quis minima blanditiis quo reprehenderit magni quasi,
          esse, possimus id?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          recusandae dolorum voluptas molestias vero voluptatibus illum nisi
          quidem qui animi quis minima blanditiis quo reprehenderit magni quasi,
          esse, possimus id?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          recusandae dolorum voluptas molestias vero voluptatibus illum nisi
          quidem qui animi quis minima blanditiis quo reprehenderit magni quasi,
          esse, possimus id?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          recusandae dolorum voluptas molestias vero voluptatibus illum nisi
          quidem qui animi quis minima blanditiis quo reprehenderit magni quasi,
          esse, possimus id?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          recusandae dolorum voluptas molestias vero voluptatibus illum nisi
          quidem qui animi quis minima blanditiis quo reprehenderit magni quasi,
          esse, possimus id?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          recusandae dolorum voluptas molestias vero voluptatibus illum nisi
          quidem qui animi quis minima blanditiis quo reprehenderit magni quasi,
          esse, possimus id?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          recusandae dolorum voluptas molestias vero voluptatibus illum nisi
          quidem qui animi quis minima blanditiis quo reprehenderit magni quasi,
          esse, possimus id?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          recusandae dolorum voluptas molestias vero voluptatibus illum nisi
          quidem qui animi quis minima blanditiis quo reprehenderit magni quasi,
          esse, possimus id?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          recusandae dolorum voluptas molestias vero voluptatibus illum nisi
          quidem qui animi quis minima blanditiis quo reprehenderit magni quasi,
          esse, possimus id?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          recusandae dolorum voluptas molestias vero voluptatibus illum nisi
          quidem qui animi quis minima blanditiis quo reprehenderit magni quasi,
          esse, possimus id?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          recusandae dolorum voluptas molestias vero voluptatibus illum nisi
          quidem qui animi quis minima blanditiis quo reprehenderit magni quasi,
          esse, possimus id?
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          recusandae dolorum voluptas molestias vero voluptatibus illum nisi
          quidem qui animi quis minima blanditiis quo reprehenderit magni quasi,
          esse, possimus id?
        </div>
      </div>
    </>
  );
}
