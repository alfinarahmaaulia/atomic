import React from 'react';
import './TestimonialSection.css'; // Import the CSS file
import ClientInfo from '../molecules/ClientInfo';

// TestimonialCard Component
const TestimonialCard = ({ name, company, image, stars, testimonial }) => (
  <div className="testimonial-card">
    <div className="testimonial">{testimonial}</div>
    <ClientInfo name={name} company={company} image={image} stars={stars} />
  </div>
);

// TestimonialSection Component
const TestimonialSection = () => {
  const testimonials = [
    {
      testimonial: 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com',
      image: 'Client-image.png',
      stars: 5,
      name: 'Gemma Nolen',
      company: 'Google',
    },
    {
      testimonial: 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com',
      image: 'Client-image.png',
      stars: 5,
      name: 'John Doe',
      company: 'Facebook',
    },
    {
      testimonial: 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com',
      image: 'Client-image.png',
      stars: 5,
      name: 'Alice Smith',
      company: 'Gemini',
    },
    {
      testimonial: 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com',
      image: 'Client-image.png',
      stars: 5,
      name: 'Michael Brown',
      company: 'Amazon',
    },
    {
      testimonial: 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com',
      image: 'Client-image.png',
      stars: 5,
      name: 'Sarah Connor',
      company: 'Google',
    },
    {
      testimonial: 'This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com',
      image: 'Client-image.png',
      stars: 5,
      name: 'Chris Evans',
      company: 'LinkedIn',
    },
  ];

  return (
    <section className="testimonial-section">
      <h2 className="testimonial-heading">Testimonial</h2>
      <div className="cards-section">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
