import Image from "next/image";
import ParentComponent from "./ParentComponent";
import ChildComponent from "./ChildComponent";

export default function Home() {
  return (
    <div>
      <ParentComponent/>
      <ChildComponent/>
      
    </div>
  );
}
