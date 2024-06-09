import { useState } from "react";
import Counter from "./components/Counter";
import eu from "./картинки/UK-SVG.svg"
import chel from "./картинки/Label.svg"
import korzina from "./картинки/Labe.svg"
import chapka from "./styles/chapka.css"
import block1 from "./картинки/velobike.jpeg"
import block2 from "./картинки/mugic.svg"
import block3 from "./картинки/image.jpeg.svg"
import block4 from "./картинки/Bike-image.jpeg.svg"
import block5 from "./картинки/div.sizing-small.svg"
import krug1 from "./картинки/krug1.svg"
import krug2 from "./картинки/krug2.svg"
import krug3 from "./картинки/krug3.svg"
import krug4 from "./картинки/krug4.svg"
import bike1 from "./картинки/Rectangle 1.svg"
import bike2 from "./картинки/Rectangle 2.svg"
import velosiped1 from "./картинки/velosiped1.svg"
import velosiped2 from "./картинки/velosiped2.svg"
import strela1 from "./картинки/strela1.svg"
import strela2 from "./картинки/strela2.svg"
import strela3 from "./картинки/strela3.svg"
import strela4 from "./картинки/strela4.svg"
import butt1 from "./картинки/butt1.svg"
import butt2 from "./картинки/butt2.svg"
import butt3 from "./картинки/butt3.svg"
import butt4 from "./картинки/butt4.svg"
import butt5 from "./картинки/butt5.svg"
import butt6 from "./картинки/butt6.svg"
import butt7 from "./картинки/butt7.svg"
import butt8 from "./картинки/butt8.svg"




          
function App() {
  const[value, setValue] = useState('')
  
  return (
    <>
  <div className="header">
    <div className="shapka">
      <p>VELORETTI</p>
    </div>
    <div className="shap">
      <select>
        <option>ELECTRIC</option>
      </select>
      <select>
        <option>CITY</option>
      </select>
      <select>
        <option>KIDS</option>
      </select>
      <div className="tutu">
      <p>ACCESSORIES</p>
      <p>STORES</p>
      </div>
      <div className="tuta">
        <select>
        <option>LEASING</option>
        </select>
      </div>
      </div>
    <div className="sh">
      <p>EN</p>
    </div>
    <div className="s">
      <img src={eu}></img>
    </div>
    <div className="shi">
      <img src={chel}></img>
      <img src={korzina}></img>
    </div>
  </div>

  <div className="block1">
    <div className="velo">
      <img src={block1} className="img"></img>
    </div>
    <div className="text1">
      <p>VELORETTI BUSINESS</p>
    </div>
    <div className="text2">
      <p>Bike Lease Plan for Employees.</p>
    </div>
  </div>
  

  <div className="block2">
    <div className="mugic">
      <img src={block2} className="img2"></img>
    </div>
    <div className="text3">
      <p>Bike plans for <br></br>employees.</p>
    </div>
    <div className="text4">
      <p>Veloretti Electrics benefit both the environment and the health of<br></br>
        your employees. Oh, and they look good too. Cost-free for the<br></br>
        employer and outside of the WKR.</p>
    </div>
    <div className="text5">
      <p>Discover more</p>
    </div>
  </div>

  <div className="block3">
    <div className="mugic2">
      <img src={block3} className="img3"></img>
    </div>
    <div className="text6">
      <p>Service,<br></br>maintenance and<br></br>insurance</p>
    </div>
    <div className="text7">
      <p>The lease includes an all-in service package.<br></br>Throughout the entire 36 months, you are<br></br>fully insured against damage, theft and<br></br>
        maintenance. In addition, you always have<br></br>
          access to roadside assistance. </p>
    </div>
  </div>


  <div className="block4">
      <div className="gugu">
        <img src={block4} className="img4"></img>
      </div>
      <div className="text8">
        <p>Free of charge for<br></br>employers</p>
      </div>
    <div className="text9">
      <p>The bike plan is totally independent of the WKR and is free for you as<br></br>an employer. The employee pays the lease costs and you, as the<br></br>employer, decide whether you want to contribute to the costs </p>
    </div>
    <div className="text10">
      <p>Cost example</p>
    </div>
    
  <div className="block5">
  <div className="gaga">
        <img src={block5} className="img5"></img>
      </div>
    <div className="text12">
      <p>How it works</p>
    </div>
    <div className="text13">
      <p>Register your company</p>
    </div>
    <div className="text14">
      <p>Fill in our registration form with your company details. After<br></br>your registration, our leasing partner will do a credit check. You<br></br>
      will hear whether your application has been approved within 24<br></br>hours.</p>
      </div>
    <div className="text15">
      <p>Determine the requirements</p>
    </div>
    <div className="text16">
    <p>You get acces to the digital platform. Set the requirements for<br></br>your employees and share the registration link.</p>
    </div>
    <div className="text17">
    <p>Ride your bike!</p>
    </div>
    <div className="text18">
    <p>Let's go! Your employees can choose their bikes and they'll be<br></br>delivered straight to their homes.</p>
    </div>
    <div className="text19">
    <p>Administration</p>
    </div>
    <div className="text20">
    <p>Everything in one place. The digital platform gives you an easy<br></br>overview of all the information for your payroll.</p>
    </div>
    <div className="punkt1">
    <img src={krug1} className="img6"></img>
    </div>
    <div className="punkt2">
    <img src={krug2} className="img7"></img>
    </div>
    <div className="punkt3">
    <img src={krug3} className="img8"></img>
    </div>
    <div className="punkt4">
    <img src={krug4} className="img9"></img>
    </div>
    </div>
    <div className="block7">  
      <div className="aboba">
        <img src={bike1} className="img10"></img>
        <img src={bike2} className="img11"></img>
      </div>
    </div>
    <div className="aboba1">
    <img src={velosiped1} className="img12"></img>
    <img src={velosiped2} className="img13"></img>
    </div>
    <div className="aboba2">
    <img src={strela1} className="img14"></img>
    <img src={strela2} className="img15"></img>
    </div>
    <div className="aboba3">
    <img src={strela3} className="img16"></img>
    <img src={strela4} className="img17"></img>
    </div>
    <div className="aboba4">
    <img src={butt1} className="img18"></img>
    <img src={butt2} className="img19"></img>
    <img src={butt3} className="img20"></img>
    <img src={butt4} className="img21"></img>
    </div>
    <div className="aboba5">
    <img src={butt5} className="img22"></img>
    <img src={butt6} className="img23"></img>
    <img src={butt7} className="img24"></img>
    <img src={butt8} className="img25"></img>
    </div>
    <div className="zag">
      <div className="zag1">
      <p>Electric Ace</p>
      </div>
      <div className="zag2">
        <p>Two</p>
      </div>
      <div className="zag3">
        <p>€69,07 NET/MONTH</p>
      </div>
    <div className="zag4">
      <p>Electric Ivy</p>
    </div>
    <div className="zag5">
      <p>Two</p>
    </div>
    <div className="zag6">
      <p>€69,07 NET/MONTH</p>
    </div>
    </div>
    <div className="block8">
      <div className="polya">
        <div className="get">
          <p>Get in touch</p>
        </div>
        <input placeholder="First name" className="FN"></input>
        <input placeholder="Last name" className="LN"></input>
        <input placeholder="Email address" className="EA"></input>
        <input placeholder="Phone number" className="PN"></input>
        <input placeholder="Company name" className="CN"></input>
        <select className="CS">
          <option>Company Size</option>
        </select>
        <input placeholder="Number of bikes" className="NOB"></input>
        <textarea placeholder="How can we help" className="HCWH" multiple></textarea>
        <button className="STR">Send the request</button>
      </div>
    </div>
    <div className="block9">
      <div className="Any">
        <p>Any questions?</p>  
      </div>
      <div className="What">
        <p>What about the paperwork?</p>
        <button className="minus">-</button>
      </div>
      <div className="opis">
        <p>The bicycle plan is set up so that there will be no administrative work on your part as the employer. You can use a free online platform<br></br>
        that has been created by our leasing partner. This provides you with a simple overview of your business and your employees, allowing<br></br>
        you to arrange everything. It also simplifies all the paperwork. Everything is organised with just a few clicks.</p>
      </div>
      <div className="How">
        <p>How does it work with an employee who retires early?</p>
        <button className="plus1">+</button>
      </div>
      <div className="Veloret">
        <p>What does a Veloretti Bike Plan cost for an employer?</p>
        <button className="plus2">+</button>
      </div>
      <div className="insurance">
        <p>How is the insurance & maintenance arranged when leasing a Veloretti<br></br>
        bike?</p>
        <button className="plus3">+</button>
      </div>
      <div className="legal">
        <p>What are the legal requirements for the Veloretti bicycle plan?</p>
        <button className="plus4">+</button>
      </div>
    </div>


  </div>
    </>
  );
}

export default App;