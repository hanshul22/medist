import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Droplet, 
  Microscope, 
  HeartPulse, 
  Dna, 
  FlaskConical, 
  Scan, 
  Pill, 
  Stethoscope, 
  Syringe, 
  Clipboard, 
  Thermometer, 
  Tablet, 
  Activity, 
  CircleUserRound 
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

function ServicesHighlight() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef(null);
  
  const services = [
    {
      id: 1,
      title: 'Mask N95',
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M12 22a8 8 0 0 0 8-8V7H4v7a8 8 0 0 0 8 8Z"></path><path d="m4 7 3-3h10l3 3"></path><path d="M9 14v1"></path><path d="M12 14v1"></path><path d="M15 14v1"></path></svg>,
      link: '/services#mask',
    },
    {
      id: 2,
      title: 'Thermometer',
      icon: <Thermometer size={40} className="text-primary" />,
      link: '/services#thermometer',
    },
    {
      id: 3,
      title: 'Cardiogram',
      icon: <HeartPulse size={40} className="text-primary" />,
      link: '/services#cardiac',
    },
    {
      id: 4,
      title: 'Sanitizer',
      icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M8 2h8"></path><path d="M9 12v4"></path><path d="M15 12v4"></path><path d="M6 10h12"></path><path d="M6 6h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path></svg>,
      link: '/services#sanitizer',
    },
    {
      id: 5,
      title: 'Vaccine',
      icon: <Syringe size={40} className="text-primary" />,
      link: '/services#vaccine',
    },
    {
      id: 6,
      title: 'Microscope',
      icon: <Microscope size={40} className="text-primary" />,
      link: '/services#diagnostic',
    },
    {
      id: 7,
      title: 'Blood Tests',
      icon: <Droplet size={40} className="text-primary" />,
      link: '/services#blood-tests',
    },
    {
      id: 8,
      title: 'Genetic Testing',
      icon: <Dna size={40} className="text-primary" />,
      link: '/services#genetic',
    },
    {
      id: 9,
      title: 'Pathology',
      icon: <FlaskConical size={40} className="text-primary" />,
      link: '/services#pathology',
    },
    {
      id: 10,
      title: 'Medication',
      icon: <Pill size={40} className="text-primary" />,
      link: '/services#medication',
    },
    {
      id: 11,
      title: 'Consultation',
      icon: <Stethoscope size={40} className="text-primary" />,
      link: '/services#consultation',
    },
    {
      id: 12,
      title: 'Health Records',
      icon: <Clipboard size={40} className="text-primary" />,
      link: '/services#health-records',
    },
    {
      id: 13,
      title: 'Pharmacy',
      icon: <Tablet size={40} className="text-primary" />,
      link: '/services#pharmacy',
    },
    {
      id: 14,
      title: 'First Aid',
      icon: <Activity size={40} className="text-primary" />,
      link: '/services#first-aid',
    },
    {
      id: 15,
      title: 'Neurology',
      icon: <CircleUserRound size={40} className="text-primary" />,
      link: '/services#neurology',
    },
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === services.length - 6 ? 0 : prevIndex + 1
    );
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? services.length - 6 : prevIndex - 1
    );
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container">
        {/* <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Our Laboratory Services</h2>
          <p className="text-lg text-neutral-600">
            We offer a comprehensive range of laboratory tests with accurate results and quick turnaround times. Our state-of-the-art facilities and experienced professionals ensure the highest quality of care.
          </p>
        </div> */}

        <div className="relative overflow-hidden mb-12">
          {/* <button 
            onClick={prevSlide} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-red-500 text-white w-10 h-10 flex items-center justify-center rounded-full focus:outline-none shadow-lg hover:bg-red-600 transition-colors duration-300"
            aria-label="Previous slide"
            disabled={isAnimating}
          >
            <ArrowRight size={20} className="transform rotate-180" />
          </button> */}
          
          <div 
            ref={sliderRef}
            className="flex transition-all duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 6)}%)` }}
          >
            {services.map((service) => (
              <div 
                key={service.id} 
                className="min-w-[16.666%] px-3 transition-all duration-500"
              >
                <Link 
                  to={service.link}
                  className="flex flex-col items-center justify-center h-36 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group overflow-hidden"
                >
                  <div className="flex items-center justify-center w-20 h-20 text-primary group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <p className="mt-2 font-medium text-center text-neutral-700">{service.title}</p>
                  <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transform -translate-y-full group-hover:translate-y-0 transition-all duration-300 rounded-lg"></div>
                </Link>
              </div>
            ))}
          </div>
          
          {/* <button 
            onClick={nextSlide} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-red-500 text-white w-10 h-10 flex items-center justify-center rounded-full focus:outline-none shadow-lg hover:bg-red-600 transition-colors duration-300"
            aria-label="Next slide"
            disabled={isAnimating}
          >
            <ArrowRight size={20} />
          </button> */}
        </div>

       
      </div>
    </section>
  );
}

export default ServicesHighlight;