import { addUser, getUsers } from "@/lib/helper";
import { useMutation, useQueryClient } from "react-query";

function AddForm({ formData, setFormData }) {
  const queryClient = useQueryClient()
  const addMutation = useMutation(addUser, {
    onSuccess : () => {
      queryClient.prefetchQuery('users', getUsers)
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    if(Object.keys(formData).length == 0) return console.log("Don't have Form Data");
    let { name, email, password, role, is_active } = formData;
    const model = {
      name : name,
      email, password, role, is_active
    }
    addMutation.mutate(model)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-white shadow rounded-lg p-6">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
            <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
              <p>
                <label htmlFor="name" className="bg-white text-gray-600 px-1"> Name *</label>
              </p>
            </div>
            <p>
              <input 
              id="name" 
              onChange={setFormData} 
              name="name"
              autoComplete="false"
              tabIndex="0" 
              type="text" 
              className="py-1 px-1 outline-none block h-full w-full"/>
            </p>
          </div>
          <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
            <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
              <p>
                <label htmlFor="email" className="bg-white text-gray-600 px-1">Email *</label>
              </p>
            </div>
            <p>
              <input id="email"
              onChange={setFormData} 
              name="email"
              autoComplete="false" 
              tabIndex="0" 
              type="text" 
              className="py-1 px-1 outline-none block h-full w-full"/>
            </p>
          </div>
          <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
            <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
              <p>
                <label htmlFor="password" className="bg-white text-gray-600 px-1">Password *</label>
              </p>
            </div>
            <p>
              <input 
              id="password"
              onChange={setFormData} 
              name="password"
              autoComplete="false" 
              tabIndex="0" 
              type="password" 
              className="py-1 px-1 outline-none block h-full w-full"/>
            </p>
          </div>

          <div className="border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1">
            <div className="-mt-4 absolute tracking-wider px-1 uppercase text-xs">
              <p>
                <label htmlFor="role" className="bg-white text-gray-600 px-1">Role *</label>
              </p>
            </div>
            <p>
            <select id="role"
              onChange={setFormData}
              name="role"
              className=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Choose a role</option>
              <option value="admin">Admin</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
            </select>
            </p>
          </div>

          <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <input
                  type="radio"
                  value={true}
                  name="is_active"
                  id="active"
                  className="h-5 w-5"
                />
                <label
                  htmlFor="radioButton1"
                  className="pl-3 text-base font-medium text-[#07074D]"
                >
                  Active
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  value={false}
                  name="is_active"
                  id="active"
                  className="h-5 w-5"
                />
                <label
                  htmlFor="radioButton1"
                  className="pl-3 text-base font-medium text-[#07074D]"
                >
                  Inactive
                </label>
              </div>
            </div>
        </div>
        <div className="border-t mt-6 pt-3">
          <button className="rounded text-gray-100 px-3 py-1 bg-blue-500 hover:shadow-inner hover:bg-blue-700 transition-all duration-300">
            Save
          </button>
        </div>
      </div>
    </form>
  );
}

export async function getServerSideProps(ctx){


  return {
    props:{
      data:null
    }
  }
}

export default AddForm;