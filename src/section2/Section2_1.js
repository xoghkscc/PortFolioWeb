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
                        <div class="text info ">내용 적는 곳</div>
                    </div>
                </div>
            </article>
                )
    }
}
                export default Section2_1;