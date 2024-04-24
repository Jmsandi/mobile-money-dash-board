export default function Widget() {
    return (
        <div className="bg-purple-600 text-white p-4">
            <h1 className="text-lg font-bold">Account</h1>
        </div>
        <div className="bg-white rounded-lg shadow-lg mx-4 my-4 p-4">
            <div className="flex items-center space-x-4">
                <img src="https://placehold.co/50x50" alt="Profile" className="rounded-full">
                <div>
                    <h2 className="font-bold">John Doe</h2>
                    <p className="text-sm text-zinc-500">@johndoe97</p>
                </div>
                <div className="ml-auto bg-green-200 text-green-800 rounded-full px-3 py-1">
                    $ 650
                </div>
            </div>
        </div>
        <div className="space-y-2 mx-4">
            <div className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-between">
                <div className="flex items-center">
                    <span className="text-purple-500 mr-3">💳</span>
                    <span>Deposit</span>
                </div>
                <span>></span>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-between">
                <div className="flex items-center">
                    <span className="text-red-500 mr-3">📜</span>
                    <span>History</span>
                </div>
                <span>></span>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-between">
                <div className="flex items-center">
                    <span className="text-purple-500 mr-3">🔔</span>
                    <span>Notification</span>
                </div>
                <span>></span>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-between">
                <div className="flex items-center">
                    <span className="text-green-500 mr-3">💬</span>
                    <span>Live Chat</span>
                </div>
                <span>></span>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-between">
                <div className="flex items-center">
                    <span className="text-yellow-500 mr-3">⭐</span>
                    <span>About us</span>
                </div>
                <span>></span>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-between">
                <div className="flex items-center">
                    <span className="text-green-500 mr-3">📞</span>
                    <span>Contact us</span>
                </div>
                <span>></span>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4 flex items-center justify-between">
                <div className="flex items-center">
                    <span className="text-red-500 mr-3">🚪</span>
                    <span>Logout</span>
                </div>
                <span>></span>
            </div>
        </div>
    )
}