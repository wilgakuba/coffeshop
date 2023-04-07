import { select, templates } from '../settings.js';
import utils from '../utils.js';

class Product {  
  constructor(id, data){
    const thisProduct = this;
  
    thisProduct.id = id;
    thisProduct.data = data;
  
    thisProduct.render();
  }
  
  render(){   
    const thisProduct = this;
  
    const generatedHTML = templates.products(thisProduct.data);
    thisProduct.element = utils.createDOMFromHTML(generatedHTML);

    const productsWrapper = document.querySelectorAll(select.containerOf.productsWrapper);
    
    for (let products of productsWrapper) {
      const clone = thisProduct.element.cloneNode(true);
      products.appendChild(clone);
    }
  }
}

export default Product;