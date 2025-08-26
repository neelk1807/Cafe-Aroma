import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-yellow-100 border-b-4 border-yellow-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-brown-900">
          <Link href="/">Café Aroma</Link>
        </div>

        {/* Menu */}
        <nav className="space-x-6">
          <Link
            href="/"
            className="menu-text text-brown-700 hover:text-brown-900"
          >
            Home
          </Link>
          <Link href="/about" className="text-brown-700 hover:text-brown-900">
            About
          </Link>
          <Link href="/menu" className="text-brown-700 hover:text-brown-900">
            Menu
          </Link>
          <Link href="/contact" className="text-brown-700 hover:text-brown-900">
            Contact
          </Link>
        </nav>

        {/* Search */}
        <div>
          <button className="login-btn">
            <Link
              href="/login"
              className="text-brown-700 hover:text-brown-900 bg-amber-900 rounded-3xl px-4 py-2 text-white"
            >
              Login
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
}
