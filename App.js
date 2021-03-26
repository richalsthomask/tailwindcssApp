import React,{useState} from "react";
import feed from "./data/feed.json";
import emojis from "./data/emojis.json";
import Popup from './popup';

function App() {

  const[popup,togglepopup]=useState(false);
  
  return (
    <div  class="h-screen w-full overflow-y-scroll">
     
      <button onClick={() => { togglepopup(true); }} class="w-11/12 h-1/5 ml-10 mr-5 mt-9" Style="background-color:rgba(0,255,0,.1);border:2px solid black;border-radius:20px;">

        <img class="h-1/2 " Style="position:relative;left:47%;"  src="1024px-OOjs_UI_icon_add.svg.png"></img>

        <a class="" Style="font-size:20px;font-weight:500">Add new Item</a>

     </button>
     
     {dataDisplay()}

     {
       popup ? 
         
         <Popup closepopup={togglepopup}/>:null
     }
    </div>
  );
}

export default App;

function dataDisplay() {

 
 
  return feed.map((value,index)=>{
     
    if (value.resource_type === "announcements") 
      return <div class="w-11/12 mt-10 ml-10 mr-10" Style="background-color:rgba(255,255,102,.3);border:1px solid black;border-radius:20px;">
                  
                  <br/>

                  <h1 class="" Style="text-align:center;font-size:20px;font-weight:500" >Announcement</h1>

                  <hr class="w-4/5" Style="border-color:black;background-color:black;margin: auto"></hr>

                  <div class="ml-16" >

                    <br/>

                    <a class="" Style="font-size:20px">Announced date and time : {value.created_ts}</a>

                    <br/><br/>

                    <a class="" Style="font-weight:500;font-size:20px">{value.resource.title}</a>

                    <br/><br/>

                    <div class="w-4/5" Style="border-radius:20px;background-color:white;">

                      <br/>

                      <div class="w-9/10 m-auto" >

                        <a class="" Style="font-style:italic;">{value.resource.body}</a>

                      </div>

                      <br/>

                    </div>

                    <br/>

                  </div>
                  
              </div>
            
    else if (value.resource_type ==="users")
      return <div class="w-9/10 mt-10 ml-10 mr-10" Style="background-color:rgba(0,0,0,.1);border:1px solid black;border-radius:20px;">
 
             <br />

             <img src={value.resource.avatar_url} class="h-20 mt-10 mb-10 ml-10" Style="float:left;text-align:center;" ></img>

             <h1 class="" Style="text-align:center;font-size:20px;font-weight:500;position:relative;right:5%">{value.resource.name}</h1>

             <br/>

             <a class="ml-10" Style="font-size:20px;">User joined : {value.created_ts}</a>

             <br/><br/>

             <a class="ml-10" Style="font-size:20px;">Fellowship : {value.resource.fellowship}</a>

             <br/><br/>
              
             {userHasBioOrNot(value.resource.bio)}

             <br/>

             </div>

    else if (value.resource_type === "projects")
      return <div class="w-9/10 mt-10 ml-10 mr-10" Style="background-color:rgba(255,0,0,.1);border:1px solid black;border-radius:20px;">
              
              <br />

             <img src={value.resource.icon_url} class="mt-10 mb-10 ml-10" Style="float:left;height:100px;text-align:center;" ></img>

             <h1 class="" Style="text-align:center;font-size:20px;font-weight:500;position:relative;right:5%">Project : {value.resource.name}</h1>

             <br/>

             <a class="ml-10" Style="font-size:20px;">Project started : {value.created_ts}</a>

             <br/><br/>
              
             <div class="w-4/5 m-auto" Style="border-radius:20px;background-color:white;">

             <br/>

             <div class="w-9/10 m-auto" >

             <a class="" Style="font-style:italic;">{value.resource.description}</a>

             </div>

             <br/>

             </div>

             <br/>

             <a class="ml-10" Style="font-size:20px;">Members</a>

             <br/><br/>
         
             <div class="m-3">
                 
                   {memberIcons(value.resource.users)}
                  
             </div>

             <br/><br/><br/><br/>
             
              
             </div>
       
  })
}

function userHasBioOrNot(string){

  if(string.length===0)
      return null;
  else return <div class="w-4/5 m-auto" Style="border-radius:20px;background-color:white;">

             <br/>

             <div class="w-9/10 m-auto">

             <a class="" Style="font-style:italic;">{string}</a>

             </div>

             <br/>

             </div>

}

function memberIcons(array1){

  if (array1.length === 0)
    return null;
  else return array1.map((value, index) => {
          return  <div class="ml-3 mr-3" Style="float:left;">
                  
                  <img src={value.avatar_url} class="h-12 m-auto" />

                  <a>{value.name}</a>
                  </div>
  })
}