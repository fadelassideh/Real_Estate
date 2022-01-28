import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({children}) =>{
    return(
        <>
            <Head>
                <title> Real Estate </title>
            </Head>
            <Box paddingLeft="10" paddingRight="10">
                <header>
                    <Navbar/>
                </header>
                <main>
                    {children}
                </main>
                <footer>
                    <Footer />
                </footer>
            </Box>
        </>
    )
}

export default Layout