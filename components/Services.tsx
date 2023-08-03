import Container from './ui/Container';

import SectionHead from './ui/SectionHead';
import ServicePlan from './ui/pricing';
import { services } from './contants/contants';

export default function ServicesPage() {
  return (
    <Container>
      <SectionHead
        title="Services"
        description="Here are some of the services we offer. We offer a wide range of services, so if you don’t see what you’re looking for, just ask us."
        blue
      />
      <div className="grid md:grid-cols-3 gap-16 mx-auto max-w-screen-xl mt-16 p-4 transition-all duration-500 ease-in-out">
        {services.map((item, index) => (
          <ServicePlan key={index} service={item} />
        ))}
      </div>
    </Container>
  );
}
