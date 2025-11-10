// AgentCard.jsx - Updated with exact card style from image
import React from 'react';

const AgentCard = ({ agent, isVisible, position }) => {
  if (!agent) return null;

  // Adjust card position based on node position to prevent overflow
  const getCardPosition = () => {
    const isRightSide = position?.right || (position?.left && parseInt(position.left) > 350);
    const isBottomHalf = position?.bottom || (position?.top && parseInt(position.top) > 350);
    
    let cardStyle = {
      position: 'absolute',
      zIndex: 60,
      width: '320px',
    };

    if (isRightSide) {
      cardStyle.right = '140px';
    } else {
      cardStyle.left = '140px';
    }

    if (isBottomHalf) {
      cardStyle.bottom = '40px';
    } else {
      cardStyle.top = '-20px';
    }

    return cardStyle;
  };

  return (
    <div 
      className={`
        bg-gradient-to-br from-yellow-50 via-yellow-25 to-yellow-100
        rounded-3xl p-8 shadow-2xl border border-yellow-200/50
        transition-all duration-300 ease-out
        backdrop-blur-sm
        ${isVisible 
          ? 'opacity-100 visible scale-100' 
          : 'opacity-0 invisible scale-95'
        }
      `}
      style={{
        ...getCardPosition(),
        background: 'linear-gradient(135deg, #fefce8 0%, #fef3c7 50%, #fde68a 100%)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(251, 191, 36, 0.1)'
      }}
    >
      {/* 3D Yellow Circles - Top Right */}
      <div className="absolute -top-4 -right-4 flex space-x-1">
        <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full shadow-lg transform rotate-12"></div>
        <div className="w-6 h-6 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full shadow-md transform -rotate-6 -ml-2 mt-1"></div>
        <div className="w-4 h-4 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full shadow-sm transform rotate-24 -ml-1 mt-2"></div>
      </div>

      {/* Icon and Title Section */}
      <div className="flex items-start mb-6">
        {/* Four-dot icon pattern */}
        <div className="flex flex-wrap w-8 h-8 mr-4 mt-1">
          <div className="w-3 h-3 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full mb-1 mr-1"></div>
          <div className="w-3 h-3 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full mb-1"></div>
          <div className="w-3 h-3 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full mr-1"></div>
          <div className="w-3 h-3 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full"></div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-800 mb-2 leading-tight" style={{ fontFamily: 'DM Sans' }}>
            {agent.fullTitle || agent.title}
          </h3>
        </div>
      </div>
      
      {/* Description */}
      <div className="text-gray-600 leading-relaxed text-base mb-0" style={{ fontFamily: 'DM Sans', lineHeight: '1.6' }}>
        {agent.description || `We leverage over 15 years of experience to deliver high-quality, tailored solutions for every client.`}
      </div>
    </div>
  );
};

export default AgentCard;