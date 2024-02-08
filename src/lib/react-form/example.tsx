import React from 'react';
import useExtendedForm from './useExtendedForm';

type FormValues = {
  name:string;
};

const MyForm: React.FC = () => {
  const { handleSubmit, customMethod,getInputProps } = useExtendedForm<FormValues>({
    onSubmit: (data) => {
      console.log('Form submitted with data:', data);
      // Add any additional logic you need on form submit
    },
  });

  return (
    <form onSubmit={handleSubmit(console.log)}>
      {/* Your form fields with register */}
      <input {...getInputProps('name')} />
      <button type="submit">Submit</button> <br/>


      <button type="button" onClick={customMethod}>
        Custom Method
      </button>
    </form>
  );
};

export default MyForm;
