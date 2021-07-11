import { Component } from 'react';

import './section4.css';
class Section4_2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <article className="portFoliomainPanel">
                <div className="portFolioPanel">
                    <div className="leftPanel2 sub">
                    <img src={process.env.PUBLIC_URL + '/monitor2_1.png'}></img>
                    </div>
                    <div className="rightPanel1 sub">
                        <div className="rightContent portfoliotext2">
                            <div className="title">제작물</div> <div className="subtext">개인 포트폴리오</div>
                            <div className="title">제작기간</div> <div className="subtext">2021.06.28~</div>
                            <div className="title">설명</div> <div className="subtext">React를 사용하여 개발한 웹사이트입니다 FullPageJS를 이용해 개발하였습니다   </div>
                            <div className="title">기술스택</div>
                            <div className="skillsminiicon">
                                <div id="mini" class="skillicon html"></div>
                                <div id="mini" class="skillicon css"></div>
                                <div id="mini" class="skillicon js"></div>
                                <div id="mini" class="skillicon react"></div>
                            </div>
                                <div></div><div className="projecticon">
                                    <div className="miniicon posproject url" 
                                    onClick={function () {
                                        window.open("https://github.com/xoghkscc/PortFolioWeb")}}></div>
                                    <div className="miniicon posyoutube url" 
                                    onClick={function () {
                                        window.open("https://www.youtube.com/premium")}}></div>
                                        {/* 이거 추후에 촬영해야함 */}
                                </div>
                        </div>
                    </div>
                </div>
            </article >
        )
    }
}
// function link(url) {
//     l
// }
export default Section4_2;