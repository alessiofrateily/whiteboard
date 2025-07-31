const { Link } = ReactRouterDOM;

function Header() {
  return (
    <nav className="p-4 flex gap-4 text-hala">
      <Link className="hover:underline" to="/">Home</Link>
      <Link className="hover:underline" to="/wallet">Wallet</Link>
      <Link className="hover:underline" to="/admin">Admin</Link>
    </nav>
  );
}

window.Header = Header;
