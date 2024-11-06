import { useState } from "react";

function Weather() {
  var [data, setdata] = useState({});
  var [bimg,setimg]=useState("")

  var submitting = (event) => {
    event.preventDefault();
    var userinput = event.target[0].value;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${userinput}&appid=68d837276ac7b94fb6f61ed25b50e80d`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setdata(res);

        if(res.main.temp>=25){
          setimg("https://images.pexels.com/photos/186980/pexels-photo-186980.jpeg?cs=srgb&dl=pexels-tahir-shaw-50609-186980.jpg&fm=jpg")
        }else{
          setimg("https://t3.ftcdn.net/jpg/10/34/58/00/360_F_1034580075_DwhdzU6iJPuAAu86u8OBAOUTx57XYdx5.jpg")
        }

      });
  };
 
  return (
    <div style={{backgroundImage:`url(${bimg})`,backgroundSize:"cover",height:"100vh"}}>
      <h1>weather check</h1>
      <form action="" onSubmit={submitting}>
        <input type="text" placeholder="enter city name"/>
        <input type="submit" value="submit" />
      </form>
      {
        Object.keys(data).length==0?"":
        <>
      <h1>temparature:{data["main"]["temp"]-272.15} &deg;C</h1>
      <h1>pressure:{data["main"]["pressure"]}</h1>
      </>
      }
    </div>
  );
}

export default Weather;