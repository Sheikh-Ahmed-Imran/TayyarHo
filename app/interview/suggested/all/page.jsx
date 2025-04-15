import { Header} from "./components/Header";
import { EvaluationTable } from "./components/EvaluationTable";
import { SuggestionFooter } from "./components/Footer";
import { Navbar } from "../../../../components/custom/Navbar";
import { Sidebar } from "../../../../components/custom/Sidebar";
const AllSuggestions=()=>{
return(
  <div className="flex">
  <Sidebar />
    <div className="min-h-screen bg-gradient-to-r from-[#1E3A8A] to-[#6D28D9] flex-1">
    
    <Header />
    <main className="max-w-screen-xl mx-auto my-0 pt-24 pb-20 px-6 max-md:px-5 max-md:py-20 max-sm:px-4 max-sm:py-[60px]">
      <EvaluationTable />
    </main>
    <SuggestionFooter />
  </div>
  </div>
)
}
export default AllSuggestions