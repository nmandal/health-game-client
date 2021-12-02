import TechniqueModal from '../components/TechniqueModal'

import { useState } from 'react'

import useModal from '../hooks/useModal'

import { characters } from '../utils/constants';



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  

const Character = ({characterNFT, runInstructAction}) => {
  const [currentTechnique, setCurrentTechnique] = useState({});
  const [showModal, setShowModal] = useState(false);
  const {isShowing, toggle} = useModal();

    let character = characters.find(c => c.name === characterNFT.name);

    const handleTechniqueSelection = async (technique) => {
      setCurrentTechnique(technique)
      toggle()
    }

    return (
        <div className="mt-12 space-y-16 sm:mt-16">
          {isShowing && (
            <TechniqueModal technique={currentTechnique} isShowing={isShowing}
            hide={toggle} runInstructAction={runInstructAction} />
          )}
          
          
          <section>
            <div className="space-y-1 md:flex md:items-baseline md:space-y-0 md:space-x-4">
              <h2 className="text-lg font-medium text-gray-900 md:flex-shrink-0">
                Your character
              </h2>
              <div className="space-y-5 md:flex-1 md:min-w-0 sm:flex sm:items-baseline sm:justify-between sm:space-y-0">
                <p className="text-sm font-medium text-gray-500">Instruct the student with one of your signature health techniques</p>
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

                <div>
                <div className="py-6 sm:flex">
                  <div className="flex space-x-4 sm:min-w-0 sm:flex-1 sm:space-x-6 lg:space-x-8">
                    <img
                      src={characterNFT?.imageURI}
                      alt={`Character ${characterNFT.name}`}
                      className="flex-none w-20 h-20 rounded-md object-center object-cover sm:w-48 sm:h-48"
                    />
                    <div className="pt-1.5 min-w-0 flex-1 sm:pt-0">
                      <h3 className="text-sm font-medium text-gray-900">
                        {characterNFT.name}
                      </h3>
                      <p className="text-sm text-gray-500 truncate">
                        <span>{character.title}</span>{' '}
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
                      disabled={characterNFT.energy === 0}
                      onClick={() => handleTechniqueSelection(character.techniques[0])}
                      className="w-full flex items-center justify-center bg-indigo-600 py-2 px-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-full sm:flex-grow-0"
                    >
                      {character.techniques[0].name}
                    </button>
                    <button
                      type="button"
                      disabled={characterNFT.energy === 0}
                      onClick={() => handleTechniqueSelection(character.techniques[1])}
                      className="w-full flex items-center justify-center bg-indigo-100 py-2 px-2.5 border transparent rounded-md shadow-sm text-sm font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-full sm:flex-grow-0"
                    >
                      {character.techniques[1].name}
                    </button>
                    <button
                      type="button"
                      disabled={characterNFT.energy === 0}
                      onClick={() => handleTechniqueSelection(character.techniques[2])}
                      className={"w-full flex items-center justify-center bg-white py-2 px-2.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-full sm:flex-grow-0"}
                    >
                      {character.techniques[2].name}
                    </button>


                  </div>


                </div>
                
                <p className="font-medium text-gray-900 mt-6 md:mt-10">
                  Energy: {characterNFT.energy}/{characterNFT.maxEnergy}
                </p>
                <div className="mt-2">
                  <div className="bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-2 bg-indigo-600 rounded-full"
                      style={{ width: `calc((${characterNFT.energy}) / 10 * 100%)` }}
                    />
                  </div>
                  <div className="hidden sm:grid grid-cols-10 font-medium text-gray-600 mt-6">
                    <div className="text-indigo-600">
                    </div>
                    <div className={classNames(characterNFT.energy > 1 ? 'text-indigo-600' : '', 'text-center')}>
                    </div>
                    <div className={classNames(characterNFT.energy > 2 ? 'text-indigo-600' : '', 'text-center')}>
                    </div>
                    <div className={classNames(characterNFT.energy > 3 ? 'text-indigo-600' : '', 'text-right')}>
                    </div>
                    <div className={classNames(characterNFT.energy > 4 ? 'text-indigo-600' : '', 'text-right')}>
                    </div>
                    <div className={classNames(characterNFT.energy > 5 ? 'text-indigo-600' : '', 'text-right')}>
                    </div>
                    <div className={classNames(characterNFT.energy > 6 ? 'text-indigo-600' : '', 'text-right')}>
                    </div>
                    <div className={classNames(characterNFT.energy > 7 ? 'text-indigo-600' : '', 'text-right')}>
                    </div>
                    <div className={classNames(characterNFT.energy > 8 ? 'text-indigo-600' : '', 'text-right')}>
                    </div>
                    <div className={classNames(characterNFT.energy > 9 ? 'text-indigo-600' : '', 'text-right')}>
                    </div>
                  </div>
                </div>
                </div>
                
                

            </div>
          </section>

      </div>
    )
}

export default Character;