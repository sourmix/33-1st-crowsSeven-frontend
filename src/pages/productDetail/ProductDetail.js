import './ProductDetail.scss';
import Nav from '../../components/Nav/Nav';
import { useState, useEffect } from 'react';
import { FiHeart } from 'react-icons/fi';
import { MdPhotoSizeSelectSmall } from 'react-icons/md';
import { GrFacebook, GrTwitter } from 'react-icons/gr';
import { IoMdArrowDropup, IoMdArrowDropdown } from 'react-icons/io';

const ProductDetail = () => {
  const [list, setList] = useState([]);
  const [amount, setAmount] = useState(1);
  const { itemDetail, itemName, description, price } = list;

  useEffect(() => {
    fetch('/Data/ITEM_LIST.json')
      .then(res => res.json())
      .then(function (result) {
        return setList(result[0]);
      });
  }, []);

  const onChange = e => {
    const currentAmount = e.target;
    setAmount(currentAmount);
  };

  const increaseAmount = () => {
    setAmount(amount + 1);
  };

  const decreaseAmount = () => {
    setAmount(amount - 1);
    if (amount <= 1) {
      alert('주문 수량은 1 이상이어야 합니다.');
      setAmount(1);
    }
  };
  const priceToString = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const calculateTotalPrice = price * amount;
  const totalPriceToString = calculateTotalPrice
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const handleWishList = () => {
    alert('로그인 후 관심상품 등록을 해주세요.');
  };

  return (
    <div>
      <Nav />
      <div className="productDetail">
        <section className="imgSide">
          <img src={itemDetail} alt="Product Detail" />
        </section>
        <section className="descriptionSide">
          <div className="sideWrapper">
            <h2>{itemName}</h2>
            <div className="description">
              <ul>
                <li className="description">{description}</li>
                <li className="price">￦{priceToString}</li>
                <li>택배</li>
                <li>￦3,000 (￦50,000 이상 구매 시 무료)</li>
              </ul>
              <div className="amountTab">
                {itemName}
                <div className="inputAmount">
                  <div
                    className="amountInput"
                    onChange={onChange}
                    type="number"
                  >
                    <span>{amount}</span>
                  </div>
                  <div className="amountHandler">
                    <button onClick={increaseAmount} className="up">
                      <IoMdArrowDropup className="arrow" />
                    </button>
                    <button onClick={decreaseAmount} className="down">
                      <IoMdArrowDropdown className="arrow" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="totalPrice">
                TOTAL :<span> ￦{totalPriceToString} </span>({amount}개)
              </div>
              <div className="buyBtn">
                <button className="buy">구매하기</button>
                <button className="cart">장바구니</button>
              </div>
              <button onClick={handleWishList} className="wishList">
                <FiHeart />
                <span>WISH LIST</span>
              </button>
              <div className="aboutItemBtn">
                <span>
                  <button>상품후기 (5)</button>
                  <button>상품문의 (0)</button>
                </span>
                <button className="size">
                  <MdPhotoSizeSelectSmall className="sizeImg" />
                  SIZE
                </button>
              </div>
              <div className="snsBtn">
                <GrFacebook className="facebookBtn" />
                <GrTwitter className="twitterBtn" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
