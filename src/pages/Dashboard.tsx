import { useTransactions } from "../context/TransactionContext"
import { useRef } from "react";
import TransactionModal from "../components/TransactionModal";

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

const TransactionsList = () => {
    const { transactions } = useTransactions();
    return (
        <div className="w-full flex justify-evenly mt-5 gap-8 px-8">

            <section className="bg-white w-full rounded-md shadow-md">
                <h3 className="text-xl pl-3 pt-3 font-semibold mb-3">Recent Transaction</h3>
                <div className="w-full min-h-96 text-gray-600">
                    <ul className="px-3">

                        {
                            transactions.map((transaction) => (
                                <li className="mb-3" key={transaction.id} >

                                    <p className="text-xl border-b border-gray-400 pb-3">{transaction.category} {"->"} {transaction.type == "income" ? "+" : "-"} ${transaction.amount} </p>

                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>
            <section className="bg-white w-full rounded-md shadow-md">
                <h3 className="text-xl pl-3 pt-3 font-semibold mb-3">Spending Breakdown</h3>
                <div className="w-full min-h-96">
                </div>

            </section>
        </div>
    )
}
const Dashboard = () => {
    const modalRef = useRef<HTMLDialogElement | null>(null);

    return (
        <div className="w-full">
            <div className="flex justify-between items-center my-3 px-5">
                <h2 className="text-3xl font-bold">Dashboard</h2>
                <button onClick={() => modalRef?.current?.showModal()} className="px-3 py-2 bg-teal-600 hover:bg-teal-700 hover:cursor-pointer rounded-sm text-white"> + Add Transaction</button>
            
                    <TransactionModal ref={modalRef} />
            </div>
            <Insights />
            <div>
                <TransactionsList />
                <div>

                </div>
            </div>
        </div>

    )
}

export default Dashboard