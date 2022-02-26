import './header.css';

export const Header = () => {
  return <div className="header">
      <div className="headertitle">
      <span className="headerup">React and Node</span>
      <span className="headerbe">Blog</span>
     </div>
    <img 
    src="header.jpg" alt="" 
    className="headerimage" />
  </div>;
};
