import React from 'react';

const Coupon = () => {
    const copyCode = () => {
        const cpnCode = document.getElementById('cpnCode').innerText;
        navigator.clipboard.writeText(cpnCode);
        document.getElementById('cpnBtn').innerText = 'Copied!';
    };
    return (
        <div className="container mx-auto">
        <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white text-center py-10 px-20 rounded-lg shadow-md relative">
            <img src="/logo.png" className="size-20 mx-auto mb-4 rounded-lg" alt="PremierResX" />
            <h3 className="text-2xl font-semibold mb-4 font-serif">Use this coupon to get 10% off!</h3>
            <div className="flex items-center space-x-2 mb-6">
                <span id="cpnCode" className="border-dashed border text-white px-4 py-2 rounded-l">MYCHOICE10</span>
                <span id="cpnBtn" onClick={copyCode}  className="border border-white bg-white text-purple-600 px-4 py-2 rounded-r cursor-pointer">Copy Code</span>
            </div>
            <p className="text-sm">Valid Till: 20 JUN, 2024</p>
            <div className="w-12 h-12 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 left-0 -ml-6"></div>
            <div className="w-12 h-12 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 right-0 -mr-6"></div>
        </div>
    </div>
    );
};

export default Coupon;
