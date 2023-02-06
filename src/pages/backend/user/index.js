import BackendLayout from "@/components/layout/backend";
import Pagination from "../../../components/Pagination";
import { deleteUser, getUsers } from "@/lib/helper";
import { deleteAction, toggleChangeAction, updateAction } from "@/redux/reducer";
import { BugAntIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useQueryClient } from 'react-query';
import Form from './form'
import { paginate } from "@/util/pagination";
import { useState } from "react";


function Index() {
  const queryclient = useQueryClient();
  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const visible = useSelector((state) => state.app.client.toggleForm)
  const deleteId = useSelector(state => state.app.client.deleteId)
  const { isLoading, isError, data, error } = useQuery('users', getUsers)
  const dispatch = useDispatch()
  const handleAdd = () => {
    visible ? true : false
    dispatch(toggleChangeAction())
  }
  const deletehandler =  async () => {
    if(deleteId){
      await deleteUser(deleteId);
      await queryclient.prefetchQuery('users', getUsers)
      await dispatch(deleteAction(null))
    }
  }
  const canclehandler = async () => {
    console.log("cancel")
    await dispatch(deleteAction(null))
  }

  const paginateUsers = paginate(data, currentPage, pageSize);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <BackendLayout>
      { visible ? <Form></Form> : <></>}
      { deleteId ? DeleteComponent({ deletehandler, canclehandler }) : <></>}
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
          {TableHeader()}
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {
              paginateUsers.map((obj, i) => <Tr {...obj} key={i} />)
            }
            <tr className="hover:bg-gray-50">
              <td>
              <Pagination
                  items={data?.length}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </BackendLayout>
  );
}

function TableHeader() {
  return (<>
    <thead className="bg-gray-50">
      <tr>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">State</th>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Role</th>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Action</th>
      </tr>
    </thead>
  </>);
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
  const onDelete = () =>  {
    if(!visible){
      dispatch(deleteAction(_id))
    }
    
  }
  return (
    <>
      <tr className="hover:bg-gray-50">
        <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
          <div className="relative h-10 w-10">
            {/* <Image
              className="h-full w-full rounded-full object-cover object-center"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="" /> */}
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
        <td className="px-6 py-4">
          {displayRole(role)}
        </td>
        <td className="px-6 py-4">
          <div className="flex justify-end gap-4">
            <button onClick={onDelete}>Delete</button>
            <button onClick={handleUpdated}>Edit</button>
          </div>
        </td>
      </tr>
    </>
  )
}

function DeleteComponent({ deletehandler, canclehandler }){
  return (
    <div className='flex gap-5'>
      <button>Are you sure?</button>
      <button onClick={deletehandler} className='flex bg-red-500 text-white px-4 py-2 border rounded-md hover:bg-rose-500 hover:border-red-500 hover:text-gray-50'>
        Yes <span className='px-1'></span></button>
      <button onClick={canclehandler} className='flex bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gree-500 hover:border-green-500 hover:text-gray-50'>
        No <span className='px-1'></span></button>
    </div>
  )
}

function displayRole (role){
  let roleLabel = '';
  if(role == 'admin'){
    roleLabel = 'Admin';
  }
  if(role == 'teacher'){
    roleLabel = 'Teacher'
  }
  if(role == 'student'){
    roleLabel = 'Student'
  }
  return roleLabel;
}

export async function getServerSideProps(ctx){
  return {
    props:{
      data:null
    }
  }
}

export default Index;