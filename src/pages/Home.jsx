import MenuBar from "../components/layout/MenuBar";
import HomeMenu from "../components/layout/HomeMenu";
import ProfileBar from "../components/layout/ProfileBar";

export default function Home() {
    return (
        <>
            <div className="left-layout"><MenuBar /></div>
            <HomeMenu />
            <div className="right-layout"><ProfileBar /></div>
        </>
    );
}