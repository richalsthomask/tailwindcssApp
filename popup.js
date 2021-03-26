import React from 'react';
import feed from './data/feed.json';

export default class Popup extends React.Component{

    constructor(){

        super();

        this.state={

            tab1open:false,
            tab2open:true,
            tab3open:true,
            avatars: ["https://avatars.dicebear.com/api/avataaars/a27.svg",
                       "https://avatars.dicebear.com/api/avataaars/a30.svg", 
                       "https://avatars.dicebear.com/api/avataaars/a25.svg",
                       "https://avatars.dicebear.com/api/avataaars/a26.svg",
                       "https://avatars.dicebear.com/api/avataaars/a28.svg",
                        "https://avatars.dicebear.com/api/avataaars/a29.svg",
                        "https://avatars.dicebear.com/api/avataaars/a24.svg",
                        "https://avatars.dicebear.com/api/avataaars/a23.svg"
                    ],
            name:"",
            felloship:"founders",
            bio:"",
            selectedAvatar: "https://avatars.dicebear.com/api/avataaars/a27.svg",
            projectMembersPic:[],
        }
    }

    setColors=()=>{
  
        document.getElementById("tab1").style.backgroundColor = "white";
        document.getElementById("tab2").style.backgroundColor = "white";
        document.getElementById("tab3").style.backgroundColor = "white";
    }

    avatarSelector=(selectedValue,selectedIndex)=>{

        this.setState({selectedAvatar:selectedValue});

         this.state.avatars.map((value,index)=>{

             document.getElementById("avatar" + index).style.border = "";
             
         })
        document.getElementById("avatar" + selectedIndex).style.border = "1px solid black"
    }

    submit1=()=>{
          
        

    }
    render(){
        return(
            <div class=" w-full" Style="height:60.8;background-color:rgba(0,0,0,.2);position:absolute;top:0;bottom:0;left:0;right:0;">

                <div class="h-4/5 w-11/12 mt-16 m-auto" Style="border:3px solid blue;border-radius:5px;background-color:white;">

                <button onClick={()=>{this.props.closepopup(false)}} class="w-12 mr-3 mt-3" Style="float:right;box-shadow:5px 5px 5px black;background-color:red;border-radius:10px;color:white;" >Close</button>
                
                <br/><br/><br/>

                    <a id="tab1" onClick={() => { this.setColors(); document.getElementById("tab1").style.backgroundColor = "rgba(0,0,0,.1)"; this.setState({ tab1open:false,tab2open:true,tab3open:true, }) }} class="" Style="cursor: pointer;position:relative;left:35%;border:1px solid black;padding:5px;background-color:rgba(0,0,0,.1)">Users</a>

                    <a id="tab2" onClick={() => { this.setColors(); document.getElementById("tab2").style.backgroundColor = "rgba(255,255,102,.3)"; this.setState({ tab1open: true, tab2open: false, tab3open: true,}) }} class="" Style="cursor:pointer;position:relative;left:35%;float:middle;border:1px solid black;padding:5px;">Announcements</a>

                    <a id="tab3" onClick={() => { this.setColors(); document.getElementById("tab3").style.backgroundColor = "rgba(255,0,0,.1)"; this.setState({ tab1open: true, tab2open: true, tab3open: false, }) }} class="" Style="cursor:pointer;position:relative;left:35%;float:middle;border:1px solid black;padding:5px;">Projects</a>

                    <div class="w-full h-5/6 m-auto mt-1" Style="border:1px solid black;">
                       {this.state.tab1open ?
                            null : <div class="h-5/5 w-full" Style="background-color:rgba(0,0,0,.1)">

                                <br /><br />
                                   
                                   <div class="w-1/2 ml-3" Style="float:left; ">

                                    <a>Name : </a><input onChange={(e)=>{this.setState({name:e.target.value})}}></input>

                                    <br/><br/>
                                    
                                    <a>Fellowship : </a>
                                    <select name="founders">
                                        <option onClick={()=>{this.setState({felloship:"founders"})}}>founders</option>
                                        <option onClick={()=>{this.setState({felloship:"angels"})}}>angels</option>
                                    </select>

                                    <br/><br/>

                                    <a>Bio (optional) : </a>
                                    <br/>
                                    <textarea rows="5" cols="50" onChange={(e)=>{this.setState({bio:e.target.value});}} class="ml-8 mt-3"  ></textarea>

                                    <br/><br/><br/>
                                   </div>
                                   <div class="h-1/5 w-2/5" Style="float:right;">

                                       Select avatars : 

                                       <br/><br/>

                                       <div class=" w-full " Style="height:60vh">
                                        {this.state.avatars.map((value, index) => {
                                            return <img src={value} id={"avatar"+index} class="h-1/5 w-2/6 m-auto " Style="float:left;" onClick={()=>{this.avatarSelector(value,index)}} />
                                        })}
                                       </div>
                                   </div>

                                   <button onClick={()=>{this.submit1()}} class="mb-2 ml-30 mb-2 mt-12" Style="margin-left:45%;background-color:red;padding:10px;border-radius:10px;border:1px solid green;font-size:17px;" >Submit</button>
                                   
                                   </div> }
                        {this.state.tab2open?
                            null : <div class="w-full" Style="height:70.8vh;background-color:rgba(255,255,102,.3);padding:1%">

                                <br/><br/>

                                <a>Title : </a>
                                <br />
                                <textarea rows="3" cols="100" onChange={(e) => { this.setState({ bio: e.target.value }); }} class=" ml-30 mt-3" ></textarea>

                                <br /><br />

                                <a>Body : </a>
                                <br />
                                <textarea rows="6" cols="150" onChange={(e) => { this.setState({ bio: e.target.value }); }} class="ml-30 mt-3"  ></textarea>

                                <br />
                                <button onClick={() => { this.submit1() }} class="mb-3 mt-2" Style="margin-left:45%;background-color:red;padding:10px;border-radius:10px;border:1px solid green;font-size:17px;" >Submit</button>


                                <br /><br />
                            </div> }

                        {this.state.tab3open?
                            null : <div class="w-full" Style="height:70.8vh;background-color:rgba(255,0,0,.1);padding:1%">
                                
                                <br /><br />

                                <a>Project description : </a>
                                <br />
                                <textarea rows="3" cols="100" onChange={(e) => { this.setState({ bio: e.target.value }); }} class="ml-30 mt-1" ></textarea>

                                <br /><br /><br />

                                <a>Project icon URL : </a><input onChange={(e) => { this.setState({ name: e.target.value }) }}></input>

                                <br/><br/>

                                <a>Project members : </a>
                                <select onChange={(e) => { var a = this.state.projectMembersPic; this.setState({ projectMembersPic: [a + e.target.value] });console.log(this.state.projectMembersName);console.log(this.state.projectMembersPic) }} name="Add members">

                                    {feed.map((value,index)=>{
                                        if (value.resource_type ==="users")
                                            return <option value={value.resource.name}  >{value.resource.name}</option>
                                    })}
                                    
                                </select>

                                <br/><br/>

                                <div class="w-full h-20">
                                    {this.state.projectMembersPic.map((value, index) => {
                                        return <span><a >{value},</a><br/><a>aa</a></span>
                                    })}
                                </div>

                                <button onClick={() => { this.submit1() }} class="mb-2" Style="margin-left:45%;background-color:red;padding:10px;border-radius:10px;border:1px solid green;font-size:17px;" >Submit</button>

              
                                </div>}
                    </div>
                </div>
            </div>
        );
    }
}
