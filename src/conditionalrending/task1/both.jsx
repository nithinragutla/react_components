import Men_cloth from "./men";

import Women_cloth from "./women";

var clothing = "men";

var  compon="Hello"

// if (clothing == "men") {
//     compon=<Men_cloth/>
// }
// else {
//     compon=<Women_cloth/>
// }

// switch(clothing){
//    case "Men":
//    compon=<Men_cloth/>
//    break;
//    case "women":
//       compon=<Women_cloth/>
//       break;
// }

function Both() {
    

   return(

   <>
   {clothing=="men"?<Men_cloth/>:<Women_cloth/>}
   </>
   )

   

}
export default Both;