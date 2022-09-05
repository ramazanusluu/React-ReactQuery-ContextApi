import React from "react";
import { useBasket } from "../../contexts/BasketContext";
import "./style.css";
import { Link } from "react-router-dom";

function ShoppingCard() {
  const { items } = useBasket();
  console.log(items);
  return (
    <>
      <div className="card-header"></div>
      <div className="container">
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
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="col-md-4"></div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default ShoppingCard;
