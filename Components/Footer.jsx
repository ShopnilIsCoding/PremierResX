
import 'animate.css';
const Footer = () => {
    return (
        <footer className="animate__animated animate__fadeInUp footer p-10 bg-base-200 text-base-content grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center">
  <aside>
    <img src={'/logo.png'} className="size-20" alt="" />
    <p >We Fullfill Your Dreams <br /><span className=' font-serif font-black'>&copy; 2024 <span className='bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient'>PremierResX</span>. All Rights Reserved.</span></p>
  </aside> 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Home Loan</a>
    <a className="link link-hover">Interior</a>
    <a className="link link-hover">Loan Calculator</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Guides</h6> 
    <a className="link link-hover">Area Guides</a>
    <a className="link link-hover">Buy/Sell Guides</a>
    <a className="link link-hover">Articles</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    );
};

export default Footer;