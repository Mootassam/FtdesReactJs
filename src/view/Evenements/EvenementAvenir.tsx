import React, { useEffect } from "react";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import Image from "../shared/Image";
import EvenementItem from "./EvenementItem";
import { useDispatch, useSelector } from "react-redux";
import actions from "src/modules/evenement/list/evenementListActions";
import selectors from "src/modules/evenement/list/evenementListSelectors";
import { i18n } from "src/i18n";

function EvenementAvenir() {
  const dispatch = useDispatch();

  const selectLoadingVenir = useSelector(selectors.selectLoadingVenir);

  const selectRowsVenir = useSelector(selectors.selectRowsVenir);

  useEffect(() => {
    dispatch(actions.evenementvenir());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='evenment__venir'>
      <div className='venir'>
        <div className='archieve__header'>
          <h2>{i18n("common.evenementVenir")}</h2>
          <div className='satestique__bar'></div>
        </div>
        <div className='venir__content'>
          {selectRowsVenir.map((item, index) => (
            <EvenementItem data={item} />
          ))}
        </div>
        <Link to='/detaill/Evenement/Venir'>
          <div className='plus__button'>{i18n("common.voirPlus")}</div>
        </Link>
      </div>
    </div>
  );
}

export default EvenementAvenir;
