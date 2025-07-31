function Landing() {
  const navigate = ReactRouterDOM.useNavigate();
  const [code, setCode] = React.useState('');

  const handleScan = () => {
    navigate('/claim');
  };

  return (
    <div className="flex flex-col items-center justify-center h-80 gap-4 text-center">
      <h1 className="text-2xl text-hala font-bold">Claim your Digital Product Passport</h1>
      <p className="text-gray-400">Scan your receipt to unlock authenticity, warranty, and resale value</p>
      <input value={code} onChange={e => setCode(e.target.value)} placeholder="Receipt code" className="p-2 rounded bg-gray-800" />
      <button onClick={handleScan} className="neon-button bg-hala text-black rounded px-4 py-2">Scan Receipt</button>
    </div>
  );
}

function App() {
  return (
    <ReactRouterDOM.BrowserRouter>
      <Header />
      <ReactRouterDOM.Routes>
        <ReactRouterDOM.Route path="/" element={<Landing />} />
        <ReactRouterDOM.Route path="/claim" element={<ClaimPage />} />
        <ReactRouterDOM.Route path="/wallet" element={<Wallet />} />
        <ReactRouterDOM.Route path="/admin" element={<AdminPanel />} />
      </ReactRouterDOM.Routes>
    </ReactRouterDOM.BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
