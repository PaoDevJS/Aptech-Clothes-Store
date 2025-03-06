import Layout from "./Layout/Layout"
import Login from "./page/Login"
import { useSelector } from "react-redux"

const App = () => {
  const user = useSelector(state => state.user.success)

  return (
    <>
      {
        !user? <Layout /> : <Login />
      }
    </>
  )
}

export default App