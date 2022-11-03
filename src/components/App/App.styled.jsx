import styled from '@emotion/styled';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  min-height: 100vh;
  background: radial-gradient(
      94.4% 1159.49% at 2% 83.64%,
      #07a8db 0%,
      rgba(7, 168, 219, 0) 100%
    ),
    linear-gradient(0deg, rgba(139, 140, 253, 0.5), rgba(139, 140, 253, 0.5)),
    radial-gradient(
      83.37% 83.37% at 50.13% 97.48%,
      #baeafa 41.67%,
      rgba(228, 244, 249, 0) 100%
    );
  overflow: hidden;
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
`;
