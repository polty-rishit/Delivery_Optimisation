// components/Card.tsx
const Card = ({ title, children, icon }: { title: string, children: React.ReactNode, icon: React.ReactNode }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition-all hover:scale-105 hover:shadow-xl">
        <div className="text-blue-600 text-5xl mb-4">{icon}</div>
        <h2 className="text-xl font-semibold text-gray-700 mb-3">{title}</h2>
        <div className="text-gray-500 text-center">{children}</div>
      </div>
    );
  };
  
  export default Card;
  