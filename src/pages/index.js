import Layout from "@/components/layout/frontend";
import { useSession, getSession } from "next-auth/react";
import { signOut } from "next-auth/react";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { data: session } = useSession();

  const  handleLogout= () => {
    signOut();
  }
  return (
    <Layout>
      
    </Layout>
  );

  function Guest() {
    return (
      <h1>Guest</h1>
    );
  }
  
  function User({session}) {
    return (
      <>
      <h1 className="text-red-800">Name: {session.user.name}</h1>
      <h1>Email: {session.user.email}</h1>
      <button onClick={handleLogout}>Logout</button>
      </>
    )
  }
}

// proetected route
//https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props
export async function getServerSideProps ({req, res, next}){
  const session = await getSession({req});
  if (!session) {
    return{
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }
  return {
    props: {session}
  }
}