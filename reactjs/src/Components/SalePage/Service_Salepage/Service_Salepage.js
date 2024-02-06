import React from "react";
import "./Service_Salepage.scss";

import BG from "../../assets/ImgMobile/Background/MainBG.png";
import Design from "../../assets/ImgMobile/ImgSalePage/Design.webp";
import Support from "../../assets/ImgMobile/ImgSalePage/Support.webp";
import Offer from "../../assets/ImgMobile/ImgSalePage/Offer.webp";
import Medical from "../../assets/ImgMobile/ImgSalePage/Medical.png";
import { isMobile } from "react-device-detect";
import { handlePhoneClick } from "../../../utils/helper";

function Service_Salepage() {
  const arrayOne = [
    {
      id: 1,
      image: Design,
      title: 'Creative Design',
      descPri: '• 100% designs will be submitted for approval before an appointment',
      descSec: "• 0$ fee tattoo design"
    },
    {
      id: 2,
      image: Support,
      title: 'Maximum Support',
      descPri: '• Free touch up after getting tattoo',
      descSec: "• 0$ fee booking appointment"
    },
  ]
  const arrayTwo = [
    {
      id: 1,
      image: Offer,
      title: 'Special Offers',
      descPri: '• We offer discounts of up to 30% for group tattoos',
      descSec: "• We have a military discount available"
    },
    {
      id: 2,
      image: Medical,
      title: 'Medical Care And Modern Equipment',
      descPri: '• Every artist has medical license',
      descSec: "• We only use the best equipment"
    },
  ]
  return (
    <div className="Service_Salepage">
      {/* <img src={BG} alt="" className="Service_Salepage_BG" /> */}
      <h2 className="Service_Salepage_Name">Exceptional Quality and Customer Service</h2>
      <div className="Service_Salepage_Text">
        To bring our clients the most memorable and valuable experiences is our
        primary goal. We consistently prioritize excellence, ensuring that you
        receive the utmost support when you visit our shop.
      </div>
      {
        isMobile ? 
        <React.Fragment>
      <div className="Service_Salepage_Detail">
        <img src={Design} alt="logo" className="Service_Salepage_Detail_Logo" style={{ marginLeft: '4%'}}/>
        <h3 className="Service_Salepage_Detail_Name">Creative Design</h3>
        <div className="Service_Salepage_Detail_Des">
          <div className="Service_Salepage_Detail_Des_Detail">
            <h4 className="Service_Salepage_Detail_Des1_Text">
            • 100% designs will be submitted for approval before an appointment
            </h4>
          </div>
          <div className="Service_Salepage_Detail_Des_Detail">
            <h4 className="Service_Salepage_Detail_Des1_Text">
            • 0$ fee tattoo design
            </h4>
          </div>
        </div>
      </div>
      <div className="Service_Salepage_Detail">
        <img
          src={Support}
          alt="logo"
          className="Service_Salepage_Detail_Logo"
        />
        <h3 className="Service_Salepage_Detail_Name">Maximum Support</h3>
        <div className="Service_Salepage_Detail_Des">
          <div className="Service_Salepage_Detail_Des_Detail">
            <div className="dot" />
            <h4 className="Service_Salepage_Detail_Des1_Text">
            • 0$ fee booking appointment
            </h4>
          </div>
          <div className="Service_Salepage_Detail_Des_Detail">
            <div className="dot" />
            <h4 className="Service_Salepage_Detail_Des1_Text">
            • Free touch up after getting tattoo
            </h4>
          </div>
        </div>
      </div>
      <div className="Service_Salepage_Detail">
        <img src={Offer} alt="logo" className="Service_Salepage_Detail_Logo" />
        <h3 className="Service_Salepage_Detail_Name">Special Offers</h3>
        <div className="Service_Salepage_Detail_Des">
          <div className="Service_Salepage_Detail_Des_Detail">
            <div className="dot" />
            <h4 className="Service_Salepage_Detail_Des1_Text">
            • We offer discounts of up to 30% for group tattoos
            </h4>
          </div>
          <div className="Service_Salepage_Detail_Des_Detail">
            <div className="dot" />
            <h4 className="Service_Salepage_Detail_Des1_Text">
            • We have a military discount available
            </h4>
          </div>
        </div>
      </div>
      <div className="Service_Salepage_Detail">
        <img src={Medical} alt="logo" className="Service_Salepage_Detail_Logo" />
        <div className="Service_Salepage_Detail_Name">
          <h4>Medical Care</h4>
          <h4>And Modern Equipment</h4>
        </div>
        <div className="Service_Salepage_Detail_Des">
          <div className="Service_Salepage_Detail_Des_Detail">
            <div className="dot" />
            <h4 className="Service_Salepage_Detail_Des1_Text">
            • Every artist has medical license
            </h4>
          </div>
          <div className="Service_Salepage_Detail_Des_Detail">
            <div className="dot" />
            <h4 className="Service_Salepage_Detail_Des1_Text">
             • We only use the best equipment
            </h4>
          </div>
          <div className="Service_Salepage_Detail_Des_Detail">
            <div className="dot" />
            <h4 className="Service_Salepage_Detail_Des1_Text">
            • Ensuring needles are used only once
            </h4>
          </div>
        </div>
      </div>
      <div onClick={handlePhoneClick}  className="Service_Salepage_Phone">(210) 997-9737</div>
        </React.Fragment>
        :
        <div style={{display:"flex", flexDirection:'column', alignItems:'center'}}>
            <div style={{display:"flex", flexDirection:"row", width:"50%", height:"100%", marginTop:'3%', justifyContent:'space-between'}}>
                            {
                        arrayOne.map((item) => (
                          <div key={item.id} className="Service_Salepage_Detail">
                            <img src={item.image} alt="logo" className="Service_Salepage_Detail_Logo" />
                            <h3 className="Service_Salepage_Detail_Name">{item.title}</h3>
                            <div className="Service_Salepage_Detail_Des">
                              <div className="Service_Salepage_Detail_Des_Detail">
                                <h4 className="Service_Salepage_Detail_Des1_Text">
                                {item.descPri}
                                </h4>
                              </div>
                              <div className="Service_Salepage_Detail_Des_Detail">
                                <h4 className="Service_Salepage_Detail_Des1_Text">
                                {item.descSec}
                                </h4>
                              </div>
                            </div>
                          </div>
                        ))
            }
            </div>
            <div style={{display:"flex", flexDirection:"row", width:"50%", height:"100%", marginTop:'3%', justifyContent:'space-between'}}>
                            {
                        arrayTwo.map((item) => (
                          <div key={item.id} className="Service_Salepage_Detail">
                            <img src={item.image} alt="logo" className="Service_Salepage_Detail_Logo" />
                            <h3 className="Service_Salepage_Detail_Name">{item.title}</h3>
                            <div className="Service_Salepage_Detail_Des">
                              <div className="Service_Salepage_Detail_Des_Detail">
                                <h4 className="Service_Salepage_Detail_Des1_Text">
                                {item.descPri}
                                </h4>
                              </div>
                              <div className="Service_Salepage_Detail_Des_Detail">
                                <h4 className="Service_Salepage_Detail_Des1_Text">
                                {item.descSec}
                                </h4>
                              </div>
                            </div>
                          </div>
                        ))
            }
            </div>
      {/* <div className="Service_Salepage_Detail">
        <img
          src={Support}
          alt="logo"
          className="Service_Salepage_Detail_Logo"
        />
        <div className="Service_Salepage_Detail_Name">Maximum Support</div>
        <div className="Service_Salepage_Detail_Des">
          <div className="Service_Salepage_Detail_Des_Detail">
            <div className="dot" />
            <div className="Service_Salepage_Detail_Des1_Text">
              0$ fee booking appointment
            </div>
          </div>
          <div className="Service_Salepage_Detail_Des_Detail">
            <div className="dot" />
            <div className="Service_Salepage_Detail_Des1_Text">
              Free touch up after getting tattoo
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="Service_Salepage_Detail">
        <img src={Offer} alt="logo" className="Service_Salepage_Detail_Logo" />
        <div className="Service_Salepage_Detail_Name">Special Offers</div>
        <div className="Service_Salepage_Detail_Des">
          <div className="Service_Salepage_Detail_Des_Detail">
            <div className="dot" />
            <div className="Service_Salepage_Detail_Des1_Text">
              We offer discounts of up to 30% for group tattoos
            </div>
          </div>
          <div className="Service_Salepage_Detail_Des_Detail">
            <div className="dot" />
            <div className="Service_Salepage_Detail_Des1_Text">
              We have a military discount available
            </div>
          </div>
        </div>
      </div>
      <div className="Service_Salepage_Detail">
        <img src={Design} alt="logo" className="Service_Salepage_Detail_Logo" />
        <div className="Service_Salepage_Detail_Name">
          <div>Medical Care</div>
          <div> And Modern Equipment</div>
        </div>
        <div className="Service_Salepage_Detail_Des">
          <div className="Service_Salepage_Detail_Des_Detail">
            <div className="dot" />
            <div className="Service_Salepage_Detail_Des1_Text">
              Every artist has medical license
            </div>
          </div>
          <div className="Service_Salepage_Detail_Des_Detail">
            <div className="dot" />
            <div className="Service_Salepage_Detail_Des1_Text">
              We only use the best equipment
            </div>
          </div>
          <div className="Service_Salepage_Detail_Des_Detail">
            <div className="dot" />
            <div className="Service_Salepage_Detail_Des1_Text">
              Ensuring needles are used only once
            </div>
          </div>
        </div>
      </div> */}
      <div className="Service_Salepage_Phone">(210) 997-9737</div>
        </div>
      }
    </div>
  );
}

export default Service_Salepage;
