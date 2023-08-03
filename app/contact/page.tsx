import SectionHead from '@/components/ui/SectionHead';
import ContactForm from '@/components/ContactForm';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import Container from '@/components/ui/Container';

export default function Contact() {
  return (
    <Container className="py-5 mb-10 max-[90rem]">
      <SectionHead
        title="Get in Touch"
        description="Lets create something exceptional together."
        blue
      />

      <div className="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16">
        <div>
          <h2 className="font-medium text-2xl text-gray-500">
            Contact <span className="text-blue-500">Studio99</span> Today
          </h2>
          <p className="text-lg leading-relaxed text-slate-500 mt-3">
            Interested in our web development services? We're all ears. Fill out
            the form, send us an email, or call us directly, and let&apos;s get
            your project off the ground.
          </p>
          <div className="mt-5">
            <div className="flex items-center mt-2 space-x-2 text-gray-600">
              <FaMapMarkerAlt className="text-gray-400 w-4 h-4" />
              <span>San Francisco, California</span>
            </div>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </Container>
  );
}
