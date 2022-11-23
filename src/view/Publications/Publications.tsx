import React, { useEffect } from "react";
import Breadcrumb from "src/view/shared/Breadcrumb";
import { calendar__bttom } from "../../assets/images";
import { i18n } from "../../i18n";
import Image from "src/view/shared/Image";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import actions from "src/modules/categoryPublication/list/categoryPublicationListActions";
import selectors from "src/modules/categoryPublication/list/categoryPublicationListSelectors";
import actionsPublication from "src/modules/publication/list/publicationListActions";
import selectorsPublication from "src/modules/publication/list/publicationListSelectors";
import PublicationCategory from "./list/PublicationCategory";
import PublicationDetaill from "./list/PublicationDetaill";
import PublicationDetaillByThematique from "./list/PublicationDetaillByThematique";
import PublicationByCategory from "./list/PublicationByCategory";
function Publications() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.doFetch());
    dispatch(actionsPublication.allpublicationbythematique());
    dispatch(actionsPublication.allpublicationbyCategory());
    dispatch(actionsPublication.doFetch());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const rows = useSelector(selectors.selectRows);
  const rowsPublicationByThematique = useSelector(
    selectorsPublication.selectPublicationByThematiqueRows
  );

  const rowsPublication = useSelector(selectorsPublication.selectRows);
  const loadingByCategory = useSelector(selectorsPublication.loadingByCategory);
  const rowsCategory = useSelector(selectorsPublication.slectByCategory);
  return (
    <>
      <div className='publication__page'>
        <div className='app__calendar'>
          <img src={calendar__bttom} alt='' />
        </div>
        <Breadcrumb
          title={i18n("entities.publication.label")}
          items={[
            [i18n("dashboard.menu"), "/"],
            [i18n("entities.publication.label")],
          ]}
        />

        <PublicationCategory rows={rows} />

        <div className='app__pub'>
          <div className='publication__header'>
            <div className='image__pub'>
              {/* {rowsPublication.map((item, index) => (
                <div className='pub__relative' key={index}>
                  <img src={item?.supports[0]?.downloadUrl} alt='header' />
                  <PublicationDetaill data={item} />
                </div>
              ))} */}
            </div>
          </div>
          {/* styling the migration section */}
          {rowsPublicationByThematique.map((item, index) => (
            <PublicationDetaillByThematique
              data={item.data}
              thematique={item.cat[0]}
              index={index}
            />
          ))}
          {/* stlyling the pollution */}

          <div className='app__articles'>
            <div className='articles__top'>
              <div className='__top'>
                {rowsCategory.map((item, index) => (
                  <PublicationByCategory
                    data={item.data}
                    category={item.cat[0]}
                    index={index}
                  />
                ))}
              </div>
              <div className='app__rapports'>
                <div className='archieve__header'>
                  <h2>Rapport</h2>
                  <div className='satestique__bar'></div>
                </div>
                <div className='rapport__detaill'>
                  <div className='list__detaill'>
                    <div className='detaill__header'>
                      <div className='header__left'>
                        <p>Rapport </p>
                      </div>
                      <div className='header__right'>10h32</div>
                    </div>
                    <div className='detaill__content ' style={{ width: 233 }}>
                      Végétation dans le mont Bargou : Ressources naturelles et
                      pilier...
                    </div>
                  </div>
                  <div className='list__detaill'>
                    <div className='detaill__header'>
                      <div className='header__left'>
                        <p>Rapport </p>
                      </div>
                      <div className='header__right'>10h32</div>
                    </div>
                    <div className='detaill__content ' style={{ width: 233 }}>
                      Végétation dans le mont Bargou : Ressources naturelles et
                      pilier...
                    </div>
                  </div>
                  <div className='list__detaill'>
                    <div className='detaill__header'>
                      <div className='header__left'>
                        <p>Rapport </p>
                      </div>
                      <div className='header__right'>10h32</div>
                    </div>
                    <div className='detaill__content ' style={{ width: 233 }}>
                      Végétation dans le mont Bargou : Ressources naturelles et
                      pilier...
                    </div>
                  </div>
                </div>
                <Link to='/detaill'>
                  <div className='plus__button'>Voir plus</div>
                </Link>
              </div>
            </div>
          </div>

          {/* styling the category */}
        </div>
      </div>
    </>
  );
}

export default Publications;
