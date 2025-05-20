import { Link } from 'react-router-dom';
import { ArrowRight, Droplet, Microscope, HeartPulse, Dna, FlaskConical, Scan } from 'lucide-react';

function ServicesHighlight() {
  const services = [
    {
      id: 1,
      title: 'Blood Tests',
      description: 'Comprehensive blood panels including CBC, metabolic panels, lipid profiles, and more.',
      icon: <Droplet size={40} className="text-primary mb-4" />,
      link: '/services#blood-tests',
    },
    {
      id: 2,
      title: 'Diagnostic Testing',
      description: 'Advanced diagnostics to identify diseases, infections, and other health conditions.',
      icon: <Microscope size={40} className="text-primary mb-4" />,
      link: '/services#diagnostic',
    },
    {
      id: 3,
      title: 'Cardiac Testing',
      description: 'Comprehensive cardiac panels, including cholesterol, enzymes, and risk assessment markers.',
      icon: <HeartPulse size={40} className="text-primary mb-4" />,
      link: '/services#cardiac',
    },
    {
      id: 4,
      title: 'Genetic Testing',
      description: 'DNA analysis for hereditary conditions, predispositions, and personalized medicine.',
      icon: <Dna size={40} className="text-primary mb-4" />,
      link: '/services#genetic',
    },
    {
      id: 5,
      title: 'Pathology',
      description: 'Tissue examination and analysis for accurate diagnosis of various conditions.',
      icon: <FlaskConical size={40} className="text-primary mb-4" />,
      link: '/services#pathology',
    },
    {
      id: 6,
      title: 'Medical Imaging',
      description: 'Modern imaging services including X-rays, ultrasounds, and other diagnostic imaging.',
      icon: <Scan size={40} className="text-primary mb-4" />,
      link: '/services#imaging',
    },
  ];

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="section-title">Our Laboratory Services</h2>
          <p className="text-lg text-neutral-600">
            We offer a comprehensive range of laboratory tests with accurate results and quick turnaround times. Our state-of-the-art facilities and experienced professionals ensure the highest quality of care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <div key={service.id} className="card p-6">
              <div className="text-center">
                {service.icon}
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-neutral-600 mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
                >
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/services"
            className="btn-primary"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesHighlight;