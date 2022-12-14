import React, { useEffect } from "react";
import {
  Facebook,
  Instagramm,
  Linkedin,
  twitter,
} from "../../../../assets/images";
import { i18n } from "src/i18n";
import Image from "../../Image";
import Translate from "../../Translate";
import actionsPublication from "src/modules/publication/list/publicationListActions";
import selectorsPublication from "src/modules/publication/list/publicationListSelectors";
import { useDispatch, useSelector } from "react-redux";
import Date from "../../Date";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function DescriptionPublication(props) {
  const dispatch = useDispatch();
  const { rows } = props;
  const rowsPublication = useSelector(selectorsPublication.selectRows);
  const loadingPublication = useSelector(selectorsPublication.selectLoading);

  useEffect(() => {
    dispatch(actionsPublication.doFetchValidePublication());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className='header__left'>
        <p>{Translate.Trans("title", rows?.thematique)}</p>
      </div>
      <div className='detail'>
        <div className='detail__left'>
          <div className='detail__title'>{Translate.Trans("title", rows)}</div>

          <div className='detail__author'>
            <div className='author__left'>
              <div className='left__author__date'>
                {Date.DetaillDate(rows?.updatedAt)}
              </div>
            </div>
            <div className='detaillEvenement__socialMedia'>
              <div className='socialMedia__title'>
                {i18n("common.Partager")} :
              </div>
              <Image src={Facebook} />
              <Image src={twitter} />
              <Image src={Instagramm} />
              <Image src={Linkedin} />
            </div>
          </div>

          <div className='detail__description'>
            <div
              className='description__detaillEvenement'
              dangerouslySetInnerHTML={{
                __html: Translate.Trans("description", rows),
              }}
            />
            <div style={{ paddingTop: "19px" }}>
              {rows?.supports?.map((item) => (
                <Image width={"670"} height={"333"} src={item.downloadUrl} />
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className='archieve__header'>
            <h2>{i18n("entities.publication.lastNews")}</h2>
            <div className='satestique__bar'></div>
          </div>
          <div className='manification__images'>
            {loadingPublication ? (
              <h1> Loading ... </h1>
            ) : (
              rowsPublication.map((item) => (
                <Link to={`/detail/${item.id}`}>
                  <div
                    onClick={() => props.showDetaill(item.id)}
                    style={{
                      cursor: "pointer",
                      display: "flex",
                      columnGap: 17,
                    }}>
                    <Image
                      src={item.supports[0].downloadUrl}
                      width='120'
                      height='78'
                      alt=''
                    />
                    <div className='list__detaill'>
                      <div className='detaill__header'>
                        <div className='header__left'>
                          <p>{Translate.Trans("title", item.thematique)}</p>
                        </div>
                        <div className='header__right'>
                          {Date.fullDate(item.updatedAt)}
                        </div>
                      </div>
                      <div
                        className='detaill__content text__wrap'
                        style={{ width: "233px" }}>
                        {Translate.Trans("title", item)}
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

DescriptionPublication.prototype = {
  showDetaill: PropTypes.func.isRequired,
};

export default DescriptionPublication;
