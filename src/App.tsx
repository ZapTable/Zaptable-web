// src/App.tsx

import { Header } from "./shared/Header";
import { Hero } from "./pages/Home/hero";
import Footer from "./shared/footer";

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