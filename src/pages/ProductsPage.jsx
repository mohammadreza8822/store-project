import Card from "../components/Card";
import { useProducts } from "../context/ProductContext";

import styles from "./ProductsPage.module.css";

function ProductsPage() {
  const products = useProducts();

  return (
    <div className={styles.container}>
      <div className={styles.products}>
        {!products.length && <p>Loading...</p>}
        {products.map((p) => (
          <Card key={p.id} data={p}/>
        ))}
      </div>
      <div>Sidebar</div>
    </div>
  );
}

export default ProductsPage;
