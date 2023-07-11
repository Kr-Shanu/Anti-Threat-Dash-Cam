// import { useSelector } from "react-redux";
import CardComponent from "../components/CardComponent";
import NavbarComponent from "../components/NavbarComponent";

function OwnerTrackMain() {
  // const store = useSelector((state) => state.ifThreat);
  // console.log(store);
  return (
    <>
      <NavbarComponent />
      <div className="container">
        {/* <CardComponent carNo="DL01AB2903" store={store} location="MG Road"/>
        <CardComponent carNo="HR03BT3967" store={store} location="Grand Trunk Road"/>
        <CardComponent carNo="WB32AP1234" store={store} location="Kali Asthan"/>
        <CardComponent carNo="BR22TP5434" store={store} location="Dak bunlow"/>
        <CardComponent carNo="UP13AD1784" store={store} location="Kashi Vishwanath Road"/>
        <CardComponent carNo="WB05YL6234" store={store} location="Victoria Palace"/> */}
        <CardComponent carNo="DL01AB2903"  location="MG Road"/>
        <CardComponent carNo="HR03BT3967"  location="Grand Trunk Road"/>
        <CardComponent carNo="WB32AP1234"  location="Kali Asthan"/>
        <CardComponent carNo="BR22TP5434"  location="Dak bunlow"/>
        <CardComponent carNo="UP13AD1784"  location="Kashi Vishwanath Road"/>
        <CardComponent carNo="WB05YL6234"  location="Victoria Palace"/>
      </div>
    </>
  );
}

export default OwnerTrackMain;