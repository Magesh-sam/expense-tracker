import { useTransactions } from '../context/TransactionContext'
import type { Transaction } from '../util/types';

function TransactionList() {
    const { transactions } = useTransactions();
    if (transactions.length == 0) {
        return (
            <div className="w-full flex justify-evenly mt-5 gap-8 px-8">
                <p className="font-semibold text-xl"> No Transaction</p>
            </div>
        )
    }
    return (
        <ul className='w-full bg-white'>
            <li className="grid grid-cols-5 px-3 py-2 border-b-2 border-blue-900">
                <p className="font-semibold text-xl text-left">Date</p>
                <p className="font-semibold text-xl text-left">Category</p>
                <p className="font-semibold text-xl text-left">Description</p>
                <p className="font-semibold text-xl text-right">Amount</p>
                <p className="font-semibold text-xl text-right">Actions</p>
            </li>


            {
                transactions.map((transaction: Transaction, index: number) => (
                    <li
                        className={`grid grid-cols-5 items-center px-3 py-2 font-medium ${index !== transactions.length - 1 ? "border-b border-blue-400" : ""
                            }`}
                    >
                        <p className="text-left">{transaction.date.toISOString().split("T")[0]}</p>
                        <p className="text-left">{transaction.category}</p>
                        <p className="text-left">{transaction.description}</p>
                        <p className={`text-right ${transaction.type === "income" ? "text-green-600" : "text-red-800"} `}>{transaction.type === "income" ? "+" : "-"}{transaction.amount}</p>
                        <div className='text-right flex gap-2 items-center justify-end text-white'>
                            <button className="px-3 py-2 bg-teal-600 hover:bg-teal-700 hover:cursor-pointer rounded-sm" >Edit</button>
                            <button className="px-3 py-2 bg-rose-600 hover:bg-rose-700 hover:cursor-pointer rounded-sm">Delete </button>
                        </div>
                    </li>



                ))}</ul>
    )
}

export default TransactionList