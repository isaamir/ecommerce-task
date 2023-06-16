
import React from 'react'
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { AiOutlineClose } from "react-icons/ai"
import Button from '../Button'
import Text from '../Text'

interface IOffCanvasProps {
   openOffCanvas: boolean
   setOpenOffCanvas: React.Dispatch<React.SetStateAction<boolean>>
   children?: React.ReactNode
}

const OffCanvas: React.FC<IOffCanvasProps> = ({ openOffCanvas, setOpenOffCanvas, children }) => {
   return (
      <Transition.Root show={openOffCanvas} as={Fragment}>
         <Dialog as="div" className="relative z-10" onClose={setOpenOffCanvas}>
            <Transition.Child
               as={Fragment}
               enter="ease-in-out duration-500"
               enterFrom="opacity-0"
               enterTo="opacity-100"
               leave="ease-in-out duration-500"
               leaveFrom="opacity-100"
               leaveTo="opacity-0"
            >
               <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-hidden">
               <div className="absolute inset-0 overflow-hidden">
                  <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-[full] pl-10 ">
                     <Transition.Child
                        as={Fragment}
                        enter="transform transition ease-in-out duration-500 sm:duration-700"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transform transition ease-in-out duration-500 sm:duration-700"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                     >
                        <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                           <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                            
                              <div className='flex justify-end mr-[20px]'>

                                 <Button variant='icon' onClick={() => setOpenOffCanvas(false)}>
                                 <AiOutlineClose size="30" color="#34495E" />
                                 </Button>

                              </div>

                              <div className='flex lign-center justify-center'>
                                 <div>

                                    {/* Content goes here */}
                                    {children}
                                    <Text>zdjhsajf</Text>

                                 </div>
                              
                              </div>
                           </div>
                        </Dialog.Panel>
                     </Transition.Child>
                  </div>
               </div>
            </div>
         </Dialog>
      </Transition.Root>
   )
}
export default OffCanvas