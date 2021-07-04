import { Component } from 'react';

import './section3.css';
class Section3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <article>

                <div class="skill">
                    <div class="skilltext">Skils</div>
                    <div class="text2">Front-end</div>
                    <div class="Content">
                        <div class="skillicon html url" onClick={function () {
                            window.open("https://github.com/xoghkscc/WebFrontStudy.git")}}></div>
                        <div class="skillicon css url" onClick={function () {
                            window.open("https://github.com/xoghkscc/WebFrontStudy.git")}}></div>
                        <div class="skillicon js url" onClick={function () {
                            window.open("https://github.com/xoghkscc/BackEndStudy.git")}}></div>
                        <div id="reactid" class="skillicon react"></div>
                    </div>
                    <div class="text2">Back-end</div>
                    <div class="Content">
                        <div id="javaid" class="skillicon java url" onClick={function () {
                            window.open("https://github.com/xoghkscc/JavaStudy.git")}}></div>
                    </div>
                    <div class="text2">Etc</div>
                    <div class="Content">
                        <div class="skillicon git url"  onClick={function () {
                            window.open("https://github.com/xoghkscc?tab=repositories")}}></div>
                        <div class="skillicon db url" onClick={function () {
                            window.open("https://github.com/xoghkscc/SQLStudy.git")}}></div>
                        <div id="awsid" class="skillicon aws"></div>
                    </div>
                </div>
            </article>
        )
    }
}
// function link(url) {
//     l
// }
export default Section3;