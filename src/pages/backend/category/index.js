function index() {
  return (
    <div>
      category index pge
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

export default index;