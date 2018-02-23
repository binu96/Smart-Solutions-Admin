import React from 'react'
import closeUpImage from '../../../static/images/closeup.jpg'
import axeImage from '../../../static/images/axe.jpg'
import liptonImage from '../../../static/images/lipton.jpg'
import lifebuoyImage from '../../../static/images/lifebuoy.jpeg'
import marmiteImage from '../../../static/images/marmite.jpg'
import clearImage from '../../../static/images/clear.jpg'

class ProductsBody extends React.Component {
    render() {
        return (
            <div>

                {[
                    {
                        productImage: closeUpImage,
                        productTitle: 'Close Up Toothpaste',
                        productDescription: 'Launched in 1967, Close Up is a clear gel toothpaste containing a mouthwash and micro whiteners to ensure long-lasting fresh breath and white teeth.',
                        productPrice: 'Rs. 125.00',
                        index: 1
                    },
                    {
                        productImage: axeImage,
                        productTitle: 'AXE Body Spray',
                        productDescription: 'Axe helps guys to look, smell and feel more attractive. It comprises a range of body sprays, deodorants, anti-perspirants, shower gels and hair products.',
                        productPrice: 'Rs. 625.00',
                        index: 2
                    },
                    {
                        productImage: liptonImage,
                        productTitle: 'Lipton Tea',
                        productDescription: 'Lipton tea, one of the most popular tea brands in the world, was founded by Sir Thomas Lipton in 1890. Lipton invested in his own tea plantations in Sri Lanka.',
                        productPrice: 'Rs. 55.00',
                        index: 3
                    },
                    {
                        productImage: lifebuoyImage,
                        productTitle: 'Lifebuoy Soap',
                        productDescription: 'Lifebuoy was launched by William Hesketh Lever in 1895 to promote hygiene in the home and halt cholera in late Victorian England. Lifebuoy is produced in Unilever in Cyprus, Trinidad and Tobago and India.',
                        productPrice: 'Rs. 55.00',
                        index: 4
                    },
                    {
                        productImage: marmiteImage,
                        productTitle: 'Marmite',
                        productDescription: 'Marmite was conceived in 1902 and the Marmite Food Company opened a small factory in Burton-on-Trent, UK where it still operates today. Marmite is a nutritious, for use as a cooking ingredient.',
                        productPrice: 'Rs. 25.00',
                        index: 5
                    },
                    {
                        productImage: clearImage,
                        productTitle: 'Clear Shampoo',
                        productDescription: 'Clear was launched in 1979 as a haircare product to tackle problem hair, notably hair with dandruff. Its breakthrough technology, Nutrium 10, combines ten vitamins and mineral nutrients to nourish the scalp.',
                        productPrice: 'Rs. 225.00',
                        index: 6
                    }
                ].map(({productImage, productTitle, productDescription, productPrice, index}) =>
                    <div key={index} className="item  col-xs-4 col-lg-4">
                        <div className="thumbnail">
                            <img className="group list-group-image" src={productImage} alt=""/>
                            <div className="caption">
                                <h4 className="group inner list-group-item-heading">{productTitle}</h4>
                                <p className="group inner list-group-item-text">{productDescription}</p>
                                <div className="row">
                                    <div className="col-xs-12 col-md-6">
                                        <p className="lead">{productPrice}</p>
                                    </div>
                                    <div className="col-xs-12 col-md-6">
                                        <a className="btn btn-success" href="">Edit
                                            Product</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default ProductsBody