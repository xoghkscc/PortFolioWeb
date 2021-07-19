import { Component } from 'react';
import './section2.css';
class Section2_1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <article>
                <link href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp" rel="stylesheet"></link>

                <div class="sectionpart" >
                    <div class="section2">
                        <div class="icon whoiam">
                            <span id="contact_support" class="material-icons-outlined">
                                contact_support
                            </span>
                        </div>
                        <div class="text whoiam ">About Me?</div>
                        <div class="text info ">
                            <div class="info1">
                            <img src={process.env.PUBLIC_URL + '/profile.jpg'} class="profileImg"></img>
                            </div>
                            <div class="info2">
                                <div>
                                    <dl>
                                        <dt>
                                            <div class="block">
                                                <div class="miniblock">History</div>
                                            </div>
                                        </dt>
                                        <dd>- 2012. 03.01 ~ 2018. 02. 15 신라대학교 수학교육과 졸업</dd>
                                        <dd>- 2021. 03.15 ~ 2021. 09. 07 KG아이디뱅크 백엔드 과정 수료</dd>
                                    </dl>
                                </div>
                                <div>
                                    <dl>
                                        <dt>
                                            <div class="block">
                                                <div class="miniblock">MySelf</div>
                                            </div>
                                        </dt>
                                        <dd>안녕하세요. </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        )
    }
}
export default Section2_1;