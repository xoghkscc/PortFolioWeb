import { Component } from 'react';
import emailjs from 'emailjs-com';

import './section5.css';
export default function Section5() {
    function sendEmail(e) {

        emailjs.sendForm('service_387vost', 'template_1zo0coz', e.target, 'user_hTV6HhgKIxl6ivbBaCMob')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <article >
            <div class="contact">
                <div class="contacttext">Contact</div>
                <div className="contactPanel">
                    <div className="leftcontactPanel sub2">
                        <div className="Adress myinfo">Adress : 서울 관악구</div>
                        <div className="Adress myinfo">Call : 010-5625-7327</div>
                        <div className="Adress myinfo">e-mail : xoghkscc@naver.com</div>
                        <div className="Adress myinfo">(이메일은 자주 확인합니다^^)</div>
                    </div>
                   
                    <div className="rightcontactPanel sub2">
                        <form className="contactform " onSubmit={sendEmail}>
                            <input type="hidden" name="contact_number" required autoComplete='off' />
                            <label>이름</label>
                            <input className="inputclass" type="text" name="user_name" required autoComplete='off' />
                            <label>이메일</label>
                            <input className="inputclass" type="email" name="user_email" required autoComplete='off' />
                            <label>메세지 입력</label>
                            <textarea className="inputclass2" name="message" />
                            <input className="sumitbutton" type="submit" value="보내기" required autoComplete='off' />
                        </form>
                    </div>
                </div>
            </div>
        </article >
    )
}
