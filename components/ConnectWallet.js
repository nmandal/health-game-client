import { PlusIcon } from '@heroicons/react/solid'


export default function Example({action}) {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Health Game</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Learn how to be healthy
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
          Team up with some of the best health influencers. Connect your wallet to get started.
          </p>
        </div>
        <div className="mt-6 text-center">
        <button
          type="button"
          onClick={action}
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          Connect Wallet
        </button>
      </div>
      </div>
    </div>


  )
}

