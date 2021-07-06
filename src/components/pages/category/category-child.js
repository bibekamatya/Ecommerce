import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const CatogoryChild = (props) => {
  const { title, id, image, category, price, description } = props;
  console.log(description);

  return (
    <>
      <div
        key={id}
        className='col-md-3 p-2 pb-5 col-6 pb-md-5 pt-md-4 pt-lg-4 pt-xl-4'
      >
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
                    ...props,
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
              <p className='text-muted text-start' style={{ fontSize: "12px" }}>
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
    </>
  );
};

export default CatogoryChild;
