import React, { useState } from 'react';
import { useDispatch,  } from 'react-redux';
import { saveFormData } from '../redux/actions';

const Form = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    bootcamp: '',
    birthDate: '',
    birthPlace: '',
    address: '',
    password: '',
    confirmPassword: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      dispatch(saveFormData(formData));
      setSubmitted(true);
    } else {
      alert('Password and Confirm Password do not match.');
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2>Step 1</h2>
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                required
              />
            </div>
            <div>
              <span>Bootcamp:</span>
              <label>
                <input
                  type="radio"
                  name="bootcamp"
                  value="UI/UX"
                  checked={formData.bootcamp === 'UI/UX'}
                  onChange={handleChange}
                  required
                />
                UI/UX
              </label>
              <label>
                <input
                  type="radio"
                  name="bootcamp"
                  value="Backend Engineer"
                  checked={formData.bootcamp === 'Backend Engineer'}
                  onChange={handleChange}
                />
                Backend Engineer
              </label>
              <label>
                <input
                  type="radio"
                  name="bootcamp"
                  value="Frontend Engineer"
                  checked={formData.bootcamp === 'Frontend Engineer'}
                  onChange={handleChange}
                />
                Frontend Engineer
              </label>
              <label>
                <input
                  type="radio"
                  name="bootcamp"
                  value="Digital Marketing"
                  checked={formData.bootcamp === 'Digital Marketing'}
                  onChange={handleChange}
                />
                Digital Marketing
              </label>
            </div>
            <button onClick={() => setStep(2)}>Next</button>
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Step 2</h2>
            <div>
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="birthPlace"
                value={formData.birthPlace}
                onChange={handleChange}
                placeholder="Birth Place"
                required
              />
            </div>
            <div>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                required
              />
            </div>
            <button onClick={() => setStep(3)}>Next</button>
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Step 3</h2>
            <div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
              />
            </div>
            <div>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                required
              />
            </div>
            <button onClick={() => setStep(3)} type="submit">Submit</button>
          </div>
        );
      default:
        return null;
    }
  };

  const renderWelcome = () => {
    if (submitted && formData.password === formData.confirmPassword) {
      return (
        <div>
          <h2>Welcome</h2>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Phone Number: {formData.phoneNumber}</p>
          <p>Bootcamp: {formData.bootcamp}</p>
          <p>Birth Date: {formData.birthDate}</p>
          <p>Birth Place: {formData.birthPlace}</p>
          <p>Address: {formData.address}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {renderStep()}
      </form>
      {renderWelcome()}
    </div>
  );
};

export default Form;
