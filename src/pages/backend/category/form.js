
import { useMutation, useQueryClient } from "react-query";
import { addCategory,  getCategory} from "@/lib/helper";
import { useSelector, useDispatch } from 'react-redux'
import { useReducer } from "react";
const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value
  }
}

const Form = () => {
  const [formData, setFormData] = useReducer(formReducer, {})
  const dispatch = useDispatch();
  const queryClient = useQueryClient()
  const addMutation = useMutation(addCategory, {
    onSuccess : () => {
      queryClient.prefetchQuery('category', getCategory)
      dispatch(toggleChangeAction())
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    let { name } = formData;
   console.log(formData, 'log form category');
   const model = {
    name 
  }
   addMutation.mutate(model)
  }
  
  return (
    <>
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
              name="name"
              onChange={setFormData} 
              autoComplete="false"
              tabIndex="0" 
              type="text" 
              className="py-1 px-1 outline-none block h-full w-full"/>
            </p>
          </div>
        </div>
        <div className="border-t mt-6 pt-3">
          <button className="rounded text-gray-100 px-3 py-1 bg-blue-500 hover:shadow-inner hover:bg-blue-700 transition-all duration-300">
            Save
          </button>
        </div>
      </div>
    </form>
    </> 
  );
}
 
export default Form;