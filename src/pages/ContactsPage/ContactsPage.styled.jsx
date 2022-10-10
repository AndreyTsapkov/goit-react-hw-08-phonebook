import styled from '@emotion/styled';

export const ContactsPageSection = styled.section`
  min-width: 683px;

  &:last-child {
    margin-left: 100px;
  }
`;

export const ContactsPageMainTitle = styled.h1`
  font-weight: 700;
  font-size: 48px;
  line-height: 59px;

  color: #38005a;

  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
  text-shadow: 0px 4px 4px rgba(255, 255, 255, 0.4);

  margin-left: 85px;
  margin-top: 60px;
  margin-bottom: 40px;
`;

export const ContactsPageTitle = styled.h2`
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;

  color: #38005a;

  -webkit-text-stroke: 0.8px solid rgba(255, 255, 255, 0.3);
  text-shadow: 0px 4px 4px rgba(255, 255, 255, 0.4);

  margin-top: 70px;
  margin-bottom: 40px;
`;

export const DesignDiv = styled.div`
  position: relative;
  display: flex;
`;

export const Circle = styled.div`
  position: absolute;
  width: ${props => props.width};
  height: ${props => props.height};
  color: ${props => props.color};
  opacity: ${props => props.opacity};
  margin-top: ${props => props.marginTop};
  margin-left: ${props => props.marginLeft};
  border-radius: 50%;
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
`;
