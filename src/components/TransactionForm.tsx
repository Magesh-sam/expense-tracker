import { useState } from "react";
import type { FormEvent, RefObject } from "react";
import type { Transaction } from "../util/types";
import { useTransactions } from "../context/TransactionContext";





const TransactionForm = ({ ref }: { ref: RefObject<HTMLDialogElement | null> }) => {
    const { addTransaction } = useTransactions();
    const [transaction, setTransaction] = useState<Omit<Transaction, "id">>({ type: "expense", amount: 1, category: "", date: new Date(), description: "" });
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const newTransaction = {
            ...transaction,
            id: crypto.randomUUID()
        }
        addTransaction(newTransaction);
        handleCancel();
        ref?.current?.close();


    }
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setTransaction(prev => ({
            ...prev,
            [name]:
                name === "amount" ? Number(value) :
                    name === "date" ? new Date(value) :
                        value
        }));
    };

    const handleCancel = () => {
        setTransaction({ type: "expense", amount: 1, category: "", date: new Date(), description: "" });
        ref?.current?.close();
    }

    return (
        <form onSubmit={handleSubmit} className=" my-3 p-3 bg-white">
            <div className="flex flex-col gap-3">

                <p className="font-semibold">Transaction Type</p>
                <div className="flex justify-evenly flex-wrap">

                    <label htmlFor="income" className="flex items-center gap-2" >
                        <input type="radio" name="type" id="income" value="income" onChange={handleChange} checked={transaction.type === "income"} />
                        <span>Income</span>
                    </label>

                    <label htmlFor="expense" className="flex items-center gap-2">
                        <input type="radio" name="type" id="expense" value="expense" onChange={handleChange} checked={transaction.type === "expense"} />
                        <span>Expense</span>
                    </label>
                </div>
            </div>
            <label className="flex items-center gap-5 justify-between flex-wrap mt-2" htmlFor="amount"><span className="font-semibold">Amount:</span>

                <input className=" p-2 border border-blue-500 rounded-sm" type="number" min={1} value={transaction.amount} onChange={handleChange} name="amount" id="amount" />
            </label>
            <label className="flex items-center gap-5 justify-between mt-2" htmlFor="amount"><span className="font-semibold">Date:</span>

                <input className=" p-2 border border-blue-500 rounded-sm" type="date" value={new Date().toISOString().split("T")[0]}
                    onChange={handleChange} name="date" id="date" />
            </label>
            <select required name="category" id="category" className="border border-blue-500 rounded-sm p-2 my-2 w-full "
                value={transaction.category} onChange={handleChange}  >
                <option value="">Category</option>
                <option value="grocery">grocery</option>
                <option value="medical">medical</option>
                <option value="travel">travel</option>
                <option value="others">others</option>
            </select>
            <label className="flex flex-col gap-2" htmlFor="amount"><span className="font-semibold">Description</span>
                <textarea value={transaction.description} placeholder="fruits and vegetables from instamart" className="border border-blue-500 rounded-sm placeholder:p-1 " rows={3} name="description" id="description" onChange={handleChange} />
            </label>
            <div className="flex gap-3 mt-3 text-white">
                <button className="px-3 py-2 bg-gray-400 hover:bg-gray-500 hover:cursor-pointer rounded-sm" onClick={handleCancel} type="button">Cancel</button>
                <button className="px-3 py-2 bg-teal-600 hover:bg-teal-700 hover:cursor-pointer rounded-sm">Save</button>
            </div>
        </form>
    )
}

export default TransactionForm