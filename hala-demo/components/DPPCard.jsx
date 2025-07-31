function DPPCard({ item, onResell }) {
  return (
    <div className="border border-gray-700 rounded p-4 m-2 bg-gray-900">
      <h3 className="text-lg text-hala font-bold mb-2">{item.product_name}</h3>
      <p>Material: {item.material}</p>
      <p>Origin: {item.origin}</p>
      <p>Production Date: {item.date}</p>
      <p>Warranty: {item.warranty}</p>
      {onResell && (
        <button className="mt-2 neon-button bg-hala text-black rounded px-4 py-1" onClick={() => onResell(item)}>
          Resell
        </button>
      )}
    </div>
  );
}

window.DPPCard = DPPCard;
