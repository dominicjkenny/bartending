import { useState } from 'react';
import axios from 'axios';

export const metadata = {
  title: 'Upscale Mobile Bartending | Contact',
  description: 'Contact us for a custom quote for your event.',
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    guests: '',
    additionalInfo: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/contact', formData);
    alert('Your request has been submitted!');
  };

  return (
    <section>
      <h1>Request a Quote</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {/* Other form fields */}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
