import Logo from "../../assets/logo.png";
import "./index.css";
const LeftPanel = () => {
  return (
    <div className="nav">
      <div className="nav-top">
        <img src={Logo} alt="logo" />
        <div>DashBoard</div>
        <div>Recipes</div>
        <div>Blog</div>
        <div>Templates</div>
        <div>Integrations</div>
      </div>

      <div className="nav-bottom">
        <div className="name-block">
          <div className="name">KS</div>
          <div className="name-info">
            <p className="inner-name">KritiKalpa.saha</p>
            <p className="inner-name">Credits Used 313.2</p>
          </div>
        </div>

        <button>Change Plan</button>
        <div>Product Roadmap</div>
        <div>What's New?</div>
      </div>
    </div>
  );
};

export default LeftPanel;
