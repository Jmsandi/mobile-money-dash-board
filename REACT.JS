// Constants for repeated class strings
const roundedLg = "rounded-lg";
const flexCenterCol = "flex flex-col items-center";
const p4 = "p-4";

const App = () => {
    return (
        <div className="bg-zinc-100 dark:bg-zinc-800">
            <div className="max-w-sm mx-auto">
                <Header />
                <Features />
                <SocialFollow />
                <Footer />
            </div>
        </div>
    );
};

const Header = () => {
    return (
        <div className="bg-purple-600 text-white p-4 rounded-t-lg">
            <h1 className="text-lg font-bold">Jetpay</h1>
            <div className="flex items-center justify-between mt-4">
                <UserProfile />
                <div className="text-lg font-semibold">$ 650</div>
            </div>
        </div>
    );
};

const UserProfile = () => {
    return (
        <div className="flex items-center">
            <img src="https://placehold.co/40x40" alt="Profile" className="rounded-full" />
            <div className="ml-3">
                <p className="font-semibold">John Doe</p>
                <p>@johndoe97</p>
            </div>
        </div>
    );
};

const Features = () => {
    const features = [
        { bg: "bg-green-200", icon: "Withdraw" },
        { bg: "bg-red-200", icon: "Transfer" },
        { bg: "bg-purple-200", icon: "Voucher" },
        { bg: "bg-blue-200", icon: "Internet" },
        { bg: "bg-orange-200", icon: "Ticket" },
        { bg: "bg-blue-300", icon: "Events" },
        { bg: "bg-yellow-200", icon: "Electricity" },
        { bg: "bg-pink-200", icon: "Donation" },
        { bg: "bg-zinc-300", icon: "All Pages" }
    ];

    return (
        <div className="grid grid-cols-3 gap-4 p-4 bg-white">
            {features.map((feature, index) => (
                <div key={index} className={flexCenterCol}>
                    <div className={`${p4} ${feature.bg} ${roundedLg}`}>
                        <img src={`https://placehold.co/24x24`} alt={feature.icon} />
                    </div>
                    <p className="mt-2 text-sm">{feature.icon}</p>
                </div>
            ))}
        </div>
    );
};

const SocialFollow = () => {
    return (
        <div className="bg-white p-4 rounded-b-lg">
            <p className="text-center text-sm">Follow us on:</p>
            <div className="flex justify-around mt-2">
                <img src="https://placehold.co/24x24" alt="Social Icon" />
                <img src="https://placehold.co/24x24" alt="Social Icon" />
                <img src="https://placehold.co/24x24" alt="Social Icon" />
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <div className="bg-zinc-200 p-2 fixed bottom-0 inset-x-0 flex justify-around text-sm">
            <div>Home</div>
            <div>History</div>
            <div>Deposit</div>
            <div>Live Chat</div>
            <div>Account</div>
        </div>
    );
};

export default App;
```

### Explanation:
1. **App**: The main component that renders all subcomponents.
2. **Header**: Displays the top section including the user profile and balance.
3. **UserProfile**: A smaller component for displaying the user's image and name.
4. **Features**: Dynamically generates feature blocks from an array of objects.
5. **SocialFollow**: Shows social media follow buttons.
6. **Footer**: Displays the footer navigation.

This structure helps keep the code organized and makes components reusable and easier to maintain.