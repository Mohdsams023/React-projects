import BillSplit from "./Components/BillSplit"
import FriendsList from "./Components/FriendsList"



function App() {
  

 return (
  <>
  <div className="flex flex-col md:flex-row justify-center item-center gap-20 mx-20 my-20">
  <FriendsList />
  <BillSplit />
  </div>
 
  </>
 )
}

export default App
