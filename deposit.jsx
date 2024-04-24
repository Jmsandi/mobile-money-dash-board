export default function Widget() {
    return (
        <body className="bg-zinc-200 p-4 font-sans">
            <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-bold text-purple-600 mb-4">Deposit</h2>
                <div className="mb-6">
                    <label htmlFor="amount" className="block text-zinc-700 text-sm font-bold mb-2">Amount $</label>
                    <input type="text" id="amount" name="amount" placeholder="0.00" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                </div>
                <div className="mb-6">
                    <h3 className="text-zinc-700 text-sm font-bold mb-2">Pay with</h3>
                    <div className="flex justify-between space-x-4">
                        <button className="flex-1 bg-white border-2 border-zinc-300 rounded-lg p-2 text-center shadow-sm hover:border-purple-500">
                            <img src="https://placehold.co/24x24" alt="Bank" className="mx-auto mb-2">
                            Bank
                        </button>
                        <button className="flex-1 bg-white border-2 border-zinc-300 rounded-lg p-2 text-center shadow-sm hover:border-purple-500">
                            <img src="https://placehold.co/24x24" alt="Paypal" className="mx-auto mb-2">
                            Paypal
                        </button>
                        <button className="flex-1 bg-white border-2 border-zinc-300 rounded-lg p-2 text-center shadow-sm hover:border-purple-500">
                            <img src="https://placehold.co/24x24" alt="Stripe" className="mx-auto mb-2">
                            Stripe
                        </button>
                    </div>
                </div>
                <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
                    Process
                </button>
            </div>
        </body>
        
    )
}