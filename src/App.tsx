// src/App.tsx

import { Header } from "./shared/Header";
import { Hero } from "./pages/Home/Hero";
import Footer from "./shared/Footer";

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero/>
      </main>
      <Footer />
    </div>
  )
}

export default App;