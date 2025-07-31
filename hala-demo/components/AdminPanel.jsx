function AdminPanel() {
  const [rows, setRows] = React.useState([]);

  const parseCSV = (text) => {
    const lines = text.trim().split('\n');
    const headers = lines.shift().split(',');
    return lines.map(l => {
      const obj = {};
      l.split(',').forEach((val, idx) => { obj[headers[idx]] = val; });
      return obj;
    });
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setRows(parseCSV(reader.result));
    reader.readAsText(file);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Admin Upload</h2>
      <input type="file" accept=".csv" onChange={handleFile} className="mb-4" />
      {rows.map((row, idx) => (
        <div key={idx} className="border border-gray-700 rounded p-4 m-2 bg-gray-900">
          <h3 className="text-hala font-bold">{row.product_name}</h3>
          <p>{row.material} - {row.origin} - {row.date}</p>
          <p>Warranty: {row.warranty}</p>
          <div className="mt-2 bg-gray-800 text-center p-2 rounded">QR CODE</div>
        </div>
      ))}
    </div>
  );
}

window.AdminPanel = AdminPanel;
