import Navbar from '../Navbar/navbar';

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      {/* Fixed top Navigation bar */}
      <Navbar />
      
      {/* Dynamic Main Body Content */}
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;