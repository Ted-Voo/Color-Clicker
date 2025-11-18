export default function ColorBox({ color, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        width: "80px",
        height: "80px",
        backgroundColor: color,
        borderRadius: "8px",
        cursor: "pointer",
        border: "2px solid black",
      }}
    ></div>
  );
}
