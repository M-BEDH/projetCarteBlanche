
function MyHeader({ color }) {
  const title = "Carte Blanche";
  const subTitle = "Vous pouvez explorer vos idées :";
  return (
    <div>
      <h1 style={{ color }}>{title}</h1>
      <h2>{subTitle}</h2>
    </div>
  );
}
export default MyHeader;