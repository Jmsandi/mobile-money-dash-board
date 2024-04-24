
import React from 'react';

// Constants for repeated class strings
const containerClass = "bg-white dark:bg-zinc-700 p-3 rounded-lg shadow flex items-center space-x-3";
const roundedIconClass = "p-2 rounded-full";

// Transaction data (could be fetched from an API or passed as props)
const transactions = {
    March: [
        { date: "20 March 2020", type: "Deposit", amount: "$350", color: "bg-green-400", textColor: "text-green-500" },
        { date: "05 March 2020", type: "Donation to Health Foundation", amount: "$50", color: "bg-pink-400", textColor: "text-pink-500" }
    ],
    February: [
        { date: "22 February 2020", type: "Electricity", amount: "$25", color: "bg-yellow-400", textColor: "text-yellow-500" },
        { date: "18 February 2020", type: "Withdraw", amount: "$100", color: "bg-purple-400", textColor: "text-purple-500" }
    ]
};

// TransactionItem component
const TransactionItem = ({ date, type, amount, color, textColor }) => (
    <div className={containerClass}>
        <div className={`${color} ${roundedIconClass}`}>
            <img src="https://placehold.co/20x20" alt={type} />
        </div>
        <div>
            <p className="text-sm">{date}</p>
            <p className="font-semibold">{type}</p>
            <p className={textColor}>{amount}</p>
        </div>
    </div>
);

// MonthSection component
const MonthSection = ({ month, data }) => (
    <div>
        <h2 className="text-lg font-semibold mb-2">{month}</h2>
        <div className="space-y-2">
            {data.map((item, index) => (
                <TransactionItem key={index} {...item} />
            ))}
        </div>
    </div>
);

// History component
const History = () => (
    <div className="bg-white dark:bg-zinc-800">
        <div className="bg-purple-600 text-white p-4 text-center font-bold text-lg">History</div>
        <div className="p-4">
            {Object.entries(transactions).map(([month, data], index) => (
                <MonthSection key={index} month={month} data={data} />
            ))}
        </div>
    </div>
);

export default History;