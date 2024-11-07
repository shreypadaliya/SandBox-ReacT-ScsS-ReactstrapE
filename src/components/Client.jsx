import React from "react";
import "../scss/client.scss";
import clientimg1 from "../assets/Figure → z1.png.png";
import clientimg2 from "../assets/Figure → z2.png.png";
import clientimg3 from "../assets/Figure → z3.png.png";
import clientimg4 from "../assets/Figure → z4.png.png";
import clientimg5 from "../assets/Figure → z5.png.png";
import clientimg6 from "../assets/Figure → z6.png.png";
import clientimg7 from "../assets/Figure → z7.png.png";
import clientimg8 from "../assets/Figure → z8.png.png";
import { Row, Col } from "reactstrap";

const client = () => {
  return (
    <div className="clientmain" id="blocks">
      <div className="clientsemimain">
        <div className="container clientsemi">
          <div className="clientleftrightwrap">
            <div className="clientleft">
              <div className="clientlefthead">OUR CLIENT</div>
              <div className="clientleftsubhead">
                Trusted by over 300+ clients
              </div>
              <div className="clientleftsubtitle">
                We bring solutions to make life easier for our customers.
              </div>
            </div>
            <div className="clientright">
              <Row className="grid-wrapper">
                <Col xs={6} sm={4} md={3} className="grid-cell">
                  <img src={clientimg1} alt="" className="clientimg" />
                </Col>
                <Col xs={6} sm={4} md={3} className="grid-cell">
                  <img src={clientimg2} alt="" className="clientimg" />
                </Col>
                <Col xs={6} sm={4} md={3} className="grid-cell">
                  <img src={clientimg3} alt="" className="clientimg" />
                </Col>
                <Col xs={6} sm={4} md={3} className="grid-cell">
                  <img src={clientimg4} alt="" className="clientimg" />
                </Col>
                <Col xs={6} sm={4} md={3} className="grid-cell">
                  <img src={clientimg5} alt="" className="clientimg" />
                </Col>
                <Col xs={6} sm={4} md={3} className="grid-cell">
                  <img src={clientimg6} alt="" className="clientimg" />
                </Col>
                <Col xs={6} sm={4} md={3} className="grid-cell">
                  <img src={clientimg7} alt="" className="clientimg" />
                </Col>
                <Col xs={6} sm={4} md={3} className="grid-cell">
                  <img src={clientimg8} alt="" className="clientimg" />
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default client;




// import React from "react";
// import "../scss/client.scss";
// import clientimg1 from "../assets/Figure → z1.png.png"
// import clientimg2 from "../assets/Figure → z2.png.png"
// import clientimg3 from "../assets/Figure → z3.png.png"
// import clientimg4 from "../assets/Figure → z4.png.png"
// import clientimg5 from "../assets/Figure → z5.png.png"
// import clientimg6 from "../assets/Figure → z6.png.png"
// import clientimg7 from "../assets/Figure → z7.png.png"
// import clientimg8 from "../assets/Figure → z8.png.png"

// const client = () => {
//   return (
//     <div className="clientmain" id="blocks">
//       <div className="clientsemimain">
//         <div className="container clientsemi">
//           <div className="clientleftrightwrap">
//             <div className="clientleft">
//               <div className="clientlefthead">OUR CLIENT</div>
//               <div className="clientleftsubhead">
//                 Trusted by over 300+ clients
//               </div>
//               <div className="clientleftsubtitle">
//                 We bring solutions to make life easier for our customers.
//               </div>
//             </div>
//             <div className="clientright">
//               <div className="grid-wrapper">
//                 <div className="grid-cell">
//                   <img
//                     src={clientimg1}
//                     alt=""
//                     className="clientimg"
//                   />
//                 </div>
//                 <div className="grid-cell">
//                   <img
//                     src={clientimg2}
//                     alt=""
//                     className="clientimg"
//                   />
//                 </div>
//                 <div className="grid-cell">
//                   <img
//                     src={clientimg3}
//                     alt=""
//                     className="clientimg"
//                   />
//                 </div>
//                 <div className="grid-cell">
//                   <img
//                     src={clientimg4}
//                     alt=""
//                     className="clientimg"
//                   />
//                 </div>
//                 <div className="grid-cell">
//                   <img
//                     src={clientimg5}
//                     alt=""
//                     className="clientimg"
//                   />
//                 </div>
//                 <div className="grid-cell">
//                   <img
//                     src={clientimg6}
//                     alt=""
//                     className="clientimg"
//                   />
//                 </div>
//                 <div className="grid-cell">
//                   <img
//                     src={clientimg7}
//                     alt=""
//                     className="clientimg"
//                   />
//                 </div>
//                 <div className="grid-cell">
//                   <img
//                     src={clientimg8}
//                     alt=""
//                     className="clientimg"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default client;



