# Portfolio Web
## 1_개발환경
  * OS : window 10
  * 개발언어 : Html, CSS, JavaScript
  * 프레임워크 : React
  * Tool : vs code
  * 외부 라이브러리 : FullScreen API, EmailJS
## 2_화면구성
1. Home
  * 홈 네비게이션을 클릭하면 그에 맞는 화면으로 이동하도록 구현하였습니다.
  * 메인 화면에 타이핑 효과에 대한 코드는 다음과 같습니다.
```C
let index = 0;
let start = 0;
const content = `roqkfdml  개발의 진심인 김태환의 포트폴리오입니다. `;
var tf = true;

var interval = setInterval(() => {
    const text = document.querySelector("h3");
    if (tf) {
        text.innerHTML = content.substring(start, index++);
        if (index === 8) {
            tf = false;
        }
    } else {
        text.innerHTML = content.substring(start, index--);
        if (index === 0) {
            tf = true;
            start = 8;
            index = 9;
        }
    }
    if (index === content.length) {
        stop(interval);
    }
}, 200);

function stop(interval) {
    clearInterval(interval);
}

```
2. About
  * 저에 대한 소개를 하는 페이지입니다.
3. Skils
  * 제가 활용할 수 있는 기술들을 정리한 페이지입니다.
  * 클릭할 수 있는 아이콘은 hover효과를 주었습니다.
  * 아이콘을 클릭하면 각 기술에 맞는 GitHub홈페이지로 이동합니다.
4. Project
  * 제가 참여한 프로젝트들의 결과물들을 정리한 페이지입니다.
  * slide효과는 fullpageApi를 활용하였습니다.
  * 우측 버튼을 눌러 화면을 이동할 수 있게 하였습니다.
  * 하단에 네비게이션 효과를 주어 현재 페이지 위치를 알 수 있도록 하였습니다.
  * GiuHub 아이콘을 클릭하면 프로젝트에 관한 GiutHub 홈페이지로 이동합니다.
  * YouTub 아이콘을 클릭하면 프로젝트을 시연한 동영상을 볼 수 있습니다.
5. Contact 
  * 우측에 이름, 이메일, 메세지를 입력하고 보내면 저에게 메일이 오도록 개발하였습니다.
  * EmailJS을 활용하여 구현하였습니다. 코드는 아래와 같습니다.
```C
function sendEmail(e) {
    e.preventDefault();//버튼을 클릭하였을 때 새로고침이 되지 않도록 하는 코드
    const resetvalue = document.getElementsByClassName("inputtext");
    
    emailjs.sendForm(service_id, template_id, e.target, user_id)
    .then((result) => {
        console.log(result.text);
        alert(`메일을 성공적으로 보냈습니다`);
    }, (error) => {
        console.log(error.text);
        alert(`메일보내기 실패하였습니다`);
    });
    
    Array.from(resetvalue).forEach((value)=>{
        value.value = '';
    })//보내기 버튼을 클릭할 경우 내용에 보내진 후에 입력한 내용이 사라지게 하는 코드
}
//아래는 form태그에 email보내기 기능을 적용한 코드

<form className="contactform " onSubmit={sendEmail}>
    <label>이름</label>
    <input className="inputtext inputclass" type="text" name="user_name" required autoComplete='off' />
    <label>이메일</label>
    <input className="inputtext inputclass" type="email" name="user_email" required autoComplete='off' />
    <label>메세지 입력</label>
    <textarea className="inputtext inputclass2" name="message" required/>
    <input className="sumitbutton" type="submit" value="보내기" autoComplete='off'/>
</form>
```
