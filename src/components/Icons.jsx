import s from "../styles/Sidebar.module.css";

export const LogoIcon = () => {
  return <div className={`${s.icon}`}>
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect opacity="0.26" width="56" height="56" rx="12" fill="#EB966A" />
      <path d="M39.6667 11.3334H16.3334C13.5767 11.3334 11.3334 13.5767 11.3334 16.3334V21.0517C11.3334 22.8067 11.97 24.4017 13 25.6284V41.3334C13 41.7754 13.1756 42.1993 13.4882 42.5119C13.8008 42.8244 14.2247 43 14.6667 43H28C28.4421 43 28.866 42.8244 29.1786 42.5119C29.4911 42.1993 29.6667 41.7754 29.6667 41.3334V33H36.3334V41.3334C36.3334 41.7754 36.509 42.1993 36.8215 42.5119C37.1341 42.8244 37.558 43 38 43H41.3334C41.7754 43 42.1993 42.8244 42.5119 42.5119C42.8244 42.1993 43 41.7754 43 41.3334V25.6267C44.03 24.4017 44.6667 22.8067 44.6667 21.05V16.3334C44.6667 13.5767 42.4234 11.3334 39.6667 11.3334ZM41.3334 16.3334V21.0517C41.3334 22.9517 39.9184 24.5717 38.1817 24.6634L38 24.6667C36.1617 24.6667 34.6667 23.1717 34.6667 21.3334V14.6667H39.6667C40.5867 14.6667 41.3334 15.415 41.3334 16.3334ZM24.6667 21.3334V14.6667H31.3334V21.3334C31.3334 23.1717 29.8384 24.6667 28 24.6667C26.1617 24.6667 24.6667 23.1717 24.6667 21.3334ZM14.6667 16.3334C14.6667 15.415 15.4134 14.6667 16.3334 14.6667H21.3334V21.3334C21.3334 23.1717 19.8384 24.6667 18 24.6667L17.8184 24.6617C16.0817 24.5717 14.6667 22.9517 14.6667 21.0517V16.3334ZM24.6667 34.6667H18V29.6667H24.6667V34.6667Z" fill="url(#paint0_linear)" />
      <defs>
        <linearGradient id="paint0_linear" x1="28" y1="11.3334" x2="28" y2="43" gradientUnits="userSpaceOnUse">
          <stop stop-color="#EA9769" />
          <stop offset="1" stop-color="#EA6969" />
        </linearGradient>
      </defs>
    </svg>
  </div>
}

export const HomeIcon = ({ selected }) => {
  return <div className={`${s.icon} ${selected ? s.selected : ""}`}>
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="56" height="56" rx="8" fill={selected ? "#EA7C69" : "#1F1D2B"} />
      <path d="M25.7302 18.7884C27.0002 17.7794 28.7802 17.7394 30.0892 18.6684L30.2502 18.7884L36.3392 23.6594C37.0092 24.1784 37.4202 24.9494 37.4902 25.7884L37.5002 25.9894V34.0984C37.5002 36.1884 35.8492 37.8884 33.7802 37.9984H31.7902C30.8392 37.9794 30.0702 37.2394 30.0002 36.3094L29.9902 36.1684V33.3094C29.9902 32.9984 29.7592 32.7394 29.4502 32.6884L29.3602 32.6784H26.6892C26.3702 32.6884 26.1102 32.9184 26.0702 33.2184L26.0602 33.3094V36.1594C26.0602 36.2184 26.0492 36.2884 26.0402 36.3384L26.0302 36.3594L26.0192 36.4284C25.9002 37.2794 25.2002 37.9284 24.3302 37.9894L24.2002 37.9984H22.4102C20.3202 37.9984 18.6102 36.3594 18.5002 34.2984V25.9894C18.5092 25.1384 18.8802 24.3484 19.5002 23.7984L25.7302 18.7884ZM29.3802 19.8784C28.6202 19.2684 27.5402 19.2394 26.7402 19.7684L26.5892 19.8784L20.5092 24.7794C20.1602 25.0384 19.9502 25.4284 19.9002 25.8384L19.8892 25.9984V34.0984C19.8892 35.4284 20.9292 36.5184 22.2502 36.5984H24.2002C24.4202 36.5984 24.6102 36.4494 24.6392 36.2394L24.6602 36.0594L24.6702 36.0084V33.3094C24.6702 32.2394 25.4902 31.3694 26.5402 31.2884H29.3602C30.4292 31.2884 31.2992 32.1094 31.3802 33.1594V36.1684C31.3802 36.3784 31.5302 36.5594 31.7302 36.5984H33.5892C34.9292 36.5984 36.0192 35.5694 36.0992 34.2584L36.1102 34.0984V25.9984C36.0992 25.5694 35.9202 25.1684 35.6102 24.8694L35.4802 24.7584L29.3802 19.8784Z" fill={selected ? "#fff" : "#EA7C69"} />
    </svg>
  </div>
}

export const DiscountIcon = ({ selected }) => {
  return <div className={`${s.icon} ${selected ? s.selected : ""}`}>
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="56" height="56" rx="8" fill={selected ? "#EA7C69" : "#1F1D2B"} />
      <path d="M29.9511 18.7164L30.1334 18.8865L30.8522 19.6052C31.0991 19.8509 31.4229 20.0024 31.7674 20.0365L31.9161 20.0438H32.9441C34.5479 20.0438 35.8594 21.2979 35.951 22.8788L35.9561 23.0558V24.0828C35.9561 24.4326 36.0767 24.7689 36.2943 25.0362L36.3934 25.1465L37.1122 25.8653C38.2437 26.9917 38.2943 28.7929 37.2577 29.98L37.1224 30.1251L36.3941 30.8535C36.1491 31.099 35.9975 31.4231 35.9634 31.7672L35.9561 31.9158V32.9448C35.9561 34.5485 34.702 35.8591 33.1211 35.9507L32.9441 35.9558H31.9161C31.5676 35.9558 31.2309 36.0769 30.9633 36.2951L30.8531 36.3945L30.1352 37.1113C29.01 38.2442 27.2074 38.2944 26.0199 37.2574L25.8658 37.1131L25.1487 36.396C24.9003 36.1494 24.5758 35.9973 24.2323 35.9631L24.0841 35.9558H23.0551C21.452 35.9558 20.1408 34.7023 20.0492 33.1217L20.0441 32.9448V31.9158C20.0441 31.5678 19.9228 31.2308 19.7047 30.9637L19.6054 30.8537L18.8883 30.1356C17.7557 29.0094 17.7055 27.2068 18.7425 26.0204L18.8778 25.8755L19.6039 25.1483C19.8508 24.8996 20.0027 24.5758 20.0368 24.2315L20.0441 24.0828V23.0558L20.0492 22.8789C20.1374 21.3567 21.3566 20.1371 22.8782 20.0489L23.0551 20.0438H24.0841C24.4326 20.0438 24.7694 19.9229 25.0364 19.7057L25.1464 19.6068L25.8646 18.8877C26.9909 17.7562 28.7934 17.7064 29.9511 18.7164ZM27.0415 19.8426L26.9268 19.9467L26.2055 20.669C25.6883 21.1826 25.0042 21.4897 24.2819 21.5373L24.0841 21.5438H23.0551C22.2675 21.5438 21.6198 22.1479 21.5503 22.9182L21.5441 23.0558V24.0828C21.5441 24.8119 21.2795 25.5131 20.8022 26.0612L20.6668 26.2067L19.9396 26.9349C19.3878 27.4892 19.3557 28.3649 19.8433 28.9589L19.9478 29.0738L20.6671 29.7941C21.1815 30.3097 21.4898 30.995 21.5376 31.7178L21.5441 31.9158V32.9448C21.5441 33.7328 22.1478 34.3801 22.9176 34.4496L23.0551 34.4558H24.0841C24.8119 34.4558 25.5136 34.7207 26.0618 35.198L26.2074 35.3335L26.9307 36.0568C27.489 36.6119 28.3649 36.6442 28.9584 36.1565L29.0731 36.0521L29.794 35.3322C30.3107 34.8179 30.9952 34.5101 31.7181 34.4623L31.9161 34.4558H32.9441C33.7328 34.4558 34.3804 33.8524 34.4499 33.0823L34.4561 32.9448V31.9158C34.4561 31.1869 34.7209 30.4839 35.1976 29.9383L35.3328 29.7935L36.0603 29.066C36.6121 28.511 36.644 27.6358 36.1571 27.0419L36.0528 26.9271L35.3309 26.2052C34.817 25.6877 34.5102 25.0042 34.4626 24.2809L34.4561 24.0828V23.0558C34.4561 22.2674 33.852 21.6195 33.0817 21.55L32.9441 21.5438H31.9161C31.1869 21.5438 30.4849 21.2794 29.938 20.8024L29.7928 20.6671L29.1048 19.9773L29.065 19.9403C28.5107 19.3885 27.6348 19.3562 27.0415 19.8426ZM31.0965 30.0424C31.1665 30.1124 31.2265 30.1924 31.2665 30.2824C31.2965 30.3724 31.3165 30.4724 31.3165 30.5724C31.3165 30.6734 31.2965 30.7624 31.2665 30.8524C31.2265 30.9424 31.1665 31.0324 31.0965 31.1024C30.9565 31.2424 30.7665 31.3224 30.5665 31.3224C30.3665 31.3224 30.1765 31.2424 30.0365 31.1024C29.9665 31.0324 29.9165 30.9424 29.8765 30.8524C29.8365 30.7624 29.8165 30.6734 29.8165 30.5724C29.8165 30.4724 29.8365 30.3724 29.8765 30.2824C29.9165 30.1924 29.9665 30.1124 30.0365 30.0424C30.3165 29.7624 30.8165 29.7624 31.0965 30.0424ZM31.1001 24.8992C31.3664 25.1654 31.3906 25.5821 31.1728 25.8757L31.1001 25.9598L25.9601 31.0998C25.6672 31.3927 25.1924 31.3927 24.8995 31.0998C24.6332 30.8335 24.609 30.4169 24.8269 30.1233L24.8995 30.0392L30.0395 24.8992C30.3324 24.6063 30.8072 24.6063 31.1001 24.8992ZM25.9564 24.9028C26.0964 25.0418 26.1764 25.2328 26.1764 25.4328C26.1764 25.5328 26.1664 25.6218 26.1264 25.7128C26.0864 25.8028 26.0264 25.8828 25.9564 25.9628C25.8864 26.0328 25.8064 26.0818 25.7164 26.1218C25.6264 26.1618 25.5264 26.1828 25.4264 26.1828C25.3264 26.1828 25.2364 26.1618 25.1464 26.1218C25.0564 26.0818 24.9664 26.0328 24.8964 25.9628C24.8264 25.8828 24.7764 25.8028 24.7364 25.7128C24.6964 25.6218 24.6764 25.5328 24.6764 25.4328C24.6764 25.3318 24.6964 25.2328 24.7364 25.1428C24.7764 25.0528 24.8264 24.9628 24.8964 24.9028C25.1864 24.6218 25.6764 24.6218 25.9564 24.9028Z" fill={selected ? "#fff" : "#EA7C69"} />
    </svg>
  </div>
}

export const DashboardIcon = ({ selected }) => {
  return <div className={`${s.icon} ${selected ? s.selected : ""}`}>
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="56" height="56" rx="8" fill={selected ? "#EA7C69" : "#1F1D2B"} />
      <path d="M26.4978 22.7606C26.5855 22.9348 26.6382 23.1239 26.6533 23.321L27.0419 28.8095C27.0471 28.8847 27.0827 28.9548 27.1409 29.0042C27.1845 29.0413 27.2381 29.0645 27.298 29.0712L27.3599 29.0724L32.9341 28.7366C33.3867 28.71 33.8305 28.8675 34.1604 29.1719C34.4902 29.4763 34.6768 29.9004 34.6744 30.3912C34.4265 34.0037 31.773 37.0237 28.159 37.8065C24.545 38.5893 20.8361 36.9474 19.0578 33.7848C18.5823 32.9695 18.2618 32.0778 18.1138 31.1749L18.0664 30.8359C18.0253 30.5821 18.0032 30.3257 18 30.0795L18.0031 29.8372C18.0134 26.0655 20.6616 22.804 24.3881 21.9243L24.6438 21.8681L24.7814 21.8453C25.502 21.7468 26.211 22.1245 26.4978 22.7606ZM25.0164 23.2781L24.9322 23.2877L24.7037 23.3393C21.7353 24.0548 19.6062 26.6103 19.488 29.621L19.4828 29.8661C19.4757 30.0525 19.4825 30.2392 19.505 30.4378L19.5328 30.6408C19.6321 31.495 19.9079 32.3206 20.3491 33.0772C21.8163 35.6863 24.8667 37.0367 27.839 36.3929C30.8113 35.7491 32.9936 33.2653 33.1958 30.3414C33.1958 30.2974 33.1774 30.2552 33.1446 30.225C33.1228 30.2049 33.0959 30.1912 33.0675 30.1851L33.024 30.1817L27.459 30.5169C26.9894 30.5503 26.5255 30.3992 26.17 30.0971C25.8146 29.7951 25.5968 29.3669 25.5652 28.91L25.177 23.4262C25.1763 23.4171 25.1739 23.4082 25.1568 23.373C25.1315 23.3169 25.0765 23.2813 25.0164 23.2781ZM29.423 18.0011C33.7084 18.1223 37.3029 21.2016 37.9904 25.3408L38 25.4567L37.9977 25.6585C37.9737 25.9562 37.8538 26.2393 37.6545 26.4668C37.4041 26.7524 37.0477 26.9286 36.6588 26.9567L30.0133 27.39C29.1615 27.4382 28.4295 26.8051 28.3741 25.9735L27.9299 19.4491L27.9349 19.303L27.957 19.1382C28.0162 18.8462 28.1684 18.5794 28.3925 18.3764C28.6739 18.1216 29.0474 17.9866 29.423 18.0011ZM29.4113 19.449L29.8511 25.8781C29.8537 25.9172 29.888 25.9469 29.9214 25.945L36.5182 25.5135L36.4854 25.3335C35.8318 22.0802 33.0119 19.6644 29.6287 19.4593L29.4113 19.449Z" fill={selected ? "#fff" : "#EA7C69"} />
    </svg>
  </div>
}

export const MessageIcon = ({ selected }) => {
  return <div className={`${s.icon} ${selected ? s.selected : ""}`}>
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="56" height="56" rx="8" fill={selected ? "#EA7C69" : "#1F1D2B"} />
      <path d="M32.3212 18.7581C33.8351 18.7751 35.2761 19.416 36.3085 20.5315C37.3408 21.647 37.8745 23.1398 37.7865 24.617L37.7852 30.854C37.8745 32.3763 37.3408 33.8691 36.3085 34.9846C35.2761 36.1001 33.8351 36.741 32.3127 36.7581H23.2521C20.0825 36.7581 17.7959 34.1965 17.7959 30.8991V24.617C17.7959 21.3196 20.0825 18.7581 23.2521 18.7581H32.3212ZM32.3043 20.2864H23.2521C20.9587 20.2864 19.3133 22.1296 19.3133 24.617V30.8991C19.3133 33.3865 20.9587 35.2297 23.2521 35.2297H32.3043C33.4032 35.2173 34.4491 34.7521 35.1985 33.9424C35.9479 33.1327 36.3352 32.0492 36.2691 30.8991L36.2704 24.5719C36.3352 23.4669 35.9479 22.3834 35.1985 21.5737C34.4491 20.764 33.4032 20.2988 32.3043 20.2864ZM33.8199 24.3964C34.058 24.696 34.0359 25.1207 33.7841 25.3936L33.7017 25.4706L29.5947 28.7817C28.5972 29.5648 27.219 29.6039 26.1789 28.8956L26.0176 28.7775L21.8832 25.4726C21.5549 25.2102 21.5 24.7295 21.7605 24.3989C21.9973 24.0984 22.4133 24.0253 22.7335 24.2117L22.8265 24.2754L26.9557 27.5762C27.4187 27.9396 28.0534 27.9676 28.5367 27.6649L28.6542 27.5823L32.7535 24.2774C33.0806 24.0136 33.5581 24.0669 33.8199 24.3964Z" fill={selected ? "#fff" : "#EA7C69"} />
    </svg>
  </div>
}

export const NotificationIcon = ({ selected }) => {
  return <div className={`${s.icon} ${selected ? s.selected : ""}`}>
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="56" height="56" rx="8" fill={selected ? "#EA7C69" : "#1F1D2B"} />
      <path d="M30.608 35.6906C30.9045 35.9321 30.9515 36.3713 30.7129 36.6715C30.5366 36.8935 30.3327 37.0922 30.1167 37.255C29.3891 37.826 28.464 38.0849 27.5453 37.9754C26.6258 37.8659 25.787 37.3962 25.2146 36.6689C24.9774 36.3676 25.0265 35.9286 25.3242 35.6885C25.6219 35.4484 26.0555 35.4981 26.2927 35.7995C26.6379 36.2381 27.1467 36.523 27.7064 36.5896C28.2669 36.6564 28.8307 36.4986 29.2826 36.1443C29.4158 36.0437 29.5355 35.927 29.6389 35.7969C29.8775 35.4967 30.3114 35.4491 30.608 35.6906ZM21.1521 24.9997L21.1644 24.4039C21.1732 24.1491 21.1869 23.9125 21.2068 23.681C21.5065 20.4446 24.5956 18 27.9648 18H28.0361C31.4034 18 34.4934 20.4429 34.8034 23.6854C34.8212 23.8915 34.8288 24.0746 34.8311 24.3321L34.832 25.1198C34.8327 25.1916 34.8339 25.2547 34.8358 25.3135L34.845 25.5098L34.8896 25.6969C35.0303 26.218 35.2776 26.7052 35.6162 27.1282L35.7669 27.3055L35.8286 27.3847C36.2348 27.9917 36.4668 28.698 36.5 29.4587L36.499 29.862C36.4707 30.763 36.1399 31.6331 35.5338 32.3582C34.7311 33.2101 33.6434 33.7393 32.4873 33.8457C29.502 34.1699 26.49 34.1699 23.513 33.8466C22.349 33.7346 21.2644 33.2069 20.4266 32.3223C19.8088 31.5691 19.4804 30.6208 19.5009 29.6624L19.5017 29.4242C19.5374 28.6955 19.768 27.9898 20.1694 27.3802L20.2365 27.2938C20.7052 26.7799 21.0257 26.151 21.1647 25.4731L21.1497 25.534L21.1521 24.9997ZM28.0361 19.3953H27.9648C25.2665 19.3953 22.808 21.3409 22.5797 23.8068C22.568 23.9423 22.5587 24.0821 22.5514 24.2292L22.5353 24.6956L22.5288 25.6149L22.5144 25.7567C22.3244 26.683 21.8873 27.5409 21.2493 28.2404L21.2986 28.1833L21.2104 28.3291C21.0454 28.6265 20.9389 28.9495 20.8968 29.2682L20.8794 29.4587L20.8792 29.6774C20.8657 30.3142 21.0809 30.9356 21.4537 31.3931C22.0288 31.9985 22.8068 32.377 23.6517 32.4583C26.5393 32.7719 29.4527 32.7719 32.3514 32.4572C33.1871 32.3802 33.9645 32.002 34.5084 31.4267C34.92 30.933 35.1375 30.3097 35.1216 29.6536L35.1224 29.4901C35.1013 29.0186 34.951 28.5613 34.6873 28.1672L34.7026 28.1926L34.5647 28.0309C34.0893 27.4441 33.744 26.7635 33.5517 26.034L33.4868 25.7582L33.4739 25.6655C33.4642 25.5301 33.4585 25.4098 33.4555 25.2651L33.4528 24.3605C33.4509 24.1304 33.4447 23.9756 33.4307 23.8133C33.1944 21.3408 30.7336 19.3953 28.0361 19.3953Z" fill={selected ? "#fff" : "#EA7C69"} />
    </svg>
  </div>
}

export const SettingIcon = ({ selected }) => {
  return <div className={`${s.icon} ${selected ? s.selected : ""}`}>
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="56" height="56" rx="8" fill={selected ? "#EA7C69" : "#1F1D2B"} />
      <path d="M28.6161 18C29.3251 17.9997 30.0041 18.2806 30.4983 18.7787C30.9925 19.2768 31.2599 19.9497 31.2383 20.5777L31.2468 20.7254C31.2641 20.8708 31.3124 21.0112 31.3908 21.1405C31.5435 21.3957 31.7935 21.5808 32.0857 21.6551C32.3779 21.7295 32.6882 21.6869 32.9821 21.5184L33.146 21.4355C34.3759 20.869 35.8511 21.3192 36.5333 22.4793L37.1465 23.5217C37.1627 23.5492 37.1769 23.5776 37.1892 23.6067L37.2461 23.7184C37.7945 24.8652 37.4043 26.2293 36.3624 26.9223L36.1051 27.0807C35.9706 27.1726 35.8585 27.2926 35.7742 27.4368C35.6218 27.6929 35.58 27.998 35.658 28.2844C35.736 28.5708 35.9272 28.8149 36.2174 28.9793L36.3843 29.0841C36.8887 29.4297 37.253 29.9391 37.4119 30.523C37.5912 31.1817 37.495 31.8833 37.1399 32.4804L36.4803 33.557L36.3808 33.7089C35.6058 34.8008 34.1011 35.1344 32.9527 34.485L32.8166 34.4163C32.6746 34.3541 32.5214 34.3199 32.382 34.316C32.0786 34.3146 31.7872 34.432 31.5727 34.6422C31.3582 34.8524 31.2383 35.1379 31.2391 35.4698L31.231 35.6414C31.12 36.9703 29.9845 38 28.6164 38H27.3811C25.9322 38 24.7577 36.8493 24.7591 35.4753L24.7506 35.3277C24.7334 35.1822 24.685 35.0418 24.6027 34.9057C24.4534 34.65 24.2059 34.4633 23.9154 34.3871C23.6248 34.3109 23.3153 34.3516 23.0157 34.5213L22.8376 34.6084C22.2746 34.8565 21.6395 34.9023 21.0445 34.7366C20.3731 34.5497 19.8054 34.1083 19.4741 33.5224L18.8368 32.4442L18.752 32.2844C18.1716 31.0841 18.6265 29.6412 19.7811 28.9875L19.8865 28.9228C20.1949 28.7137 20.3799 28.3688 20.3799 28C20.3799 27.599 20.1615 27.2284 19.7795 27.0115L19.6245 26.9141C18.51 26.1548 18.1695 24.6805 18.8599 23.507L19.5092 22.4617C20.2313 21.2338 21.8316 20.8102 23.0624 21.5017L23.1956 21.5713C23.3314 21.6324 23.479 21.6648 23.621 21.6663C24.2474 21.6663 24.7578 21.1735 24.7672 20.5418L24.7758 20.3478C24.827 19.7472 25.0931 19.1827 25.528 18.7546C26.0186 18.2716 26.6855 18 27.3811 18H28.6161ZM28.6164 19.4477H27.3811C27.0786 19.4477 26.7887 19.5658 26.5753 19.7758C26.3863 19.962 26.2706 20.2074 26.2503 20.4366L26.2368 20.7415C26.1334 22.0709 24.9997 23.1142 23.6133 23.114C23.2559 23.1103 22.9036 23.0329 22.5443 22.8703L22.3519 22.7709C21.8038 22.4632 21.1049 22.6482 20.7806 23.1992L20.1313 24.2446C19.8338 24.7504 19.9826 25.3947 20.4432 25.7092L20.704 25.871C21.422 26.3467 21.8575 27.1429 21.8575 28C21.8575 28.8446 21.4341 29.634 20.7022 30.1296L20.5464 30.2256C20.0335 30.5163 19.8356 31.144 20.074 31.6383L20.1303 31.7449L20.7595 32.8084C20.9073 33.0696 21.1552 33.2624 21.4484 33.344C21.7083 33.4164 21.9857 33.3964 22.2021 33.3018L22.3108 33.2497C22.911 32.9066 23.6261 32.8126 24.2974 32.9886C24.9686 33.1645 25.5403 33.5959 25.8794 34.1768C26.0618 34.478 26.1772 34.8132 26.2219 35.1985L26.2421 35.552C26.3043 36.1145 26.7905 36.5523 27.3811 36.5523H28.6164C29.2137 36.5523 29.7099 36.1023 29.7565 35.5511L29.7621 35.4421C29.7588 34.7585 30.0345 34.1019 30.5279 33.6185C31.0212 33.1351 31.6914 32.865 32.4053 32.8686C32.7556 32.8778 33.1004 32.9547 33.4528 33.11L33.7687 33.2682C34.2647 33.4814 34.8529 33.3258 35.1511 32.9067L35.2236 32.7957L35.868 31.7436C36.0203 31.4875 36.0621 31.1824 35.9841 30.896C35.915 30.6422 35.7566 30.4207 35.5645 30.2882L35.2922 30.1195C34.7716 29.7748 34.3932 29.2563 34.2302 28.6574C34.0509 27.9987 34.1471 27.2971 34.4946 26.7126C34.6849 26.3872 34.9464 26.1073 35.2873 25.8753L35.448 25.7761C35.9601 25.4827 36.1578 24.855 35.9212 24.3588L35.8505 24.2253L35.8378 24.1973L35.253 23.2021C34.9764 22.7318 34.4008 22.5285 33.9125 22.6891L33.8015 22.7327L33.6983 22.7842C33.1001 23.1294 32.3863 23.2274 31.7143 23.0564C31.0423 22.8855 30.4673 22.4596 30.1181 21.8762C29.9357 21.575 29.8203 21.2398 29.7756 20.8545L29.7624 20.6025C29.7713 20.2992 29.6546 20.0054 29.4387 19.7878C29.2229 19.5703 28.9264 19.4477 28.6164 19.4477ZM28.0032 24.7318C29.8455 24.7318 31.339 26.195 31.339 28C31.339 29.805 29.8455 31.2682 28.0032 31.2682C26.161 31.2682 24.6675 29.805 24.6675 28C24.6675 26.195 26.161 24.7318 28.0032 24.7318ZM28.0032 26.1796C26.977 26.1796 26.1452 26.9946 26.1452 28C26.1452 29.0054 26.977 29.8204 28.0032 29.8204C29.0294 29.8204 29.8613 29.0054 29.8613 28C29.8613 26.9946 29.0294 26.1796 28.0032 26.1796Z" fill={selected ? "#fff" : "#EA7C69"} />
    </svg>
  </div>
}

export const LogoutIcon = () => {
  return <div className={`${s.icon}`}>
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 10C0 4.47715 4.47715 0 10 0H46C51.5229 0 56 4.47715 56 10V46C56 51.5229 51.5228 56 46 56H10C4.47715 56 0 51.5228 0 46V10Z" fill="#1F1D2B" />
      <path d="M27.331 18.0215C29.7102 18.0215 31.6521 19.8954 31.7611 22.2477L31.766 22.4565V23.3895C31.766 23.8037 31.4302 24.1395 31.016 24.1395C30.6363 24.1395 30.3225 23.8573 30.2728 23.4913L30.266 23.3895V22.4565C30.266 20.8936 29.044 19.6157 27.5034 19.5265L27.331 19.5215H22.456C20.8939 19.5215 19.6162 20.7436 19.527 22.2841L19.522 22.4565V33.5865C19.522 35.1493 20.7439 36.4272 22.2836 36.5165L22.456 36.5215H27.341C28.8983 36.5215 30.172 35.3039 30.261 33.7693L30.266 33.5975V32.6545C30.266 32.2403 30.6018 31.9045 31.016 31.9045C31.3957 31.9045 31.7095 32.1866 31.7591 32.5527L31.766 32.6545V33.5975C31.766 35.9687 29.8992 37.9046 27.5553 38.0164L27.341 38.0215H22.456C20.0775 38.0215 18.1358 36.1474 18.0268 33.7952L18.022 33.5865V22.4565C18.022 20.0774 19.8957 18.1353 22.2473 18.0263L22.456 18.0215H27.331ZM35.326 24.5023L35.4103 24.5748L38.3383 27.4898C38.3647 27.5159 38.3878 27.5426 38.409 27.5707L38.3383 27.4898C38.3689 27.5202 38.3963 27.5526 38.4205 27.5865C38.4376 27.6103 38.4533 27.6354 38.4676 27.6614C38.4702 27.6665 38.4728 27.6715 38.4754 27.6764C38.4881 27.7004 38.4993 27.7253 38.5092 27.7508C38.5132 27.762 38.5173 27.7733 38.5211 27.7847C38.5284 27.8058 38.5345 27.8274 38.5397 27.8494C38.5421 27.8612 38.5445 27.8729 38.5467 27.8846C38.5508 27.905 38.5538 27.9261 38.5559 27.9474C38.557 27.9623 38.558 27.977 38.5586 27.9917C38.5593 28.0016 38.5595 28.0115 38.5595 28.0214L38.5586 28.0497C38.5581 28.0651 38.557 28.0805 38.5555 28.0958L38.5595 28.0214C38.5595 28.0682 38.5552 28.1141 38.547 28.1585C38.5445 28.1696 38.5421 28.1814 38.5394 28.193C38.5343 28.2162 38.5279 28.2387 38.5205 28.2607C38.5167 28.2709 38.513 28.2813 38.509 28.2915C38.4997 28.3164 38.4889 28.3405 38.4769 28.3639C38.4739 28.3692 38.4708 28.3751 38.4675 28.381C38.4331 28.4443 38.39 28.5015 38.3398 28.5517L38.3384 28.5527L35.4104 31.4687C35.1169 31.761 34.642 31.76 34.3498 31.4665C34.084 31.1997 34.0607 30.783 34.2791 30.4898L34.3519 30.4059L35.991 28.7705L25.7685 28.7714C25.3543 28.7714 25.0185 28.4356 25.0185 28.0214C25.0185 27.6417 25.3006 27.3279 25.6667 27.2782L25.7685 27.2714L35.993 27.2705L34.352 25.6378C34.0852 25.3721 34.06 24.9555 34.2772 24.6614L34.3497 24.5771C34.6153 24.3103 35.0319 24.2851 35.326 24.5023Z" fill="#EA7C69" />
    </svg>
  </div>
}

export const DeleteIcon = ({ selected }) => {
  return <div className={`${s.icon} ${s.deleteIcon} ${selected ? s.selected : ""} `}>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.7325 7.26564L15.8153 7.26677C16.1229 7.2922 16.3587 7.54759 16.375 7.855L16.3671 8.02641L16.105 11.2358L15.8301 14.3678C15.7719 14.993 15.7198 15.5204 15.6749 15.9355C15.5187 17.3823 14.5796 18.2769 13.1638 18.3034C10.9578 18.3441 8.83731 18.3437 6.7781 18.2992C5.40331 18.2703 4.47805 17.366 4.32462 15.9414L4.21858 14.8918L4.03328 12.8558L3.84347 10.6217L3.62643 7.93986C3.59946 7.59578 3.84959 7.29442 4.18512 7.26676C4.49269 7.2414 4.76525 7.45483 4.82932 7.7556L4.85426 8.0014L5.05805 10.5156L5.28057 13.1215C5.38038 14.2496 5.46695 15.1626 5.53622 15.804C5.62365 16.6158 6.05115 17.0336 6.80343 17.0494C8.84654 17.0936 10.9512 17.094 13.1417 17.0535C13.9398 17.0386 14.374 16.6249 14.4633 15.7978L14.5689 14.7538C14.5998 14.4321 14.6328 14.0769 14.6678 13.691L14.8905 11.1281L15.1588 7.83954C15.1836 7.52414 15.4327 7.28238 15.7325 7.26564ZM3.10949 5.82428C2.77288 5.82428 2.5 5.54445 2.5 5.19926C2.5 4.88283 2.72929 4.62133 3.02679 4.57994L3.10949 4.57423H5.76476C6.0803 4.57423 6.35654 4.36602 6.45535 4.06604L6.47953 3.9734L6.68587 2.92106C6.86759 2.2241 7.45767 1.72787 8.14916 1.6719L8.27993 1.66663H11.7199C12.4229 1.66663 13.0436 2.12186 13.2826 2.82528L13.3228 2.96003L13.5203 3.97315C13.5822 4.29056 13.8354 4.52762 14.1417 4.5681L14.2351 4.57423H16.8905C17.2271 4.57423 17.5 4.85406 17.5 5.19926C17.5 5.51568 17.2707 5.77719 16.9732 5.81857L16.8905 5.82428H3.10949ZM11.7199 2.91667H8.27993C8.10892 2.91667 7.95691 3.01931 7.89377 3.14831L7.87235 3.20499L7.67483 4.21861C7.65067 4.34233 7.61566 4.46146 7.57093 4.57506L12.429 4.57522C12.4011 4.50434 12.377 4.43132 12.3569 4.35636L12.325 4.21836L12.1364 3.24396C12.0923 3.07489 11.9561 2.95111 11.7918 2.92281L11.7199 2.91667Z" fill={selected ? "#FF7CA3" : "#EA7C69"} />
    </svg>
  </div>
}

export const AppereanceIcon = () => {
  return <div className={`${s.settingsIcon}`}>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.32223 1.87682C5.49376 1.49998 6.76145 1.63559 7.82216 2.23745L7.99776 2.34282L8.17651 2.23686C9.18215 1.66749 10.3751 1.51535 11.4977 1.82411L11.6748 1.87686C14.1233 2.66516 15.2196 5.33863 14.3959 7.89673C13.983 9.0867 13.3057 10.1656 12.4118 11.0549C11.1953 12.2363 9.85429 13.2796 8.41471 14.1648L8.26188 14.2598C8.1067 14.3562 7.91057 14.3579 7.75379 14.264L7.59008 14.166C6.14852 13.2796 4.80751 12.2363 3.58686 11.0508C2.69706 10.1656 2.01981 9.0867 1.60338 7.8863C0.782739 5.33708 1.87451 2.66488 4.32223 1.87682ZM7.58326 3.23614C6.71387 2.64189 5.62237 2.48222 4.62119 2.80426C2.72514 3.4147 1.86555 5.51863 2.52821 7.57753C2.89267 8.62779 3.4902 9.57968 4.27071 10.3562C5.436 11.4879 6.72049 12.4872 8.09619 13.3332L8.00101 13.2732L8.31291 13.077C9.40187 12.3739 10.4275 11.5761 11.3759 10.6947L11.7279 10.3603C12.5126 9.57968 13.1101 8.62779 13.4711 7.58795C14.1366 5.5206 13.2733 3.41519 11.3762 2.80442C10.325 2.46717 9.1775 2.66034 8.29082 3.32413C8.12059 3.45157 7.88731 3.45404 7.71441 3.33021L7.58326 3.23614ZM10.5803 4.32245C11.4613 4.60363 12.086 5.39235 12.164 6.31898C12.1865 6.58709 11.9873 6.82271 11.719 6.84525C11.4506 6.86779 11.2148 6.66871 11.1922 6.4006C11.1472 5.86531 10.7878 5.41153 10.2836 5.25061C10.0271 5.16873 9.88557 4.89459 9.96751 4.63829C10.0494 4.38198 10.3238 4.24058 10.5803 4.32245Z" fill="#ABBBC2" />
    </svg>
  </div>
}

export const RestaurantIcon = () => {
  return <div className={`${s.settingsIcon}`}>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.6425 4.51624L13.6902 1.6591C13.6254 1.46454 13.4433 1.33332 13.2383 1.33337H2.76207C2.55702 1.33332 2.37496 1.46454 2.31018 1.6591L1.35778 4.51624C1.3431 4.56072 1.3349 4.60706 1.3335 4.65385C1.3335 4.65862 1.3335 4.66194 1.3335 4.66671V5.14291C1.33523 5.88901 1.68805 6.59079 2.28587 7.03719C2.28587 7.04101 2.28587 7.04386 2.28587 7.04766V13.2381C2.28587 14.0271 2.92547 14.6667 3.71444 14.6667H12.2859C13.0748 14.6667 13.7144 14.0271 13.7144 13.2381V7.04766C13.7144 7.04383 13.7144 7.04099 13.7144 7.03719C14.3123 6.59079 14.6651 5.88901 14.6668 5.14291V4.66671C14.6668 4.66194 14.6668 4.65862 14.6668 4.65385C14.6654 4.60703 14.6572 4.56069 14.6425 4.51624ZM3.1335 2.28574H12.8949L13.5302 4.19051H2.46683L3.1335 2.28574ZM8.95255 13.7143H7.04778V9.9048H8.95255V13.7143ZM12.7621 13.2381C12.7621 13.5011 12.5489 13.7143 12.2859 13.7143H9.90493V9.42862C9.90493 9.16562 9.69173 8.95242 9.42873 8.95242H6.57159C6.30858 8.95242 6.09539 9.16562 6.09539 9.42862V13.7143H3.71444C3.45144 13.7143 3.23825 13.5011 3.23825 13.2381V7.47623C3.90652 7.61342 4.60144 7.45393 5.14302 7.03909C5.99307 7.66342 7.1501 7.66342 8.00016 7.03909C8.85021 7.66342 10.0072 7.66342 10.8573 7.03909C11.3989 7.45396 12.0938 7.61342 12.7621 7.47623V13.2381ZM12.2859 6.57146C11.8741 6.5712 11.483 6.39057 11.2159 6.07718C11.0428 5.87916 10.742 5.8589 10.544 6.03195C10.5279 6.04598 10.5128 6.06111 10.4987 6.07718C9.96924 6.66814 9.06098 6.71794 8.47002 6.18848C8.43093 6.15343 8.39377 6.11629 8.35872 6.07718C8.17237 5.87916 7.86076 5.86967 7.66271 6.05605C7.65546 6.06289 7.6484 6.06992 7.64159 6.07718C7.11213 6.66814 6.20384 6.71794 5.61288 6.18848C5.57376 6.15343 5.53663 6.11629 5.50158 6.07718C5.31522 5.87916 5.00359 5.86967 4.80557 6.05605C4.79832 6.06289 4.79126 6.06992 4.78445 6.07718C4.51729 6.39057 4.12627 6.5712 3.71444 6.57146C2.92547 6.57146 2.28587 5.93186 2.28587 5.14289H13.7144C13.7144 5.93186 13.0748 6.57146 12.2859 6.57146Z" fill="#ABBBC2" />
    </svg>
  </div>
}

export const ManagementIcon = () => {
  return <div className={`${s.settingsIcon}`}>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.30082 1.81105L9.42237 1.92438L9.90153 2.40355C10.0661 2.56736 10.282 2.66836 10.5117 2.69105L10.6108 2.69594H11.2962C12.3654 2.69594 13.2397 3.53205 13.3007 4.58597L13.3042 4.70394V5.3886C13.3042 5.6218 13.3846 5.84599 13.5296 6.02424L13.5957 6.09772L14.0749 6.57692C14.8292 7.32785 14.863 8.52871 14.1719 9.3201L14.0817 9.41682L13.5961 9.9024C13.4328 10.0661 13.3318 10.2822 13.309 10.5116L13.3042 10.6106V11.2966C13.3042 12.3658 12.4681 13.2395 11.4141 13.3005L11.2962 13.3039H10.6108C10.3785 13.3039 10.154 13.3847 9.97563 13.5301L9.90213 13.5964L9.42357 14.0743C8.67344 14.8295 7.47171 14.863 6.68003 14.1717L6.57726 14.0755L6.09919 13.5974C5.93359 13.433 5.7173 13.3316 5.4883 13.3088L5.38948 13.3039H4.70348C3.63473 13.3039 2.76063 12.4683 2.69956 11.4145L2.69615 11.2966V10.6106C2.69615 10.3786 2.61529 10.1539 2.4699 9.9759L2.40369 9.90258L1.9256 9.42382C1.17055 8.67303 1.13706 7.47128 1.8284 6.68038L1.9186 6.58372L2.40268 6.09897C2.56731 5.93317 2.66853 5.71729 2.69126 5.48772L2.69615 5.3886V4.70394L2.69956 4.58598C2.75837 3.5712 3.57115 2.75818 4.58557 2.69935L4.70348 2.69594H5.38948C5.62181 2.69594 5.84632 2.61535 6.02435 2.47056L6.09769 2.40463L6.57646 1.92518C7.32737 1.17087 8.52899 1.13766 9.30082 1.81105ZM7.36109 2.56179L7.28462 2.63124L6.80378 3.11274C6.45895 3.45513 6.00287 3.65985 5.52137 3.69159L5.38948 3.69594H4.70348C4.17844 3.69594 3.74663 4.0987 3.70027 4.61222L3.69615 4.70394V5.3886C3.69615 5.87471 3.51974 6.34215 3.20155 6.70752L3.11128 6.80458L2.6265 7.29002C2.25863 7.65957 2.23721 8.24335 2.56231 8.63938L2.63195 8.71596L3.11146 9.19614C3.45439 9.53989 3.65992 9.99677 3.69179 10.4786L3.69615 10.6106V11.2966C3.69615 11.822 4.09862 12.2535 4.61183 12.2998L4.70348 12.3039H5.38948C5.87468 12.3039 6.34251 12.4805 6.70797 12.7988L6.80504 12.889L7.28725 13.3713C7.65939 13.7413 8.24333 13.7629 8.639 13.4378L8.71551 13.3681L9.1961 12.8882C9.54058 12.5454 9.99687 12.3401 10.4788 12.3083L10.6108 12.3039H11.2962C11.8219 12.3039 12.2537 11.9017 12.3 11.3883L12.3042 11.2966V10.6106C12.3042 10.1247 12.4807 9.65604 12.7985 9.29226L12.8886 9.19572L13.3736 8.71072C13.7415 8.34075 13.7628 7.75726 13.4381 7.36138L13.3686 7.28482L12.8873 6.80357C12.5447 6.45852 12.3402 6.0029 12.3085 5.52071L12.3042 5.3886V4.70394C12.3042 4.17833 11.9014 3.74642 11.3879 3.70006L11.2962 3.69594H10.6108C10.1247 3.69594 9.65667 3.51968 9.29207 3.2017L9.19526 3.11149L8.73664 2.65164L8.71007 2.62696C8.34055 2.25911 7.75664 2.23758 7.36109 2.56179ZM10.0644 9.36167C10.1111 9.40834 10.1511 9.46167 10.1778 9.52167C10.1978 9.58167 10.2111 9.64834 10.2111 9.715C10.2111 9.78234 10.1978 9.84167 10.1778 9.90167C10.1511 9.96167 10.1111 10.0217 10.0644 10.0683C9.97108 10.1617 9.84442 10.215 9.71108 10.215C9.57775 10.215 9.45108 10.1617 9.35775 10.0683C9.31108 10.0217 9.27775 9.96167 9.25108 9.90167C9.22442 9.84167 9.21108 9.78234 9.21108 9.715C9.21108 9.64834 9.22442 9.58167 9.25108 9.52167C9.27775 9.46167 9.31108 9.40834 9.35775 9.36167C9.54442 9.175 9.87775 9.175 10.0644 9.36167ZM10.0668 5.93285C10.2443 6.11036 10.2605 6.38814 10.1152 6.58388L10.0668 6.63996L6.64017 10.0666C6.44491 10.2619 6.12833 10.2619 5.93306 10.0666C5.75555 9.88911 5.73942 9.61134 5.88465 9.41559L5.93306 9.35952L9.35973 5.93285C9.55499 5.73759 9.87158 5.73759 10.0668 5.93285ZM6.63768 5.93527C6.73102 6.02794 6.78435 6.15527 6.78435 6.2886C6.78435 6.35527 6.77768 6.4146 6.75102 6.47527C6.72435 6.53527 6.68435 6.5886 6.63768 6.64194C6.59102 6.6886 6.53768 6.72127 6.47768 6.74794C6.41768 6.7746 6.35102 6.7886 6.28435 6.7886C6.21768 6.7886 6.15768 6.7746 6.09768 6.74794C6.03768 6.72127 5.97768 6.6886 5.93102 6.64194C5.88435 6.5886 5.85102 6.53527 5.82435 6.47527C5.79768 6.4146 5.78435 6.35527 5.78435 6.2886C5.78435 6.22127 5.79768 6.15527 5.82435 6.09527C5.85102 6.03527 5.88435 5.97527 5.93102 5.93527C6.12435 5.74794 6.45102 5.74794 6.63768 5.93527Z" fill="#EA7C69" />
    </svg>
  </div>
}

export const NotificationsIcon = () => {
  return <div className={`${s.settingsIcon}`}>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.7388 13.1271C9.93652 13.2881 9.96786 13.5809 9.80879 13.7811C9.6912 13.929 9.55532 14.0615 9.41131 14.1701C8.92623 14.5507 8.3095 14.7233 7.69703 14.6503C7.08401 14.5773 6.52483 14.2642 6.14322 13.7793C5.98509 13.5784 6.0178 13.2858 6.21628 13.1257C6.41476 12.9657 6.70384 12.9988 6.86197 13.1997C7.09211 13.4921 7.43129 13.682 7.80443 13.7265C8.1781 13.771 8.55399 13.6658 8.8552 13.4295C8.94402 13.3625 9.02384 13.2847 9.09277 13.198C9.25184 12.9978 9.54108 12.9661 9.7388 13.1271ZM3.43491 5.99987L3.44312 5.60265C3.44899 5.43274 3.45807 5.27503 3.47139 5.12068C3.67119 2.96308 5.73059 1.33337 7.97669 1.33337H8.02424C10.2691 1.33337 12.3291 2.96194 12.5357 5.12362C12.5476 5.26103 12.5527 5.38309 12.5542 5.55475L12.5548 6.07992C12.5553 6.12776 12.5561 6.16983 12.5574 6.20906L12.5635 6.33989L12.5932 6.46463C12.687 6.81206 12.8519 7.13687 13.0777 7.41885L13.1781 7.53701L13.2193 7.58982C13.49 7.9945 13.6447 8.46538 13.6668 8.97253L13.6662 9.2414C13.6473 9.84202 13.4268 10.4221 13.0227 10.9055C12.4876 11.4734 11.7624 11.8263 10.9917 11.8972C9.00149 12.1133 6.99349 12.1133 5.00881 11.8978C4.2328 11.8231 3.50979 11.4713 2.95125 10.8816C2.53938 10.3795 2.32044 9.74723 2.3341 9.10833L2.33466 8.94949C2.35846 8.46372 2.51219 7.99327 2.77974 7.58684L2.82452 7.52923C3.13699 7.18666 3.35062 6.76741 3.44332 6.31541L3.43329 6.35601L3.43491 5.99987ZM8.02424 2.26361H7.97669C6.17784 2.26361 4.53885 3.56062 4.38661 5.20456C4.37882 5.29489 4.3726 5.38809 4.36775 5.48617L4.35704 5.7971L4.35269 6.40995L4.3431 6.50449C4.21645 7.12205 3.92502 7.69399 3.49969 8.16028L3.53254 8.12221L3.47379 8.21943C3.36375 8.41771 3.29276 8.63304 3.26471 8.84553L3.25306 8.97253L3.25296 9.11832C3.24395 9.54287 3.38741 9.95713 3.63596 10.2621C4.01937 10.6657 4.53805 10.918 5.10128 10.9723C7.02635 11.1813 8.96863 11.1813 10.9011 10.9715C11.4582 10.9202 11.9765 10.668 12.3391 10.2845C12.6135 9.9554 12.7585 9.53981 12.7479 9.10243L12.7484 8.99347C12.7343 8.67908 12.6342 8.37421 12.4584 8.1115L12.4686 8.12841L12.3766 8.02061C12.0597 7.62944 11.8295 7.17571 11.7013 6.68935L11.658 6.50549L11.6494 6.44371C11.643 6.35346 11.6392 6.27325 11.6372 6.1768L11.6354 5.57371C11.6341 5.42034 11.63 5.3171 11.6207 5.20888C11.4631 3.56054 9.82258 2.26361 8.02424 2.26361Z" fill="#ABBBC2" />
    </svg>
  </div>
}

export const SecurityIcon = () => {
  return <div className={`${s.settingsIcon}`}>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.00674 1.3334C9.54966 1.3334 10.9053 2.29938 11.4021 3.71113C11.494 3.97207 11.3534 4.25684 11.0882 4.34719C10.8229 4.43754 10.5335 4.29925 10.4416 4.03831C10.0854 3.02623 9.11313 2.3334 8.00472 2.3334C6.62673 2.32803 5.49704 3.38767 5.42213 4.72388L5.4182 4.85403L5.41816 5.75071L10.589 5.75094C12.2402 5.75094 13.5878 7.03051 13.6635 8.63696L13.6668 8.77953V11.6381C13.6668 13.3108 12.2888 14.6667 10.589 14.6667H5.41128C3.71152 14.6667 2.3335 13.3108 2.3335 11.6381V8.77953C2.3335 7.45489 3.19775 6.32888 4.40163 5.91767L4.40175 4.85184C4.41044 2.90059 6.02518 1.3257 8.00674 1.3334ZM10.589 6.75091H5.41128C4.27293 6.75091 3.34994 7.65912 3.34994 8.77953V11.6381C3.34994 12.7585 4.27293 13.6667 5.41128 13.6667H10.589C11.7274 13.6667 12.6504 12.7585 12.6504 11.6381V8.77953C12.6504 7.65912 11.7274 6.75091 10.589 6.75091ZM8.0003 8.96832C8.25759 8.96832 8.47023 9.15642 8.50388 9.40046L8.50852 9.46831V10.9496C8.50852 11.2257 8.28098 11.4496 8.0003 11.4496C7.74301 11.4496 7.53037 11.2615 7.49672 11.0174L7.49208 10.9496V9.46831C7.49208 9.19217 7.71962 8.96832 8.0003 8.96832Z" fill="#ABBBC2" />
    </svg>
  </div>
}

export const AboutUsIcon = () => {
  return <div className={`${s.settingsIcon}`}>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.00016 1.3335C11.6821 1.3335 14.6668 4.31847 14.6668 8.00016C14.6668 11.6819 11.6821 14.6668 8.00016 14.6668C4.31869 14.6668 1.3335 11.6816 1.3335 8.00016C1.3335 4.31869 4.31869 1.3335 8.00016 1.3335ZM8.00016 2.3335C4.87097 2.3335 2.3335 4.87097 2.3335 8.00016C2.3335 11.1294 4.87097 13.6668 8.00016 13.6668C11.1298 13.6668 13.6668 11.1296 13.6668 8.00016C13.6668 4.87073 11.1298 2.3335 8.00016 2.3335ZM8.00356 10.0308C8.27971 10.0308 8.50356 10.2546 8.50356 10.5308C8.50356 10.7839 8.31546 10.9931 8.07141 11.0262L7.9969 11.0308C7.72075 11.0308 7.4969 10.8069 7.4969 10.5308C7.4969 10.2776 7.685 10.0684 7.92905 10.0353L8.00356 10.0308ZM7.9969 4.96956C8.25003 4.96956 8.45922 5.15767 8.49233 5.40172L8.4969 5.46956V8.41556C8.4969 8.6917 8.27304 8.91556 7.9969 8.91556C7.74377 8.91556 7.53457 8.72746 7.50146 8.48341L7.4969 8.41556V5.46956C7.4969 5.19342 7.72075 4.96956 7.9969 4.96956Z" fill="#ABBBC2" />
    </svg>
  </div>
}