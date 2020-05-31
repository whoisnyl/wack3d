export default function Section({ classNames, children }) {
  return (
    <section className={`section ${classNames ? classNames : ""}`}>
      {children}
    </section>
  );
}
