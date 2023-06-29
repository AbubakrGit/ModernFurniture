import React, { Component } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default class Part1 extends Component {
  render() {


    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true
    };



    return (
      <>
      <header>


        <div className="conta">

          <h3>DudeShape</h3>

          <div className="header__top__links">
              <a href="#!">Home</a>
              <a href="#!">About</a>
              <a href="#!">Features</a>
              <a href="#!">Contact</a>
          </div>

          <div className="header__top__imgs">
              <img src="../images/search.svg" alt="search" />
              <img src="../images/burger.svg" alt="burger" />
          </div>

        </div>


          <div className="conta1">

            <div className="white__chair">
              <img src="../images/image1.jpg" alt="white-chair" />
            </div>

            <div className="modern__furniture">
                <h1>We Help You Make Modern Furniture</h1>
                <h3>All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials </h3>
                <button><a href="#!">Explore More</a></button>
            </div>

          </div>


          <div className="container1">

            <h2>Trusted by 20,000+ companies</h2>

            <div className="payways">

              <img src="../images/mastercard.svg" alt="mastercard" />
              <img src="../images/air.svg" alt="airbnb" />
              <img src="../images/uber.svg" alt="uber" />
              <img src="../images/paypal.svg" alt="paypal" />
              <img src="../images/visa.svg" alt="visa" />
              <img src="../images/stripe.svg" alt="stripe" />

              </div>

          </div>


          <div className="container">

            <div className="sofa">

              <img src="../images/image2.png" alt="big-sofa" />

            </div>

            <div className="about__us">

              <h3>About Us</h3>

              <p>All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials </p>

              <div className="about__us__bottom">

                <img src="../images/safe.svg" alt="safe" />
                
                <div className="box">
                  <h5>Best Quality</h5>
                  <h6>All of our furniture uses the best materials and choices</h6>
                </div>

                <img src="../images/correct.svg" alt="correct" />

                <div className="box">
                  <h5>100% Secure</h5>
                  <h6>All of our furniture uses the best materials and choices</h6>
                </div>

                <img src="../images/free.svg" alt="free" />

                <div className="box">
                  <h5>Free Shpping</h5>
                  <h6>All of our furniture uses the best materials and choices</h6>
                </div>

              </div>

            </div>

          </div>


          <div className="container2">

            <h2>Our Popular Furniture</h2>

            <p>All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials and choices for our customers.</p>

            <div className="slider">

            <Slider {...settings}>
          <div>
          <div className="card">

          <div className="card-body">

  <img src="../images/slider.png" alt="image" />

</div>

<div className="card-footer">

<div className="right">
  <h5>White Swan Chair</h5>
  <h6>$40</h6>
</div>

<div className="left">

<div className="left__images">

  <div className="box">
    <img className='heart' src="../images/heart.svg" alt="heart" />
    <img className='heart1' src="../images/heart1.svg" alt="heart" />
  </div>

  <div className="box1">
    <img className='share' src="../images/share.svg" alt="share" />
    <img className='share1' src="../images/share1.svg" alt="share" />
  </div>

</div>

<button><a href="#!">Buy Now</a></button>

</div>

</div>

          </div>

          

          
          </div>
          <div>
          <div className="card">

<div className="card-body">

  <img src="../images/slider1.png" alt="image" />

</div>

<div className="card-footer">

<div className="right">
  <h5>White Swan Chair</h5>
  <h6>$40</h6>
</div>

<div className="left">

<div className="left__images">

  <div className="box">
    <img className='heart' src="../images/heart.svg" alt="heart" />
    <img className='heart1' src="../images/heart1.svg" alt="heart" />
  </div>

  <div className="box1">
    <img className='share' src="../images/share.svg" alt="share" />
    <img className='share1' src="../images/share1.svg" alt="share" />
  </div>

</div>

<button><a href="#!">Buy Now</a></button>

</div>

</div>

          </div>
          </div>
          <div>
          <div className="card">

<div className="card-body">

  <img src="../images/slider2.png" alt="image" />

</div>

<div className="card-footer">

<div className="right">
  <h5>White Swan Chair</h5>
  <h6>$40</h6>
</div>

<div className="left">

<div className="left__images">

  <div className="box">
    <img className='heart' src="../images/heart.svg" alt="heart" />
    <img className='heart1' src="../images/heart1.svg" alt="heart" />
  </div>

  <div className="box1">
    <img className='share' src="../images/share.svg" alt="share" />
    <img className='share1' src="../images/share1.svg" alt="share" />
  </div>

</div>

<button><a href="#!">Buy Now</a></button>

</div>

</div>

          </div>
          </div>
          <div>
          <div className="card">

<div className="card-body">

<img src="../images/slider.png" alt="image" />

</div>

<div className="card-footer">

<div className="right">
<h5>White Swan Chair</h5>
<h6>$40</h6>
</div>

<div className="left">

<div className="left__images">

<div className="box">
<img className='heart' src="../images/heart.svg" alt="heart" />
<img className='heart1' src="../images/heart1.svg" alt="heart" />
</div>

<div className="box1">
<img className='share' src="../images/share.svg" alt="share" />
<img className='share1' src="../images/share1.svg" alt="share" />
</div>

</div>

<button><a href="#!">Buy Now</a></button>

</div>

</div>

</div>
          </div>
          <div>
          <div className="card">

<div className="card-body">

  <img src="../images/slider1.png" alt="image" />

</div>

<div className="card-footer">

<div className="right">
  <h5>White Swan Chair</h5>
  <h6>$40</h6>
</div>

<div className="left">

<div className="left__images">

  <div className="box">
    <img className='heart' src="../images/heart.svg" alt="heart" />
    <img className='heart1' src="../images/heart1.svg" alt="heart" />
  </div>

  <div className="box1">
    <img className='share' src="../images/share.svg" alt="share" />
    <img className='share1' src="../images/share1.svg" alt="share" />
  </div>

</div>

<button><a href="#!">Buy Now</a></button>

</div>

</div>

          </div>
          </div>
          <div>
          <div className="card">

<div className="card-body">

  <img src="../images/slider2.png" alt="image" />

</div>

<div className="card-footer">

<div className="right">
  <h5>White Swan Chair</h5>
  <h6>$40</h6>
</div>

<div className="left">

<div className="left__images">

  <div className="box">
    <img className='heart' src="../images/heart.svg" alt="heart" />
    <img className='heart1' src="../images/heart1.svg" alt="heart" />
  </div>

  <div className="box1">
    <img className='share' src="../images/share.svg" alt="share" />
    <img className='share1' src="../images/share1.svg" alt="share" />
  </div>

</div>

<button><a href="#!">Buy Now</a></button>

</div>

</div>

          </div>
          </div>
        </Slider>

        
            
            </div>

          </div>


          <div className="container4">

            <h2>All Furniture</h2>

            <div className="box">
              <h3>Shop By Room</h3>
              <h3>Shop By Category</h3>
              <h3>Shop By Style</h3>
            </div>


            <div className="furniture">

            <div className="left">

              <video controls poster='../images/welcome.png'>
                <source src='../video/video.mp4' />
              </video>

              <div className="img1"><img className='' src="../images/greenbg.svg" alt="green" /></div>

              <div className="img2"><img className='' src="../images/greenbg.svg" alt="green" /></div>

            </div>

            <div className="right"> 
            
                <div className="box">

                  <img className='img1' src="../images/sofa.svg" alt="sofa" />
                  <img className='img2' src="../images/sofa1.svg" alt="sofa" />
                  <p>Living Room</p>
                </div>

                <div className="box">
                  <img className='img1' src="../images/kitchen.svg" alt="kitchen" />
                  <img className='img2' src="../images/kitchen1.svg" alt="kitchen" />
                  <p>Kitchen</p>
                </div>

                <div className="box">
                  <img className='img1' src="../images/chair.svg" alt="chair" />
                  <img className='img2' src="../images/chair1.svg" alt="chair" />
                  <p>Dining Room</p>
                </div>

                <div className="box">
                  <img className='img1' src="../images/pc1.svg" alt="pc" />
                  <img className='img2' src="../images/pc.svg" alt="pc" />
                  <p>Office</p>
                </div>

                <div className="box">
                  <img className='img1' src="../images/bed.svg" alt="bed" />
                  <img className='img2' src="../images/bed1.svg" alt="bed" />
                  <p>Bed Room</p>
                </div>

                <div className="box">
                  <img className='img1' src="../images/table.svg" alt="table" />
                  <img className='img2' src="../images/table1.svg" alt="table" />
                  <p>Hallway</p>
                </div>

            </div>

          </div>

          </div>


          <div className="container5">

            <div className="left">
              <img src="../images/image3.png" alt="table" />
            </div>

            <div className="right">
              <h2>Our customers are verry importan to us</h2>
              <p>All of our furniture uses the best materials and choices for our customers.All of our furniture uses the best materials and choices for our customers.</p>
              <img src="../images/jibon.svg" alt="Jibon" />
            </div>

          </div>


          <div className="container6">
            <h2>Subscribe to get the latest news about us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore at dolore.</p>
            <input type="text" placeholder='Enter your email' />
            <img src="../images/email.svg" alt="email" />
            <button><a href="#!">Register</a></button>
            </div>

            
          

      </header>


      <main>
      <div className="container7">
          <div className="inside">
            <div className="left__1">
              <h2>DudeShape</h2>
              <p>Lorem ipsum dolor sit amet, conse
              ctetur adipiscing elit, sed eiusmod tempor incididunt ut labore .</p>
              <h3>Follow Us :</h3>
              <div className="links">
                <a href="https://www.facebook.com/campaign/landing.php?campaign_id=11554070363&extra_1=s%7Cc%7C477437435741%7Ce%7Cfacebook%7C&placement=&creative=477437435741&keyword=facebook&partner_id=googlesem&extra_2=campaignid%3D11554070363%26adgroupid%3D112923417056%26matchtype%3De%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-541132862%26loc_physical_ms%3D1028523%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjw1_SkBhDwARIsANbGpFtxHr_EbGP-aLvtHkRN1cV88xI7ApDeISN4nJwIQUdeCi5nu3ZAFsUaAiDREALw_wcB"><img src="../images/facebook.svg" alt="facebook" /></a>
                <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicnUifQ%3D%3D%22%7D"><img src="../images/twiiter.svg" alt="twitter" /></a>
                <a href="https://www.instagram.com/"><img src="../images/instagram.svg" alt="instagram" /></a>
                <a href="https://youtube.com/"><img src="../images/youtube.svg" alt="youtube" /></a>
              </div>
            </div>
            <div className="left__2">
                <h2>Take a tour</h2>
                <a href="#!">Features</a>
                <a href="#!">Pricing</a>
                <a href="#!">Product</a>
                <a href="#!">Support</a>
            </div>
            <div className="right__1">
                <h2>Our company</h2>
                <a href="#!">About Us</a>
                <a href="#!">Blog</a>
                <a href="#!">Media</a>
                <a href="#!">Contact Us</a>
            </div>
            <div className="right__2">
                <h2>Subscribe</h2>
                <p>Subscribe to get the latest news from us</p>
                <input type="text" placeholder='Email Address'/>
                <button><a href="#!"><img src="../images/orange__arrow.svg" alt="arrow" /></a></button>
            </div>

          </div>
          <hr />
          <div className="bottom">
            <h5>Copyright @ 2021. Crafted with love.</h5>
          </div>

          </div>
      </main>
      </>
    )
  }
}
