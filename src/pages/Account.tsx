import { title } from '../utils/tittle'
import { Sidebar } from '../components'
import { Outlet } from 'react-router-dom'

const Account = () => {
  title('Account')
  return (
    <div className="w-10/12 lg:w-8/12 mx-auto pt-12">
      <Sidebar />
      <section>
        <Outlet />
      </section>
    </div>
  )
}
export default Account
