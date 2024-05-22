import { LargeButtonStyle, InlineButtonStyle } from "./CustomButton.style";

const InlineButton = (props) => {
  const { title, eventClick, url } = props;
  return (
    <InlineButtonStyle onClick={eventClick} href={url}>
      {title}
    </InlineButtonStyle>
  );
};

const LargeButton = (props) => {
  const { title, eventClick, button, url, as } = props;
  return (
    <LargeButtonStyle as={as} href={url} onClick={eventClick} button={button}>
      {title}
    </LargeButtonStyle>
  );
};

const CustomButton = (props) => {
  const { type } = props;
  switch (type) {
    case "inline":
      return <InlineButton {...props} />;
    default:
      return <LargeButton {...props} />;
  }
};

export default CustomButton;
