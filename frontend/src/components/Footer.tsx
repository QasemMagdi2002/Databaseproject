import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="footer bg-base-200 text-base-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link to='/login' className="link link-hover">Login</Link>
          <Link to='/categories' className="link link-hover">Categories</Link>
          <Link to='/cart' className="link link-hover">Cart</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link to='/login' className="link link-hover">Home</Link>
          <Link to='/about' className="link link-hover">About</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
}