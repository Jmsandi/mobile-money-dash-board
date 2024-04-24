export default function Widget() {
    return (
        <body className="bg-zinc-100 dark:bg-zinc-800">
            <div className="max-w-sm mx-auto">
                
                <div className="bg-purple-600 text-white p-4 rounded-t-lg">
                    <h1 className="text-lg font-bold">Jetpay</h1>
                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                            <img src="https://placehold.co/40x40" alt="Profile" className="rounded-full">
                            <div className="ml-3">
                                <p className="font-semibold">John Doe</p>
                                <p>@johndoe97</p>
                            </div>
                        </div>
                        <div className="text-lg font-semibold">$ 650</div>
                    </div>
                </div>
        
                
                <div className="grid grid-cols-3 gap-4 p-4 bg-white">
                    <div className="flex flex-col items-center">
                        <div className="p-4 bg-green-200 rounded-lg">
                            <img src="https://placehold.co/24x24" alt="Withdraw">
                        </div>
                        <p className="mt-2 text-sm">Withdraw</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="p-4 bg-red-200 rounded-lg">
                            <img src="https://placehold.co/24x24" alt="Transfer">
                        </div>
                        <p className="mt-2 text-sm">Transfer</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="p-4 bg-purple-200 rounded-lg">
                            <img src="https://placehold.co/24x24" alt="Voucher">
                        </div>
                        <p className="mt-2 text-sm">Voucher</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="p-4 bg-blue-200 rounded-lg">
                            <img src="https://placehold.co/24x24" alt="Internet">
                        </div>
                        <p className="mt-2 text-sm">Internet</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="p-4 bg-orange-200 rounded-lg">
                            <img src="https://placehold.co/24x24" alt="Ticket">
                        </div>
                        <p className="mt-2 text-sm">Ticket</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="p-4 bg-blue-300 rounded-lg">
                            <img src="https://placehold.co/24x24" alt="Events">
                        </div>
                        <p className="mt-2 text-sm">Events</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="p-4 bg-yellow-200 rounded-lg">
                            <img src="https://placehold.co/24x24" alt="Electricity">
                        </div>
                        <p className="mt-2 text-sm">Electricity</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="p-4 bg-pink-200 rounded-lg">
                            <img src="https://placehold.co/24x24" alt="Donation">
                        </div>
                        <p className="mt-2 text-sm">Donation</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="p-4 bg-zinc-300 rounded-lg">
                            <img src="https://placehold.co/24x24" alt="All Pages">
                        </div>
                        <p className="mt-2 text-sm">All Pages</p>
                    </div>
                </div>
        
                
                <div className="bg-white p-4 rounded-b-lg">
                    <p className="text-center text-sm">Follow us on:</p>
                    <div className="flex justify-around mt-2">
                        <img src="https://placehold.co/24x24" alt="Social Icon">
                        <img src="https://placehold.co/24x24" alt="Social Icon">
                        <img src="https://placehold.co/24x24" alt="Social Icon">
                    </div>
                </div>
        
                
                <div className="bg-zinc-200 p-2 fixed bottom-0 inset-x-0 flex justify-around text-sm">
                    <div>Home</div>
                    <div>History</div>
                    <div>Deposit</div>
                    <div>Live Chat</div>
                    <div>Account</div>
                </div>
            </div>
        </body>
    )
}