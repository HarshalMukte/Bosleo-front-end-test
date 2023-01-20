import React, { useEffect, useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    //for to stop the scrolling in menu active
    if (menu) {
      document.body.style.height = "100vh"
      document.body.style.overflow = "hidden"
    }else{
      document.body.style.height = "auto"
      document.body.style.overflow = "auto"
    }
  }, [menu])
  
  

  return (
    <nav>
      <div className="logo_links">
        <a className="logo">moviebox</a>
        <div className={`nav_links ${menu && "active"}`}>
          <a href="#">Overview</a>
          <a className="active" href="#">
            Movies
          </a>
          <a href="#">Reporting</a>
          <a href="#">Users</a>
        </div>
      </div>
      <div className="icons_avatar">
        <div className="menuLogo" >
          <div className={`menuIcon ${!menu && "active"}`} onClick={() => setMenu("true")}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 4 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.96875 8.5C3.96875 8.88938 3.85328 9.27002 3.63695 9.59378C3.42062 9.91754 3.11315 10.1699 2.75341 10.3189C2.39366 10.4679 1.99782 10.5069 1.61592 10.4309C1.23402 10.355 0.883219 10.1675 0.607884 9.89212C0.33255 9.61679 0.145044 9.26599 0.0690798 8.88409C-0.00688475 8.50219 0.032103 8.10634 0.181113 7.74659C0.330123 7.38685 0.582462 7.07938 0.906221 6.86305C1.22998 6.64672 1.61062 6.53125 2 6.53125C2.52157 6.5331 3.02126 6.74112 3.39007 7.10993C3.75888 7.47874 3.96689 7.97843 3.96875 8.5ZM2 4.84375C2.38938 4.84375 2.77002 4.72829 3.09378 4.51196C3.41754 4.29563 3.66988 3.98815 3.81888 3.62841C3.96789 3.26867 4.00688 2.87282 3.93092 2.49092C3.85495 2.10902 3.66745 1.75822 3.39211 1.48288C3.11678 1.20755 2.76598 1.02004 2.38408 0.94408C2.00218 0.868115 1.60633 0.907103 1.24659 1.05611C0.88685 1.20512 0.579374 1.45746 0.363045 1.78122C0.146716 2.10498 0.0312511 2.48562 0.0312511 2.875C0.0331039 3.39658 0.24112 3.89626 0.609931 4.26507C0.978742 4.63388 1.47843 4.8419 2 4.84375ZM2 12.1563C1.61062 12.1563 1.22998 12.2717 0.906221 12.488C0.582462 12.7044 0.330123 13.0119 0.181113 13.3716C0.032103 13.7313 -0.00688475 14.1272 0.0690798 14.5091C0.145044 14.891 0.33255 15.2418 0.607884 15.5171C0.883219 15.7925 1.23402 15.98 1.61592 16.0559C1.99782 16.1319 2.39366 16.0929 2.75341 15.9439C3.11315 15.7949 3.42062 15.5425 3.63695 15.2188C3.85328 14.895 3.96875 14.5144 3.96875 14.125C3.96689 13.6034 3.75888 13.1037 3.39007 12.7349C3.02126 12.3661 2.52157 12.1581 2 12.1563Z"
                fill="#fff"
              />
            </svg>
          </div>
          <div
            className={`menuCross ${menu && "active"}`}
            onClick={() => setMenu(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="20"
              height="20">
              <path
                d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
                fill="#fff"
              />
            </svg>
          </div>
        </div>
        <div className="setting_icon">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.0001 4.06248C7.22134 4.06248 6.46006 4.29341 5.81254 4.72607C5.16502 5.15873 4.66035 5.77368 4.36233 6.49317C4.06431 7.21265 3.98633 8.00435 4.13826 8.76815C4.29019 9.53195 4.6652 10.2335 5.21587 10.7842C5.76654 11.3349 6.46813 11.7099 7.23193 11.8618C7.99573 12.0138 8.78743 11.9358 9.50691 11.6378C10.2264 11.3397 10.8414 10.8351 11.274 10.1875C11.7067 9.54002 11.9376 8.77875 11.9376 7.99998C11.9376 6.95569 11.5228 5.95418 10.7843 5.21575C10.0459 4.47733 9.04439 4.06248 8.0001 4.06248ZM8.0001 10.25C7.55509 10.25 7.12008 10.118 6.75007 9.87079C6.38006 9.62356 6.09167 9.27216 5.92137 8.86102C5.75107 8.44989 5.70652 7.99749 5.79333 7.56103C5.88015 7.12457 6.09444 6.72366 6.40911 6.40899C6.72378 6.09433 7.12469 5.88003 7.56115 5.79322C7.9976 5.7064 8.45 5.75096 8.86114 5.92125C9.27227 6.09155 9.62367 6.37994 9.8709 6.74995C10.1181 7.11996 10.2501 7.55498 10.2501 7.99998C10.2482 8.59615 10.0106 9.16737 9.58904 9.58893C9.16748 10.0105 8.59627 10.2481 8.0001 10.25ZM15.7345 9.40623L14.7431 8.08436V7.91561L15.7345 6.59373C15.8099 6.49086 15.8616 6.37258 15.8859 6.24737C15.9102 6.12217 15.9065 5.99313 15.8751 5.86951C15.6935 5.19499 15.424 4.54725 15.0735 3.94295C15.0106 3.83123 14.9226 3.73563 14.8164 3.66365C14.7103 3.59167 14.5889 3.54528 14.4618 3.52811L12.8376 3.29608L12.704 3.16248L12.472 1.53826C12.4548 1.41117 12.4084 1.2898 12.3364 1.18366C12.2645 1.07752 12.1688 0.989511 12.0571 0.926544C11.4528 0.576117 10.8051 0.306622 10.1306 0.124981C10.0071 0.0915146 9.87767 0.0867886 9.75212 0.111166C9.62658 0.135544 9.50829 0.188377 9.40635 0.265606L8.09151 1.24998H7.90869L6.59385 0.265606C6.49097 0.190214 6.37269 0.138509 6.24749 0.114197C6.12228 0.0898853 5.99325 0.093568 5.86963 0.124981C5.1951 0.306622 4.54737 0.576117 3.94307 0.926544C3.83135 0.989511 3.73575 1.07752 3.66377 1.18366C3.59179 1.2898 3.54539 1.41117 3.52823 1.53826L3.2962 3.16248C3.24821 3.20342 3.20354 3.24809 3.1626 3.29608L1.53838 3.52811C1.4113 3.54528 1.28992 3.59167 1.18378 3.66365C1.07764 3.73563 0.989632 3.83123 0.926665 3.94295C0.576238 4.54725 0.306744 5.19499 0.125103 5.86951C0.0916366 5.99295 0.0869106 6.12241 0.111289 6.24796C0.135666 6.37351 0.188499 6.49179 0.265728 6.59373L1.25713 7.91561V8.08436L0.265728 9.40623C0.190336 9.50911 0.138631 9.62739 0.114319 9.7526C0.0900074 9.8778 0.0936901 10.0068 0.125103 10.1305C0.306744 10.805 0.576238 11.4527 0.926665 12.057C0.989632 12.1687 1.07764 12.2643 1.18378 12.3363C1.28992 12.4083 1.4113 12.4547 1.53838 12.4719L3.1626 12.7039L3.2962 12.8375L3.52823 14.4617C3.54539 14.5888 3.59179 14.7102 3.66377 14.8163C3.73575 14.9225 3.83135 15.0105 3.94307 15.0734C4.54737 15.4239 5.1951 15.6933 5.86963 15.875C5.9405 15.8951 6.01395 15.9046 6.0876 15.9031C6.27033 15.9041 6.44829 15.8448 6.59385 15.7344L7.90869 14.75H8.09151L9.40635 15.7344C9.50922 15.8098 9.6275 15.8615 9.75271 15.8858C9.87792 15.9101 10.007 15.9064 10.1306 15.875C10.8051 15.6933 11.4528 15.4239 12.0571 15.0734C12.1688 15.0105 12.2645 14.9225 12.3364 14.8163C12.4084 14.7102 12.4548 14.5888 12.472 14.4617L12.711 12.8305L12.8306 12.7109L14.4618 12.4719C14.5889 12.4547 14.7103 12.4083 14.8164 12.3363C14.9226 12.2643 15.0106 12.1687 15.0735 12.057C15.424 11.4527 15.6935 10.805 15.8751 10.1305C15.9086 10.007 15.9133 9.87756 15.8889 9.75201C15.8645 9.62646 15.8117 9.50817 15.7345 9.40623ZM13.8009 10.8617L12.3032 11.0797C12.1157 11.1074 11.9426 11.1964 11.811 11.3328C11.6915 11.4594 11.4665 11.6914 11.354 11.7898C11.2056 11.9237 11.1086 12.1053 11.0798 12.3031L10.8618 13.8008C10.6075 13.9295 10.3443 14.0399 10.0743 14.1312L8.86494 13.2172C8.70547 13.0978 8.5081 13.0403 8.30947 13.0555H7.69072C7.49223 13.0416 7.29529 13.0989 7.13526 13.2172L5.92588 14.1312C5.65586 14.0399 5.3927 13.9295 5.13838 13.8008L4.92041 12.3031C4.89161 12.1053 4.79462 11.9237 4.64619 11.7898C4.49053 11.6553 4.34483 11.5096 4.21026 11.3539C4.07634 11.2055 3.8948 11.1085 3.69698 11.0797L2.19932 10.8617C2.07059 10.6074 1.96016 10.3442 1.86885 10.0742L2.78291 8.86483C2.89497 8.71205 2.95421 8.52693 2.95166 8.33749C2.94463 8.1617 2.9376 7.83827 2.94463 7.69061C2.95849 7.49211 2.90115 7.29518 2.78291 7.13514L1.86885 5.92577C1.96016 5.65575 2.07059 5.39258 2.19932 5.13827L3.69698 4.9203C3.8948 4.89149 4.07634 4.7945 4.21026 4.64608C4.34483 4.49041 4.49053 4.34472 4.64619 4.21014C4.79462 4.07622 4.89161 3.89468 4.92041 3.69686L5.13838 2.1992C5.3927 2.07047 5.65586 1.96004 5.92588 1.86873L7.13526 2.78279C7.29472 2.90218 7.49209 2.95964 7.69072 2.94451C7.89463 2.93748 8.10557 2.93748 8.30947 2.94451C8.5081 2.95964 8.70547 2.90218 8.86494 2.78279L10.0743 1.86873C10.3443 1.96004 10.6075 2.07047 10.8618 2.1992L11.0798 3.69686C11.1086 3.89468 11.2056 4.07622 11.354 4.21014C11.5097 4.34472 11.6554 4.49041 11.7899 4.64608C11.9239 4.7945 12.1054 4.89149 12.3032 4.9203L13.8009 5.13827C13.9296 5.39258 14.04 5.65575 14.1313 5.92577L13.2173 7.13514C13.1043 7.28707 13.0472 7.47333 13.0556 7.66248C13.0556 7.83827 13.0626 8.1617 13.0556 8.30936C13.0404 8.50799 13.0979 8.70536 13.2173 8.86483L14.1313 10.0742C14.04 10.3442 13.9296 10.6074 13.8009 10.8617Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="bell_icon">
          <svg
            width="14"
            height="17"
            viewBox="0 0 14 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.771 11.2273C13.3703 10.5383 12.8921 9.22344 12.8921 6.875V6.37578C12.8921 3.10625 10.2695 0.427344 7.04213 0.40625H6.99994C6.22498 0.406248 5.45763 0.559118 4.74184 0.856108C4.02605 1.1531 3.37588 1.58837 2.82855 2.137C2.28123 2.68563 1.84751 3.33684 1.55222 4.05334C1.25694 4.76984 1.1059 5.53754 1.10775 6.3125V6.875C1.10775 9.22344 0.629625 10.5383 0.228843 11.2273C0.105985 11.4415 0.0413939 11.6842 0.041504 11.9311C0.0416142 12.1781 0.106422 12.4207 0.229471 12.6348C0.35252 12.8488 0.529516 13.027 0.742828 13.1514C0.95614 13.2757 1.19832 13.3421 1.44525 13.3438H3.92025C3.99354 14.1098 4.34966 14.821 4.9191 15.3385C5.48855 15.8561 6.23043 16.1429 6.99994 16.1429C7.76944 16.1429 8.51133 15.8561 9.08078 15.3385C9.65022 14.821 10.0063 14.1098 10.0796 13.3438H12.5546C12.8016 13.3421 13.0437 13.2757 13.2571 13.1514C13.4704 13.027 13.6474 12.8488 13.7704 12.6348C13.8935 12.4207 13.9583 12.1781 13.9584 11.9311C13.9585 11.6842 13.8939 11.4415 13.771 11.2273ZM6.99994 14.4688C6.67611 14.4675 6.36252 14.3551 6.11166 14.1503C5.86079 13.9455 5.68787 13.6608 5.62181 13.3438H8.37807C8.31201 13.6608 8.13908 13.9455 7.88822 14.1503C7.63736 14.3551 7.32377 14.4675 6.99994 14.4688ZM1.90931 11.6562C2.63353 10.1375 2.79525 8.24609 2.79525 6.875V6.3125C2.79247 5.75889 2.89922 5.2102 3.10937 4.69802C3.31951 4.18584 3.6289 3.72029 4.01971 3.32817C4.41052 2.93605 4.87504 2.62511 5.38652 2.41326C5.89799 2.2014 6.44632 2.09282 6.99994 2.09375H7.0351C9.33432 2.10781 11.2046 4.02734 11.2046 6.37578V6.875C11.2046 8.24609 11.3663 10.1375 12.0906 11.6562H1.90931Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="avatar">
          <img src="./images/avatar.png" alt="img" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;