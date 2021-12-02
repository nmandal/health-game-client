
import Student from '../components/Student'

const orders = [
  {
    href: '#',
    invoiceHref: '#',
    products: [
      {
        id: 1,
        name: 'Ally Love',
        price: '$95.00',
        color: 'Brass puzzle in the shape of a jack with overlapping rounded posts.',
        size: 'Peloton instructor',
        imageSrc: 'https://i.imgur.com/iUii00W.jpeg',
        imageAlt: 'Ally Love picture',
        techniqueOne: "Barre",
        techniqueTwo: "Pilates",
        techniqueThree: "Tabata",
        step: 4
      },
      // More products...
    ],
  },
  {
    products: [
      {
        id: 1,
        name: 'Matthew Walker',
        price: '$95.00',
        color: 'Brass puzzle in the shape of a jack with overlapping rounded posts.',
        size: 'Sleep researcher',
        imageSrc: 'https://i.imgur.com/mmBH3Rf.jpeg',
        imageAlt: 'Brass puzzle in the shape of a jack with overlapping rounded posts.',
        techniqueOne: "8 hours of sleep",
        techniqueTwo: "Consistent sleep schedule",
        techniqueThree: "Mindful substance consumption",
        step: 3
      },
      // More products...
    ],
  },
  {
    number: '4376',
    status: 'Delivered on January 22, 2021',
    href: '#',
    invoiceHref: '#',
    products: [
      {
        id: 1,
        name: 'Peter Attia',
        href: '#',
        price: '$95.00',
        color: 'Brass puzzle in the shape of a jack with overlapping rounded posts.',
        size: 'Longevity doctor',
        imageSrc: 'https://i.imgur.com/hb3k67H.jpeg',
        imageAlt: 'Brass puzzle in the shape of a jack with overlapping rounded posts.',
        techniqueOne: "Zone II",
        techniqueTwo: "Nutrition levers",
        techniqueThree: "DNS",
        step: 2
      },
      // More products...
    ],
  },
  {
    number: '4376',
    status: 'Delivered on January 22, 2021',
    href: '#',
    invoiceHref: '#',
    products: [
      {
        id: 1,
        name: 'Will Tennyson',
        href: '#',
        price: '$95.00',
        color: 'Brass puzzle in the shape of a jack with overlapping rounded posts.',
        size: 'Fitness YouTuber',
        imageSrc: 'https://i.imgur.com/ALrNi9W.png',
        imageAlt: 'Brass puzzle in the shape of a jack with overlapping rounded posts.',
        techniqueOne: "Chest day",
        techniqueTwo: "10k steps",
        techniqueThree: "Meal logging",
        step: 1
      },
      // More products...
    ],
  },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {

  return (
    <div className="bg-white">

      <main className="max-w-3xl mx-auto px-4 py-16 sm:px-6 sm:pt-24 sm:pb-32 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">Health Game</h1>
          <p className="mt-2 text-sm text-gray-500">
            Team up to learn proper health.
          </p>
        </div>

        <Student />

        <div className="mt-12 space-y-16 sm:mt-16">
          {orders.map((order) => (
            <section key={order.number} aria-labelledby={`${order.number}-heading`}>
              <div className="space-y-1 md:flex md:items-baseline md:space-y-0 md:space-x-4">
                <h2 id={`${order.number}-heading`} className="text-lg font-medium text-gray-900 md:flex-shrink-0">
                  Your character
                </h2>
                <div className="space-y-5 md:flex-1 md:min-w-0 sm:flex sm:items-baseline sm:justify-between sm:space-y-0">
                  <p className="text-sm font-medium text-gray-500">Instruct the student with one of your health techniques</p>
                  {/* <div className="flex text-sm font-medium">
                    <a href={order.href} className="text-indigo-600 hover:text-indigo-500">
                      Manage order
                    </a>
                    <div className="border-l border-gray-200 ml-4 pl-4 sm:ml-6 sm:pl-6">
                      <a href={order.invoiceHref} className="text-indigo-600 hover:text-indigo-500">
                        View Invoice
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>

              <div className="mt-6 -mb-6 flow-root border-t border-gray-200 divide-y divide-gray-200">
                {order.products.map((product) => (
                  <div>
                  <div key={product.id} className="py-6 sm:flex">
                    <div className="flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="flex-none w-20 h-20 rounded-md object-center object-cover sm:w-48 sm:h-48"
                      />
                      <div className="pt-1.5 min-w-0 flex-1 sm:pt-0">
                        <h3 className="text-sm font-medium text-gray-900">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-500 truncate">
                          <span>{product.size}</span>{' '}
                          {/* <span className="mx-1 text-gray-400" aria-hidden="true">
                            &middot;
                          </span>{' '}
                          <span>{product.color}</span> */}
                        </p>
                        {/* <p className="mt-1 font-medium text-gray-900">{product.price}</p> */}
                      </div>
                    </div>
                    <div className="mt-6 space-y-4 sm:mt-0 sm:ml-6 sm:flex-none sm:w-40">
                      <button
                        type="button"
                        className="w-full flex items-center justify-center bg-indigo-600 py-2 px-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-full sm:flex-grow-0"
                      >
                        {product.techniqueOne}
                      </button>
                      <button
                        type="button"
                        className="w-full flex items-center justify-center bg-indigo-100 py-2 px-2.5 border transparent rounded-md shadow-sm text-sm font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-full sm:flex-grow-0"
                      >
                        {product.techniqueTwo}
                      </button>
                      <button
                        type="button"
                        className="w-full flex items-center justify-center bg-white py-2 px-2.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-full sm:flex-grow-0"
                      >
                        {product.techniqueThree}
                      </button>


                    </div>


                  </div>
                  
                  <p className="font-medium text-gray-900 mt-6 md:mt-10">
                    Energy levels
                  </p>
                  <div className="mt-2">
                    <div className="bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-2 bg-indigo-600 rounded-full"
                        style={{ width: `calc((${product.step} * 2 + 1) / 8 * 100%)` }}
                      />
                    </div>
                    <div className="hidden sm:grid grid-cols-4 font-medium text-gray-600 mt-6">
                      <div className="text-indigo-600"></div>
                      <div className={classNames(product.step > 0 ? 'text-indigo-600' : '', 'text-center')}>
                        
                      </div>
                      <div className={classNames(product.step > 1 ? 'text-indigo-600' : '', 'text-center')}>
                        
                      </div>
                      <div className={classNames(product.step > 2 ? 'text-indigo-600' : '', 'text-right')}>
                        
                      </div>
                    </div>
                  </div>
                  </div>
                  
                  
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>


    </div>
  )
}
