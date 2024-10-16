import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addBooking } from '../redux/bookingSlice';
import styled from 'styled-components';

interface FormValues {
  protocolName: string;
  email: string;
  date: string;
  details: string;
}

const BookingForm: React.FC = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    dispatch(addBooking(data));
    alert(`Booking for ${data.protocolName} submitted successfully!`);
  };

  return (
    <FormContainer>
      <h3>Book a Security Review</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Protocol Name"
          {...register('protocolName', { required: 'Protocol name is required' })}
        />
        {errors.protocolName && <ErrorMessage>{errors.protocolName.message}</ErrorMessage>}

        <Input
          type="email"
          placeholder="Email"
          {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/, message: 'Invalid email address' } })}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

        <Input
          type="date"
          {...register('date', { required: 'Date is required' })}
        />
        {errors.date && <ErrorMessage>{errors.date.message}</ErrorMessage>}

        <Textarea
          placeholder="Additional details"
          {...register('details', { required: 'Details are required' })}
        />
        {errors.details && <ErrorMessage>{errors.details.message}</ErrorMessage>}

        <SubmitButton type="submit">Submit Booking</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default BookingForm;


// Styled Components
const FormContainer = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  background-color: #61dafb;
  color: #282c34;
  border-radius: 5px;
  border: none;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.8rem;
`;









