export default function Container({ classNames, fluid, children, id, styles }) {
  return (
    <div
      id={id}
      className={`container ${fluid ? "container--fluid" : ""} ${classNames}`}
      style={styles}
    >
      <div className={`${!fluid ? "container-inner" : ""}`}>{children}</div>
    </div>
  );
}
