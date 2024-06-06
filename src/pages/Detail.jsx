import { useLocation } from "react-router-dom";

export default function Detail() {
  const { state } = useLocation();
  
  return (
    <div className="pt-5 pb-16">
      <div>{state.title}</div>
      <div>{state.image}</div>
      <div>{state.content}</div>
    </div>
  );
}
