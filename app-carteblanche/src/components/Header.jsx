
function MyHeader({ color, fontSizeHeader }) {
  const title = "Carte Blanche";
  const subTitle = "Vous pouvez explorer vos idées :";
  return (
    <div>
      <h1 style={{ color, fontSize: fontSizeHeader }}>{title}</h1>
      <h2>{subTitle}</h2>
    </div>
  );
}
export default MyHeader;