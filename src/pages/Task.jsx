import MenuBar from "../components/layout/MenuBar";
import Checkpoint from "../components/layout/Checkpoint";
import ProfileBar from "../components/layout/ProfileBar";

export default function Task() {
  return (
    <>
      <div className="left-layout"><MenuBar /></div>
      <Checkpoint />
      <div className="right-layout"><ProfileBar /></div>
    </>
  );
}