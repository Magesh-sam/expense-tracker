const Insights = () => {
    return (
        <div className="flex justify-evenly items-center px-5 pt-5">
            <section className="w-sm bg-white rounded-xl px-3 py-2 shadow-md">
                <h3 className="text-xl font-semibold mb-3">Total Balace</h3>
                <p className=" font-bold mb-2">
                    <data value="12450.00">$12,450.00</data>
                </p>
            </section>
            <section className="w-sm bg-white rounded-xl px-3 py-2 shadow-md">
                <h3 className="text-xl font-semibold mb-3">Income</h3>
                <p className="text-emerald-500 font-bold mb-2">
                    <data value="12450.00">$12,450.00</data>
                </p>
            </section>
            <section className="w-sm bg-white rounded-xl px-3 py-2 shadow-md">
                <h3 className="text-xl font-semibold mb-3">Expense</h3>
                <p className="text-rose-700 font-bold mb-2">
                    <data value="12450.00">$12,450.00</data>
                </p>
            </section>
        </div>
    )
}

const TransactionsList = () =>{
    return(
        <div>
                           <h3 className="text-xl font-semibold mb-3">Recent Transaction</h3>

        </div>
    )
}
const Dashboard = () => {
    return (
        <div className="w-full">
            <div className="flex justify-between items-center my-3 px-5">
                <h2 className="text-3xl font-bold">Dashboard</h2>
                <button className="px-3 py-2 bg-teal-600 hover:bg-teal-700 hover:cursor-pointer rounded-sm text-white"> + Add Transaction</button>
            </div>
            <Insights />
            <div>
                <TransactionsList/>
                <div>
                    
                </div>
            </div>
        </div>

    )
}

export default Dashboard