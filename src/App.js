import React, { useState } from 'react';
import * as emailjs from 'emailjs-com';

const App = () => {

  const [strEmail, setEmail] = useState("");

  const handler = (e) => {
    setEmail(e.target.value);
  }

  const sendMail = () => {
    var subject = "This is Test Subject";
    var msg = "This is test mail from my react application";
    var template = {
      from_name: 'React Application',
      to_name: 'Brijesh',
      subject: subject,
      message: msg,
      to_email: strEmail
    };

    emailjs.send("dashgmail", "template1", template, "user_QjkOulOxCOMbao0utbO12").then(asd => console.log(asd));
  }

  return (
    <div>
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <td>email</td>
            <td>
              <input type="text" name="nm1" onChange={(evt) => handler(evt)} />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button onClick={sendMail}>Send</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App;
