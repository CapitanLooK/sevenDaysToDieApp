import { Cards } from "@/components/Cards/Cards";
import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import { CWmain } from "@/composite-wrapper/CWmain";

export default function Home() {
  return (
    <main>
      <Navbar />
      <CWmain />
      <Footer />
      
    </main>
  )
}
