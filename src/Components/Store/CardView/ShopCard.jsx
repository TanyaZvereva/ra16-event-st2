function ShopCard({data}) {

  return (
    <section className="blocked-item">
      <h2>{data.name}</h2>
      <h4>{data.color}</h4>
      <img src={data.img}/>
      <div>
        <span>${data.price}</span>
        <button>add to card</button>
      </div>
    </section>
  );
}

export default ShopCard;
