import React, { useState, useEffect } from "react";
import logo from "./assets/images/logo.svg"
import search from "./assets/images/search.svg"
import menu from "./assets/images/menu.svg"
import comm_logo from "./assets/images/comm_logo.svg"
import arrow from "./assets/images/arrow.svg"
import swipe from "./assets/images/swipe.svg"
import chat from "./assets/images/chat.svg"
import profile from "./assets/images/profile.svg"
import inbox from "./assets/images/inbox.svg"
import approval from "./assets/images/approval.svg"

const Sidebar = () => {


  const [toggle, settoggle] = useState(false);

  return (
    <div>
      <div className="side_bar" >
        <div className="hbox mb-4" >
          <img src={logo} alt="logo" />
          <div className="d-flex gap-3" >
            <img src={search} alt="image" />
            <img src={menu} alt="image" />
          </div>
        </div>

        <div className="bbox" >
          <div className="arw" >
            <div className="data cursor-pointer"  onClick={()=>{settoggle(!toggle)}}  >
              <div className="d-flex align-items-center gap-2" >
                <img src={comm_logo} alt="image" />
                <span>Comm - IT India Pvt Ltd</span>
              </div>
              <img src={arrow} alt="image"/>
            </div>
           {toggle && <div className="p-2" >No records</div>}
          </div>
          <div className="data" >
            <img src={swipe} alt="image" />
            <span>Switch to Portal</span>
          </div>
        </div>

        <div className="cursor-pointer newchat" >
          <img src={chat} alt="image" className="mx-2 img-fluid" />
          <span>New Chat</span>
        </div>

        <div className="chat_his" >
          <div className="nochat" ><div>No Chat History</div></div>
        </div>

        <div className="explore" >
          <p className="e_head" >Explore</p>
          <div className="cursor-pointer newchat" >
            <div><img src={profile} alt="image" className="mx-2 img-fluid" /></div>
            <span>My Info</span>
          </div>
          <div className="cursor-pointer newchat" >
            <div><img src={inbox} alt="image" className="mx-2 img-fluid" /></div>
            <span>Inbox</span>
          </div>
          <div className="cursor-pointer newchat" >
            <div><img src={approval} alt="image" className="mx-2 img-fluid" /></div>
            <span>My Approval</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
