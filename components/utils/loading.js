export default function Loading({ status, overlay }) {
  return (
    <div
      className={`loading ${status ? "show" : ""} ${
        overlay ? "bg-dark" : "bg-transparent"
      }`}
    />
  );
}
