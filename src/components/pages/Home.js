import { fechaActual } from "../../helpers";
import Main from "../layout/Main";
import DashBoard from './DashBoard'

function Home() {
    
    return (
      <Main>
        <h1>Dashboard</h1>
        <h5>{fechaActual()}</h5>
        <DashBoard/>
      </Main>
    )
}

export default Home