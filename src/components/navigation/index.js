import Link from "next/link";

const navigation = [
  {name: "Category", path: "/backend/category"},
  {name: "User", path: "/backend/user"},
  {name: "NFT", path: "/backend/nft"},
  {name: "NFT mint", path: "/backend/nft_mint"},
  {name: "Learner", path: "/backend/learner"},
  {name: "Upgrading", path: "/backend/upgrading"},
  {name: "NFT renting", path: "/backend/renting"},
  {name: "Rewarding", path: "/backend/rewarding"},
  {name: "Sale", path: "/backend/sale"}

]

function index() {

  return (
    <div>
      {navigation.map((item) => (
        <Link href={item.path} className="text-xs uppercase py-3 font-bold block text-blueGray-800 hover:text-blueGray-500">
          <i className="fas fa-user-circle mr-2 text-sm text-blueGray-400"></i>{item.name}
        </Link>
      ))}
    </div>
  );
}
export default index;