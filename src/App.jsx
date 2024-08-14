// Importando las herramientos de router dom. 
import { Routes, Route, BrowserRouter } from "react-router-dom";

// importando los componentes que a su ves usaremos para las rutas 
import { AllApps } from "./pages/AllApps";
import { Authentication } from "./pages/Authentication";
import { Stroage } from "./pages/Stroage";
import { Settings } from "./pages/Settings";
import { Build } from "./pages/Build";
import { Analitycs } from "./pages/Analitycs";
import { RootLayout } from "./layouts/RootLayout";

function App() {
  // definimos todas las rutas del proyecto. Desde su valor + alto hasta el + bajo. 
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<AllApps />} />
          <Route path="/auth" element={<Authentication />} />
          <Route path="/stroage" element={<Stroage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/build/:bID" element={<Build />} />
          <Route path="/analitycs" element={<Analitycs />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  )
}

export default App;
