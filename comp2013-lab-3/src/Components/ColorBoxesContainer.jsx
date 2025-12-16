import ColorBox from "./ColorBox";

export default function ColorBoxesContainer({ colors }) {
  return (
    <div className="ColorBoxesContainer">
      {colors.map((index) => (
        <ColorBox key={index} colors={colors} />
      ))}
    </div>
  );
}
