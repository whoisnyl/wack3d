export default function Heading({ classNames, tag, children }) {
  return {
    h1: <h1 className={`h1 ${classNames}`}>{children}</h1>,
    h2: <h2 className={`h2 ${classNames}`}>{children}</h2>,
    h3: <h3 className={`h3 ${classNames}`}>{children}</h3>,
    h4: <h4 className={`h4 ${classNames}`}>{children}</h4>,
    h5: <h5 className={`h5 ${classNames}`}>{children}</h5>,
    h6: <h6 className={`h6 ${classNames}`}>{children}</h6>,
    default: <p>{children}</p>,
  }[tag];
}
