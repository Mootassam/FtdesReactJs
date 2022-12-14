import React from "react";
import Image from "../../shared/Image";
import { Link } from "react-router-dom";
import Translate from "../../shared/Translate";
import Date from "../../shared/Date";
import { baseUrl } from "../../shared/BaseUrl";
import { i18n } from "src/i18n";

function PublicationByCategory(props) {
  const { data, category, index } = props;

  const renderItem = (item) => {
    return (
      <Link to={`/detail/${item.id}`}>
        <div style={{ display: "flex", columnGap: "20px" }}>
          <Image
            src={`${baseUrl}/file/download?privateUrl=${item.supports[0].privateUrl}`}
            width={120}
            height={78}
            alt='Image'
          />

          <div className='list__detaill'>
            <div className='detaill__header'>
              <div className='header__left'>
                <p>Migration </p>
              </div>
              <div className='header__right'>
                {Date.fullDate(data.updatedAt)}
              </div>
              <div className='header__right'></div>
            </div>
            <div className='detaill__content text__wrap' style={{ width: 233 }}>
              {Translate.Trans("title", item)}
            </div>
          </div>
        </div>
      </Link>
    );
  };
  return (
    <div>
      <div className='archieve__header'>
        <h2> {Translate.Trans("title", category)}</h2>
        <div className='satestique__bar'></div>
      </div>
      <div className='manification__images'>
        {data.map((item) => renderItem(item))}
      </div>
      <Link to={`/detaill/category/${category._id}`}>
        <div className='plus__button'>{i18n("common.voirPlus")}</div>
      </Link>
    </div>
  );
}

export default PublicationByCategory;
