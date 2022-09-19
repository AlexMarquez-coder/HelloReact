import Card from "./Card";
import "./App.css";
const App = () => {
    const click = () =>{
        console.log("Ik ben geklikt!");
    }

    const random = () => {
        console.log( Math.random());
    }


    const sum = () => {
        console.log( 1001491 + 123123);
    }

    return (
        <>
            <Card mouseclick={click} title="Eerste kaart"/>
            <Card mouseclick={random} text="Hallo ik ben een stukje text"/>
            <Card mouseclick={sum} title="Derde kaart" text="Dit is het kaartje"/>
        </>
    );
}

export default App;