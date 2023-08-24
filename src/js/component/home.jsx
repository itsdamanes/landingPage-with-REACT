import React from 'react'
import { NavBar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Section } from "../../components/section";

export default function Home() {
    return(
        <>

        {/* Navbar */}
        <NavBar />
        
        
        {/*header*/}
        <Header />

        {/* Section*/}
        <Section />

        {/* Footer*/}
        <Footer />

        </>
    );
}