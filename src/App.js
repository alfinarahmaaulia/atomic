import React from 'react';
import './App.css';
import NavbarComponent from './components/organisms/NavbarComponent';
import HeaderTemplate from './components/templates/HeaderTemplate';
import LogoBarTemplate from './components/templates/LogoBarTemplate';
import SkillsSection from './components/organisms/SkillsSection';
import GallerySection from './components/organisms/GallerySection';
import TestimonialSection from './components/organisms/TestimonialSection'; // Import TestimonialSection

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <HeaderTemplate />
      <LogoBarTemplate />
      <SkillsSection />
      <GallerySection />
      <TestimonialSection /> {/* Tambahkan TestimonialSection */}
    </div>
  );
}

export default App;
