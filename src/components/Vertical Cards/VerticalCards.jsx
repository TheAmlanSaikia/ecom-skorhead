import { Link } from "react-router-dom";
import { useCart } from "../../context";
import { useWishlist } from "../../context/WishlistContext";
import "./ProductVerticalCards.css";

const VerticalCards = (props) => {
  const { cartState, cartDispatch } = useCart();
  const { wishlistState, wishlistDispatch } = useWishlist();
  return (
    <div>
      <main key={props.id} className='vertical-cardbody card-shadow'>
        {props.inStock === false && (
          <section className='overlay-section'>
            <h3 className='overlay-text'> Out of stock </h3>
          </section>
        )}
        <section className='image-container'>
          <img
            className='cover-image potrait-image'
            loading='lazy'
            src={props.image}
            alt='Air-Jordan-1'
          />
        </section>
        <section className='information-container'>
          <div className='card-text-container'>
            <div className='title-container'>
              <h5 className='card-title title-icon'>{props.title}</h5>
              {wishlistState.items.some((item) => item.id === props.id) ? (
                <button
                  className='wishlist-btn wishlist-btn-hover themetext'
                  onClick={() =>
                    wishlistDispatch({
                      type: "REMOVE_FROM_WISHLIST",
                      payload: props,
                    })
                  }>
                  <i className='fa-solid fa-heart fa-lg wishlist-icon'></i>
                </button>
              ) : (
                <button
                  className='wishlist-btn wishlist-btn-hover'
                  onClick={() =>
                    wishlistDispatch({
                      type: "ADD_TO_WISHLIST",
                      payload: props,
                    })
                  }>
                  <i className='fa-solid fa-heart fa-lg wishlist-icon'></i>
                </button>
              )}
            </div>
            <h6 className='text-md'>{props.brand}</h6>
            <p className='card-category'>{props.categoryName}</p>
            <h6 className='price'>
              ₹{props.price}
              <span className='ml-1 text-md themetext'>
                ({props.discount}%OFF)
              </span>
            </h6>
          </div>
          {cartState.products.some((item) => item.id === props.id) ? (
            <>
              <Link to='/cart'>
                <button className='btn-card btn-cart card-btn-fix'>
                  Go to Cart
                </button>
              </Link>
            </>
          ) : (
            <>
              <button
                className='btn-card btn-cart card-btn-fix'
                onClick={() =>
                  cartDispatch({ type: "ADD_TO_CART", payload: props })
                }>
                Add to Cart
              </button>
            </>
          )}
        </section>
      </main>
    </div>
  );
};

export { VerticalCards };
