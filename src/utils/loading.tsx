import React, { useEffect } from "react";
import gsap from "gsap";

interface Props {}

const Loading = (props: Props) => {
  useEffect(() => {
    gsap.fromTo(
      "#loadingLogo path",
      { opacity: 0 },
      { opacity: 1, delay: (i) => i * 0.2, repeat: 999 }
    );
  });
  return (
    <div className="h-screen w-screen flex-col bg-slate-100 dark:bg-slate-900 flex justify-center items-center">
      <Logo />
      <span className="text-slate-900 dark:text-slate-100 uppercase tracking-widest text-3xl font-semibold">
        Final Touch
      </span>
    </div>
  );
};

export default Loading;

const Logo = () => (
  <svg
    id="loadingLogo"
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="311.500000pt"
    height="356.500000pt"
    className="scale-100 h-36 animate-pulse"
    viewBox="0 0 311.500000 356.500000"
    preserveAspectRatio="xMidYMid meet"
  >
    <g
      transform="translate(0.000000,356.500000) scale(0.050000,-0.050000)"
      stroke="none"
    >
      <path
        fill="#f2d92f"
        d="M10 6674 l0 -447 47 44 c249 227 913 842 913 845 0 2 -216 4 -480 4
l-480 0 0 -446z"
      />
      <path
        fill="#f4a529"
        d="M1395 6472 c-704 -703 -774 -765 -970 -862 -116 -58 -218 -86 -330
-93 l-80 -4 -3 -62 -3 -61 75 0 c43 0 133 -12 208 -27 194 -40 319 -38 451 7
203 68 206 71 1152 920 473 424 873 785 890 801 l30 29 -385 0 -385 0 -650
-648z"
      />
      <path
        fill="#f37026"
        d="M2814 6132 c-654 -543 -1222 -1015 -1262 -1049 -198 -167 -381 -258
-569 -284 -72 -11 -113 -10 -259 6 -194 20 -331 17 -409 -10 -90 -30 -202 -92
-288 -159 -16 -12 -17 -33 -15 -235 l3 -221 240 180 c413 310 537 350 867 283
184 -38 330 -38 441 0 94 33 179 75 267 132 91 59 3114 2324 3118 2335 2 6
-173 10 -471 10 l-474 0 -1189 -988z"
      />
      <path
        fill="#df6526"
        d="M5865 6826 c-1223 -920 -3480 -2606 -3530 -2638 -231 -150 -419 -185
-715 -133 -295 52 -437 32 -633 -92 -23 -16 -253 -185 -510 -376 l-467 -349 0
-184 c0 -103 4 -183 9 -180 18 12 1200 815 1261 858 90 62 202 121 285 149 58
20 89 24 185 23 107 -1 125 -4 250 -43 174 -56 299 -65 431 -33 162 40 283
113 1054 633 396 267 1173 790 1728 1163 l1007 677 0 395 c0 217 -1 394 -2
393 -2 0 -160 -119 -353 -263z"
      />
      <path
        fill="#c4607f"
        d="M5100 4653 c-1805 -1217 -1762 -1189 -1904 -1259 -229 -111 -398
-143 -641 -121 -71 6 -209 12 -305 11 -165 0 -180 -2 -260 -28 -47 -15 -128
-50 -180 -77 -52 -27 -477 -304 -943 -616 l-848 -568 -2 -153 c-2 -127 0 -151
12 -147 8 3 460 281 1005 617 1100 679 1128 695 1241 739 210 82 304 80 620
-14 66 -19 154 -38 195 -42 153 -14 337 31 528 130 59 30 667 387 1352 793
l1245 738 3 372 c1 205 -1 372 -5 371 -5 0 -505 -336 -1113 -746z"
      />
      <path
        fill="#a45ca5"
        d="M5210 3253 c-1224 -758 -1186 -735 -1290 -779 -236 -100 -415 -113
-745 -55 -167 29 -204 33 -305 28 -139 -7 -204 -24 -335 -86 -55 -27 -644
-384 -1309 -794 l-1208 -745 1 -138 c1 -76 4 -140 6 -142 3 -3 2573 1404 2769
1516 193 111 346 157 496 150 83 -4 117 -13 275 -66 99 -34 214 -66 255 -73
134 -20 287 6 462 79 73 30 1822 969 1916 1028 l22 14 0 340 c0 187 -3 340 -7
339 -5 0 -456 -278 -1003 -616z"
      />
      <path
        fill="#815aa5"
        d="M5655 2044 c-302 -162 -598 -322 -656 -355 -211 -118 -381 -179 -558
-199 -129 -15 -234 -4 -465 51 -139 33 -195 42 -301 46 -116 4 -140 2 -227
-21 -53 -13 -134 -42 -180 -64 -46 -21 -668 -353 -1383 -737 -715 -384 -1319
-707 -1342 -718 -24 -12 -43 -23 -43 -26 0 -4 127 -5 282 -3 l281 3 1171 554
c644 305 1220 580 1280 611 172 89 253 116 372 122 123 6 135 2 329 -94 213
-105 316 -122 524 -89 230 38 336 78 966 373 l510 239 3 301 c1 166 -1 302 -5
302 -5 0 -255 -133 -558 -296z"
      />
      <path
        fill="#485aa8"
        d="M5810 749 c-511 -259 -600 -291 -820 -291 -139 -1 -192 11 -445 97
-297 101 -423 108 -632 34 -48 -17 -333 -154 -633 -304 l-545 -274 444 0 443
-1 174 75 c96 41 234 104 307 140 166 81 233 99 362 99 119 0 162 -12 365
-100 200 -87 285 -108 430 -107 202 1 310 33 698 208 l262 118 0 254 c0 139
-3 253 -7 253 -5 0 -186 -91 -403 -201z"
      />
    </g>
  </svg>
);
