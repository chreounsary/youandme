import BackendLayout from "@/components/layout/backend";
import { getUsers } from "@/lib/helper";
import { toggleChangeAction, updateAction } from "@/redux/reducer";
import { BugAntIcon } from "@heroicons/react/24/outline";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import Form from './form'

function index() {
  const visible = useSelector((state) => state.app.client.toggleForm)
  const { isLoading, isError, data, error } = useQuery('users', getUsers)
  const dispatch = useDispatch()
  const handleAdd = () => {
    visible ? true : false
    console.log(visible ,'visible');
    dispatch(toggleChangeAction())
  }
  return (
    <BackendLayout>
      { visible ? <Form></Form> : <></>}
      <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
        <div className="flex items-center space-x-4 mt-2">
          <button onClick={handleAdd} className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
            </svg>
            <span>Add</span>
          </button>
        </div>
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">State</th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">Role</th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {
              data?.map((obj, i) => <Tr {...obj} key={i} />)
            }
          </tbody>
        </table>
      </div>
    </BackendLayout>
  );
}

function Tr({_id, name, email, role, is_active}){
  const visible = useSelector((state) => state.app.client.toggleForm)
  const dispatch = useDispatch()
  const handleUpdated = () => {
    dispatch(toggleChangeAction(_id))
    if(visible){
      dispatch(updateAction(_id))
    }
  }

  return (
    <>
      <tr className="hover:bg-gray-50">
        <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
          <div className="relative h-10 w-10">
            <img
              className="h-full w-full rounded-full object-cover object-center"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="" />
            <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
          </div>
          <div className="text-sm">
            <div className="font-medium text-gray-700">{name}</div>
            <div className="text-gray-400">{email}</div>
          </div>
        </th>
        <td className="px-6 py-4">
          <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
            <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
            {is_active == true ? 'Active' : 'Disabled'}
          </span>
        </td>
        <td className="px-6 py-4">{role}</td>
        <td className="px-6 py-4">
          <div className="flex justify-end gap-4">
            <a x-data="{ tooltip: 'Delete' }" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
                x-tooltip="tooltip"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </a>
            <button onClick={handleUpdated}>Edit</button>
          </div>
        </td>
      </tr>
    </>
  )
}

export async function getServerSideProps(ctx){
  return {
    props:{
      data:null
    }
  }
}

export default index;