import ShopCard from './ShopCard'
import './style.css'

function CardView({products}) {

  return (
    <section className="blocked-list">
      {products.map((product, key) => <div key={product.name + key}>
        <ShopCard data={product}/>
      </div>)}
    </section>
  );
}

export default CardView;
