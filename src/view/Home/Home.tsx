import React from "react";

import {
  image__header,
  arrow__left,
  arrow__right,
  art1,
  art2,
  art3,
  art4,
  bar,
  calendar__image,
  calendar_timing,
  calendar,
  chart__bar,
  chart_donught,
  check,
  Communique,
  envelope,
  Etudes,
  evenement1,
  evenement2,
  evenement3,
  facebook,
  list3,
  logo__footer,
  publication2,
  publication3,
  publications1,
  rapport,
  search__archeive,
  slider1,
  slider2,
  slider4,
  time_clock_circle,
  twitter,
  youtube,
  calendar__bttom,
  school,
  header__image__mobile,
  invitation,
  petition,
  Poster,
  member,
  down__footer,
  instagram,
} from "src/assets/images";
import Footer from "../Layout/Footer";
import MegaFooter from "../Layout/MegaFooter";

function Home() {
  return (
    <div className='app'>
      {/* Styling the Header */}

      <div className='app__calendar'>
        <img src={calendar__bttom} alt='' />
      </div>
      <div className='app__header'>
        <div className='header__content'>
          <div className='content'>
            <div className='content__imagePrincipale'>
              <img
                className='lazyload'
                src={image__header}
                id='image__desktop'
                alt=' Header'
              />
              <img
                className='lazyload'
                src={header__image__mobile}
                id='image__mobile'
                alt='Header '
              />
            </div>
            {/* Slider Top */}
            <div className='content__sliderTop'>
              <div className='arrow__left'>
                <img
                  className='lazyload'
                  src={arrow__right}
                  alt='Arrow Right '
                />
              </div>
              <h3>
                En Tunisie, réfugié.e.s et demandeur.se.s d’asile abandonnés
                dans une situation humanitaire critique
              </h3>
              <div className='arrow__right'>
                <img
                  className='lazyload'
                  src={arrow__left}
                  alt='Arrow Left Icon'
                />
              </div>
            </div>
            {/* Slider Bottom  */}
            <div className='content__sliderBottom'>
              <div>
                <img className='lazyload' src={slider1} alt=' Slider Icon' />
                <p>
                  Criminalization of refugees: the dark side of EU and UNHCR
                  policies...
                </p>
              </div>
              <div>
                <img className='lazyload' src={slider2} alt='Slider 2 Icon' />
                <p>
                  En Tunisie, réfugié.e.s et demandeur.se.s d’asile abandonnés
                  dans une situation humanitaire critique
                </p>
              </div>
              <div>
                <img className='lazyload' src={slider2} alt='' />
                <p>
                  Enjeux de gouvernance des forêts urbaines. Cas du parc urbain
                  Farhat Hached à Radès
                </p>
              </div>
              <div>
                <img className='lazyload' src={slider4} alt='Slider 4 Icon' />
                <p>
                  Zones urbaines et forestières semi-urbaines. Quelle relation ?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Styling the statestique */}
      <div className='app__statestique'>
        <div className='statestique'>
          <div className='archieve__header'>
            <h2>tableau&nbsp;de&nbsp;bord</h2>
            <div className='satestique__bar' />
          </div>
          <div className='statestique__graph'>
            <div className='graph__left'>
              <div className='graph__title'>
                <div className='title'>
                  Statistiques migration premier semestre 2020
                </div>
                <div className='graph__navigate'>
                  <div className='navigate__left'>
                    <i className='fa-solid fa-chevron-left' />
                  </div>
                  <div className='navigate__right'>
                    <i className='fa-solid fa-chevron-right' />
                  </div>
                </div>
              </div>
              <div className='graph__description'>
                <div className='descripition__left'>
                  <div>
                    <div className='description__number'>236</div>
                    <div className='description__text'>
                      Tentatives échouées de départ clandestins
                    </div>
                  </div>
                  <div>
                    <div className='description__number'>34</div>
                    Tentatives échouées de départ clandestins
                  </div>
                  <div>
                    <div className='description__number'>67</div>
                    Tentatives échouées de départ clandestins
                  </div>
                </div>
                <div className='description__right'>
                  <img
                    className='lazyload'
                    src={chart_donught}
                    alt='chart_donught Image'
                  />
                </div>
              </div>
              <div className='global__button'>Plus de détails</div>
            </div>
            <div className='graph__right'>
              <div className='graph__title'>
                <div className='title'>Statistiques migration 2018</div>
                <div className='graph__navigate'>
                  <div className='navigate__left'>
                    <i className='fa-solid fa-chevron-left' />
                  </div>
                  <div className='navigate__right'>
                    <i className='fa-solid fa-chevron-right' />
                  </div>
                </div>
              </div>
              <div className='detaill__graph'>
                Malgré leur provenance et origines différentes, leur
                revendication est la même : l’évacuation de la Tunisie et la
                réinstallation dans un pays où les droits humains sont
                respectés...
              </div>
              <img className='lazyload' src={chart__bar} alt='' />
              <div className='detaill__graph'>
                Malgré leur provenance et origines différentes
              </div>
              <div className='global__button'>Plus de détails</div>
            </div>
          </div>
          <div className='statesitique__global'>
            <div className='global__left'>
              <div className='global__header'>
                Statistiques migration premier semestre 2020
              </div>
              <div className='global__content'>
                Malgré leur provenance et origines différentes, leur
                revendication est la même : l’évacuation de la Tunisie et la
                réinstallation dans un pays où les droits humains sont
                respectés... <br />
                Malgré leur provenance et origites, leur revendication est la
                même : l’évacuation de la Tunisie et la réinstallation dans un
                pays où les droits humains sont respectés...
              </div>
              <div className='global__button'>Plus de détails</div>
              <div className='global__navigations'>
                <div className='arrow__left'>
                  <img
                    className='lazyload'
                    src={arrow__right}
                    alt='arrow__right Icon'
                  />
                </div>
                <div className='arrow__right'>
                  <img
                    className='lazyload'
                    src={arrow__left}
                    alt='arrow__left Icon'
                  />
                </div>
              </div>
            </div>
            <div className='global__right'>
              <div>
                <div className='global__number'>236</div>
                <div className='small__bar' />
                <div className='detaill__number'>
                  Tentatives échouées de départ clandestins
                </div>
              </div>
              <div>
                <div className='global__number'>1564</div>
                <div className='small__bar' />
                <div className='detaill__number'>
                  Clandestins arrivés en Italie
                </div>
              </div>
              <div>
                <div className='global__number'>85</div>
                <div className='small__bar' />
                <div className='detaill__number'>Clandestins expulsés</div>
              </div>
              <div>
                <div className='global__number'>7</div>
                <div className='small__bar' />
                <div className='detaill__number'>
                  Tentatives échouées de départ clandestins
                </div>
              </div>
            </div>
            <div className='global__navigations'>
              <div className='arrow__left'>
                <img
                  className='lazyload'
                  src={arrow__right}
                  alt='arrow__right ICon'
                />
              </div>
              <div className='arrow__right'>
                <img
                  className='lazyload'
                  src={arrow__left}
                  alt='arrow__left Icon'
                />
              </div>
            </div>
          </div>

          {/* <div className='statestique__percent'>
            <div className='graph__title'>
              <div className='title'>
                Statistiques migration premier semestre 2020
              </div>
              <div className='graph__navigate'>
                <div className='navigate__left'>
                  <i className='fa-solid fa-chevron-left' />
                </div>
                <div className='navigate__right'>
                  <i className='fa-solid fa-chevron-right' />
                </div>
              </div>
            </div>
            <div className='percent__detaills'>
              <div>
                <img className='lazyload' src={sheep} alt='sheep Icon' />
                <div className='description__number'>236</div>
                Tentatives échouées de départ clandestins
              </div>
              <div>
                <img className='lazyload' src={users} alt='users Icon' />
                <div className='description__number'>34</div>
                Clandestins arrivés en Italie
              </div>
              <div>
                <img
                  className='lazyload'
                  src={clandestins}
                  alt='clandestins ICon'
                />
                <div className='description__number'>65%</div>
                Clandestins expulsés
              </div>
              <div>
                <img className='lazyload' src={car} alt='car Icon' />
                <div className='description__number'>78</div>
                Tentatives échouées de départ clandestins
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* Styling the archeive */}
      <div className='app__archieve'>
        <div className='archeive'>
          <div className='archieve__header'>
            <h2>Archives</h2>
            <div className='header__bar' />
          </div>
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
                  <input
                    type='text'
                    placeholder='Rechercher dans l’archive...'
                  />
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
                    <img
                      className='lazyload'
                      src={rapport}
                      alt='Rapport ICon'
                    />
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
      {/* Stying the Publication */}
      <div className='app__publications'>
        <div className='publication'>
          <div className='publication__left'>
            <div className='archieve__header'>
              <h2>Communiqués</h2>
              <div className='publication__bar' />
            </div>
            <div className='publication__images'>
              <div className='images__header'>
                <div className='__header'>
                  <img
                    className='lazyload'
                    src={publications1}
                    alt='Publication Image'
                  />
                  <div className='__detaills'>
                    <div className='list__detaill'>
                      <div className='detaill__header'>
                        <div className='__left'>
                          <p>Forum</p>
                        </div>
                        <div className='__right'>10h32</div>
                      </div>
                      <div className='__content'>
                        Appel pour un enterrement décent des corps des migrants
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='images__bottom'>
                <div>
                  <img
                    className='lazyload'
                    src={publication2}
                    alt='publication2 Icon'
                  />
                  <div className='list__detaill'>
                    <div className='detaill__header'>
                      <div className='header__left'>
                        <p>Forum</p>
                      </div>
                      <div className='header__right'>10h32</div>
                    </div>
                    <div className='detaill__content'>
                      Criminalization of refugees: the dark side of EU and UNHCR
                      policies...
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    className='lazyload'
                    src={publication2}
                    alt='publication2 Icon'
                  />
                  <div className='list__detaill'>
                    <div className='detaill__header'>
                      <div className='header__left'>
                        <p>Forum</p>
                      </div>
                      <div className='header__right'>10h32</div>
                    </div>
                    <div className='detaill__content'>
                      Criminalization of refugees: the dark side of EU and UNHCR
                      policies...
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    className='lazyload'
                    src={publication2}
                    alt='publication2 Icon'
                  />
                  <div className='list__detaill'>
                    <div className='detaill__header'>
                      <div className='header__left'>
                        <p>Forum</p>
                      </div>
                      <div className='header__right'>10h32</div>
                    </div>
                    <div className='detaill__content'>
                      Criminalization of refugees: the dark side of EU and UNHCR
                      policies...
                    </div>
                  </div>
                </div>
                <div>
                  <img className='lazyload' src={publication3} alt='' />
                  <div className='list__detaill'>
                    <div className='detaill__header'>
                      <div className='header__left'>
                        <p>Forum</p>
                      </div>
                      <div className='header__right'>09h18</div>
                    </div>
                    <div className='detaill__content'>
                      Les jeunes médecins en Tunisie : entre le marteau de
                      l’aliénation...
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='plus__button'>Voir plus</div>
          </div>
          <div className='publication__right'>
            <div className='communique'>
              <div className='archieve__header'>
                <h2> Publications</h2>
                <div className='communiquer__bar' />
              </div>
              {/* here i will add the text */}
              <div className='images__header'>
                <div className='__header'>
                  <img
                    className='lazyload'
                    src={school}
                    alt='Publication Image'
                  />
                  <div className='__detaills'>
                    <div className='list__detaill'>
                      <div className='detaill__header'>
                        <div className='__left'>
                          <p>Forum</p>
                        </div>
                        <div className='__right'>10h32</div>
                      </div>
                      <div className='__content'>
                        École publique et intégration des enfants d’immigrants
                        de retour
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='images__header'>
                <div className='__header'>
                  <img
                    className='lazyload'
                    src={publications1}
                    alt='Publication Image'
                  />
                  <div className='__detaills'>
                    <div className='list__detaill'>
                      <div className='detaill__header'>
                        <div className='__left'>
                          <p>Forum</p>
                        </div>
                        <div className='__right'>10h32</div>
                      </div>
                      <div className='__content'>
                        Appel pour un enterrement décent des corps des migrants
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='communique'>
              <div className=''>
                <div className='publication__list'>
                  <div>
                    <img
                      className='lazyload'
                      src={list3}
                      alt=''
                      id='publication__leftImage'
                    />
                    <div className='list__detaill'>
                      <div className='detaill__header'>
                        <div className='header__left'>
                          <p>Forum</p>
                        </div>
                        <div className='header__right'>12/11/222</div>
                      </div>
                      <div className='detaill__content'>
                        Zones urbaines et forestières semi-urbaines. Quelle
                        relation ?
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      className='lazyload'
                      src={list3}
                      alt=''
                      id='publication__leftImage'
                    />
                    <div className='list__detaill'>
                      <div className='detaill__header'>
                        <div className='header__left'>
                          <p>Forum</p>
                        </div>
                        <div className='header__right'>12/11/222</div>
                      </div>
                      <div className='detaill__content'>
                        Zones urbaines et forestières semi-urbaines. Quelle
                        relation ?
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      className='lazyload'
                      src={list3}
                      id='publication__leftImage'
                    />
                    <div className='list__detaill'>
                      <div className='detaill__header'>
                        <div className='header__left'>
                          <p>Forum</p>
                        </div>
                        <div className='header__right'>12/11/222</div>
                      </div>
                      <div className='detaill__content'>
                        Végétation dans le mont Bargou : Ressources naturelles
                        et pilier...
                      </div>
                    </div>
                  </div>
                  <div>
                    <img
                      className='lazyload'
                      src={list3}
                      alt=''
                      id='publication__leftImage'
                    />
                    <div className='list__detaill'>
                      <div className='detaill__header'>
                        <div className='header__left'>
                          <p>Forum</p>
                        </div>
                        <div className='header__right'>12/11/222</div>
                      </div>
                      <div className='detaill__content'>
                        Enjeux de gouvernance des forêts urbaines. Cas du parc
                        urbain Farhat Hached à Radès
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='plus__button'>Voir plus</div>
            </div>
          </div>
        </div>
        <div className='Glossaire'>
          <h5>Glossaire</h5>
          <div className='glossaire__detaill'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            cursus et augue id consequat. Suspendisse sodales est lectus...
          </div>
          <div className='global__button'>Plus de détails</div>
        </div>
        {/* <div className='vue'>
          <div className='vue__header'>Les plus lus cette semaine</div>
          <div className='vue__bar' />
          <div className='vue__content'>
            <div>
              <div className='vue__number'>1</div>
              <div className='vue__text'>
                Transition sanitaire et droits des femmes à la santé : leçons...
              </div>
            </div>
            <div>
              <div className='vue__number'>2</div>
              <div className='vue__text'>
                Les jeunes médecins en Tunisie : entre le marteau de
                l’aliénation...
              </div>
            </div>
            <div>
              <div className='vue__number'>3</div>
              <div className='vue__text'>
                La corruption dans le secteur de la santé : quand l’épidémie...
              </div>
            </div>
            <div>
              <div className='vue__number'>4</div>
              <div className='vue__text'>
                Appel pour un enterrement décent des corps des migrants
              </div>
            </div>
            <div>
              <div className='vue__number'>5</div>
              <div className='vue__text'>
                Transition sanitaire et droits des femmes à la santé : leçons...
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/* Styling the Evenement */}
      <div className='app__evenement'>
        <div className='evenenement'>
          <div className='archieve__header'>
            <h2>Evènement</h2>
            <div className='satestique__bar' />
          </div>
          <div className='evenement__content'>
            <div className='evenement__timing'>
              <div className='timing__bar'>
                <img className='lazyload' src={bar} alt='' />
              </div>
              <div className='timing__number'>
                <div>
                  <div className='cercle__red' />
                  <div className='time'>
                    <div className='date'>17</div>
                    <div className='month'>Avril</div>
                  </div>
                </div>
                <div>
                  <div className='cercle__red' />
                  <div className='time'>
                    <div className='date'>23</div>
                    <div className='month'>Avril</div>
                  </div>
                </div>
                <div>
                  <div className='cercle__red' />
                  <div className='time'>
                    <div className='date'>7</div>
                    <div className='month'>Mai</div>
                  </div>
                </div>
              </div>
            </div>
            <div className='evenement__description'>
              <div>
                <div className='evenement__left'>
                  <img className='lazyload' src={evenement1} alt='' />
                </div>
                <div className='evenement__right'>
                  <div className='right__date'>
                    <div>
                      <img
                        className='lazyload'
                        src={calendar}
                        alt=''
                        srcSet=''
                      />
                      17 avril 2022
                    </div>
                    <div>
                      <img
                        className='lazyload'
                        src={time_clock_circle}
                        alt=''
                      />
                      10h00
                    </div>
                  </div>
                  <div className='righ__desctiption'>
                    Atelier de restitution de l’événement Echange des Jeunes du
                    projet Justice Environnementale
                  </div>
                  <div className='right__footer'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla cursus et augue id consequat. Suspendisse sodales est
                    lectus...
                  </div>
                </div>
              </div>
              <div>
                <div className='evenement__left'>
                  <img className='lazyload' src={evenement2} alt='' />
                </div>
                <div className='evenement__right'>
                  <div className='right__date'>
                    <div>
                      <img
                        className='lazyload'
                        src={calendar}
                        alt=''
                        srcSet=''
                      />
                      23 avril 2022
                    </div>
                    <div>
                      <img
                        className='lazyload'
                        src={time_clock_circle}
                        alt=''
                      />
                      10h00
                    </div>
                  </div>
                  <div className='righ__desctiption'>
                    Les jeunes, l’emploi et l’avenir du travail
                  </div>
                  <div className='right__footer'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla cursus et augue id consequat. Suspendisse sodales est
                    lectus...
                  </div>
                </div>
              </div>
              <div>
                <div className='evenement__left'>
                  <img className='lazyload' src={evenement3} alt='' />
                </div>
                <div className='evenement__right'>
                  <div className='right__date'>
                    <div>
                      <img
                        className='lazyload'
                        src={calendar}
                        alt=''
                        srcSet=''
                      />
                      7 mai 2022
                    </div>
                    <div>
                      <img
                        className='lazyload'
                        src={time_clock_circle}
                        alt=''
                      />
                      10h00
                    </div>
                  </div>
                  <div className='righ__desctiption'>
                    Webinaire: Le covid19, la santé et le budget de l’Etat
                  </div>
                  <div className='right__footer'>
                    Webinaire organisé par le Forum Tunisien pour les Droits
                    Economiques et Sociaux avec le soutien de la Friedrich Ebert
                    Stiftung Tunisie
                  </div>
                </div>
              </div>
            </div>
            <div className='evenement__calendar'>
              <div className='calendar'>
                <img
                  className='lazyload'
                  src={calendar_timing}
                  alt=''
                  srcSet=''
                />
              </div>
              <div className='clendar__footer'>
                <img
                  className='lazyload'
                  src={calendar__image}
                  alt=''
                  srcSet=''
                />
                <div className='calendar__month'>
                  <div className='time' />
                  <div className='date'>1</div>
                  <div className='month'>Avril</div>
                </div>
                <div className='calendar__detaill'>
                  Quel modèle de développement alternatif, durable , équitable
                  et démocratique
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* styling the gallery */}
      <div className='app__galery'>
        {/* <div className='gallery'>
          <div className='navig'>
            <div className='global__navigations'>
              <div className='arrow__left'>
                <img className='lazyload' src={arrow__right} alt='' />
              </div>
              <div className='arrow__right'>
                <img className='lazyload' src={arrow__left} alt='' />
              </div>
            </div>
          </div>
          <div className='archieve__header'>
            <h2>Galerie</h2>
            <div className='satestique__bar' />
          </div>
          <div className='gallery__images'>
            <div>
              <div className='image'>
                <img className='lazyload' src={gallery1} alt='' />
                <div className='youtube__button'>
                  <img className='lazyload' src={Polygon} alt='' />
                </div>
              </div>
              <div className='gallery__detaill'>
                Le champ pétrolier de Nawara ou l’entêtement vers les énergies
                fossiles
              </div>
            </div>
            <div>
              <div className='image'>
                <img className='lazyload' src={gallery2} alt='' />
                <div className='youtube__button'>
                  <img className='lazyload' src={camera} alt='' />
                </div>
              </div>
              <div className='gallery__detaill'>
                Refoulement de migrants subsahariens vers la frontière libyenne
              </div>
            </div>
            <div>
              <div className='image'>
                <img className='lazyload' src={gallery3} alt='' />
                <div className='youtube__button'>
                  <img className='lazyload' src={Polygon} alt='' />
                </div>
              </div>
              <div className='gallery__detaill'>
                Faj Rouissat : Une lutte continue pour la justice
                environnementale et sociale
              </div>
            </div>
            <div>
              <div className='image'>
                <img className='lazyload' src={gallery4} alt='' />
                <div className='youtube__button'>
                  <img className='lazyload' src={Polygon} alt='' />
                </div>
              </div>
              <div className='gallery__detaill'>
                La lutte continue pour le droit à l’eau potable à Redeyef
              </div>
            </div>
          </div>
        </div> */}
        <div className='art__images'>
          <div>Galerie&nbsp;D'art</div>
          <div>
            <div className='art__photo'>
              <img className='lazyload' src={art1} alt='' srcSet='' />
            </div>
            <div className='art__detaill'>
              Lorem ipsum dolor sit amet, consectetur
            </div>
            <div className='art__author'>Hatem Mekki</div>
          </div>
          <div>
            <div className='art__photo'>
              <img className='lazyload' src={art3} alt='' srcSet='' />
            </div>
            <div className='art__detaill'>
              Lorem ipsum dolor sit amet, consectetur
            </div>
            <div className='art__author'>Hatem Mekki</div>
          </div>
          <div>
            <div className='art__photo'>
              <img className='lazyload' src={art2} alt='' srcSet='' />
            </div>
            <div className='art__detaill'>
              Lorem ipsum dolor sit amet, consectetur
            </div>
            <div className='art__author'>Hatem Mekki</div>
          </div>
          <div>
            <div className='art__photo'>
              <img className='lazyload' src={art3} alt='' srcSet='' />
            </div>
            <div className='art__detaill'>
              Lorem ipsum dolor sit amet, consectetur
            </div>
            <div className='art__author'>Hatem Mekki</div>
          </div>
          <div>
            <div className='art__photo'>
              <img className='lazyload' src={art4} alt='' srcSet='' />
            </div>
            <div className='art__detaill'>
              Lorem ipsum dolor sit amet, consectetur
            </div>
            <div className='art__author'>Hatem Mekki</div>
          </div>
        </div>
        <div className='naviation__art'>
          <div className='graph__navigate'>
            <div className='navigate__left'>
              <i className='fa-solid fa-chevron-left' />
            </div>
            <div className='navigate__right'>
              <i className='fa-solid fa-chevron-right' />
            </div>
          </div>
        </div>
      </div>
      {/* styling the newsLettre */}
      <div className='app__newsLettre'>
        <div className='newsLettre'>
          <div className='newsLettre__left'>
            <div className='archieve__header'>
              <h2>Espace&nbsp;membre</h2>
              <div className='satestique__bar' />
            </div>
            <div className='news'>
              <div className='left__image'>
                <div className='background__red' />
                <img className='lazyload' src={member} alt='' />
              </div>
              <div className='right__text'>
                <div className='text__header'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  cursus et augue id consequat. Suspendisse sodales est lectus.
                  Phasellus dapibus nisl ut nisl accumsan,
                </div>
                <div className='text__content'>
                  <div>
                    <div className='check'>
                      <img className='lazyload' src={check} alt='' />
                    </div>
                    Nullam dolor diam,efficitur et pellentesque eget
                  </div>
                  <div>
                    <div className='check'>
                      <img className='lazyload' src={check} alt='' />
                    </div>
                    vestibulum a dui. Nullam sit amet cursus libero
                  </div>
                  <div>
                    <div className='check'>
                      <img className='lazyload' src={check} alt='' />
                    </div>
                    Donec dolor est, accumsan ac venenatis vitae
                  </div>
                </div>
                <div className='global__button'>Se connecter</div>
              </div>
            </div>
            <div className='text__content'>
              <div>
                <div className='check'>
                  <img className='lazyload' src={check} alt='' />
                </div>
                Nullam dolor diam,efficitur et pellentesque eget
              </div>
              <div>
                <div className='check'>
                  <img className='lazyload' src={check} alt='' />
                </div>
                vestibulum a dui. Nullam sit amet cursus libero
              </div>
              <div>
                <div className='check'>
                  <img className='lazyload' src={check} alt='' />
                </div>
                Donec dolor est, accumsan ac venenatis vitae
              </div>
              <div className='global__button'>Se connecter</div>
            </div>
          </div>
          <div className='newsLettre__right'>
            <div className='archieve__header'>
              <h2>Newsletter</h2>
              <div className='satestique__bar' />
            </div>
            <div className='newsLettre__title'>LET’S KEEP IN TOUCH</div>
            <div className='newsLettere__detaill'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              cursus et augue id consequat. Suspendisse sodales est lectus.
            </div>
            <div className='newsLettre__formulaire'>
              <img className='lazyload' src={envelope} alt='Envolope Image' />
              <input type='text' placeholder=' Votre adresse email' />
              <div className='button__newLettre'>Envoyer</div>
            </div>
          </div>
        </div>
      </div>
      {/* stying the Footer */}
      <MegaFooter />
      <Footer />
    </div>
  );
}

export default Home;
