import Image from "next/image";
import Link from "next/link";
import Navigation from "../navigation/index"

 
function BackendLayout({children}) {
  return (
    <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
    <nav className="block py-4 px-6 top-0 bottom-0 w-64 bg-white shadow-xl left-0 absolute flex-row flex-nowrap md:z-10 z-9999 transition-all duration-300 ease-in-out transform md:translate-x-0 -translate-x-full">
       <button className="md:hidden flex items-center justify-center cursor-pointer text-blueGray-700 w-6 h-10 border-l-0 border-r border-t border-b border-solid border-blueGray-100 text-xl leading-none bg-white rounded-r border border-solid border-transparent absolute top-1/2 -right-24-px focus:outline-none z-9998"><i className="fas fa-ellipsis-v"></i></button>
       <div className="flex-col min-h-full px-0 flex flex-wrap items-center justify-between w-full mx-auto overflow-y-auto overflow-x-hidden">
          <div className="flex bg-white flex-col items-stretch opacity-100 relative mt-4 overflow-y-auto overflow-x-hidden h-auto z-40 items-center flex-1 rounded w-full">
             
             <div className="md:flex-col md:min-w-full flex flex-col list-none">
                <hr className="my-4 md:min-w-full"/>
                <Navigation></Navigation>
               
                <hr className="my-4 md:min-w-full"/>
             </div>
          </div>
       </div>
    </nav>
    <div className="relative md:ml-64 bg-blueGray-100 w-full">
       <nav className="absolute top-0 left-0 w-full z-10 bg-white lg:flex-row lg:flex-nowrap lg:justify-start flex items-center py-1 px-4 lg:bg-transparent">
          <div className="w-full mx-aut0 items-center flex justify-between lg:flex-nowrap flex-wrap lg:px-6 px-4">
             
             <div className="items-center w-full lg:flex lg:w-auto flex-grow duration-300 transition-all ease-in-out lg:h-auto-important hidden">
                <form className="flex flex-row flex-wrap items-center ml-auto mr-3 mt-3">
                   <div className="mb-3 pt-0"><input placeholder="Search here" type="text" className="border-transparent shadow px-3 py-2 text-sm  w-full placeholder-blueGray-200 text-blueGray-700 relative bg-white rounded-md outline-none focus:ring focus:ring-lightBlue-500 focus:ring-1 focus:border-lightBlue-500 border border-solid transition duration-200 "/></div>
                </form>
                <Link href="/frontend/profile" className="text-xs uppercase py-3 font-bold block text-blueGray-800 hover:text-blueGray-500">
                <div className="items-center flex"><span className="w-12 h-12 text-sm text-white bg-blueGray-300 inline-flex items-center justify-center rounded-full">
                  
                  </span>
               </div>
                </Link>
                
             </div>
          </div>
       </nav>
       <div className="relative pt-32 pb-32 bg-lightBlue-500">
          <div className="px-4 md:px-6 mx-auto w-full">
             <div>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                     <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                     <div className="flex-auto p-4">
                        <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                           <h5 className="text-blueGray-400 uppercase font-bold text-xs">Total NFT</h5>
                           <span className="font-bold text-xl">350,897</span>
                           </div>
                        <div className="relative w-auto pl-4 flex-initial">
                           <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500"><i className="far fa-chart-bar"></i></div>
                        </div>
                        </div>
                        <p className="text-sm text-blueGray-500 mt-4"><span className="text-emerald-500 mr-2"><i className="fas fa-arrow-up"></i> 3.48%</span><span className="whitespace-nowrap">Since last month</span></p>
                     </div>
                     </div>
                  </div>
                  <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                  <div className="flex-auto p-4">
                     <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                           <h5 className="text-blueGray-400 uppercase font-bold text-xs">NEW USERS</h5>
                           <span className="font-bold text-xl">2,356</span>
                        </div>
                        <div className="relative w-auto pl-4 flex-initial">
                           <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500"><i className="fas fa-chart-pie"></i></div>
                        </div>
                     </div>
                     <p className="text-sm text-blueGray-500 mt-4"><span className="text-red-500 mr-2"><i className="fas fa-arrow-down"></i> 3.48%</span><span className="whitespace-nowrap">Since last week</span></p>
                  </div>
                  </div>
                  </div>
                  <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                     <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                        <div className="flex-auto p-4">
                           <div className="flex flex-wrap">
                              <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                 <h5 className="text-blueGray-400 uppercase font-bold text-xs">SALES</h5>
                                 <span className="font-bold text-xl">924</span>
                              </div>
                              <div className="relative w-auto pl-4 flex-initial">
                                 <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500"><i className="fas fa-users"></i></div>
                              </div>
                           </div>
                           <p className="text-sm text-blueGray-500 mt-4"><span className="text-orange-500 mr-2"><i className="fas fa-arrow-down"></i> 1.10%</span><span className="whitespace-nowrap">Since yesterday</span></p>
                        </div>
                     </div>
                  </div>
                   <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                     <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">
                        <div className="flex-auto p-4">
                           <div className="flex flex-wrap">
                              <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                 <h5 className="text-blueGray-400 uppercase font-bold text-xs">PERFORMANCE</h5>
                                 <span className="font-bold text-xl">49,65%</span>
                              </div>
                              <div className="relative w-auto pl-4 flex-initial">
                              <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-lightBlue-500"><i className="fas fa-percent"></i></div>
                              </div>
                           </div>
                           <p className="text-sm text-blueGray-500 mt-4"><span className="text-emerald-500 mr-2"><i className="fas fa-arrow-up"></i> 12%</span><span className="whitespace-nowrap">Since last month</span></p>
                        </div>
                     </div>
                   </div>
                </div>
             </div>
          </div>
       </div>

       <div className="px-4 md:px-6 mx-auto w-full -mt-24">
          <div className="flex flex-wrap">
            <div className="w-full">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-8 shadow-lg rounded-lg bg-white text-blueGray-700">
                {children}
              </div>
            </div>
          </div>
          </div>
    </div>
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

export default BackendLayout;