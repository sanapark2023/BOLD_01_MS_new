import { NavLink } from 'react-router-dom';

function ScrollToTopNavLink({ to, children }) {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <NavLink to={to} onClick={handleClick}>
      {children}
    </NavLink>
  );
}
export default ScrollToTopNavLink;