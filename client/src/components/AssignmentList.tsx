const assignments = [
  {
    title: "Data Structures Assignment",
    course: "COP 3503",
    dueDate: "2026-08-14",
  },
  {
    title: "Calculus Homework",
    course: "MAC 2312",
    dueDate: "2026-08-15",
  },
  {
    title: "Physics Lab",
    course: "PHY 2048",
    dueDate: "2026-08-17",
  },
];

function formatDueDate(dateString: string) {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", {
    weekday: "long",
  });
}


function AssignmentList() {
  return (
    <section className="mt-8 rounded-xl bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">
          Upcoming Assignments
        </h3>

        <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
          View all
        </button>
      </div>

      <div className="mt-5 divide-y">
        {assignments.map((assignment) => (
        <div
            key={assignment.title}
            className="flex items-center justify-between py-4"
        >
            <div>
            <p className="font-medium text-gray-900">
                {assignment.title}
            </p>

            <p className="text-sm text-gray-500">
                {assignment.course}
            </p>
            </div>

            <span className="text-sm font-medium text-gray-500">
            {formatDueDate(assignment.dueDate)}
            </span>
        </div>
        ))}
      </div>
    </section>
  );
}

export default AssignmentList;