import PageHeader from "../components/pageHeader/PageHeader"
import useFetchById from "../hooks/useFetchById"


const Home = () => {
    const product = useFetchById(5)

    return (
      <section>
        <PageHeader
          title='Pæne Produkter'
          subTitle='Her kan du se alle vores pæne produkter'
          headerImg={product?.image}
        />
      </section>
    )
}

export default Home