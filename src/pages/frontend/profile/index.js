import Frontend from "../../../components/layout/frontend";
function index() {
  return (
    <Frontend>
      profile page
    </Frontend>
  );
}

export async function getServerSideProps(ctx){


  return {
    props:{
      data:null
    }
  }
}

export default index;