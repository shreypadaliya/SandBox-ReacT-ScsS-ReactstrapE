import React from "react";
import "../scss/whatwedo.scss"; 
import "bootstrap/dist/css/bootstrap.min.css";
import services from "../data/servicesData"; // Import the services data

function whatwedo() {
  return (
    <div className="whatwedomain" id="pages">
      <div className="whatwedosemimain">
        <div className="container whatwedocontwrap">
          <div className="whatwetextwrap">
            <div className="whatdohead">WHAT WE DO?</div>
            <div className="whatdosub">
              The service we offer is specifically designed to meet your needs.
            </div>
          </div>

          {services.map((service, index) => (
            <div className="webdesignmain" key={index}>
              <div className="webdesignimg">
                <img src={service.image} alt={service.title} style={{ height: '100%', width: '100%' }} />
              </div>
              <div className="webdesigncontent">
                <div className="webheading">{service.title}</div>
                <div className="webpara">{service.description}</div>
                {service.checklist.map((item, idx) => (
                  <div className="webcheckwrap" key={idx}>
                    <div className="checkwraper">
                      <img src={item.icon} alt="checkmark" />
                    </div>
                    <div className="webcheckinfo">{item.text}</div>
                  </div>
                ))}
                <div>
                  <button className="morebutton">More Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default whatwedo;








// import React from "react";
// import "../scss/whatwedo.scss"; 
// import "bootstrap/dist/css/bootstrap.min.css";
// import whatimg1 from "../assets/Figure → ui4.png.png";
// import whatimg2 from "../assets/Figure → ui1.png.png";
// import whatimg3 from "../assets/Figure → ui5.png.png";
// import righttick from "../assets/Icon.png";

// const services = [
//   {
//     title: "Web Design",
//     description:
//       "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna risus varius.",
//     image: whatimg1,
//     checklist: [
//       "Aenean quam ornare curabitur blandit.",
//       "Nullam quis risus eget urna mollis ornare leo.",
//       "Etiam porta euismod mollis natoque ornare.",
//     ],
//   },
//   {
//     title: "Mobile Development",
//     description:
//       "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna risus varius.",
//     image: whatimg2,
//     checklist: [
//       "Aenean quam ornare curabitur blandit.",
//       "Nullam quis risus eget urna mollis ornare leo.",
//       "Etiam porta euismod mollis natoque ornare.",
//     ],
//   },
//   {
//     title: "SEO Optimization",
//     description:
//       "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna risus varius.",
//     image: whatimg3,
//     checklist: [
//       "Aenean quam ornare curabitur blandit.",
//       "Nullam quis risus eget urna mollis ornare leo.",
//       "Etiam porta euismod mollis natoque ornare.",
//     ],
//   },
// ];

// function WhatWeDo() {
//   return (
//     <div className="whatwedomain" id="pages">
//       <div className="whatwedosemimain">
//         <div className="container whatwedocontwrap">
//           <div className="whatwetextwrap">
//             <div className="whatdohead">WHAT WE DO?</div>
//             <div className="whatdosub">
//               The service we offer is specifically designed to meet your needs.
//             </div>
//           </div>

//           {services.map((service, index) => (
//             <div className="webdesignmain" key={index}>
//               <div className="webdesignimg">
//                 <img src={service.image} alt={service.title} style={{ height: '100%', width: '100%' }} />
//               </div>
//               <div className="webdesigncontent">
//                 <div className="webheading">{service.title}</div>
//                 <div className="webpara">{service.description}</div>
//                 {service.checklist.map((item, idx) => (
//                   <div className="webcheckwrap" key={idx}>
//                     <div className="checkwraper">
//                       <img src={righttick} alt="checkmark" />
//                     </div>
//                     <div className="webcheckinfo">{item}</div>
//                   </div>
//                 ))}
//                 <div>
//                   <button className="morebutton">More Details</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default WhatWeDo;









// import React from 'react'
// import '../scss/whatwedo.scss'; 
// import 'bootstrap/dist/css/bootstrap.min.css';
// import whatimg1 from "../assets/Figure → ui4.png.png"
// import whatimg2 from "../assets/Figure → ui1.png.png"
// import whatimg3 from "../assets/Figure → ui5.png.png"
// import righttick from "../assets/Icon.png"


// function whatwedo() {
//   return (
//     <div className="whatwedomain" id="pages">
//       <div className="whatwedosemimain">
//         <div className="container whatwedocontwrap">
//           <div className="whatwetextwrap">
//             <div className="whatdohead">WHAT WE DO?</div>
//             <div className="whatdosub">
//               The service we offer is specifically designed to meet your needs.
//             </div>
//           </div>

//           <div className="webdesignmain">
//             <div className="webdesignimg">
//               <img src={whatimg1} alt="" style={{ height: '100%', width: '100%' }} />
//             </div>
//             <div className="webdesigncontent">
//               <div className="webheading">Web Design</div>
//               <div className="webpara">
//                 Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna risus varius.
//               </div>
//               <div className="webcheckwrap">
//                 <div className="checkwraper">
//                   <img src={righttick} alt="" />
//                 </div>
//                 <div className="webcheckinfo">Aenean quam ornare curabitur blandit.</div>
//               </div>
//               <div className="webcheckwrap">
//                 <div className="checkwraper">
//                   <img src={righttick} alt="" />
//                 </div>
//                 <div className="webcheckinfo">Nullam quis risus eget urna mollis ornare leo.</div>
//               </div>
//               <div className="webcheckwrap">
//                 <div className="checkwraper">
//                   <img src={righttick} alt="" />
//                 </div>
//                 <div className="webcheckinfo">Etiam porta euismod mollis natoque ornare.</div>
//               </div>
//               <div>
//                 <button className="morebutton">More Details</button>
//               </div>
//             </div>
//           </div>

//           <div className="webdesignmain2">
//             <div className="webdesignimg">
//               <img src={whatimg2} alt="" style={{ height: '100%', width: '100%' }} />
//             </div>
//             <div className="webdesigncontent">
//               <div className="webheading">Mobile Development</div>
//               <div className="webpara">
//                 Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna risus varius.
//               </div>
//               <div className="webcheckwrap">
//                 <div className="checkwraper">
//                   <img src={righttick} alt="" />
//                 </div>
//                 <div className="webcheckinfo">Aenean quam ornare curabitur blandit.</div>
//               </div>
//               <div className="webcheckwrap">
//                 <div className="checkwraper">
//                   <img src={righttick} alt="" />
//                 </div>
//                 <div className="webcheckinfo">Nullam quis risus eget urna mollis ornare leo.</div>
//               </div>
//               <div className="webcheckwrap">
//                 <div className="checkwraper">
//                   <img src={righttick} alt="" />
//                 </div>
//                 <div className="webcheckinfo">Etiam porta euismod mollis natoque ornare.</div>
//               </div>
//               <div>
//                 <button className="morebutton">More Details</button>
//               </div>
//             </div>
//           </div>

//           <div className="webdesignmain">
//             <div className="webdesignimg">
//               <img src={whatimg3} alt="" style={{ height: '100%', width: '100%' }} />
//             </div>
//             <div className="webdesigncontent">
//               <div className="webheading">SEO Optimization</div>
//               <div className="webpara">
//                 Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna risus varius.
//               </div>
//               <div className="webcheckwrap">
//                 <div className="checkwraper">
//                   <img src={righttick} alt="" />
//                 </div>
//                 <div className="webcheckinfo">Aenean quam ornare curabitur blandit.</div>
//               </div>
//               <div className="webcheckwrap">
//                 <div className="checkwraper">
//                   <img src={righttick} alt="" />
//                 </div>
//                 <div className="webcheckinfo">Nullam quis risus eget urna mollis ornare leo.</div>
//               </div>
//               <div className="webcheckwrap">
//                 <div className="checkwraper">
//                   <img src={righttick} alt="" />
//                 </div>
//                 <div className="webcheckinfo">Etiam porta euismod mollis natoque ornare.</div>
//               </div>
//               <div>
//                 <button className="morebutton">More Details</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default whatwedo;



