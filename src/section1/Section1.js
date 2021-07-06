import { Component } from 'react';
import './Section1.css';

class Section1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <header>
                <div class="headertop">
                    <div class="header-text">
                        <li id="contact" class="header-li"onClick={function(e){
                            this.props.onClick()
                            this.props.onClick()
                            this.props.onClick()
                            this.props.onClick()
                        }.bind(this)}>Contact</li>
                        {/* 부모 컨모넌트에 있는 onClick의 특성을 props로 받아와 그 특성을 쓰겠다는 의미 */}
                        <li class="header-li"onClick={function(e){
                            this.props.onClick()
                            this.props.onClick()
                            this.props.onClick()
                        }.bind(this)}>Project</li>
                        <li class="header-li"onClick={function(e){
                            this.props.onClick()
                            this.props.onClick()
                        }.bind(this)}>Skills</li>
                        <li class="header-li" onClick={function(e){
                            this.props.onClick()
                        }.bind(this)}>About</li>
                        <li  class="header-li">Home</li>
                    </div>
                </div>
                
                <div class="headerTextjpanel">
                    <div class="headerText">
                        <h3>개발의 진심인 김태환의 포트폴리오입니다.</h3>
                    </div>
                </div>

            </header>

        )
    }
}
export default Section1;