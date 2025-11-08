// AgentNode component
const UpdatedAgentNode = ({ agent, position, isVisible, animationDelay }) => {
  const [showCard, setShowCard] = useState(false);

  const handleMouseEnter = () => {
    setShowCard(true);
  };

  const handleMouseLeave = () => {
    setShowCard(false);
  };

  const positionStyles = {
    position: 'absolute',
    ...position
  };

  return (
    <div 
      className={`
        absolute w-28 h-28 cursor-pointer transition-all duration-700 ease-out
        ${isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-75'
        }
      `}
      style={{
        ...positionStyles,
        transitionDelay: `${animationDelay}ms`
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="
        w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full
        flex flex-col items-center justify-center text-white text-center
        shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40
        transition-all duration-300 ease-out hover:scale-110
        relative overflow-hidden
        border-2 border-white/20
      ">
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-transparent rounded-full"></div>
        
        {/* Icon */}
        <div className="text-xl mb-1 z-10 drop-shadow-sm">
          {agent.icon}
        </div>
        
        {/* Title */}
        <div 
          className="text-xs font-bold leading-tight z-10 drop-shadow-sm px-1"
          style={{ fontFamily: 'DM Sans' }}
        >
          {agent.title}
        </div>
        
        {/* Subtitle */}
        <div 
          className="text-[10px] opacity-90 z-10 whitespace-pre-line leading-tight drop-shadow-sm px-1"
          style={{ fontFamily: 'DM Sans' }}
        >
          {agent.subtitle}
        </div>

        {/* Hover pulse effect */}
        {showCard && (
          <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse"></div>
        )}
      </div>
      
      {showCard && <AgentCard agent={agent} isVisible={showCard} position={position} />}
    </div>
  );
};