function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-600">
          KnightPlan
        </h1>

        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
            LK
          </div>

          <span className="font-medium text-gray-700">
            Latrell
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;