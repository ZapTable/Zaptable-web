// src/App.tsx

import { Header } from "./shared/Header";
import { Hero } from "./pages/Home/Hero";
import { Solutions } from "./pages/Solutions/Solutions";
import Footer from "./shared/Footer";
import { AboutPage } from "./pages/About/About";
import { PricingPage } from "./pages/Pricing/Pricing";
import { FeaturesPage } from "./pages/Features/Features";

function App() {

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg">
      <Header />
      <main className="flex-grow">
        <Hero/>
        <AboutPage/>
        <Solutions/>
        <FeaturesPage/>
        <PricingPage/>
      </main>
      <Footer />
    </div>
  )
}

export default App;