import React from "react";
import { NavLink } from "react-router-dom";
import "./LandingPage.css";

import comidas from "../assets/comidas.webp";
import cafPast from "../assets/cafpast.webp";
import bebidas from "../assets/bebidas.webp";
import NYEShanti from "../assets/NYEShanti.webp";
import TrackClubIMG from "../assets/TrackClub.webp";
import { VerPedido } from "../BtnBag/BtnBag";
import AlertDialogSlide from "../BtnNavidad/BtnNavidad";

export default function LandingPage(url) {
  const id = url.location.pathname.slice(1,3)

  // if (url.location.pathname === "/") {
  //   url.location.pathname = "/sinMesa";
  //   console.log(url.location.pathname);
  // }

  return (
    <div className="animate__animated  animate__zoomIn">
      <div className="naviLanding titCasa ">
        <div className="logoL">
          <NavLink to={`/${id}`}>
          <svg  height="70" viewBox="0 0 280 270" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.3437 72.7595C18.6327 93.7788 27.017 120.134 37.442 140.048C39.0404 143.101 42.3095 145 45.9589 145C52.4377 145 57.7977 138.733 57.3595 131.48C56.261 113.294 59.5777 94.7214 64.5983 78.1445L64.4853 78.0697C64.5687 77.9436 64.6522 77.8177 64.736 77.692C69.8519 60.9405 76.69 46.2579 82.4338 36.1182C63.7153 36.8452 50.434 40.8774 41.2334 46.8363C31.1344 53.3771 25.66 62.4249 23.3437 72.7595ZM64.3468 131.057C63.3174 114.016 66.4097 96.4821 71.1323 80.7233C77.489 71.3389 84.9382 62.9661 92.287 56.1642C100.55 48.5167 113.086 48.4552 124.975 52.699C130.033 54.5045 135.584 56.0002 140.317 56.0002C145.049 56.0002 150.6 54.5045 155.658 52.699C167.547 48.4552 180.084 48.5167 188.346 56.1642C195.695 62.9661 203.144 71.3389 209.501 80.7233C214.223 96.4821 217.316 114.016 216.286 131.057C215.886 137.679 218.836 144.301 223.911 148.275C223.65 149.086 223.371 149.898 223.072 150.709C212.783 178.602 203.761 197.7 192.15 210.063L188.744 173.946C187.025 155.724 175.302 140.657 159.349 133.871C157.491 129.748 156.483 125.214 156.483 120.527V79.1667C156.483 70.2381 149.245 63 140.317 63C131.388 63 124.15 70.2381 124.15 79.1667V120.527C124.15 125.214 123.142 129.748 121.284 133.871C105.331 140.657 93.608 155.724 91.8894 173.946L88.483 210.063C76.8726 197.7 67.8506 178.602 57.5612 150.709C57.2621 149.898 56.9828 149.087 56.7226 148.275C61.7973 144.301 64.7468 137.679 64.3468 131.057ZM229.639 153.131C218.282 183.918 207.968 205.598 192.995 219.021L193.35 222.785C194.322 233.092 186.215 242 175.862 242C168.909 242 162.397 239.358 157.479 234.861C152.175 235.632 146.474 236 140.317 236C134.159 236 128.458 235.632 123.155 234.861C118.236 239.358 111.725 242 104.771 242C94.4185 242 86.3111 233.092 87.2832 222.785L87.6382 219.021C72.6656 205.598 62.3508 183.918 50.9938 153.131C50.7853 152.566 50.5853 152 50.3937 151.434C48.9905 151.802 47.508 152 45.9589 152C39.9112 152 34.1394 148.833 31.2404 143.295C20.5979 122.965 11.245 94.7337 16.5132 71.2285C19.1865 59.3008 25.6308 48.6017 37.4281 40.961C49.1339 33.3795 65.8112 29 88.6654 29H89.9373L106.654 42.9991C113.628 42.4567 120.84 43.7904 127.328 46.1064C132.192 47.8428 136.82 49.0002 140.317 49.0002C143.813 49.0002 148.441 47.8428 153.305 46.1064C159.793 43.7904 167.005 42.4567 173.98 42.9991L190.696 29H191.968C214.822 29 231.499 33.3795 243.205 40.961C255.002 48.6017 261.447 59.3008 264.12 71.2285C269.388 94.7337 260.035 122.965 249.393 143.295C246.494 148.833 240.722 152 234.674 152C233.125 152 231.643 151.802 230.239 151.434C230.048 152 229.848 152.566 229.639 153.131ZM150.479 224.639C150.996 225.966 151.609 227.236 152.308 228.442C148.567 228.816 144.58 229 140.317 229C136.053 229 132.066 228.816 128.325 228.442C129.025 227.236 129.638 225.966 130.154 224.639L132.109 219.614C133.426 216.229 136.685 214 140.317 214C143.948 214 147.207 216.229 148.524 219.614L150.479 224.639ZM149.483 120.527C149.483 124.177 149.987 127.753 150.943 131.169C147.515 130.403 143.957 130 140.317 130C136.676 130 133.119 130.403 129.69 131.169C130.646 127.753 131.15 124.177 131.15 120.527V79.1667C131.15 74.1041 135.254 70 140.317 70C145.379 70 149.483 74.1041 149.483 79.1667V120.527ZM182.734 44.7983C186.453 46.1028 189.966 48.1256 193.101 51.027C196.107 53.809 199.129 56.8419 202.095 60.093C198.398 51.2647 194.504 43.6273 191.091 37.7995L182.734 44.7983ZM216.035 78.1444L216.148 78.0697C216.065 77.9436 215.981 77.8177 215.897 77.692C210.781 60.9405 203.943 46.2579 198.199 36.1182C216.918 36.8452 230.199 40.8774 239.4 46.8363C249.499 53.3771 254.973 62.4249 257.289 72.7595C262.001 93.7788 253.616 120.134 243.191 140.048C241.593 143.101 238.324 145 234.674 145C228.196 145 222.835 138.733 223.274 131.48C224.372 113.294 221.055 94.7214 216.035 78.1444ZM89.5421 37.7995L97.8994 44.7983C94.18 46.1028 90.6669 48.1256 87.5322 51.027C84.5264 53.809 81.504 56.8419 78.5383 60.0929C82.2351 51.2647 86.1295 43.6273 89.5421 37.7995ZM140.317 137C118.893 137 100.867 153.301 98.8584 174.603L94.2523 223.442C93.6675 229.642 98.5441 235 104.771 235C113.116 235 120.605 229.878 123.63 222.101L125.585 217.076C127.949 211.001 133.798 207 140.317 207C146.835 207 152.685 211.001 155.048 217.076L157.003 222.101C160.028 229.878 167.517 235 175.862 235C182.089 235 186.966 229.642 186.381 223.442L181.775 174.603C179.766 153.301 161.741 137 140.317 137ZM140.317 146C135.836 146 129.136 147.164 123.435 150.798C117.546 154.552 112.817 160.918 112.817 170.747C112.817 176.771 114.542 181.231 117.473 184.464C120.327 187.612 124.01 189.244 127.261 190.272C128.897 190.79 130.509 191.179 131.914 191.512L132.169 191.573L132.17 191.573C133.512 191.892 134.595 192.149 135.511 192.438C136.523 192.758 136.937 193.004 137.063 193.107L137.069 193.112C137.069 193.112 136.998 193.047 136.927 192.907C136.837 192.732 136.817 192.573 136.817 192.5H143.817C143.817 192.573 143.796 192.732 143.707 192.907C143.639 193.04 143.572 193.105 143.565 193.111L143.57 193.107C143.696 193.004 144.11 192.758 145.122 192.438C146.038 192.149 147.121 191.892 148.463 191.573L148.464 191.573L148.719 191.512C150.124 191.179 151.736 190.79 153.372 190.272C156.623 189.244 160.306 187.612 163.16 184.464C166.091 181.231 167.817 176.771 167.817 170.747C167.817 160.918 163.087 154.552 157.198 150.798C151.497 147.164 144.797 146 140.317 146ZM143.011 185.764C142.164 186.032 141.213 186.382 140.317 186.89C139.42 186.382 138.469 186.032 137.622 185.764C136.448 185.393 135.117 185.078 133.86 184.78L133.532 184.702C132.124 184.368 130.736 184.03 129.372 183.598C126.623 182.729 124.306 181.579 122.66 179.763C121.091 178.032 119.817 175.347 119.817 170.747C119.817 163.579 123.087 159.321 127.198 156.701C131.497 153.96 136.797 153 140.317 153C143.836 153 149.136 153.96 153.435 156.701C157.546 159.321 160.817 163.579 160.817 170.747C160.817 175.347 159.542 178.032 157.973 179.763C156.327 181.579 154.01 182.729 151.261 183.598C149.897 184.03 148.509 184.368 147.102 184.702L146.773 184.78C145.516 185.078 144.185 185.393 143.011 185.764Z" fill="black"/>
<line y1="-5" x2="46.9728" y2="-5" transform="matrix(-0.000706763 1 -0.999999 -0.00102365 0.0332031 10.0005)" stroke="#E88A23" stroke-width="10"/>
<line y1="-5" x2="46.837" y2="-5" transform="matrix(0.999928 0.0119581 -0.011889 0.999929 0.0292969 10)" stroke="#E88A23" stroke-width="10"/>
<line y1="-5" x2="46.9728" y2="-5" transform="matrix(0.000706763 1 0.999999 -0.00102365 279.967 10.0005)" stroke="#E88A23" stroke-width="10"/>
<line y1="-5" x2="46.837" y2="-5" transform="matrix(-0.999928 0.0119581 0.011889 0.999929 279.971 10)" stroke="#E88A23" stroke-width="10"/>
<line y1="-5" x2="46.9728" y2="-5" transform="matrix(-0.000706763 -1 -0.999999 0.00102365 0.0332031 260)" stroke="#E88A23" stroke-width="10"/>
<line y1="-5" x2="46.837" y2="-5" transform="matrix(0.999928 -0.0119581 -0.011889 -0.999929 0.0292969 260)" stroke="#E88A23" stroke-width="10"/>
<line y1="-5" x2="46.9728" y2="-5" transform="matrix(0.000706763 -1 0.999999 0.00102365 279.967 260)" stroke="#E88A23" stroke-width="10"/>
<line y1="-5" x2="46.837" y2="-5" transform="matrix(-0.999928 -0.0119581 0.011889 -0.999929 279.971 260)" stroke="#E88A23" stroke-width="10"/>
</svg>

          </NavLink>
        
        </div>
        <div className="navi2">
          <svg
            width="59"
            height="2"
            viewBox="0 0 59 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M59 0.999995L0 1" stroke="#E88A23" />
          </svg>
          <p className="naviTit2"> Nuesto Menú </p>
          <svg
            width="59"
            height="2"
            viewBox="0 0 59 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M59 0.999995L0 1" stroke="#E88A23" />
          </svg>
        </div>
      </div>

      <div className="conteinerLB2  ">
        <div className="rowsCardL">
          <NavLink
            className="navLink"
            to={
              url.location.pathname === "/"
                ? `/Cafeteria`
                : `${url.location.pathname}/Cafeteria`
            }
          >
            <div className="titInicio">
              <img src={cafPast} alt="fotito" />
              <p>CAFETERIA & POSTRES</p>
            </div>
          </NavLink>
          <NavLink className="navLink" to={`${url.location.pathname}/Comidas`}>
            <div className="titInicio">
              <img src={comidas} alt=""/>
              <p>COMIDAS</p>
            </div>
          </NavLink>
          <NavLink className="navLink" to={`${url.location.pathname}/Bebidas`}>
          <div className="titInicio">
            <img src={bebidas}  alt=""/>
            <p>BEBIDAS</p>
          </div>
          </NavLink>
          <NavLink to={`${url.location.pathname}/SpecialEvent`}>
          <div className="titInicio especial">
            <img src={NYEShanti} alt="" />
            <p>AÑO NUEVO</p>
          </div>
          </NavLink>
        </div>
        <NavLink to={`${url.location.pathname}/TrackClub`}>
        <div className="eventsL">
        <div className="titInicio">
            <img className="evImg" src={TrackClubIMG} alt="" />
            <p>TRACK CLUB</p>
          </div>
        </div>
        </NavLink>
      </div>
      <div className="navi2">
        <svg
          width="59"
          height="2"
          viewBox="0 0 59 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M59 0.999995L0 1" stroke="#E88A23" />
        </svg>
        <p className="naviTit2"> Seguinos en </p>
        <svg
          width="59"
          height="2"
          viewBox="0 0 59 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M59 0.999995L0 1" stroke="#E88A23" />
        </svg>
      </div>
      <VerPedido id={url.location.pathname.slice(1,3)}/>
    </div>
  );
}
