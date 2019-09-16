import React from 'react';
import PropsType from 'prop-types';
import styles from './Carousal.module.css'

export default class Carousal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        var dots = this.props.imageList.map( (image, index)=>{
            return (<span key={index} className={styles.dot}></span>);
        });


        var slides = this.props.imageList.map( (image, index)=>{
            console.log('carousal img:'+image.href);
            return (
                <li key={index} className={styles.slide}>
                     <img src={image.href} />
                </li>
            ); 
        });


        return (
        <div className={styles.carousal}> 
            <a href='#' className={styles.control_next}>
                <i className={styles.arrowNext+' '+ styles.arrow}></i>
            </a>
            <a href='#' className={styles.control_prev}> 
            <i className={styles.arrowPrev+' '+ styles.arrow}></i>
            </a>
            <div className={styles.footer}> {dots} </div>
            {slides}
        </div>)
    }
}

Carousal.propsTypes = {
    imageList : PropsType.array.isRequired
}