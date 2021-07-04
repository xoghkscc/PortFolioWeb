import { Component } from 'react';

import './section4.css';
class Section4_1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <article className="portFoliomainPanel">
                <div className="portFolioPanel">
                    <div className="leftPanel1 sub"></div>
                    <div className="rightPanel1 sub">
                        <div className="rightContent portfoliotext2">
                            <div>제작물</div> <div className="subtext">마트 POS기</div>
                            <div>제작기간</div> <div className="subtext">2021.05.31~2021.06.21</div>
                            <div>설명</div> <div className="subtext">Jswing을 사용하여 계산, 직원관리의 기능을 개발, HIKARI를 이용해 connection pool를 관리하였습니다 </div>
                            <div>기술스택</div>
                            <div className="skillsminiicon">
                                <div id="mini" class="skillicon java"></div>
                                <div id="mini" class="skillicon git"></div>
                                <div id="mini" class="skillicon db"></div>
                                <div id="mini" class="skillicon aws"></div>
                            </div>
                                <div></div><div className="projecticon">
                                    <div className="miniicon posproject url" 
                                    onClick={function () {
                                        window.open("https://github.com/xoghkscc/first_project_bykgitbank")}}></div>
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
export default Section4_1;