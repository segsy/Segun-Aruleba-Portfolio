import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
//import { Layout } from "@/components/Layout";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react"; // <-- Add this import

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
           {/* <Route path="*" element={<Layout />} /> */}
        </Routes>
      </BrowserRouter>
      <Analytics /> {/* <-- Add this component */}
    </>
  );
}

export default App;