import { useState } from "react";
import type { FormEvent } from "react";


type Transaction = {
    type: "income" | "expense",
    amount: number,
    category: string,
    description?: string,
 
}


const TransactionForm = () => {
    const [transaction, setTransaction] = useState<Transaction>({ type: "expense", amount: 1, category: "" });
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log({ transaction })

    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setTransaction(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCancel = () => {
        setTransaction({ type: "expense", amount: 1, category: "" });
    }

    return (
        <form onSubmit={handleSubmit} className="border rounded-md border-black my-3 p-3">
            <div className="flex flex-col gap-3">

                <p className="font-semibold">Transaction Type</p>
                <label htmlFor="income" className="flex items-center gap-2" >
                    <input type="radio" name="type" id="income" value="income" onChange={handleChange} checked={transaction.type === "income"} />
                    <span>Income</span>
                </label>

                <label htmlFor="expense" className="flex items-center gap-2">
                    <input type="radio" name="type" id="expense" value="expense" onChange={handleChange} checked={transaction.type === "expense"} />
                    <span>Expense</span>
                </label>
            </div>
            <label className="flex items-center gap-2 mt-2" htmlFor="amount"><span className="font-semibold">Amount:</span>

                <input className="border border-blue-500 rounded-sm" type="number" min={1} value={transaction.amount} onChange={handleChange} name="amount" id="amount" />
            </label>
            <select name="category" id="category" className="p-2 my-2" value={transaction.category} onChange={handleChange}  >
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