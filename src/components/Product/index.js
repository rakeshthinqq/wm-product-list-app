import React from 'react';
import PropsType from 'prop-types';
import styles from './Product.module.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

export default class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.showOverlay = this.showOverlay.bind(this);
        this.handleClose = this.handleClose.bind(this);
        // this.handleOpen = this.handleOpen.bind(this);
    }

    showOverlay(event) {
        console.log('showOverlay');

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
                    <Card className={styles.card} onClick={this.showOverlay}>
                        {/* <CardActionArea> */}
                        <div className={styles.title}><span>{this.props.title.toUpperCase()} </span></div>
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
                                <a href='#' className={styles.close} onClick={this.handleClose}/>

                                <h2 id='simple-modal-title'>Text in a modal</h2>
                                <p id='simple-modal-description'>
                                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                </p>
                                {/* <SimpleModal /> */}
                            </div>
                        </Modal>
                    </Card>
                </div>
        );
    }
}

Product.propsTypes = {
    image : PropsType.string.isRequired,
    title: PropsType.string.isRequired
}