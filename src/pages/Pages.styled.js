import styled from 'styled-components';

export const HomeWrapper = styled.div`
  min-height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(
    circle,
    rgba(232, 232, 232, 1) 0%,
    rgba(93, 93, 93, 1) 100%
  );
`;

export const LogInWrapper = styled.div`
  min-height: calc(100vh - 50px);

  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: radial-gradient(
    circle,
    rgba(232, 232, 232, 1) 0%,
    rgba(93, 93, 93, 1) 100%
  );
`;
export const RegisterWrapper = styled.div`
  min-height: calc(100vh - 50px);
  align-items: flex-start;
  display: flex;
  justify-content: center;
  background: radial-gradient(
    circle,
    rgba(232, 232, 232, 1) 0%,
    rgba(93, 93, 93, 1) 100%
  );
`;

export const ContactsWrapper = styled.div`
  min-height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background: radial-gradient(
    circle,
    rgba(232, 232, 232, 1) 0%,
    rgba(93, 93, 93, 1) 100%
  );
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 48;
  text-align: center;
`;
