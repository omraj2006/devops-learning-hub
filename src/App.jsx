
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import GitGithub from './pages/GitGithub';
import CICD from './pages/CICD';
import Docker from './pages/Docker';
import Kubernetes from './pages/Kubernetes';
import Prometheus from './pages/Prometheus';
import Grafana from './pages/Grafana';
import Monitoring from './pages/Monitoring';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/git-github" element={<GitGithub />} />
          <Route path="/ci-cd" element={<CICD />} />
          <Route path="/docker" element={<Docker />} />
          <Route path="/kubernetes" element={<Kubernetes />} />
          <Route path="/prometheus" element={<Prometheus />} />
          <Route path="/grafana" element={<Grafana />} />
          <Route path="/monitoring" element={<Monitoring />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;

