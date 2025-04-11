import React, { useState, useEffect } from "react";
import Sidebar from "./sidebar";
import notification from "./assets/images/notification.svg"
import globe from "./assets/images/globe.svg"
import prfimg from "./assets/images/prfimg.svg"
import arr from "./assets/images/arr.svg"
import { Dropdown } from 'react-bootstrap';
import TextareaAutosize from "react-textarea-autosize";

const App = () => {

  const [message, setMessage] = useState();
  const [data, setdata] = useState();
  const [text, settext] = useState([]);
  const [initial, setinitial] = useState(true);



  useEffect(() => {
  fetch("http://localhost:3001/messages")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setdata(data);
    });
}, []);

const submit = (msg) => {
  setinitial(false);
  setMessage("");

  const matched = data.find(m => msg.toLowerCase().includes(m.text.toLowerCase()));


  const response = matched ? matched.response : "Sorry, I don't understand that.";

  const newentry = {text:msg,response:response}  
  settext(prev => [...prev, newentry]);

  setTimeout(()=>(  console.log(text)),0)
 
};
  return (
    <div className="d-flex" >
      <Sidebar />
      <div className="p-3 w-100 bgmain" >
        <div className="h_flx" >
          <h1>Najm Co-Pilot</h1>
          <div className="d-flex align-items-center gap-3">
            <Dropdown>
              <Dropdown.Toggle as="img" src={notification} alt="notification" style={{ cursor: 'pointer' }} />
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">No new notifications</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle as="img" src={globe} alt="language" style={{ cursor: 'pointer' }} />
              <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Arabic</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle as="img" src={prfimg} alt="profile" className="rounded-circle" style={{ width: '32px', height: '32px', cursor: 'pointer' }} />
              <Dropdown.Menu align="end">
                <Dropdown.Item>Profile</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="main_box">
          {initial && <div className="initial_ctn" >
            <svg className="mb-4" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.6099 0.826048C12.8774 -0.0531202 14.1225 -0.0531202 14.39 0.826048L16.9951 9.38556C17.0852 9.68203 17.3177 9.9142 17.6145 10.0047L26.1737 12.6097C27.0532 12.8778 27.0532 14.1222 26.1737 14.3903L17.6145 16.9953C17.3177 17.0858 17.0852 17.318 16.9951 17.6145L14.39 26.174C14.1225 27.0531 12.8774 27.0531 12.6099 26.174L10.0048 17.6145C9.91415 17.318 9.68221 17.0858 9.38543 16.9953L0.826217 14.3903C-0.0532376 14.1222 -0.0532376 12.8778 0.826217 12.6097L9.38543 10.0047C9.68221 9.9142 9.91415 9.68203 10.0048 9.38556L12.6099 0.826048Z" fill="#F7BA1F" />
            </svg>
            <h2>Hi, I'm Najm Co-pilot</h2>
            <p>How Can i Help You?</p>
          </div>} 
          {!initial &&
            <div className="chat_box" >
              {text.map((e, index) => (
                <>
                  <div className="msg">{e.text}</div>
                  <div className="ai">{e.response}</div>
                </>
              ))}
            </div>
          }
          <div>
            <div className="chat-input-container">
              <TextareaAutosize
                className="chat-input"
                placeholder="Ask Najm Co-Pilot"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    submit(message);
                  }
                }}
                minRows={2}
                maxRows={5}
              />

              <div className="chat-input-actions">
                <svg className="cursor-pointer" width="16" height="5" viewBox="0 0 16 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00004 3.33333C8.46028 3.33333 8.83337 2.96024 8.83337 2.5C8.83337 2.03976 8.46028 1.66667 8.00004 1.66667C7.5398 1.66667 7.16671 2.03976 7.16671 2.5C7.16671 2.96024 7.5398 3.33333 8.00004 3.33333Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" /><path d="M13.8334 3.33333C14.2936 3.33333 14.6667 2.96024 14.6667 2.5C14.6667 2.03976 14.2936 1.66667 13.8334 1.66667C13.3731 1.66667 13 2.03976 13 2.5C13 2.96024 13.3731 3.33333 13.8334 3.33333Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" /><path d="M2.16671 3.33333C2.62694 3.33333 3.00004 2.96024 3.00004 2.5C3.00004 2.03976 2.62694 1.66667 2.16671 1.66667C1.70647 1.66667 1.33337 2.03976 1.33337 2.5C1.33337 2.96024 1.70647 3.33333 2.16671 3.33333Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" /></svg>
                <div className="mic-button" onClick={() => submit(message)}>
                  <img src={arr} alt="arr" className="img-fluid" />
                </div>
              </div>
            </div>
            {initial && <div className="d-flex align-items-center justify-content-center gap-2" >
              <div  onClick={() => submit("Show my Pay slips")} className="txt_suggest" >Show my Pay slips</div>
              <div  onClick={() => submit("Salary Breakdown")} className="txt_suggest" >Salary Breakdown</div>
              <div  onClick={() => submit("Pay slips History")} className="txt_suggest" >Pay slips History</div>
              <div  onClick={() => submit("Payment Details")} className="txt_suggest" >Payment Details</div>
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
