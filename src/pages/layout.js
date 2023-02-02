import Layout from "@/components/layout/frontend";
import BackendLayout from "@/components/layout/backend";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function MainLayout() {
  const { data: session } = useSession();
  const router = useRouter()
  console.log(session, 'user');
  if (!session && router.pathname !== '/login') {
    return (
      <>
        <BackendLayout/>
      </>
    );
  }

  return (
    <div>
      <BackendLayout/>
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

export default MainLayout;