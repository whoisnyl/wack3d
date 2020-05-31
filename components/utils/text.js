export default function Text({ classNames, tag, children }) {
  return {
    p: <p className={`${classNames}`}>{children}</p>,
    label: (
      <label className={`${classNames ? classNames : ""}`}>{children}</label>
    ),
    span: <span className={`${classNames ? classNames : ""}`}>{children}</span>,
    default: <p>{children}</p>,
  }[tag];
}
