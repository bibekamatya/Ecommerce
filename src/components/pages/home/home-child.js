import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./home-child.css";

const HomeChild = (props) => {
  const { title, id, image, category, price, description, product, slider } =
    props;

  return (
    <>
      {slider ? (
        <div className='col-md-4 p-2 pb-5 col-6 pb-md-5 pt-md-4 pt-lg-4 pt-xl-4'>
          <div
            className='card z-depth-1 h-100'
            data-aos='fade-up'
            data-aos-duration='1000'
            data-aos-once='true'
          >
            {price < 65 ? (
              <div className='text-start new'>
                <span>New</span>
              </div>
            ) : (
              ""
            )}
            {price > 65 ? (
              <div className='text-start hot'>
                <span>Hot</span>
              </div>
            ) : (
              ""
            )}
            <div className='card-body pb-1'>
              <div className='row'>
                <div className='col-md-6 border-end border-1'>
                  <div className='card-body px-1'>
                    <Link
                      className='cursor'
                      to={{
                        pathname: `/product-detail/${id}`,
                        state: {
                          ...props,
                        },
                      }}
                    >
                      <img
                        src={image}
                        alt={title}
                        className='img-fluid custom-home-image'
                        style={{ height: "200px" }}
                      />
                    </Link>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='pt-4'>
                    <Link
                      to={{
                        pathname: `/product-detail/${id}`,
                        state: {
                          ...props,
                        },
                      }}
                    >
                      <h6
                        className='title text-capitalize text-start pb-1 text-primary'
                        style={{ letterSpacing: "1.5px" }}
                      >
                        {title}
                      </h6>
                    </Link>
                    <p
                      className='text-muted text-start fw-bold'
                      style={{ fontSize: "12.5px" }}
                    >
                      {category}
                    </p>
                    <p
                      className='text-muted d-sm-none d-md-none d-lg-block d-none'
                      style={{ textAlign: "justify", fontSize: "13px" }}
                    >
                      In publishing and graphic design, Lorem ipsum is a Lorem
                      ipsum, or lipsum as it is sometimes known, is dummy text.
                    </p>
                    <div className='card-footer bg-transparent px-0 pt-2 mt-auto pb-2'>
                      <div className='row px-1'>
                        <div className='col-6'>
                          <h6 className='price text-start'>$ {price}</h6>
                        </div>
                        <div className='col-6 text-end cursor'>
                          <Link
                            to={{
                              pathname: `/product-detail/${id}`,
                              state: {
                                ...props,
                              },
                            }}
                          >
                            <FontAwesomeIcon
                              icon={faShoppingCart}
                              className='text-success cursor'
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* ******************************************************************************************************* */}

          <div className='col-md-3 p-2 pb-5 col-6 pb-md-5 pt-md-4 pt-lg-4 pt-xl-4'>
            <div
              className='card z-depth-1 h-100'
              data-aos='fade-up'
              data-aos-duration='1000'
              data-aos-once='true'
            >
              {price < 65 ? (
                <div className='text-start new'>
                  <span>New</span>
                </div>
              ) : (
                ""
              )}
              {price > 65 ? (
                <div className='text-start hot'>
                  <span>Hot</span>
                </div>
              ) : (
                ""
              )}
              <div className='card-body pb-1'>
                <Link
                  className='cursor'
                  to={{
                    pathname: `/product-detail/${id}`,
                    state: {
                      ...props,
                    },
                  }}
                >
                  <img
                    src={image}
                    alt={title}
                    className='img-fluid custom-home-image'
                  />
                </Link>
                <div className='pt-4'>
                  <Link
                    to={{
                      pathname: `/product-detail/${id}`,
                      state: {
                        image,
                        title,
                        price,
                        category,
                        description,
                        product,
                      },
                    }}
                  >
                    <h6
                      className='title text-capitalize text-start pb-1 '
                      style={{ letterSpacing: "1.5px" }}
                    >
                      {title}
                    </h6>
                  </Link>
                  <p
                    className='text-muted text-start'
                    style={{ fontSize: "12px" }}
                  >
                    {category}
                  </p>
                  <div className='card-footer bg-transparent px-0 pt-2 mt-auto pb-2'>
                    <div className='row px-1'>
                      <div className='col-6'>
                        <h6 className='price text-start'>$ {price}</h6>
                      </div>
                      <div className='col-6 text-end cursor'>
                        <Link
                          to={{
                            pathname: `/product-detail/${id}`,
                            state: {
                              image,
                              title,
                              price,
                              category,
                              description,
                              product,
                            },
                          }}
                        >
                          <FontAwesomeIcon
                            icon={faShoppingCart}
                            className='text-success cursor'
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HomeChild;
