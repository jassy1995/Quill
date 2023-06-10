import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { AiOutlineLogout, AiOutlineSetting } from 'react-icons/ai'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProfileDropdown({ show }) {
  return (
    <Menu as="div" className={`relative inline-block  text-left ${show} xxxs:hidden`}>
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-1 py-1 text-sm font-semibold text-gray-900  hover:bg-gray-50 items-end">
          <img className={`w-8 h-8 object-cover rounded-full ${show}`} src="/user.jpeg" alt="not exist" />
          {/* <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
        </Menu.Button>
      </div>

      <Transition transition='true'
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute -left-16 z-10 mt-14 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none w-[200px]">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <div
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'flex items-center whitespace-wrap space-x-2 px-4 py-2 text-sm'
                  )}
                >
                  <img className='w-9 h-9 object-cover rounded-full' src="/user.jpeg" alt="not exist" />
                  <h1>John Doe</h1>
                </div>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <div
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'flex items-center whitespace-wrap space-x-2 px-4 py-2 text-sm'
                  )}
                >
                  <AiOutlineLogout />
                  <h1>Logout</h1>
                </div>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <div

                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'flex items-center whitespace-wrap space-x-2 px-4 py-2 text-sm'
                  )}
                >
                  <AiOutlineSetting />
                  <h1>Settings</h1>
                </div>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition >
    </Menu>
  )
}
