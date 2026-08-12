interface Assignment {
  title: string;
  course: string;
  dueDate: string;
}

type Urgency = "overdue" | "today" | "soon" | "normal";

interface DueDateInfo {
  label: string;
  urgency: Urgency;
}

const assignments: Assignment[] = [
  {
    title: "Data Structures Assignment",
    course: "COP 3503",
    dueDate: "2026-08-11",
  },
  {
    title: "Calculus Homework",
    course: "MAC 2312",
    dueDate: "2026-08-12",
  },
  {
    title: "Physics Lab",
    course: "PHY 2048",
    dueDate: "2026-08-13",
  },
];

function formatDueDate(dateString: string): DueDateInfo {
  const today = new Date();

  const [year, month, day] = dateString.split("-").map(Number);

  const dueDate = new Date(year, month - 1, day);

  const todayDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  const dueDateOnly = new Date(
    dueDate.getFullYear(),
    dueDate.getMonth(),
    dueDate.getDate()
  );

  const differenceInMilliseconds =
    dueDateOnly.getTime() - todayDate.getTime();

  const differenceInDays =
    differenceInMilliseconds / (1000 * 60 * 60 * 24);

  if (differenceInDays < 0) {
    return {
      label: "Overdue",
      urgency: "overdue",
    };
  }

  if (differenceInDays === 0) {
    return {
      label: "Today",
      urgency: "today",
    };
  }

  if (differenceInDays === 1) {
    return {
      label: "Tomorrow",
      urgency: "soon",
    };
  }

  return {
    label: dueDate.toLocaleDateString("en-US", {
      weekday: "long",
    }),
    urgency: "normal",
  };
}

function getUrgencyColor(urgency: Urgency) {
  if (urgency === "overdue") {
    return "text-red-600";
  }

  if (urgency === "today") {
    return "text-orange-600";
  }

  if (urgency === "soon") {
    return "text-yellow-600";
  }

  return "text-gray-500";
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
        {assignments.map((assignment) => {
        const dueDateInfo = formatDueDate(assignment.dueDate);

        return (
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

        <span
        className={`text-sm font-medium ${getUrgencyColor(
            dueDateInfo.urgency
        )}`}
        >
        {dueDateInfo.label}
        </span>
        </div>
    );
    })}
      </div>
    </section>
  );
}

export default AssignmentList;