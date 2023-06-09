import { Row, Col } from "antd";
// import products from '../json/product.json'
import { useImages } from '../react-query'

export default function ProdutList() {

  const { data, isLoading } = useImages()
  const products = data || []

  return (
    <div >
      <article className="image__layout py-3 py-sm-5">
        <div className="container">
          <h1 className="text-center">IMAGES</h1>
          <hr className="divider--dark" />

          <Row gutter={[32, 32]}>
            {products.map(product => (
              <Col key={product.id}
                sm={{ span: 12 }}
                lg={{ span: 8 }}
                xl={{ span: 6 }}
              >
                <div>
                  <a href="" className="image__link">
                    <img src={product.link} alt="" className="image__style" />
                  </a>
                  <p className="image_title">{product.name}</p>
                </div>
              </Col>
            ))}


          </Row>

        </div>
      </article>

      <article className="description__layout py-4 py-sm-5">
        <div className="container d-flex flex-column align-items-center">
          <h1>DESCRIPTIONS</h1>
          <hr className="divider--light" />
          <p className="text-justify description__content py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laborum
            corrupti ut iure aliquam. Quod, perferendis. Libero tempore iste, animi sint numquam illum quasi laboriosam
            unde pariatur quidem! Suscipit consequatur nihil dolor impedit temporibus ad cum, voluptatum odit ratione
            ullam
            eligendi amet beatae aliquid eaque nesciunt optio nobis ducimus itaque. Voluptatibus aspernatur assumenda
            quod
            quo error consequuntur, vero iusto reprehenderit repellat maiores, sapiente dolores voluptates minima. Alias
            dolore assumenda fuga quae repellat voluptatum quo, saepe exercitationem perspiciatis reiciendis modi
            tempora.
            Recusandae explicabo iusto corporis nam numquam dignissimos, necessitatibus, iure non culpa repellat
            repudiandae temporibus! Saepe excepturi tempore iusto eos sit!</p>
        </div>
      </article>
    </div>
  );
}