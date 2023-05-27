import React from 'react';
import { useSelector } from 'react-redux';

const Welcome = () => {
  const formData = useSelector(state => state.formData);

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
};

export default Welcome;
