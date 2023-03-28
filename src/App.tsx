import About from "./components/About";
import Donors from "./components/Donors";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Map from "./components/Map";
import NavBar from "./components/NavBar";
import Staff from "./components/Staff";

function App() {
    return (
        <>
            <NavBar />
            <Header />
            <About />
            <Map />
            <Staff />
            <Donors />
            <Footer />
        </>
    );
}

export default App;
