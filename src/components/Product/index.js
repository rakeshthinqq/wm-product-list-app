import React from 'react';
import PropsType from 'prop-types';
import styles from './Product.module.css';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Modal from '@material-ui/core/Modal';

import Carousal from '../../components/Carousal';

import history from '../../history';


export default class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.showOverlay = this.showOverlay.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    showOverlay(event) {
        console.log('showOverlay');
        console.log('history >>'+ history);

        history.push(this.props.id);

        this.setState({
            open: true,
        })
        event.stopPropagation();
    }

    handleClose(event) {
        console.log('handle close');
        this.setState({
            open: false,
        })

        event.stopPropagation();
    }

    render() {
        console.log('Open stat >>' + this.state.open);
        return (
            <div className={styles.product}>
                    <Card id='#card' className={styles.card} onClick={this.showOverlay}>
                        {/* <CardActionArea> */}
                        <div className={styles.title}>
                            <span>{this.props.title.toUpperCase()} </span>
                        </div>

                        <div className={styles.pricediv}>
                            <span>${this.props.price} </span>
                        </div>

                        <CardMedia
                            component='img'
                            alt='Contemplative Reptile'
                            image={this.props.image}
                            title={this.props.title.toUpperCase()}
                        >
                        </CardMedia>
                        <Modal
                            aria-labelledby='simple-modal-title'
                            aria-describedby='simple-modal-description'
                            open={this.state.open}
                            onClose={this.handleClose}
                        >
                            <div className={styles.paper}>
                               <div className={styles.carousalContainer}>
                                    <a href='#' className={styles.close} onClick={this.handleClose}/>
                                    <Carousal imageList={this.props.imageList}/>
                               </div>
                            </div>
                        </Modal>
                    </Card>
                </div>
        );
    }
}

Product.propsTypes = {
    image : PropsType.string.isRequired,
    title: PropsType.string.isRequired,
    imageList: PropsType.array.isRequired,
    id:PropsType.string.isRequired,
    baseId:PropsType.string.isRequired
}