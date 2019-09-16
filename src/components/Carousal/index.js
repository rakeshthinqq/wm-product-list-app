import React from 'react';
import PropsType from 'prop-types';
import styles from './Carousal.module.css'

export default class Carousal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0
        };

        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }

    next() {
        var newIndex = this.state.currentIndex + 1;
        if(newIndex >= this.props.imageList.length) {
            newIndex = 0;
        }
        this.setState({
            currentIndex: newIndex
        });
    }

    prev() {
        var newIndex = this.state.currentIndex - 1;
        if(newIndex <= -1) {
            newIndex = this.props.imageList.length-1;
        }
        this.setState({
            currentIndex: newIndex
        });
    }

    render() {

        var dots = this.props.imageList.map( (image, index)=>{
            var currentDot ='';
            if(index === this.state.currentIndex) {
                currentDot = styles.currentDot;
            }
            return (<span key={index} className={styles.dot + ' '+ currentDot}></span>);
        });

        console.log('current index :'+this.state.currentIndex);
        return (
        <div className={styles.carousal}> 
            <a href='#' className={styles.control_next} onClick={this.next}>
                <i className={styles.arrowNext+' '+ styles.arrow}></i>
            </a>
            <a href='#' className={styles.control_prev} onClick={this.prev}> 
                <i className={styles.arrowPrev+' '+ styles.arrow}></i>
            </a>
            <div className={styles.footer}>
                <div className={styles.dotwrapper}>
                    {dots}
                </div> 
            </div>
            <li className={styles.slide}>
                <img src={this.props.imageList[this.state.currentIndex].href} />
            </li>
        </div>)
    }
}

Carousal.propsTypes = {
    imageList : PropsType.array.isRequired
}