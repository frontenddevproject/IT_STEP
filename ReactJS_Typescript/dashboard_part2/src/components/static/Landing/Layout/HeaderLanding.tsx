import React from "react";

import "../header.css";
import { FlexColumn, FlexRow } from "../../../shared/flex";
import { Link } from "react-router-dom";
export const HeaderLanding = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <FlexRow className="header__top-inner" justifyContent="space-between">
            <Link to="/">
              <div className="logo">
                <span className="logo__link">
                  <svg
                    width="121"
                    height="35"
                    viewBox="0 0 121 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5625 19.6797H6.46094C6.46094 22.1797 8.6875 23.8984 12.5938 23.8984C15.5625 23.8984 17.5156 22.5703 17.5156 20.7734C17.5156 15.0703 1.53906 19.9141 1.53906 8.58594C1.53906 4.75781 5.32812 0.96875 12.3594 0.96875C20.4453 0.96875 23.1797 5.8125 23.1797 9.67969H17.2812C17.2812 7.60938 16.0312 5.65625 12.3594 5.65625C9.625 5.65625 7.47656 6.78906 7.47656 8.58594C7.47656 15.0703 23.4531 9.83594 23.4531 20.7734C23.4531 24.9922 19.8594 28.5859 12.5938 28.5859C3.80469 28.5859 0.5625 23.9375 0.5625 19.6797ZM32.3594 15.8906H40.7578C40.7188 13.7422 39.3125 11.9844 36.6172 11.9844C33.9219 11.9844 32.3984 13.7422 32.3594 15.8906ZM26.5781 18.1172C26.5781 11.7109 30.8359 7.88281 36.6172 7.88281C42.3984 7.88281 46.3047 12.1016 46.3047 17.6094V19.2109H32.3594C32.3984 21.9844 34.1562 24.0938 36.8516 24.0938C38.6875 24.0938 39.4297 23.5469 39.9375 22.8828C40.3281 22.375 40.4844 21.75 40.4844 21.5547H46.1484C46.1484 22.4922 45.7188 23.9766 44.7422 25.1875C43.2578 27.0625 40.875 28.5859 36.8516 28.5859C31.0703 28.5859 26.5781 24.5234 26.5781 18.1172ZM55.2109 15.8906H63.6094C63.5703 13.7422 62.1641 11.9844 59.4688 11.9844C56.7734 11.9844 55.25 13.7422 55.2109 15.8906ZM49.4297 18.1172C49.4297 11.7109 53.6875 7.88281 59.4688 7.88281C65.25 7.88281 69.1562 12.1016 69.1562 17.6094V19.2109H55.2109C55.25 21.9844 57.0078 24.0938 59.7031 24.0938C61.5391 24.0938 62.2812 23.5469 62.7891 22.8828C63.1797 22.375 63.3359 21.75 63.3359 21.5547H69C69 22.4922 68.5703 23.9766 67.5938 25.1875C66.1094 27.0625 63.7266 28.5859 59.7031 28.5859C53.9219 28.5859 49.4297 24.5234 49.4297 18.1172ZM73.0625 17.8438V1.55469H78.7266V17.8438C78.7266 22.7656 81.5781 23.9375 84.0781 23.9375C86.5781 23.9375 89.4297 22.7656 89.4297 17.8438V1.55469H95.0938V17.8438C95.0938 25.5781 90.0938 28.5859 84.0391 28.5859C78.0234 28.5859 73.0625 25.5781 73.0625 17.8438ZM105.641 18.1172C105.641 21.5938 107.164 24.0938 109.977 24.0938C112.867 24.0938 114.469 21.5547 114.469 18.1172C114.469 14.6016 112.867 12.375 109.977 12.375C107.242 12.375 105.719 14.9531 105.641 17.8828V18.1172ZM100.172 34.9141V8.46875H104.078L105.133 11.4766C106.383 9.36719 108.375 7.88281 111.188 7.88281C116.891 7.88281 120.172 12.1016 120.172 18.1172C120.172 24.1328 116.695 28.5859 111.188 28.5859C108.727 28.5859 106.891 27.4531 105.641 25.7344V34.9141H100.172Z"
                      fill="white"
                    />
                    <path
                      d="M0.5625 19.6797V18.6797H-0.4375V19.6797H0.5625ZM6.46094 19.6797H7.46094V18.6797H6.46094V19.6797ZM23.1797 9.67969V10.6797H24.1797V9.67969H23.1797ZM17.2812 9.67969H16.2812V10.6797H17.2812V9.67969ZM0.5625 20.6797H6.46094V18.6797H0.5625V20.6797ZM5.46094 19.6797C5.46094 21.2652 6.18403 22.6189 7.48343 23.5418C8.75066 24.4419 10.5095 24.8984 12.5938 24.8984V22.8984C10.7717 22.8984 9.46418 22.4956 8.64157 21.9113C7.85112 21.3498 7.46094 20.5942 7.46094 19.6797H5.46094ZM12.5938 24.8984C14.2139 24.8984 15.6482 24.5379 16.7116 23.8491C17.7909 23.15 18.5156 22.0813 18.5156 20.7734H16.5156C16.5156 21.2624 16.2637 21.7563 15.6243 22.1705C14.9689 22.595 13.9423 22.8984 12.5938 22.8984V24.8984ZM18.5156 20.7734C18.5156 19.7924 18.1585 18.9902 17.5351 18.3687C16.9448 17.7803 16.1589 17.3959 15.35 17.1124C14.5337 16.8263 13.6039 16.6134 12.6633 16.4186C11.6991 16.2191 10.7371 16.041 9.75133 15.8145C7.7792 15.3612 5.97749 14.7664 4.66943 13.694C3.42132 12.6707 2.53906 11.1425 2.53906 8.58594H0.539062C0.539062 11.6934 1.65388 13.8078 3.40137 15.2406C5.08892 16.6242 7.28135 17.2989 9.30335 17.7637C10.3147 17.9961 11.3497 18.1891 12.2578 18.3771C13.1894 18.57 14.0071 18.7611 14.6886 18.9999C15.3775 19.2413 15.8397 19.5027 16.1231 19.7852C16.3735 20.0347 16.5156 20.3287 16.5156 20.7734H18.5156ZM2.53906 8.58594C2.53906 5.52639 5.63585 1.96875 12.3594 1.96875V-0.03125C5.0204 -0.03125 0.539062 3.98924 0.539062 8.58594H2.53906ZM12.3594 1.96875C16.196 1.96875 18.6257 3.11223 20.0947 4.58113C21.5753 6.06175 22.1797 7.97183 22.1797 9.67969H24.1797C24.1797 7.52035 23.4169 5.07497 21.5089 3.16692C19.5891 1.24715 16.6087 -0.03125 12.3594 -0.03125V1.96875ZM23.1797 8.67969H17.2812V10.6797H23.1797V8.67969ZM18.2812 9.67969C18.2812 8.44723 17.9061 7.1543 16.8929 6.17322C15.8803 5.19266 14.3675 4.65625 12.3594 4.65625V6.65625C14.0231 6.65625 14.9713 7.09641 15.5016 7.60998C16.0314 8.12304 16.2812 8.84183 16.2812 9.67969H18.2812ZM12.3594 4.65625C10.8706 4.65625 9.46413 4.96212 8.3923 5.5814C7.30891 6.20736 6.47656 7.22393 6.47656 8.58594H8.47656C8.47656 8.15107 8.71844 7.70279 9.39286 7.31313C10.0788 6.91678 11.1137 6.65625 12.3594 6.65625V4.65625ZM6.47656 8.58594C6.47656 9.62501 6.80533 10.4903 7.41078 11.1816C7.99387 11.8474 8.7807 12.2918 9.6053 12.6177C11.2038 13.2496 13.3651 13.5763 15.2522 13.9869C17.2396 14.4194 19.0415 14.9581 20.3482 15.9603C21.5837 16.9077 22.4531 18.3299 22.4531 20.7734H24.4531C24.4531 17.7483 23.3255 15.7231 21.5653 14.3732C19.8764 13.078 17.6843 12.4693 15.6775 12.0326C13.5705 11.5741 11.7376 11.31 10.3405 10.7578C9.66729 10.4917 9.20596 10.1957 8.91533 9.86389C8.64706 9.55758 8.47656 9.16796 8.47656 8.58594H6.47656ZM22.4531 20.7734C22.4531 22.5773 21.6945 24.2409 20.1285 25.4767C18.5458 26.7258 16.0707 27.5859 12.5938 27.5859V29.5859C16.3825 29.5859 19.3371 28.6492 21.3676 27.0467C23.4149 25.431 24.4531 23.1884 24.4531 20.7734H22.4531ZM12.5938 27.5859C8.37173 27.5859 5.62462 26.4713 3.946 24.9816C2.2713 23.4953 1.5625 21.5515 1.5625 19.6797H-0.4375C-0.4375 22.0657 0.474791 24.575 2.61846 26.4774C4.75819 28.3764 8.02671 29.5859 12.5938 29.5859V27.5859ZM32.3594 15.8906L31.3595 15.8724L31.341 16.8906H32.3594V15.8906ZM40.7578 15.8906V16.8906H41.7762L41.7576 15.8724L40.7578 15.8906ZM46.3047 19.2109V20.2109H47.3047V19.2109H46.3047ZM32.3594 19.2109V18.2109H31.3452L31.3595 19.225L32.3594 19.2109ZM39.9375 22.8828L39.1449 22.2731L39.1431 22.2754L39.9375 22.8828ZM40.4844 21.5547V20.5547H39.4844V21.5547H40.4844ZM46.1484 21.5547H47.1484V20.5547H46.1484V21.5547ZM44.7422 25.1875L43.9637 24.5597L43.9581 24.5668L44.7422 25.1875ZM32.3594 16.8906H40.7578V14.8906H32.3594V16.8906ZM41.7576 15.8724C41.7343 14.5871 41.2987 13.3518 40.3981 12.4322C39.4892 11.5042 38.1919 10.9844 36.6172 10.9844V12.9844C37.7378 12.9844 38.4912 13.3435 38.9691 13.8315C39.4552 14.3279 39.7423 15.0457 39.758 15.9088L41.7576 15.8724ZM36.6172 10.9844C35.0445 10.9844 33.7266 11.5022 32.7924 12.4175C31.8625 13.3286 31.3833 14.5648 31.3595 15.8724L33.3592 15.9088C33.3745 15.068 33.6766 14.3511 34.192 13.8461C34.7031 13.3454 35.4945 12.9844 36.6172 12.9844V10.9844ZM27.5781 18.1172C27.5781 15.1431 28.5611 12.8547 30.1309 11.3106C31.7046 9.76274 33.9494 8.88281 36.6172 8.88281V6.88281C33.5038 6.88281 30.729 7.91695 28.7284 9.88473C26.724 11.8563 25.5781 14.6851 25.5781 18.1172H27.5781ZM36.6172 8.88281C41.8222 8.88281 45.3047 12.6296 45.3047 17.6094H47.3047C47.3047 11.5735 42.9746 6.88281 36.6172 6.88281V8.88281ZM45.3047 17.6094V19.2109H47.3047V17.6094H45.3047ZM46.3047 18.2109H32.3594V20.2109H46.3047V18.2109ZM31.3595 19.225C31.3819 20.816 31.899 22.2795 32.8638 23.3588C33.8385 24.4492 35.2248 25.0938 36.8516 25.0938V23.0938C35.783 23.0938 34.9428 22.6836 34.3549 22.026C33.7572 21.3572 33.3759 20.3793 33.3593 19.1969L31.3595 19.225ZM36.8516 25.0938C37.8642 25.0938 38.662 24.9436 39.3099 24.6461C39.9739 24.3412 40.4069 23.9152 40.7319 23.4903L39.1431 22.2754C38.9603 22.5145 38.7683 22.694 38.4753 22.8285C38.1662 22.9705 37.6749 23.0938 36.8516 23.0938V25.0938ZM40.7301 23.4925C41.0031 23.1376 41.1844 22.7566 41.2983 22.4403C41.4023 22.1514 41.4844 21.8204 41.4844 21.5547H39.4844C39.4844 21.4988 39.4914 21.494 39.4774 21.5576C39.4663 21.6077 39.4467 21.6789 39.4165 21.7628C39.3546 21.9348 39.2625 22.1202 39.1449 22.2731L40.7301 23.4925ZM40.4844 22.5547H46.1484V20.5547H40.4844V22.5547ZM45.1484 21.5547C45.1484 22.2566 44.8015 23.5209 43.9638 24.5597L45.5206 25.8153C46.636 24.4322 47.1484 22.7278 47.1484 21.5547H45.1484ZM43.9581 24.5668C42.6669 26.1978 40.5751 27.5859 36.8516 27.5859V29.5859C41.1749 29.5859 43.8487 27.9272 45.5262 25.8082L43.9581 24.5668ZM36.8516 27.5859C34.1982 27.5859 31.8898 26.6566 30.2483 25.0412C28.6108 23.4296 27.5781 21.0774 27.5781 18.1172H25.5781C25.5781 21.5632 26.7916 24.4454 28.8454 26.4666C30.8954 28.4841 33.7236 29.5859 36.8516 29.5859V27.5859ZM55.2109 15.8906L54.2111 15.8724L54.1926 16.8906H55.2109V15.8906ZM63.6094 15.8906V16.8906H64.6277L64.6092 15.8724L63.6094 15.8906ZM69.1562 19.2109V20.2109H70.1562V19.2109H69.1562ZM55.2109 19.2109V18.2109H54.1968L54.211 19.225L55.2109 19.2109ZM62.7891 22.8828L61.9964 22.2731L61.9947 22.2754L62.7891 22.8828ZM63.3359 21.5547V20.5547H62.3359V21.5547H63.3359ZM69 21.5547H70V20.5547H69V21.5547ZM67.5938 25.1875L66.8153 24.5597L66.8097 24.5668L67.5938 25.1875ZM55.2109 16.8906H63.6094V14.8906H55.2109V16.8906ZM64.6092 15.8724C64.5858 14.5871 64.1503 13.3518 63.2496 12.4322C62.3408 11.5042 61.0435 10.9844 59.4688 10.9844V12.9844C60.5893 12.9844 61.3428 13.3435 61.8207 13.8315C62.3068 14.3279 62.5938 15.0457 62.6095 15.9088L64.6092 15.8724ZM59.4688 10.9844C57.8961 10.9844 56.5781 11.5022 55.6439 12.4175C54.714 13.3286 54.2349 14.5648 54.2111 15.8724L56.2108 15.9088C56.2261 15.068 56.5282 14.3511 57.0436 13.8461C57.5547 13.3454 58.3461 12.9844 59.4688 12.9844V10.9844ZM50.4297 18.1172C50.4297 15.1431 51.4127 12.8547 52.9825 11.3106C54.5561 9.76274 56.8009 8.88281 59.4688 8.88281V6.88281C56.3553 6.88281 53.5806 7.91695 51.58 9.88473C49.5756 11.8563 48.4297 14.6851 48.4297 18.1172H50.4297ZM59.4688 8.88281C64.6738 8.88281 68.1562 12.6296 68.1562 17.6094H70.1562C70.1562 11.5735 65.8262 6.88281 59.4688 6.88281V8.88281ZM68.1562 17.6094V19.2109H70.1562V17.6094H68.1562ZM69.1562 18.2109H55.2109V20.2109H69.1562V18.2109ZM54.211 19.225C54.2334 20.816 54.7506 22.2795 55.7154 23.3588C56.69 24.4492 58.0764 25.0938 59.7031 25.0938V23.0938C58.6345 23.0938 57.7943 22.6836 57.2065 22.026C56.6088 21.3572 56.2275 20.3793 56.2108 19.1969L54.211 19.225ZM59.7031 25.0938C60.7157 25.0938 61.5135 24.9436 62.1614 24.6461C62.8255 24.3412 63.2585 23.9152 63.5834 23.4903L61.9947 22.2754C61.8118 22.5145 61.6199 22.694 61.3268 22.8285C61.0177 22.9705 60.5265 23.0938 59.7031 23.0938V25.0938ZM63.5817 23.4925C63.8547 23.1376 64.036 22.7566 64.1499 22.4403C64.2539 22.1514 64.3359 21.8204 64.3359 21.5547H62.3359C62.3359 21.4988 62.343 21.494 62.3289 21.5576C62.3179 21.6077 62.2983 21.6789 62.2681 21.7628C62.2062 21.9348 62.1141 22.1202 61.9964 22.2731L63.5817 23.4925ZM63.3359 22.5547H69V20.5547H63.3359V22.5547ZM68 21.5547C68 22.2566 67.6531 23.5209 66.8153 24.5597L68.3722 25.8153C69.4875 24.4322 70 22.7278 70 21.5547H68ZM66.8097 24.5668C65.5185 26.1978 63.4266 27.5859 59.7031 27.5859V29.5859C64.0265 29.5859 66.7003 27.9272 68.3778 25.8082L66.8097 24.5668ZM59.7031 27.5859C57.0498 27.5859 54.7413 26.6566 53.0999 25.0412C51.4623 23.4296 50.4297 21.0774 50.4297 18.1172H48.4297C48.4297 21.5632 49.6431 24.4454 51.697 26.4666C53.747 28.4841 56.5752 29.5859 59.7031 29.5859V27.5859ZM73.0625 1.55469V0.554688H72.0625V1.55469H73.0625ZM78.7266 1.55469H79.7266V0.554688H78.7266V1.55469ZM89.4297 1.55469V0.554688H88.4297V1.55469H89.4297ZM95.0938 1.55469H96.0938V0.554688H95.0938V1.55469ZM74.0625 17.8438V1.55469H72.0625V17.8438H74.0625ZM73.0625 2.55469H78.7266V0.554688H73.0625V2.55469ZM77.7266 1.55469V17.8438H79.7266V1.55469H77.7266ZM77.7266 17.8438C77.7266 20.5007 78.5027 22.3343 79.8018 23.4849C81.0773 24.6146 82.6917 24.9375 84.0781 24.9375V22.9375C82.9646 22.9375 81.9032 22.6744 81.1279 21.9877C80.3762 21.3219 79.7266 20.1087 79.7266 17.8438H77.7266ZM84.0781 24.9375C85.4646 24.9375 87.079 24.6146 88.3544 23.4849C89.6535 22.3343 90.4297 20.5007 90.4297 17.8438H88.4297C88.4297 20.1087 87.7801 21.3219 87.0284 21.9877C86.2531 22.6744 85.1917 22.9375 84.0781 22.9375V24.9375ZM90.4297 17.8438V1.55469H88.4297V17.8438H90.4297ZM89.4297 2.55469H95.0938V0.554688H89.4297V2.55469ZM94.0938 1.55469V17.8438H96.0938V1.55469H94.0938ZM94.0938 17.8438C94.0938 21.4818 92.9277 23.8644 91.1864 25.3557C89.4184 26.8699 86.9166 27.5859 84.0391 27.5859V29.5859C87.2162 29.5859 90.2417 28.7981 92.4874 26.8748C94.7598 24.9286 96.0938 21.9401 96.0938 17.8438H94.0938ZM84.0391 27.5859C81.1825 27.5859 78.7014 26.8707 76.9482 25.3581C75.2206 23.8676 74.0625 21.4844 74.0625 17.8438H72.0625C72.0625 21.9375 73.3849 24.9254 75.6417 26.8724C77.8729 28.7973 80.88 29.5859 84.0391 29.5859V27.5859ZM105.641 17.8828L104.641 17.8562L104.641 17.8695V17.8828H105.641ZM100.172 34.9141H99.1719V35.9141H100.172V34.9141ZM100.172 8.46875V7.46875H99.1719V8.46875H100.172ZM104.078 8.46875L105.022 8.13785L104.787 7.46875H104.078V8.46875ZM105.133 11.4766L104.189 11.8075L104.899 13.8324L105.993 11.9864L105.133 11.4766ZM105.641 25.7344L106.449 25.1462L104.641 22.6592V25.7344H105.641ZM105.641 34.9141V35.9141H106.641V34.9141H105.641ZM104.641 18.1172C104.641 19.9837 105.047 21.6986 105.931 22.9778C106.842 24.2959 108.228 25.0938 109.977 25.0938V23.0938C108.913 23.0938 108.13 22.6416 107.577 21.8406C106.996 21.0006 106.641 19.7272 106.641 18.1172H104.641ZM109.977 25.0938C111.756 25.0938 113.177 24.2936 114.12 22.9765C115.038 21.6935 115.469 19.9754 115.469 18.1172H113.469C113.469 19.6965 113.099 20.9666 112.493 21.8126C111.912 22.6244 111.087 23.0938 109.977 23.0938V25.0938ZM115.469 18.1172C115.469 16.2243 115.04 14.5477 114.101 13.3203C113.135 12.0575 111.708 11.375 109.977 11.375V13.375C111.136 13.375 111.955 13.8058 112.512 14.5352C113.097 15.2999 113.469 16.4945 113.469 18.1172H115.469ZM109.977 11.375C108.251 11.375 106.9 12.2059 106.003 13.4435C105.125 14.6547 104.684 16.241 104.641 17.8562L106.64 17.9095C106.675 16.5949 107.035 15.4274 107.622 14.617C108.19 13.8332 108.968 13.375 109.977 13.375V11.375ZM104.641 17.8828V18.1172H106.641V17.8828H104.641ZM101.172 34.9141V8.46875H99.1719V34.9141H101.172ZM100.172 9.46875H104.078V7.46875H100.172V9.46875ZM103.134 8.79965L104.189 11.8075L106.076 11.1457L105.022 8.13785L103.134 8.79965ZM105.993 11.9864C107.1 10.1191 108.795 8.88281 111.188 8.88281V6.88281C107.955 6.88281 105.666 8.6153 104.273 10.9668L105.993 11.9864ZM111.188 8.88281C113.772 8.88281 115.73 9.82829 117.056 11.3912C118.399 12.9737 119.172 15.2825 119.172 18.1172H121.172C121.172 14.9363 120.304 12.1278 118.581 10.0971C116.841 8.04671 114.306 6.88281 111.188 6.88281V8.88281ZM119.172 18.1172C119.172 20.9391 118.357 23.315 116.978 24.9664C115.612 26.6014 113.649 27.5859 111.188 27.5859V29.5859C114.234 29.5859 116.763 28.3439 118.513 26.2484C120.249 24.1694 121.172 21.3109 121.172 18.1172H119.172ZM111.188 27.5859C109.081 27.5859 107.533 26.6358 106.449 25.1462L104.832 26.3225C106.249 28.2705 108.372 29.5859 111.188 29.5859V27.5859ZM104.641 25.7344V34.9141H106.641V25.7344H104.641ZM105.641 33.9141H100.172V35.9141H105.641V33.9141Z"
                      fill="black"
                    />
                    <line
                      x1="0.991597"
                      y1="35"
                      x2="120.987"
                      y2="35"
                      stroke="white"
                      stroke-width="2"
                    />
                  </svg>
                </span>
              </div>
            </Link>
            <nav className="menu">
              <ul className="menu__list">
                <FlexRow gap="100px">
                  <Link to="/">
                    <li className="menu__list-item">About Us</li>
                  </Link>
                  <Link to="/">
                    <li className="menu__list-item">Tours</li>
                  </Link>
                  <Link to="/">
                    <li className="menu__list-item">Contacts</li>
                  </Link>
                  <Link to="/login">
                    <li className="menu__list-item">Login</li>
                  </Link>
                  <li className="menu__list-item--burger">
                    <div className="burger-icon"></div>
                  </li>
                </FlexRow>
              </ul>
            </nav>
          </FlexRow>
        </div>
        <FlexRow
          className="header__content"
          justifyContent="center"
          padding="133px 0 0 0"
        >
          <FlexColumn
            className="header__content-box"
            alignItems="center"
            justifyContent="center"
            width="910px"
            padding="0 40px"
            gap="30px"
          >
            <h1 className="header__title">Montenegro</h1>
            <p className="header__text">
              Welcome to magical Montenegro: where the blue Adriatic waves lap
              the mountain peaks and cultural treasures have long beckoned
              travelers. Go on an unforgettable journey with us!
            </p>
            <button className="header__button">Letʼs go!</button>
          </FlexColumn>
        </FlexRow>
      </div>
    </header>
  );
};
