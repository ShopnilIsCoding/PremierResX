import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../src/Providers/AuthProvider';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Estate from '../Components/Estates/Estate';
import { useLoaderData } from 'react-router-dom';
import Coupon from '../Components/Coupon';

const ForYou = () => {
    const { user, loading } = useContext(AuthContext);
    const [topChoices, setTopChoices] = useState([]);
   const data=useLoaderData();
    const filterTopChoices = () => {
        const sortedData = data.sort((a, b) => a.price - b.price);
        const topThree = sortedData.slice(0, 3);
        setTopChoices(topThree);
    };

    // Call filterTopChoices on component mount
    React.useEffect(() => {
        filterTopChoices();
    }, []);

    if (loading || !user) {
        return <Skeleton count={5} />;
    }

    return (
        <div className="px-4 py-8">
            <Helmet>
                <title>PremierResX | For You</title>
            </Helmet>
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Top Choices for You</h2>
                <p className="text-lg text-gray-600">Hurry up! Get up to 10% discount on these top choices for a limited time only.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {topChoices.map(estate => (
                    <Estate key={estate.id} estate={estate} />
                ))}
            </div>
            <div className="mt-8">
                <Coupon code="MYCHOICE10" />
            </div>
        </div>
    );
};

export default ForYou;
