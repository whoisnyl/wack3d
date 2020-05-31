export default function Button({
  classNames,
  children,
  href,
  link,
  type,
  onClick,
  disabled,
  icon,
}) {
  if (href) {
    return (
      <a className={classNames} as={link} href={href}>
        {icon && <img src={icon} alt={children} />}
        {children}
      </a>
    );
  }
  return (
    <button
      className={classNames}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <img src={icon} alt={children} />}
      {children}
    </button>
  );
}
