// src/App.tsx

import { Header } from "./shared/Header";
import { Hero } from "./pages/Home/Hero";
import { Solutions } from "./pages/Solutions/Solutions";
import Footer from "./shared/Footer";
import { AboutPage } from "./pages/About/About";

function App() {

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg">
      <Header />
      <main className="flex-grow">
        <Hero/>
        <Solutions/>
        <AboutPage/>
      </main>
      <Footer />
    </div>
  )
}

export default App;