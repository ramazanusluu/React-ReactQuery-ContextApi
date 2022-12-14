import React from "react";
import { useBasket } from "../../contexts/BasketContext";
import "./style.css";
import { Link } from "react-router-dom";

function ShoppingCard() {
  const { decrease, increase, items, removeFromBasket } = useBasket();
  console.log(items);

  const totalCardAmount = items.card.reduce(
    (total, item) =>
      (total = total + item.ActualPriceToShowOnScreen * item.count),
    0
  );

  const totalCardCount = items.card.reduce(
    (total, item) => (total = total + item.count),
    0
  );

  console.log("totalCardAmount", totalCardAmount);
  console.log("totalCardCount", totalCardCount);
  return (
    <>
      <div className="card-header"></div>
      <div className="container my-5">
        <div className="row">
          {items.card.length < 1 && (
            <div>
              <h4 className="display-6 fw-bold my-5 text-center text-danger">
                ALIŞVERİŞ SEPETİNİZ BOŞ
              </h4>
              <h5 className="my-5 text-center">
                Ürün ve kampanyaları incelemek için
                <Link to="/">
                  <span className="text-muted card-router"> tıklayınız</span>
                </Link>
              </h5>
            </div>
          )}
          {items.card.length > 0 && (
            <>
              <div className="col-md-8">
                <h5>SEPETİM</h5>
                <h5 className="bilgi">
                  Sepetiniz hazır ise{" "}
                  <span className="bilgi-span">Ödeme Sayfasına Devam Et</span>{" "}
                  butonuna tıklayarak işleminizi tamamlayabilirsiniz.
                </h5>
                <h5 className="mt-5">Sepetteki ürünlerim</h5>
                <table className="table table-borderless">
                  <thead>
                    <tr>
                      <th>Ürün Görseli</th>
                      <th>Ürün Başlığı</th>
                      <th>Adet</th>
                      <th>Toplam</th>
                      <th>#</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.card.map((item) => (
                      <tr key={item.ID}>
                        <td>
                          <img
                            src={item.FirstProductImageURL}
                            alt="ProductType"
                            width={150}
                            className="img-top-fluid"
                          />
                        </td>
                        <td>
                          <h5 className="card-item-text">{item.DisplayName}</h5>
                        </td>
                        <td>
                          <div className="btn-group">
                            <button
                              className="btn"
                              onClick={() => decrease(item.ID)}
                            >
                              -
                            </button>
                            <button className="btn">{item.count}</button>
                            <button
                              className="btn"
                              onClick={() => increase(item.ID)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td>
                          <h6 className="text-danger">
                            {item.ActualPriceToShowOnScreen * item.count > 1000
                              ? (item.ActualPriceToShowOnScreen * item.count) /
                                1000
                              : item.ActualPriceToShowOnScreen *
                                item.count}{" "}
                            TL
                          </h6>
                        </td>
                        <td>
                          <button
                            onClick={() => removeFromBasket(item.ID)}
                            className="btn btn-outline-danger"
                          >
                            Kaldır
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="col-md-4">
                <h5>SİPARİŞ ÖZETİ</h5>
                <div>
                  <i className="fa-solid fa-cart-shopping fs-2"></i>
                  <span className="fs-6"> Toplam {totalCardCount} ürün</span>
                </div>
                <div className="total-price mt-3">
                  <span className="label">Ödenecek Tutar : </span>
                  <span className="label">
                    {totalCardAmount > 1000
                      ? totalCardAmount / 1000
                      : totalCardAmount}{" "}
                    TL
                  </span>
                </div>
                <div className="total-price mt-3">
                  <span className="label">Ürünler : </span>
                  <span className="label">
                    {totalCardAmount > 1000
                      ? totalCardAmount / 1000
                      : totalCardAmount}{" "}
                    TL
                  </span>
                </div>
                <div className="total-price mt-3">
                  <span className="label">Kargo Ücreti : </span>
                  <span className="label">Ücretsiz</span>
                </div>
                <div>
                  <h6 className="mt-3 text-muted indirim">
                    İndirim Kodunuzu Giriniz
                    <i className="fa-solid fa-angles-right"></i>
                  </h6>
                </div>
                <Link to="/">
                  <button className="btn btn-danger w-100 my-3">
                    Ödeme Sayfasına Devam Et
                  </button>
                </Link>
                <Link to="/">
                  <button className="btn btn-dark w-100 my-3">
                    Alışverişe Devam Et
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default ShoppingCard;
