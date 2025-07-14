import { useState, ChangeEvent, FormEvent } from 'react';
import './App.css';

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  costGuess: string;
  spidrPin: string;
}

const App = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    costGuess: '',
    spidrPin: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'spidrPin') {
      const digits = value.replace(/\D/g, '').slice(0, 16);
      const formatted = digits.match(/.{1,4}/g)?.join('-') ?? '';
      setFormData((prev) => ({ ...prev, [name]: formatted }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <h2>Guess the Cost</h2>
        <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
        <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
        <input name="phone" placeholder="Phone Number" type="tel" value={formData.phone} onChange={handleChange} />
        <input name="email" placeholder="Email Address" type="email" value={formData.email} onChange={handleChange} />
        <input name="costGuess" placeholder="Guess the Air Fryer’s Cost ($)" type="number" value={formData.costGuess} onChange={handleChange} />
        <input name="spidrPin" placeholder="####-####-####-####" value={formData.spidrPin} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
