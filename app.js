//*console.log("hello");

//setTimeout(() => {
   // console.log("me");
    //setTimeout(() => {
       // console.log("hello");
        
    //}, 200);
//}, 100);





function search(){
  //03/
   let CityName = document.getElementById("txtUserinput").value;
  //
   fetch(`http://api.weatherapi.com/v1/current.json?key=56867a614b9149c4b9783048240112&q=${CityName}`)
    
    .then(res=> res.json())
    .then(data=>{

 //05
  document.getElementById("wdcd").innerHTML=   ` <div>

   
           <h1 class= ""> ${data.location.name} </h1>
           <p> ${data.location.country}</p>
           <div class="bg-image" style="border-radius: 50px;">
           <img src="${data.current.condition.icon}"
           <p>${data.current.temp_c}  </p>

<div> `

    console.log(data);
    })
}


