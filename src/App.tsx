// src/App.tsx

import { Footer } from "./shared/Footer";
import { Header } from "./shared/Header";

function App() {

  return (
    <div className="flex flex-col min-h-screen bg-brand-bg">
      <Header />
      <main className="flex-grow">
        {/* Your page content will go here */}
      </main>
      <Footer /> {/* Add the Footer here */}
    </div>
  )
}

export default App;