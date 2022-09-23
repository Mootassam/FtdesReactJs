import React from "react";
import {
  Communique,
  Etudes,
  rapport,
  search__archeive,
  invitation,
  petition,
  Poster,
} from "src/assets/images";
function Archives() {
  return (
    <div className='app__archieve__page'>
      <div className='archeive'>
        <div className='archieve__content'>
          <div className='archieve__left'>
            <div className='left__search'>
              <input type='text' placeholder='Rechercher dans l’archive...' />
              <div className='button__search'>
                <i className='fa-solid fa-magnifying-glass' />
                Chercher
              </div>
              <div className='search__advanced'>Recherche avancée</div>
            </div>
            <div className='mobile__archeiveSearch'>
              <div className='archeiveSearch__form'>
                <input type='text' placeholder='Rechercher dans l’archive...' />
                <div className='button_search'>
                  <img
                    className='lazyload'
                    src={search__archeive}
                    alt='Search Archeive ICon'
                    srcSet=''
                  />
                </div>
              </div>
              <div className='search__advanced'>Recherche avancée</div>
            </div>
            <div className='left__content'>
              <div>
                <div>
                  <img className='lazyload' src={Etudes} alt='Etudes Icon' />
                </div>
                <div>
                  <h4>études</h4>
                </div>
              </div>
              <div>
                <div>
                  <img className='lazyload' src={rapport} alt='Rapport ICon' />
                </div>
                <div>
                  <h4>Rapports</h4>
                </div>
              </div>
              <div>
                <div>
                  <img
                    className='lazyload'
                    src={invitation}
                    alt='invitation ICon'
                  />
                </div>
                <div>
                  <h4>Invitations</h4>
                </div>
              </div>
              <div>
                <div>
                  <img
                    className='lazyload'
                    src={Communique}
                    alt='Communique Png'
                  />
                </div>
                <div>
                  <h4>Communiqués</h4>
                </div>
              </div>
              <div>
                <div>
                  <img
                    className='lazyload'
                    src={petition}
                    alt='Petition Icon'
                  />
                </div>
                <div>
                  <h4>Pétitions</h4>
                </div>
              </div>
              <div>
                <div>
                  <img className='lazyload' src={Poster} alt='Poster Icon' />
                </div>
                <div>
                  <h4>Posters</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Archives;
