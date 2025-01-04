import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
//import Experience from './components/Experience';
import Certificates from './components/Certificates';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <AnimatedBackground />
      <Navbar />
      
      <div className="relative z-10">
        <Hero
          name="Muhammed Naveeth"
          title="Web Developer"
          photoUrl="src/assets/naveeth.jpg"
        />
        
        <About />
        <Skills />
 
        <Certificates />

        <section className="py-20 px-4" id="contact">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
            <ContactForm />
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default App;