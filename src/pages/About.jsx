import PageHeader from "../components/pageHeader/PageHeader"
import useFetchById from "../hooks/useFetchById"

const About = () => {
    const product = useFetchById(7)

    return (
      <section>
        <PageHeader
          title='About'
          headerImg={product?.image}
        />
      </section>
    )
}

export default About