import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import {
  Container,
  Error,
  ErrorContainer,
  FlexContainer,
  Form,
  Heading,
  InnerContainer,
  Label,
  MainContainer,
  MessageArea,
  MessageContainer,
  MessageContainerHeading,
  MessageContainerText,
  MessageFlexContainer,
  MessageMainContainer,
  RadioContainer,
  RadioContainers,
  TopForm,
} from "./styles";
import { useState } from "react";
import CheckIcon from "../../assets/icons/icon-success-check.svg";
const Main = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<{
    firstName: string;
    secondName: string;
    email: string;
    message: string;
    checkbox: boolean;
    radio: boolean;
  }>({
    mode: "all",
  });
  function submit() {
    reset();
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  const [open, setOpen] = useState(false);

  return (
    <MainContainer>
      <InnerContainer>
        <Heading>Contact Us</Heading>
        <Form onSubmit={handleSubmit(submit)}>
          <TopForm>
            <Container>
              <Label>
                First Name *
                <ErrorContainer>
                  <Input
                    type="text"
                    {...register("firstName", {
                      required: "This field is required",
                    })}
                    error={!!errors.firstName}
                  />
                  <Error>{errors.firstName?.message}</Error>
                </ErrorContainer>
              </Label>
              <Label>
                Last Name *
                <ErrorContainer>
                  <Input
                    type="text"
                    {...register("secondName", {
                      required: "This field is required",
                    })}
                    error={!!errors.secondName}
                  />
                  <Error>{errors.secondName?.message}</Error>
                </ErrorContainer>
              </Label>
            </Container>
            <Label>
              Email Address *
              <ErrorContainer>
                <Input
                  type="email"
                  {...register("email", {
                    required: "This field is required",
                  })}
                  error={!!errors.email}
                />
                <Error>{errors.email?.message}</Error>
              </ErrorContainer>
            </Label>
            <RadioContainers>
              Query Type *
              <Container>
                <RadioContainer>
                  <Input
                    type="radio"
                    {...register("radio", {
                      required: "This field is required",
                    })}
                  />
                  General Enquiry
                </RadioContainer>
                <RadioContainer>
                  <Input
                    type="radio"
                    {...register("radio", {
                      required: "This field is required",
                    })}
                  />
                  Support Request
                </RadioContainer>
                <Error>{errors.radio?.message}</Error>
              </Container>
            </RadioContainers>
            <Label>
              Message
              <ErrorContainer>
                <MessageArea
                  {...register("message", {
                    required: "This field is required",
                  })}
                  error={!!errors.message}
                />
                <Error>{errors.message?.message}</Error>
              </ErrorContainer>
            </Label>
          </TopForm>
          <ErrorContainer>
            <FlexContainer>
              <Input
                type="checkbox"
                {...register("checkbox", {
                  required:
                    "To submit this form, please consent to being contacted",
                })}
              />
              I consent to being contacted by the team *
            </FlexContainer>
            <Error>{errors.checkbox?.message}</Error>
          </ErrorContainer>
          <Button variant="primary">Submit</Button>
        </Form>
      </InnerContainer>
      {open && (
        <MessageMainContainer onClick={handleClose}>
          <MessageContainer>
            <MessageFlexContainer>
              <CheckIcon />
              <MessageContainerHeading>Message Sent!</MessageContainerHeading>
            </MessageFlexContainer>
            <MessageContainerText>
              Thanks for completing the form. We’ll be in touch soon!
            </MessageContainerText>
          </MessageContainer>
        </MessageMainContainer>
      )}
    </MainContainer>
  );
};

export default Main;
