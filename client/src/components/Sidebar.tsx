function Sidebar() {
  return (
    <aside className="hidden min-h-[calc(100vh-73px)] w-60 border-r bg-white p-5 md:block">
      <nav className="space-y-2">
        <button className="w-full rounded-lg bg-blue-50 px-4 py-3 text-left font-medium text-blue-600">
          Dashboard
        </button>

        <button className="w-full rounded-lg px-4 py-3 text-left text-gray-600 hover:bg-gray-100">
          Courses
        </button>

        <button className="w-full rounded-lg px-4 py-3 text-left text-gray-600 hover:bg-gray-100">
          Assignments
        </button>

        <button className="w-full rounded-lg px-4 py-3 text-left text-gray-600 hover:bg-gray-100">
          Calendar
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;