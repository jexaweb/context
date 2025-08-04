import Productlist from "../components/Productlist";
import { useFetch } from "../hooks/useFetch";

function Hoom() {
  const { data, error, isPending } = useFetch(
    "https://dummyjson.com/products/search?q=phone"
  );

  return (
    <section>
      <div>
        {error && <h2 className="error">{error}</h2>}
        {isPending && <h2 className="loader">Loading...</h2>}
        {data && <Productlist products={data.products} />}
      </div>
    </section>
  );
}

export default Hoom;
