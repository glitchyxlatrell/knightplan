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
        <div className="flex items-center justify-between py-4">
          <div>
            <p className="font-medium text-gray-900">
              Data Structures Assignment
            </p>

            <p className="text-sm text-gray-500">
              COP 3503
            </p>
          </div>

          <span className="text-sm font-medium text-red-500">
            Tomorrow
          </span>
        </div>

        <div className="flex items-center justify-between py-4">
          <div>
            <p className="font-medium text-gray-900">
              Calculus Homework
            </p>

            <p className="text-sm font-medium text-orange-500">
              Mac 2312
            </p>
          </div>

          <span className="text-sm font-medium text-orange-500">
            Friday
          </span>
        </div>

        <div className="flex items-center justify-between py-4">
          <div>
            <p className="font-medium text-gray-900">
              Physics Lab
            </p>

            <p className="text-sm text-gray-500">
              PHY 2048
            </p>
          </div>

          <span className="text-sm font-medium text-gray-500">
            Monday
          </span>
        </div>
      </div>
    </section>
  );
}

export default AssignmentList;