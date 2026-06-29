import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/layout';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import ServiceDetails from './Pages/Services/ServiceDetails/ServiceDetails';

// Quick template placeholders for other routes
const ServicesPage = () => (
  <div style={{ padding: '40px 20px', color: '#fff' }}>
    <h2>Our Premium Services</h2>
    <p style={{ color: '#a3a3c2', marginTop: '10px' }}>Explore what we build.</p>
  </div>
);

const PortfolioPage = () => (
  <div style={{ padding: '40px 20px', color: '#fff' }}>
    <h2>Project Portfolio Gallery</h2>
    <p style={{ color: '#a3a3c2', marginTop: '10px' }}>Showcasing our best work.</p>
  </div>
);

const NotFoundPage = () => (
  <div style={{ padding: '40px 20px', color: '#fff', textAlign: 'center' }}>
    <h2>404 - Page Not Found</h2>
    <p style={{ color: '#00f2c3', marginTop: '10px' }}>The page you are looking for does not exist.</p>
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Base Landing Page Route */}
          <Route path="/" element={<Home />} />

          {/* Secondary Pages Routes */}
          <Route path="/services" element={<Services />} />
          {/* <Route path="/services/:id" element={<Services />} /> */}
          <Route

            path="/services/:serviceId"

            element={<ServiceDetails />}

          />
          <Route path="/portfolio" element={<PortfolioPage />} />

          {/* Fallback route for typing errors */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;