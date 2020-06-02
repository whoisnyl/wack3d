import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Input({
  children,
  classNames,
  variance,
  type,
  placeholder,
  label,
  id,
  name,
  icon,
  changeEvent,
  disabled,
}) {
  return (
    <div className={`form-group ${classNames}`}>
      {label && <label htmlFor={id}>{children}</label>}
      <input
        className={`form-control form-control--${variance} ${
          icon ? "form-control--icon" : ""
        }`}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={changeEvent}
        disabled={disabled}
      />
      {icon && (
        <span className="input-icon">
          <FontAwesomeIcon icon={icon} />
        </span>
      )}
    </div>
  );
}
