import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    title: "My First Book",
    price: 6,
    description: "This is a first product - amazing!",
    id: 1,
  },
  {
    title: "My Second Book",
    price: 5,
    description: "This is a second product - amazing!",
    id: 2,
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            title={product.title}
            price={product.price}
            description={product.description}
            id={product.id}
            key={product.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
