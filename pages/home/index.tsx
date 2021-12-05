import { LoginForm } from "../../src/authentication/LoginForm"
import { useRepositoriesByUser } from "../../src/github/hooks/useRepositoriesByUser"

const Home = () => {
  const {repositories, isLoading} = useRepositoriesByUser()
  
  return (
    <>
      <LoginForm/>
      {isLoading ? <span>Loading...</span>: (
        <div>
      <h1>Repositórios:</h1>
      {repositories.map(repository => <li>{repository.name}</li>)}
      </div>
      )}
      </>
    
  )
}

export default Home