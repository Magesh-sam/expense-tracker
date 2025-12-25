import { Link, Outlet, useLocation } from 'react-router'
import { TransactionProvider } from '../context/TransactionContext'
function Sidebar() {
    const { pathname:path } = useLocation();
    return (
        <div className=' h-screen flex  w-screen '>
            <aside className='border border-black h-full px-3 pt-3  text-white bg-slate-800 '>
                <nav>

                    <h2 className='text-xl p-2 font-bold mx-auto text-center mb-3'>💰 FinTrack</h2>
                    <ul className='flex flex-col gap-1 '>
                        <li className={`bg-gray-700 px-3 py-2 rounded-sm hover:border-l-4 hover:border-teal-300 w-xs ${path === "/" ? "border-l-4 border-teal-300" : ""}`}>
                            <Link to="/">Dashboard</Link>
                        </li>
                        <li className={`bg-gray-700 px-3 py-2 rounded-sm hover:border-l-4 hover:border-teal-300 w-xs ${path === "/transactions" ? "border-l-4 border-teal-300" : ""}`}>
                            <Link to="/transactions">Transactions</Link>
                        </li>
                        <li className={`bg-gray-700 px-3 py-2 rounded-sm hover:border-l-4 hover:border-teal-300 w-xs ${path === "/reports" ? "border-l-4 border-teal-300" : ""}`}>
                            <Link to="/reports">Reports</Link>
                        </li>

                    </ul>
                </nav>
            </aside>
            <main className='flex justify-center  w-screen bg-gray-200'>
                <TransactionProvider>

                    <Outlet />
                </TransactionProvider>
            </main>
        </div>
    )
}

export default Sidebar