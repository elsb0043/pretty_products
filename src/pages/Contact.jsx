import useFetchById from "../hooks/useFetchById"
import PageHeader from "../components/pageHeader/PageHeader"

const Contact = () => {
    const product = useFetchById(3)

    return (
      <section>
        <PageHeader
          title='Contact'
          headerImg={product?.image}
        />
      </section>
    )
}

export default Contact