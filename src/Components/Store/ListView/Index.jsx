import ShopItem from './ShopItem'
import './style.css'

function ListView({products}) {

  return (
    <section className="listed-list">
      {products.map((product, key) => <ShopItem key={product.name + key} data={product}/>)}
    </section>
  );
}

export default ListView;