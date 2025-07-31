function ClaimPage() {
  const [items, setItems] = React.useState([]);
  const [added, setAdded] = React.useState([]);

  React.useEffect(() => {
    fetch('data/fakeReceipt.json')
      .then(res => res.json())
      .then(data => setItems(data.items));
  }, []);

  const addItem = (item) => {
    window.walletItems = window.walletItems || [];
    window.walletItems.push(item);
    localStorage.setItem('wallet', JSON.stringify(window.walletItems));
    setAdded([...added, item.product_name]);
  };

  return (
    <div className="p-4 animate-fadeIn">
      <h2 className="text-xl mb-4">Receipt</h2>
      {items.map(item => (
        <div key={item.product_name} className="border border-gray-700 rounded p-4 m-2">
          <p className="text-hala font-semibold">{item.product_name}</p>
          <p>{item.material} - {item.origin}</p>
          <button className="mt-2 neon-button bg-hala text-black rounded px-4 py-1" onClick={() => addItem(item)} disabled={added.includes(item.product_name)}>
            {added.includes(item.product_name) ? 'Added' : 'Add to HALA Wallet'}
          </button>
        </div>
      ))}
    </div>
  );
}

window.ClaimPage = ClaimPage;
