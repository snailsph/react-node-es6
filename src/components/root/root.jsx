import './root.less';
import React from 'react';
import CartItem from '../cartItem/cartItem.jsx';
import {NICE,SUPER_NICE} from '../time/colors.jsx';
import Counter from '../time/time.jsx';
const order = {
    title: 'Fresh fruits package',
    image: 'http://images.all-free-download.com/images/graphiclarge/citrus_fruit_184416.jpg',
    initialQty: 1,
    price: 8
};

class Root extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello from {this.props.phrase}!</h1>
                <CartItem title={order.title} image={order.image} initialQty={order.initialQty} price={order.price}/>
                <Counter increment={100} color={NICE} />
                <Counter increment={9} color={SUPER_NICE} />
            </div>
        );
    }
}

export default Root;