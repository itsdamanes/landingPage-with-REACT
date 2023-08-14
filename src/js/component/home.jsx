import { NavBar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Section } from "../../components/section";

export default function Home() {
    return(
        <>

        {/* Navbar */}
        <NavBar />
        <h1>hola</h1>
        
        {/*header*/}
        <Header />

        {/* Section*/}
        <Section />

        {/* Footer*/}
        <Footer />

        </>
    )
}