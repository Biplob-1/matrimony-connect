

const PackageCard = ({ title, description, price }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="text-3xl font-bold text-gray-900">${price}</span>
            </div>
            <div className="px-6 py-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Select
                </button>
            </div>
        </div>
    );
};

const PackageCards = () => {
    const packages = [
        {
            title: "Basic Package",
            description: "This is a basic package with essential features.",
            price: 19.99
        },
        {
            title: "Standard Package",
            description: "This package includes all standard features.",
            price: 49.99
        },
        {
            title: "Premium Package",
            description: "This package includes premium features.",
            price: 99.99
        }
    ];

    return (
        <div>
            <h3 className=" text-center text-3xl font-bold my-10">Our Packages</h3>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mt-8">
            {packages.map((pkg, index) => (
                <PackageCard
                    key={index}
                    title={pkg.title}
                    description={pkg.description}
                    price={pkg.price}
                />
            ))}
        </div>
        </div>
    );
};

export default PackageCards;
