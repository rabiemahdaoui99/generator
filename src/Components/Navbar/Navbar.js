import React , {useEffect} from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

const Navbar = () => {

  function animation(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }
  function displayBlock(){
    let dropdownItems = document.getElementById('dropdown-items')
    dropdownItems.style.display = "block"
  }
  function displayNone(){
    let dropdownItems = document.getElementById('dropdown-items')
    dropdownItems.style.display = "none"
  }
  useEffect(() => {
    
    animation();
    $(window).on('resize', function(){
      setTimeout(function(){ animation(); }, 500);
    });
    
  }, []);

  return (
  <nav className="navbar navbar-expand-lg navbar-mainbg">
    
      <NavLink className="navbar-brand navbar-logo" to="/" exact>
        EXAM GENERATOR
      </NavLink>
    
    
      <button 
        className="navbar-toggler"
        onClick={ function(){
          setTimeout(function(){ animation(); });
        }}
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
      </button>
 
      <div 
        className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
            
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            
            <li className="nav-item active">
              <NavLink className="nav-link" to="/" exact>
                Range
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/HandSignal" exact>
                Hand Signals
              </NavLink> 
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/ConvertWeights" exact>
              Convert Weights
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/PartOfLine" exact>
                Part Of Line
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Rcl" exact>
              Total weight
              </NavLink>
            </li>
            <li className="nav-item d-block d-lg-none">
              <NavLink className="nav-link" to="/MaximumRadius" exact>
              Maximum radius
              </NavLink>
            </li>
            <li className="nav-item d-block d-lg-none">
              <NavLink className="nav-link" to="/GrossCapacity" exact>
              Gross capacity
              </NavLink>
            </li>
            <li className="nav-item d-block d-lg-none">
              <NavLink className="nav-link" to="/BoomAngle" exact>
              Boom angle high &amp; low
              </NavLink>
            </li>
            <li className="nav-item d-block d-lg-none">
              <NavLink className="nav-link" to="/LoadedBoomAngle" exact>
              Loaded boom angle
              </NavLink>
            </li>
            <li className="nav-item d-block d-lg-none">
              <NavLink className="nav-link" to="/MaximumBoomLength" exact>
              Maximum boom length
              </NavLink>
            </li>
            <li className="nav-item d-none d-lg-block dropdown">
              <div className='dropdown-icon' id='dropdown-icon' onMouseOver={displayBlock} >▼</div>
              
            </li>
        </ul>
      </div>
      <div className='dropdown-items' id="dropdown-items" onMouseLeave={displayNone}>
        <a className="dropdown-item" href="/MaximumRadius">Maximum radius</a>
        <a className="dropdown-item" href="/GrossCapacity">Gross capacity</a>
        <a className="dropdown-item" href="/BoomAngle">Boom angle high &amp; low</a>
        <a className="dropdown-item" href="/LoadedBoomAngle">Loaded boom angle</a>
        <a className="dropdown-item" href="/MaximumBoomLength">Maximum boom length</a>
      </div>
  </nav>
  )
}
export default Navbar;