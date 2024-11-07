// different.js
import React from 'react';
import { differentData } from '../data/differentData';
import "../scss/different.scss";

const Different = () => {
  return (
    <div className="diffmain" id="documentation">
      <div className="diffsubmain">
        <div className="container diffsubsemimain">
          <div className="diffwrap">
            <div>
              <img src={differentData.mainImage} alt="" />
            </div>
            <div className="diffinfomain">
              <div className="diffhead">{differentData.mainTitle}</div>
              <div className="diffsubhead">{differentData.mainDescription}</div>
              <div className="diffsubinfo">
                <div className="subinfo1">
                  {differentData.featureIcons.slice(0, 2).map((icon, index) => (
                    <div className="subleft" key={index}>
                      <div><img src={icon} alt={differentData.featureTitles[index]} /></div>
                      <div className="subleftsemiinfos">
                        <div className="subleftsemiinfoshead">
                          {differentData.featureTitles[index]}
                        </div>
                        <div className="subleftsemiinfospara">
                          {differentData.featureDescriptions[index]}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="subinfo1">
                  {differentData.featureIcons.slice(2).map((icon, index) => (
                    <div className="subleft" key={index + 2}>
                      <div><img src={icon} alt={differentData.featureTitles[index + 2]} /></div>
                      <div className="subleftsemiinfos">
                        <div className="subleftsemiinfoshead">
                          {differentData.featureTitles[index + 2]}
                        </div>
                        <div className="subleftsemiinfospara">
                          {differentData.featureDescriptions[index + 2]}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="joincommunity">
            <div className="joincommain">
              <div className="joincomhead">{differentData.community.title}</div>
              <div className="joincompara">{differentData.community.description}</div>
            </div>
          </div>
          <div className="container achivemain">
            {differentData.achievements.map((achievement, index) => (
              <div className="achivesemi" key={index}>
                <div className="achivesemihead">{achievement.count}</div>
                <div className="achivesemisub">{achievement.label}</div>
              </div>
            ))}
          </div>
          <div className="container achiveimg">
            <div>
              <img
                src={differentData.achievementImage}
                alt=""
                style={{ width: '100%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Different;




// import React from 'react';
// import "../scss/different.scss"
// import diffimg1 from "../assets/Figure → about12.jpg.png"
// import diffimg2 from "../assets/SVG.png"
// import diffimg3 from "../assets/SVG (1).png"
// import diffimg4 from  "../assets/SVG (2).png"
// import diffimg5 from  "../assets/SVG (3).png"
// import diffimg6 from "../assets/Figure → about26.png.png"

// const different = () => {
//   return (
//     <div className="diffmain" id="documentation">
//       <div className="diffsubmain">
//         <div className="container diffsubsemimain">
//           <div className="diffwrap">
//             <div>
//               <img src={diffimg1} alt="" />
//             </div>
//             <div className="diffinfomain">
//               <div className="diffhead">WHAT MAKES US DIFFERENT?</div>
//               <div className="diffsubhead">
//                 We make spending stress free so you have the perfect control.
//               </div>
//               <div className="diffsubinfo">
//                 <div className="subinfo1">
//                   <div className="subleft">
//                     <div><img src={diffimg2} alt="" /></div>
//                     <div className="subleftsemiinfos">
//                       <div className="subleftsemiinfoshead">Creativity</div>
//                       <div className="subleftsemiinfospara">
//                         Curabitur blandit lacus porttitor ridiculus mus.
//                       </div>
//                     </div>
//                   </div>
//                   <div className="subleft">
//                     <div><img src={diffimg3} alt="" /></div>
//                     <div className="subleftsemiinfos">
//                       <div className="subleftsemiinfoshead">
//                         Innovative Thinking
//                       </div>
//                       <div className="subleftsemiinfospara">
//                         Curabitur blandit lacus porttitor ridiculus mus.
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="subinfo1">
//                   <div className="subleft">
//                     <div><img src={diffimg4} alt="" /></div>
//                     <div className="subleftsemiinfos">
//                       <div className="subleftsemiinfoshead">Rapid Solutions</div>
//                       <div className="subleftsemiinfospara">
//                         Curabitur blandit lacus porttitor ridiculus mus.
//                       </div>
//                     </div>
//                   </div>
//                   <div className="subleft">
//                     <div><img src={diffimg5} alt="" /></div>
//                     <div className="subleftsemiinfos">
//                       <div className="subleftsemiinfoshead">Top-Notch Support</div>
//                       <div className="subleftsemiinfospara">
//                         Curabitur blandit lacus porttitor ridiculus mus.
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="joincommunity">
//             <div className="joincommain">
//               <div className="joincomhead">JOIN OUR COMMUNITY</div>
//               <div className="joincompara">
//                 We are trusted by over 5000+ clients. Join them now and grow your business.
//               </div>
//             </div>
//           </div>
//           <div className="container achivemain">
//             <div className="achivesemi">
//               <div className="achivesemihead">1000+</div>
//               <div className="achivesemisub">Completed Projects</div>
//             </div>
//             <div className="achivesemi">
//               <div className="achivesemihead">50K+</div>
//               <div className="achivesemisub">Happy Customers</div>
//             </div>
//             <div className="achivesemi">
//               <div className="achivesemihead">4x</div>
//               <div className="achivesemisub">Revenue Growth</div>
//             </div>
//           </div>
//           <div className="container achiveimg">
//             <div>
//               <img
//                 src={diffimg6}
//                 alt=""
//                 style={{ width: '100%' }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default different;




