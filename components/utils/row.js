export default function Row({ classNames, children }) {
  return <div className={`row ${classNames}`}>{children}</div>;
}
