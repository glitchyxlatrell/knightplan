import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import StatCard from "./components/StatCard";
import AssignmentList from "./components/AssignmentList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="mx-auto flex max-w-7xl">
        <Sidebar />

        <main className="flex-1 p-6">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Good afternoon, Latrell
            </h2>

            <p className="mt-1 text-gray-500">
              Here's what's happening with your academics.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <StatCard
              title="Tasks This Week"
              value="5"
            />

            <StatCard
              title="Due Soon"
              value="2"
            />

            <StatCard
              title="Completion Rate"
              value="72%"
            />
          </div>

          <AssignmentList />
        </main>
      </div>
    </div>
  );
}

export default App;