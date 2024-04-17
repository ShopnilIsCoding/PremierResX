import Estate from "./Estate";


const Estates = ({data}) => {
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
            
            {data.map(estate=><Estate key={estate.id} estate={estate}></Estate>)}
        </div>
    );
};

export default Estates;