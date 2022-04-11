import React from "react";
import ContentLoader from "react-content-loader";
const LoadingPizzaBlock=()=>{
    return (
       <ContentLoader
           className={"pizza-block"}
           speed={2}
           width={280}
           height={480}
           viewBox="0 0 280 480"
           backgroundColor="#f3f3f3"
           foregroundColor="#ecebeb"
       >
           <circle cx="133" cy="132" r="120" />
           <rect x="93" y="386" rx="0" ry="0" width="0" height="21" />
           <rect x="85" y="338" rx="0" ry="0" width="160" height="0" />
           <rect x="168" y="336" rx="0" ry="0" width="31" height="0" />
           <rect x="146" y="336" rx="0" ry="0" width="0" height="1" />
           <rect x="22" y="267" rx="0" ry="0" width="225" height="35" />
           <rect x="121" y="396" rx="0" ry="0" width="1" height="0" />
           <rect x="19" y="314" rx="6" ry="6" width="229" height="56" />
           <rect x="25" y="388" rx="3" ry="3" width="77" height="31" />
           <rect x="145" y="381" rx="20" ry="20" width="101" height="45" />
       </ContentLoader>
   )
}
export default LoadingPizzaBlock