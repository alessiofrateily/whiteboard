function Wallet() {
  const [items, setItems] = React.useState([]);
  const [resaleInfo, setResaleInfo] = React.useState(null);

  React.useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('wallet') || '[]');
    window.walletItems = stored;
    setItems(stored);
  }, []);

  const handleResell = (item) => {
    setResaleInfo({ item, price: 100, brand: 90, hala: 10, newOwner: Math.random().toString(36).substring(2,8) });
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">HALA Wallet</h2>
      {items.map((item, idx) => (
        <DPPCard key={idx} item={item} onResell={handleResell} />
      ))}
      {resaleInfo && (
        <div className="p-4 mt-4 border border-gray-700 rounded bg-gray-900">
          <h3 className="text-hala font-bold">Resale Summary</h3>
          <p>Item: {resaleInfo.item.product_name}</p>
          <p>Price: {resaleInfo.price}€ (Brand {resaleInfo.brand}€ / HALA {resaleInfo.hala}€)</p>
          <p>New Owner Code: <span className="text-hala">{resaleInfo.newOwner}</span></p>
        </div>
      )}
    </div>
  );
}

window.Wallet = Wallet;
