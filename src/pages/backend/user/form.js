import { useReducer } from "react";
import { useSelector } from "react-redux";
import UpdateForm from "./updateForm";
import AddForm from "./addForm";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value
  }
}

export default function Form(){

  const [formData, setFormData] = useReducer(formReducer, {})
  const formId = useSelector((state) => state.app.client.formId)
  return (
   <> { formId ? UpdateForm({ formId, formData, setFormData }) : AddForm( { formData, setFormData }) }</>
  );
}

export async function getServerSideProps(ctx){
  return {
    props:{
      data:null
    }
  }
}
