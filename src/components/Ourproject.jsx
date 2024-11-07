import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import projectData from '../data/projectData';
import '../scss/Ourproject.scss';

const Ourproject = () => {
  return (
    <div className="ourprojectmain" id="projects">
      <div className="ourprojectsemimain">
        <Container className="ourprojectcon">
          <div className="ourprojectconsemimain">
            <div className="projectwrap">
              <h2 className="projectheadmain">OUR PROJECT</h2>
              <p className="projectparahead">
                Check out some of our awesome projects with creative ideas and great design.
              </p>
            </div>
            <Row className="grid-container">
              {projectData.map((project) => (
                <Col key={project.id} xs="12" sm="6" lg="4" className="grid-item">
                  <div className="ourprojectimageholder">
                    <img src={project.image} alt={project.title} className="ourprojectfinalimage" />
                  </div>
                  <h3 className="projecthead">{project.title}</h3>
                  <p className="projectpara">{project.category}</p>
                </Col>
              ))}
            </Row>
            <div className="probuttonholder">
              <Button color="primary" className="projectbutton">Start a Project</Button>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Ourproject;




// import React from 'react';
// import { Container, Row, Col, Button } from 'reactstrap';
// import ourproimg1 from "../assets/Figure → pd7.jpg.png"
// import ourproimg2 from "../assets/Figure → pd8.jpg.png"
// import ourproimg3 from "../assets/Figure → pd9.jpg.png"
// import ourproimg4 from "../assets/Figure → pd10.jpg.png"
// import ourproimg5 from "../assets/Figure → pd11.jpg.png"
// import ourproimg6 from "../assets/Figure → pd12.jpg.png"
// import "../scss/Ourproject.scss"

// const Ourproject = () => {
//   return (
//     <div className="ourprojectmain" id="projects">
//       <div className="ourprojectsemimain">
//         <Container className="ourprojectcon">
//           <div className="ourprojectconsemimain">
//             <div className="projectwrap">
//               <h2 className="projectheadmain">OUR PROJECT</h2>
//               <p className="projectparahead">
//                 Check out some of our awesome projects with creative ideas and great design.
//               </p>
//             </div>
//             <Row className="grid-container">
//               <Col xs="12" sm="6" lg="4" className="grid-item">
//                 <div className="ourprojectimageholder">
//                   <img src={ourproimg1} alt="" className="ourprojectfinalimage" />
//                 </div>
//                 <h3 className="projecthead">Cras Fermentum Sem</h3>
//                 <p className="projectpara">STATIONARY</p>
//               </Col>
//               <Col xs="12" sm="6" lg="4" className="grid-item">
//                 <div className="ourprojectimageholder">
//                   <img src={ourproimg2} alt="" className="ourprojectfinalimage" />
//                 </div>
//                 <h3 className="projecthead">Mollis Ipsum Mattis</h3>
//                 <p className="projectpara">MAGAZINE, BOOK</p>
//               </Col>
//               <Col xs="12" sm="6" lg="4" className="grid-item">
//                 <div className="ourprojectimageholder">
//                   <img src={ourproimg3} alt="" className="ourprojectfinalimage" />
//                 </div>
//                 <h3 className="projecthead">Ipsum Ultricies Cursus</h3>
//                 <p className="projectpara">PACKAGING</p>
//               </Col>
//               <Col xs="12" sm="6" lg="4" className="grid-item">
//                 <div className="ourprojectimageholder">
//                   <img src={ourproimg4} alt="" className="ourprojectfinalimage" />
//                 </div>
//                 <h3 className="projecthead">Inceptos Euismod Egestas</h3>
//                 <p className="projectpara">STATIONARY, BRANDING</p>
//               </Col>
//               <Col xs="12" sm="6" lg="4" className="grid-item">
//                 <div className="ourprojectimageholder">
//                   <img src={ourproimg5} alt="" className="ourprojectfinalimage" />
//                 </div>
//                 <h3 className="projecthead">Ipsum Mollis Vulputate</h3>
//                 <p className="projectpara">PACKAGING</p>
//               </Col>
//               <Col xs="12" sm="6" lg="4" className="grid-item">
//                 <div className="ourprojectimageholder">
//                   <img src={ourproimg6} alt="" className="ourprojectfinalimage" />
//                 </div>
//                 <h3 className="projecthead">Porta Ornare Cras</h3>
//                 <p className="projectpara">BRANDING</p>
//               </Col>
//             </Row>
//             <div className="probuttonholder">
//               <Button color="primary" className="projectbutton">Start a Project</Button>
//             </div>
//           </div>
//         </Container>
//       </div>
//     </div>
//   );
// };

// export default Ourproject;






// import React from 'react';
// import ourproimg1 from "../assets/Figure → pd7.jpg.png"
// import ourproimg2 from "../assets/Figure → pd8.jpg.png"
// import ourproimg3 from "../assets/Figure → pd9.jpg.png"
// import ourproimg4 from "../assets/Figure → pd10.jpg.png"
// import ourproimg5 from "../assets/Figure → pd11.jpg.png"
// import ourproimg6 from "../assets/Figure → pd12.jpg.png"
// import "../scss/Ourproject.scss"

// const Ourproject = () => {
//   return (
//     <div className="ourprojectmain" id="projects">
//       <div className="ourprojectsemimain">
//         <div className="container ourprojectcon">
//           <div className="ourprojectconsemimain">
//             <div className="projectwrap">
//               <div className="projectheadmain">OUR PROJECT</div>
//               <div className="projectparahead">
//                 Check out some of our awesome projects with creative ideas and great design.
//               </div>
//             </div>
//             <div className="grid-container">
//               <div className="grid-item">
//                 <div className="ourprojectimageholder">
//                   <img
//                     src={ourproimg1}
//                     alt=""
//                     className="ourprojectfinalimage"
//                   />
//                 </div>
//                 <div className="projecthead">Cras Fermentum Sem</div>
//                 <div className="projectpara">STATIONARY</div>
//               </div>
//               <div className="grid-item">
//                 <div className="ourprojectimageholder">
//                   <img
//                     src={ourproimg2}
//                     alt=""
//                     className="ourprojectfinalimage"
//                   />
//                 </div>
//                 <div className="projecthead">Mollis Ipsum Mattis</div>
//                 <div className="projectpara">MAGAZINE, BOOK</div>
//               </div>
//               <div className="grid-item">
//                 <div className="ourprojectimageholder">
//                   <img
//                     src={ourproimg3}
//                     alt=""
//                     className="ourprojectfinalimage"
//                   />
//                 </div>
//                 <div className="projecthead">Ipsum Ultricies Cursus</div>
//                 <div className="projectpara">PACKAGING</div>
//               </div>
//               <div className="grid-item">
//                 <div className="ourprojectimageholder">
//                   <img
//                     src={ourproimg4}
//                     alt=""
//                     className="ourprojectfinalimage"
//                   />
//                 </div>
//                 <div className="projecthead">Inceptos Euismod Egestas</div>
//                 <div className="projectpara">STATIONARY, BRANDING</div>
//               </div>
//               <div className="grid-item">
//                 <div className="ourprojectimageholder">
//                   <img
//                     src={ourproimg5}
//                     alt=""
//                     className="ourprojectfinalimage"
//                   />
//                 </div>
//                 <div className="projecthead">Ipsum Mollis Vulputate</div>
//                 <div className="projectpara">PACKAGING</div>
//               </div>
//               <div className="grid-item">
//                 <div className="ourprojectimageholder">
//                   <img
//                     src={ourproimg6 }
//                     alt=""
//                     className="ourprojectfinalimage"
//                   />
//                 </div>
//                 <div className="projecthead">Porta Ornare Cras</div>
//                 <div className="projectpara">BRANDING</div>
//               </div>
//             </div>
//             <div className="probuttonholder">
//               <button className="projectbutton">Start a Project</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Ourproject;

