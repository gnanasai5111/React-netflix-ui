import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';
import { useState } from 'react';
import './navbar.scss';

const Navbar = () => {
    const [isScrolled,setIsScrolled]=useState(false);
    
    window.onscroll=()=>{
        setIsScrolled(window.pageYOffset===0?false:true);
        return ()=>window.onscroll=null;
    }

   
  return <div className={isScrolled?'navbar scrolled':'navbar'}>
      <div className='container'>
          <div className='left'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/1920px-Netflix_2014_logo.svg.png" alt=" " />
          <span>Homepage</span>
          <span className='navbarmainlinks'>Series</span>
          <span className='navbarmainlinks'>Movies</span>
          <span>New and Popular</span>
          <span>My list</span>

          </div>
          <div className='right'>
              <Search className='icon' />
              <span>Kid</span>
              <Notifications className='icon' />
              <img src="https://scontent-tir2-1.xx.fbcdn.net/v/t31.18172-8/p640x640/21414595_1975653862645992_1848095636266643354_o.jpg?_nc_cat=109&ccb=1-5&_nc_sid=e3f864&_nc_ohc=BFhKNq6S3bQAX-bqVH-&_nc_ht=scontent-tir2-1.xx&oh=00_AT-HQLbL_kFrHCmau-ebMemUx_y1IgiAg3Zwbd6sQcMGCg&oe=621D407C" alt="" />
              <div className='profile'>
              <ArrowDropDown className='icon' />
                  <div className='options'>
                      <span>Settings</span>
                      <span>Logout</span>
                  </div>
              </div>
              
          </div>
      </div>
  </div>;
};

export default Navbar;
