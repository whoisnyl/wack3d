export default function Loading({ status, overlay }) {
  return (
    <div
      className={`loading ${status ? "show" : ""}`}
      style={{ backgroundColor: overlay ? "rgba(0,0,0,0.65)" : "transparent" }}
    >
      <img src="/images/logo-icon-medium.png" alt="WACK3D" />
    </div>
  );
}
