import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const products = [
  {
    id: "p1",
    price: 6,
    title: "my first book",
    description: "The first Book i wrote"
  },
  {
    id: "p2",
    price: 12,
    title: "my second book",
    description: "The second Book i wrote"
  },
  {
    id: "p3",
    price: 16,
    title: "my third book",
    description: "The third Book i wrote"
  }
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((prod) => (
          <ProductItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            price={prod.price}
            description={prod.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
