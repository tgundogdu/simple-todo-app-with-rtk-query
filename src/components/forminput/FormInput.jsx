import "./forminput.scss";

const FormInput = ({ label, description, error, errorMessage, children }) => {
  return (
    <div className={`v-form-input ${error ? "v-error" : ""}`}>
      {label ? <label className="v-label">{label}</label> : ""}
      {description ? <p className="v-description">{description}</p> : ""}
      {children}
      {errorMessage ? (
        <span className="v-error-message">{errorMessage}</span>
      ) : (
        ""
      )}
    </div>
  );
};

export default FormInput;
