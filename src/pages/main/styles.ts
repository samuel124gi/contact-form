import styled from "@emotion/styled";
import colors from "../../styles/colors";

interface InputProps {
  error?: boolean;
}
export const MainContainer = styled.div`
  background-color: ${colors.primary01};
  padding: 100px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 30px;
  width: 650px;
  max-width: 600px;
  margin: 0px auto;
  gap: 24px;
  background: ${colors.white};
  border-radius: 16px;
`;
export const Heading = styled.h1`
  font-size: 32px;
  font-weight: bold;
  letter-spacing: -1px;
  line-height: 100%;
  color: ${colors.primary02};
`;

export const TopForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 18px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
`;

export const RadioContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  border-radius: 8px;
  align-items: center;
  border: 1px solid ${colors.primary02};
  height: 51px;
  padding: 0px 24px;
  gap: 12px;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const Label = styled.label`
  display: flex;
  gap: 8px;
  flex-direction: column;
  color: ${colors.primary02};
  font-size: 16px;
  line-height: 150%;
`;

export const ErrorContainer = styled.label`
  display: flex;
  flex-direction: column;
`;
export const Error = styled.p`
  font-size: 16px;
  line-height: 150%;
  color: ${colors.secondary03};
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  width: 100%;
`;

export const RadioContainers = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;
export const MessageArea = styled.textarea<InputProps>`
  width: 100%;
  height: 105px;
  border-radius: 8px;
  border: 1.5px solid ${({ error }) => (error ? "red" : "#2A4144")};
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: top;
  padding: 12px 18px;
`;

export const MessageMainContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  background: transparent;
`;

export const MessageContainer = styled.div`
  position: absolute;
  top: 10px;
  display: flex;
  flex-direction: column;
  background: ${colors.primary02};
  border-radius: 12px;
  padding: 24px;
`;

export const MessageFlexContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
export const MessageContainerHeading = styled.div`
  color: ${colors.white};
  font-weight: bold;
  font-size: 18px;
  line-height: 150%;
`;

export const MessageContainerText = styled.div`
  color: ${colors.primary01};
  font-weight: bold;
  font-size: 18px;
  line-height: 150%;
`;
