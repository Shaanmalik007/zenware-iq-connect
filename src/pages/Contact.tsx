
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Contact Us"
        subtitle="Get in touch with our team to discuss how we can help your business succeed with the right technology solutions."
        buttonText="Scroll Down"
        buttonLink="#contact-form"
      />

      {/* Contact Form Section */}
      <section id="contact-form" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form and one of our team members will get back to you 
                within one business day. We're looking forward to hearing from you!
              </p>

              <div className="space-y-6 mb-8">
                <ContactInfo
                  icon={<Phone size={20} />}
                  title="Phone"
                  details={["(555) 123-4567"]}
                />
                <ContactInfo
                  icon={<Mail size={20} />}
                  title="Email"
                  details={["info@zenwareiq.com", "support@zenwareiq.com"]}
                />
                <ContactInfo
                  icon={<MapPin size={20} />}
                  title="Office"
                  details={[
                    "123 Tech Plaza, Suite 500",
                    "San Francisco, CA 94103",
                    "United States"
                  ]}
                />
                <ContactInfo
                  icon={<Clock size={20} />}
                  title="Hours"
                  details={[
                    "Monday - Friday: 9am - 6pm",
                    "Saturday: 10am - 2pm",
                    "Sunday: Closed"
                  ]}
                />
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <SocialLink
                    href="https://linkedin.com"
                    label="LinkedIn"
                    bgColor="bg-[#0077B5]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </SocialLink>
                  <SocialLink
                    href="https://twitter.com"
                    label="Twitter"
                    bgColor="bg-[#1DA1F2]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                    </svg>
                  </SocialLink>
                  <SocialLink
                    href="https://facebook.com"
                    label="Facebook"
                    bgColor="bg-[#1877F2]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.9 2H3.1A1.1 1.1 0 0 0 2 3.1v17.8A1.1 1.1 0 0 0 3.1 22h9.58v-7.75h-2.6v-3h2.6V9a3.64 3.64 0 0 1 3.88-4 20.26 20.26 0 0 1 2.33.12v2.7H17.3c-1.26 0-1.5.6-1.5 1.47v1.93h3l-.39 3H15.8V22h5.1a1.1 1.1 0 0 0 1.1-1.1V3.1A1.1 1.1 0 0 0 20.9 2z" />
                    </svg>
                  </SocialLink>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Visit Our Office</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're conveniently located in downtown San Francisco. Feel free to stop by during business hours!
            </p>
          </div>
          
          {/* Placeholder for a map - in a real implementation, this would be a Google Maps embed */}
          <div className="bg-gray-200 rounded-lg h-96 w-full flex items-center justify-center">
            <div className="text-center">
              <MapPin size={48} className="mx-auto mb-4 text-zenblue" />
              <p className="text-gray-600">Map would be displayed here</p>
              <p className="text-sm text-gray-500 mt-2">123 Tech Plaza, Suite 500, San Francisco, CA 94103</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions? We've got answers. If you don't see what you're looking for, feel free to reach out.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <FaqItem
              question="What industries do you serve?"
              answer="We work with clients across a wide range of industries, including finance, healthcare, manufacturing, retail, and professional services. Our solutions are customized to meet the specific needs of each industry."
            />
            <FaqItem
              question="Do you offer ongoing support?"
              answer="Yes, we provide comprehensive ongoing support for all our services. We offer different support packages that can include 24/7 monitoring, regular maintenance, and dedicated support staff."
            />
            <FaqItem
              question="How long does a typical project take?"
              answer="Project timelines vary based on scope and complexity. A small website might take 2-4 weeks, while a comprehensive enterprise software solution could take several months. We'll provide a detailed timeline during our proposal process."
            />
            <FaqItem
              question="What is your pricing structure?"
              answer="Our pricing depends on the specific services required. We offer both project-based and retainer-based pricing models. We're transparent about costs and will provide detailed quotes after understanding your requirements."
            />
            <FaqItem
              question="Can you work with our in-house IT team?"
              answer="Absolutely! We often collaborate with in-house IT teams, either providing specialized expertise or additional resources for specific projects. We're flexible and can adapt to your preferred working model."
            />
            <FaqItem
              question="How do you ensure data security?"
              answer="Security is paramount in everything we do. We follow industry best practices, implement multiple layers of security measures, conduct regular audits, and stay up-to-date with the latest security developments."
            />
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center justify-center bg-white p-6 rounded-lg shadow-md">
              <MessageSquare className="text-zenblue mr-4" size={24} />
              <div className="text-left">
                <h3 className="font-bold text-lg">Still have questions?</h3>
                <p className="text-gray-600">
                  Contact us at{" "}
                  <a href="mailto:info@zenwareiq.com" className="text-zenblue hover:underline">
                    info@zenwareiq.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  details: string[];
}

const ContactInfo = ({ icon, title, details }: ContactInfoProps) => (
  <div className="flex">
    <div className="mr-4 bg-zenblue-light/10 p-3 rounded-full h-fit text-zenblue">
      {icon}
    </div>
    <div>
      <h3 className="font-bold mb-1">{title}</h3>
      {details.map((detail, index) => (
        <p key={index} className="text-gray-600">
          {detail}
        </p>
      ))}
    </div>
  </div>
);

interface SocialLinkProps {
  href: string;
  label: string;
  bgColor: string;
  children: React.ReactNode;
}

const SocialLink = ({ href, label, bgColor, children }: SocialLinkProps) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className={`${bgColor} text-white p-3 rounded-full hover:opacity-90 transition-opacity`}
  >
    {children}
  </a>
);

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <h3 className="font-bold text-lg mb-3">{question}</h3>
    <p className="text-gray-600">{answer}</p>
  </div>
);

export default Contact;
