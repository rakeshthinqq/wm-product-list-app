import React from 'react';
import getAllProducts from '../../api/getAllProducts';
import styles from './ProductList.module.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
export default class ProductList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: {}
        };
    }

    componentDidMount() {
        console.log('make API call');
        getAllProducts().then(result => {
            console.log('API response:' + result);
            if (result.groups) {
                console.log('iterate all groups');
                const products = {};
                result.groups.forEach(ele => {
                    products[ele.id] = ele;
                });
                this.setState({
                    products: products
                });
            }
        }).catch(e => {
            console.log(e);
        });
    }

    render() {
        if (this.state.products) {
            var prodList = Object.keys(this.state.products).map((id, index) => {
                console.log(this.state.products[id].name);
                return (<div key={index} className={styles.product}>
                    <Card className={styles.card}>
                        {/* <CardActionArea> */}
                        <div className={styles.title}>{this.state.products[id].name}</div>
                        <CardMedia
                            component='img'
                            alt='Contemplative Reptile'
                            // height='140'
                            image={this.state.products[id].hero.href}
                            title={this.state.products[id].name}
                        >
                        </CardMedia>
                        {/* <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    section -1
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    section -2
                                </Typography>
                            </CardContent> */}
                        {/* </CardActionArea> */}
                    </Card>
                </div>);
            });
        }
        return (<div> {prodList} </div>);
    }
}



