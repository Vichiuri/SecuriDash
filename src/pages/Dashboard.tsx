// import React from 'react';
// import styled from 'styled-components';

// const Dashboard: React.FC = () => {
//   return (
//     <Container>
//       <Title>SecuriDash - Dashboard</Title>
//       <SubTitle>Book a Security Review for your Protocol</SubTitle>
//       <Placeholder>
//         <p>Feature to book a review coming soon...</p>
//       </Placeholder>
//     </Container>
//   );
// };

// export default Dashboard;

// // Styled Components
// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   background-color: #f0f2f5;
// `;

// const Title = styled.h1`
//   color: #333;
//   font-size: 2.5rem;
// `;

// const SubTitle = styled.h2`
//   color: #555;
//   font-size: 1.5rem;
//   margin-top: 1rem;
// `;

// const Placeholder = styled.div`
//   margin-top: 2rem;
//   padding: 1rem 2rem;
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   background-color: #fff;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// `;





import React from 'react';
import styled from 'styled-components';
import BookingForm from '../components/BookingForm';
import ProtocolHealth from '../components/ProtocolHealth';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Title>SecuriDash - Dashboard</Title>
      <SubTitle>Book a Security Review for your Protocol</SubTitle>

      {/* Protocol Health Overview Form */}
      <Section>
        <ProtocolHealth />
      </Section>

      {/* Security Review Booking Form */}
      <Section>
        <BookingForm />
      </Section>
    </Container>
  );
};

export default Dashboard;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #f0f2f5;
`;

const Title = styled.h1`
  color: #333;
  font-size: 2.5rem;
`;

const SubTitle = styled.h2`
  color: #555;
  font-size: 1.5rem;
  margin-top: 1rem;
`;

const Section = styled.div`
  margin-top: 2rem;
  padding: 1rem 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 600px;
`;
