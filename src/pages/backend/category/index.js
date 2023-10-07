import BackendLayout from "@/components/layout/backend";
import { useForm } from 'react-hook-form';
import Form from "./form";

function Index() {
  return (
    <BackendLayout>
     <Form></Form>
    </BackendLayout>
  );
}

export async function getServerSideProps(ctx){


  return {
    props:{
      data:null
    }
  }
}

export default Index;