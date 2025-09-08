// ArrowIcon.jsx
const ArrowIcon = ({ direction = 'up', className = '' }) => {
  const rotationClass = direction === 'up' ? '' : 'rotate-180';
  
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      // Use "currentColor" to inherit color from the parent's text color
      fill="currentColor"
      // Combine passed classes with our rotation class
      className={`${className} ${rotationClass} transition-transform duration-300`}
    >
      {/* This path defines the shape of the triangle */}
      <path d="M10 3.5l7.5 10H2.5L10 3.5z" />
    </svg>
  );
};

export default ArrowIcon;