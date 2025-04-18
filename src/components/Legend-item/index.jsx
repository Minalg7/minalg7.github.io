function LegendItem({ bgColor, color, nombre, action }) {
  return (
    <div className="legend-item" key={nombre}>
      <span className={`numero white ${bgColor}`}>{nombre}</span>
      <p className={color}>{action}</p>
    </div>
  );
}

export default LegendItem;
