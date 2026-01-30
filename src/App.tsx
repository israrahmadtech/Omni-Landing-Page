import { BrowserRouter, Route, Routes } from "react-router-dom"
import Landing from "./pages/Landing"
import OmniLanding from "./pages/OmniLanding"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/landing" element={<OmniLanding />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App