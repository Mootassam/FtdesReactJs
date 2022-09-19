import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "src/modules/publication/list/publicationListActions";
import selectors from "src/modules/publication/list/publicationListSelectors";
import Spinner from "../shared/Spinner";
import Pagination from "../shared/table/Pagination";
import { Link } from "react-router-dom";
function ListPublication(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.doFetch());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const findLoading = useSelector(selectors.selectLoading);
  const loading = findLoading;
  const rows = useSelector(selectors.selectRows);
  const hasRows = useSelector(selectors.selectHasRows);
  const count = useSelector(selectors.selectCount);

  const pagination = useSelector(selectors.selectPagination);
  const doChangePagination = (pagination) => {
    dispatch(actions.doChangePaginationAndSort(pagination, {}));
  };

  return (
    <>
      <div className='list__button'>
        <div className='list__title'>
          <h2>contenu récent </h2>
        </div>
        <Link to='/profile/suggest'>
          <div className='button__contenue'>Suggérer de contenu</div>
        </Link>
      </div>
      <div className='list__search'>
        <div className='search__left'>{count} contenus </div>

        <div className='search__right'>
          <div className='search__result'>
            <i className='fas fa-search'></i>Chercher
          </div>
          <div className='filter'>
            <i className='fas fa-sliders-h'></i>Filtrer
          </div>
        </div>
      </div>
      <div className='list__items'>
        <table>
          <thead>
            <tr>
              <td>Titre</td>
              <td>Catégorie</td>
              <td>Type</td>
              <td>Statut</td>
              <td>Date</td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={100}>
                  <Spinner />
                </td>
              </tr>
            )}
            {!loading && !hasRows && (
              <tr>
                <td colSpan={100}>
                  <div className='d-flex justify-content-center'>
                    {"Aucune donnée"}
                  </div>
                </td>
              </tr>
            )}
            {!loading &&
              rows.map((row) => (
                <tr key={row.id}>
                  <td> Lorem ipsum dalor</td>
                  <td>Category</td>
                  <td>
                    <i className='fa-solid fa-camera'></i>
                    {row.type}
                  </td>
                  <td>
                    <span className='valider'>{row.statut}</span>
                  </td>
                  <td> {row.date}</td>
                  <td className='actions'>
                    <i className='fa-solid fa-pen'></i>
                    <i className='fa-solid fa-eye'></i>
                  </td>
                </tr>
              ))}
          </tbody>
          <tfoot>
            <Pagination
              onChange={doChangePagination}
              disabled={loading}
              pagination={pagination}
            />
          </tfoot>
        </table>
      </div>
    </>
  );
}

export default ListPublication;