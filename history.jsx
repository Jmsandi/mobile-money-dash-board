export default function Widget() {
    return (
        <div className="bg-white dark:bg-zinc-800">
            <div className="bg-purple-600 text-white p-4 text-center font-bold text-lg">History</div>
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">March</h2>
                <div className="space-y-2">
                    <div className="bg-white dark:bg-zinc-700 p-3 rounded-lg shadow flex items-center space-x-3">
                        <div className="bg-green-400 p-2 rounded-full">
                            <img src="https://placehold.co/20x20" alt="Deposit">
                        </div>
                        <div>
                            <p className="text-sm">20 March 2020</p>
                            <p className="font-semibold">Deposit</p>
                            <p className="text-green-500">$350</p>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-zinc-700 p-3 rounded-lg shadow flex items-center space-x-3">
                        <div className="bg-pink-400 p-2 rounded-full">
                            <img src="https://placehold.co/20x20" alt="Donation">
                        </div>
                        <div>
                            <p className="text-sm">05 March 2020</p>
                            <p className="font-semibold">Donation to Health Foundation</p>
                            <p className="text-pink-500">$50</p>
                        </div>
                    </div>
                </div>
                <h2 className="text-lg font-semibold mt-4 mb-2">February</h2>
                <div className="space-y-2">
                    <div className="bg-white dark:bg-zinc-700 p-3 rounded-lg shadow flex items-center space-x-3">
                        <div className="bg-yellow-400 p-2 rounded-full">
                            <img src="https://placehold.co/20x20" alt="Electricity">
                        </div>
                        <div>
                            <p className="text-sm">22 February 2020</p>
                            <p className="font-semibold">Electricity</p>
                            <p className="text-yellow-500">$25</p>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-zinc-700 p-3 rounded-lg shadow flex items-center space-x-3">
                        <div className="bg-purple-400 p-2 rounded-full">
                            <img src="https://placehold.co/20x20" alt="Withdraw">
                        </div>
                        <div>
                            <p className="text-sm">18 February 2020</p>
                            <p className="font-semibold">Withdraw</p>
                            <p className="text-purple-500">$100</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}