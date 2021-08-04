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
                                        <dd>- 2021. 03.15 ~ 2021. 09. 07 KG아이티뱅크 백엔드 과정 수료</dd>
                                    </dl>
                                </div>
                                <div>
                                    <dl>
                                        <dt>
                                            <div class="block">
                                                <div class="miniblock">MySelf</div>
                                            </div>
                                        </dt>
                                        <dd><p>저에게 수학은 공식을 이용해 문제를 풀어 맞췄을 때 큰 성취감을 주었고 그 매력에 이끌려 수학교육과를 전공하였습니다.
                                            졸업 후, 코딩이라는 것을 알게 되었고 코드를 통해 목표한 기능을 구현한다는 점에서 수학만큼이나 흥미와 매력을 느꼈습니다.
                                            저는 이제 백엔드 개발자라는 꿈을 이루고자 합니다. 제가 가지고 있는 논리력과 수학적 사고력이 백엔드와 만난다면 엄청난 시너지를 낼 수 있을 것이라 자신합니다.</p>
                                            
                                            <p>새로운 기술과 지식에 관심이 많으며 웹서비스에 필요한 구조를 설계하고 구현하는 백엔드 개발자가 되기 위해 노력하는 개발자 김태환입니다.</p>
                                        </dd>
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