import PageHeader from "../../components/pageHeader/PageHeader"
import useFetchById from "../../hooks/useFetchById"

const Products = () => {
    const product = useFetchById(6)

    return (
      <section>
        <PageHeader
          title='Products'
          headerImg={product?.image}
        />
      </section>
    )
}

export default Products