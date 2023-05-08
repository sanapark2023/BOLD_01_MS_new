import { Link } from 'react-router-dom';

function ScrollToTopLink({ to, children }) {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Link to={to} onClick={handleClick}>
      {children}
    </Link>
  );
}
export default ScrollToTopLink;