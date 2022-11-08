import "./button.scss";

const Button = ({
  children,
  size = "normal",
  appearance = "default",
  ...rest
}) => {
  return (
    <button className={`v-button ${appearance} ${size}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
