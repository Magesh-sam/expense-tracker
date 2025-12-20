import { Outlet } from 'react-router'
function Sidebar() {
    return (
        <div className=' h-screen flex  w-screen '>
            <aside className='border border-black h-full px-3 pt-3  text-white bg-slate-800 '>
                <nav>

                    <h2 className='text-xl p-2 font-bold mx-auto text-center mb-3'>💰 FinTrack</h2>
                    <ul className='flex flex-col gap-1 '>
                        <li className='bg-gray-700 px-3 py-2 rounded-sm hover:border-l-4 border-teal-300 w-xs' >Dashboard</li>
                        <li className='bg-gray-700 px-3 py-2 rounded-sm hover:border-l-4 border-teal-300 w-xs' >Tranasctions</li>
                        <li className='bg-gray-700 px-3 py-2 rounded-sm hover:border-l-4 border-teal-300 w-xs' >Budgets</li>
                        <li className='bg-gray-700 px-3 py-2 rounded-sm hover:border-l-4 border-teal-300 w-xs' >Reports</li>
                    </ul>
                </nav>
            </aside>
            <main className='flex justify-center  w-screen bg-gray-200'>
               <Outlet/>
            </main>
        </div>
    )
}

export default Sidebar