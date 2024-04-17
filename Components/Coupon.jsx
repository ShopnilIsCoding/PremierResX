import React from 'react';

const Coupon = ({ code }) => {
    return (
        <div className="bg-blue-500 text-white rounded-md p-4 text-center">
            <p className="text-lg font-bold">Coupon Code:</p>
            <p className="text-2xl">{code}</p>
            <p className="text-sm">Use this coupon to get 10% off!</p>
        </div>
    );
};

export default Coupon;
