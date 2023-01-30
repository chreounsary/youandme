import { getUser, getUsers, updateUser } from "@/lib/helper";
import { useMutation, useQuery, useQueryClient } from "react-query";

function updateForm({ formId, formData, setFormData }) {
  const queryClient = useQueryClient()
  const {isLoading, isError, data, error} = useQuery(['users', formId], () => getUser(formId))
  const UpdateMutation = useMutation((newData) => updateUser(formId, newData), {
      onSuccess : async (data) => {
        // queryClient.setQueryData('users', (old) => [data])
        queryClient.prefetchQuery('users', getUsers)
      }
  })
  // const {email, role, is_active } = data;
  // const [firstname, lastname] = name ? name.split(' ') : formData

  const handleSubmit = async (e) => {
    e.preventDefault();
    let userName = `${formData.firstname ?? firstname} ${formData.lastname ?? lastname}`;
    let updated = Object.assign({}, data, formData, { name: userName})
    await UpdateMutation.mutate(updated)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="bg-white shadow rounded-lg p-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
              <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                <p>
                  <label htmlFor="name" className="bg-white text-gray-600 px-1">First name *</label>
                </p>
              </div>
              <p>
                <input id="name" autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 text-gray-900 outline-none block h-full w-full"/>
              </p>
            </div>
            <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
              <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                <p>
                  <label htmlFor="lastname" className="bg-white text-gray-600 px-1">Last name *</label>
                </p>
              </div>
              <p>
                <input id="lastname" autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 outline-none block h-full w-full"/>
              </p>
            </div>
            <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
              <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                <p>
                  <label htmlFor="username" className="bg-white text-gray-600 px-1">Username *</label>
                </p>
              </div>
              <p>
                <input id="username" autoComplete="false" tabIndex="0" type="text" className="py-1 px-1 outline-none block h-full w-full"/>
              </p>
            </div>
            <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
              <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
                <p>
                  <label htmlFor="password" className="bg-white text-gray-600 px-1">Password *</label>
                </p>
              </div>
              <p>
                <input id="password" autoComplete="false" tabIndex="0" type="password" className="py-1 px-1 outline-none block h-full w-full"/>
              </p>
            </div>
          </div>
          <div className="border-t mt-6 pt-3">
            <button className="rounded text-gray-100 px-3 py-1 bg-blue-500 hover:shadow-inner hover:bg-blue-700 transition-all duration-300">
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export async function getServerSideProps(ctx){


  return {
    props:{
      data:null
    }
  }
}

export default updateForm;