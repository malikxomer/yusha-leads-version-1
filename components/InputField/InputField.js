import InputFieldStyle from "./InputField.style";

const InputField = (props) => {
  const {
    label,
    placeholder,
    area,
    type,
    name,
    onChange,
    value,
    onBlur,
    errors,
    touched,
  } = props;

  return (
    <InputFieldStyle area={area}>
      <label className="field-label">{label}</label>

      {!type && (
        <input
          name={name}
          type="text"
          className="input-field"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}

      {type  === "number" && (
        <input
          name={name}
          type="number"
          className="input-field"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}

      {type === "textarea" && (
        <textarea
          className="input-field textarea-field"
          rows="4"
          cols="50"
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}

      {errors && touched ? <div className="error-message">{errors}</div> : null}
    </InputFieldStyle>
  );
};

export default InputField;
