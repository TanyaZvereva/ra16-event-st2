function ShopItem({data}) {

  return (
    <section className="list-item">
      <img src={data.img}/>
      <h2>{data.name}</h2>
      <h4>{data.color}</h4>
      <span>${data.price}</span>
      <button>add to card</button>
    </section>
  );
}

export default ShopItem;