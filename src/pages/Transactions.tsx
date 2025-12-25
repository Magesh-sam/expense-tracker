import TransactionList from '../components/TransactionList'

const Transactions = () => {
    return (
        <div className='w-full my-3 px-5'>
            <h2 className="text-3xl font-bold mb-3">Tranasctions</h2>
            <TransactionList/>
        </div>
    )
}

export default Transactions