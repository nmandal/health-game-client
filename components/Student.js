

const Student = ({student}) => {
  return (
    <div className="bg-white">


        <div className="mt-16">
          <h2 className="sr-only">Recent orders</h2>

          <div className="space-y-16 sm:space-y-24">
              <div>


                <div className="mb-2">
            <div
              className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
            >
              <div className="aspect-w-3 aspect-h-4 bg-gray-200 sm:aspect-none sm:h-96">
                <img
                  src={student.imageURI}
                  alt={student.name}
                  className="w-full h-full object-center object-cover sm:w-full sm:h-full"
                />
              </div>
              <div className="flex-1 p-4 space-y-2 flex flex-col">
                <h3 className="text-sm font-medium text-gray-900">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {student.name}
                </h3>
                <p className="text-sm text-gray-500">Just a regular guy trying to be healthy and recover from a broken elbow.</p>
              </div>
            </div>
        </div>

                <div className="bg-gray-50 px-4 py-6 sm:rounded-lg sm:p-6 md:flex md:items-center md:justify-between md:space-x-6 lg:space-x-8">
                  <dl className="divide-y divide-gray-200 space-y-4 text-sm text-gray-600 flex-auto md:divide-y-0 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-6 lg:w-1/2 lg:flex-none lg:gap-x-8">
                    <div className="flex justify-between md:block">
                      <dt className="font-medium text-gray-900">Sleep</dt>
                      <dd className="md:mt-1">{student.sleep}</dd>
                    </div>
                    <div className="flex justify-between pt-4 md:block md:pt-0">
                      <dt className="font-medium text-gray-900">Nutrition</dt>
                      <dd className="md:mt-1">
                      {student.nutrition}
                      </dd>
                    </div>
                    <div className="flex justify-between pt-4 md:block md:pt-0">
                      <dt className="font-medium text-gray-900">Activity</dt>
                      <dd className="md:mt-1">
                      {student.activity}
                      </dd>
                    </div>
                  </dl>
                  <div className="space-y-4 mt-6 sm:flex sm:space-x-4 sm:space-y-0 md:mt-0">
                    <a
                      // href={order.href}
                      className="w-full flex items-center justify-center bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 md:w-auto"
                    >
                      My Framework
                      <span className="sr-only"></span>
                    </a>
                    <a
                      // href={order.invoiceHref}
                      className="w-full flex items-center justify-center bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 md:w-auto"
                    >
                      Health Data
                      <span className="sr-only"></span>
                    </a>
                  </div>
                </div>


              </div>
          </div>
        </div>
    </div>
  )
}

export default Student;