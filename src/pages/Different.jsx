import React from "react";
import "../scss/styles.scss";
import { 
  Container, 
  Row, 
  Col,
  Card,
  CardBody
} from "reactstrap";
import { differentData } from "../data/differentData";


const Different = () => {
  return (
    <div className="diffmain" id="documentation">
      <Card className="diffsubmain">
        <CardBody className="diffsubsemimain p-0">
          <Container>
            <Row className="diffwrap">
              <Col xs="12"  lg="6" className="d-flex align-items-center">
                <img 
                  src={differentData.mainImage} 
                  alt="" 
                  className="w-100 h-auto"
                />
              </Col>
              <Col xs="12" lg="6" className="diffinfomain">
                <div className="diffhead">{differentData.mainTitle}</div>
                <div className="diffsubhead">{differentData.mainDescription}</div>
                <div className="diffsubinfo">
                  <Row className="subinfo1">
                    {differentData.featureIcons.slice(0, 2).map((icon, index) => (
                      <Col xs="12" md="8" lg="8" xl="5"  key={index} className="diffcol1" >
                        <div className="subleft">
                          <div>
                            <img
                              src={icon}
                              alt={differentData.featureTitles[index]}
                            />
                          </div>
                          <div className="subleftsemiinfos">
                            <div className="subleftsemiinfoshead">
                              {differentData.featureTitles[index]}
                            </div>
                            <div className="subleftsemiinfospara">
                              {differentData.featureDescriptions[index]}
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                  <Row className="subinfo1">
                    {differentData.featureIcons.slice(2).map((icon, index) => (
                      <Col xs="12" md="8" lg="8" xl="5"  key={index + 2} className="diffcol1">
                        <div className="subleft">
                          <div>
                            <img
                              src={icon}
                              alt={differentData.featureTitles[index + 2]}
                            />
                          </div>
                          <div className="subleftsemiinfos">
                            <div className="subleftsemiinfoshead">
                              {differentData.featureTitles[index + 2]}
                            </div>
                            <div className="subleftsemiinfospara">
                              {differentData.featureDescriptions[index + 2]}
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>

          <div className="joincommunity">
            <div className="joincommain">
              <div className="joincomhead">{differentData.community.title}</div>
              <div className="joincompara">
                {differentData.community.description}
              </div>
            </div>
          </div>

          <Container>
            <Row className="achivemain">
              {differentData.achievements.map((achievement, index) => (
                <Col xs="12" md="4" className="achivesemi" key={index}>
                  <div className="achivesemihead">{achievement.count}</div>
                  <div className="achivesemisub">{achievement.label}</div>
                </Col>
              ))}
            </Row>
            <Row className="achiveimg">
              <Col>
                <img
                  src={differentData.achievementImage}
                  alt=""
                  className="w-100"
                />
              </Col>
            </Row>
          </Container>
        </CardBody>
      </Card>
    </div>
  );
};

export default Different;


// import React from "react";
// import { differentData } from "../data/differentData";
// import "../scss/different.scss";

// const Different = () => {
//   return (
//     <div className="diffmain" id="documentation">
//       <div className="diffsubmain">
//         <div className="container diffsubsemimain">
//           <div className="diffwrap">
//             <div>
//               <img src={differentData.mainImage} alt="" />
//             </div>
//             <div className="diffinfomain">
//               <div className="diffhead">{differentData.mainTitle}</div>
//               <div className="diffsubhead">{differentData.mainDescription}</div>
//               <div className="diffsubinfo">
//                 <div className="subinfo1">
//                   {differentData.featureIcons.slice(0, 2).map((icon, index) => (
//                     <div className="subleft" key={index}>
//                       <div>
//                         <img
//                           src={icon}
//                           alt={differentData.featureTitles[index]}
//                         />
//                       </div>
//                       <div className="subleftsemiinfos">
//                         <div className="subleftsemiinfoshead">
//                           {differentData.featureTitles[index]}
//                         </div>
//                         <div className="subleftsemiinfospara">
//                           {differentData.featureDescriptions[index]}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="subinfo1">
//                   {differentData.featureIcons.slice(2).map((icon, index) => (
//                     <div className="subleft" key={index + 2}>
//                       <div>
//                         <img
//                           src={icon}
//                           alt={differentData.featureTitles[index + 2]}
//                         />
//                       </div>
//                       <div className="subleftsemiinfos">
//                         <div className="subleftsemiinfoshead">
//                           {differentData.featureTitles[index + 2]}
//                         </div>
//                         <div className="subleftsemiinfospara">
//                           {differentData.featureDescriptions[index + 2]}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="joincommunity">
//             <div className="joincommain">
//               <div className="joincomhead">{differentData.community.title}</div>
//               <div className="joincompara">
//                 {differentData.community.description}
//               </div>
//             </div>
//           </div>
//           <div className="container achivemain">
//             {differentData.achievements.map((achievement, index) => (
//               <div className="achivesemi" key={index}>
//                 <div className="achivesemihead">{achievement.count}</div>
//                 <div className="achivesemisub">{achievement.label}</div>
//               </div>
//             ))}
//           </div>
//           <div className="container achiveimg">
//             <div>
//               <img
//                 src={differentData.achievementImage}
//                 alt=""
//                 style={{ width: "100%" }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Different;




