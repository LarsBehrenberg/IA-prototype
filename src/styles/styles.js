import { css } from '@emotion/core'
// import theme from '../../config/theme'

const styles = css`
  main,
  footer,
  header,
  section,
  figure {
    display: block;
  }

  body,
  html,
  div,
  nav,
  a,
  span,
  header,
  footer,
  main,
  img,
  section,
  figure {
    margin: 0;
    padding: 0;
    border: 0;
  }

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    text-rendering: optimizeLegibility;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body,
  div,
  nav,
  a,
  span,
  header,
  footer,
  main,
  img,
  section,
  p,
  figure,
  *:before,
  *:after {
    -webkit-box-sizing: inherit;
    -moz-box-sizing: inherit;
    box-sizing: inherit;
  }

  body {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 16px;
    color: #333;
  }

  body > svg {
    position: absolute;
    width: 0;
    height: 0;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  .i {
    display: inline-block;
  }

  .i-ttdelogo {
    width: 167px;
    height: 36px;
  }

  #i-ttdelogo .c1 {
    fill: #fff;
  }

  #i-ttdelogo .c2 {
    fill: #e53132;
  }

  .site {
    /* padding-top: 60px; */
    overflow: hidden;
  }

  a {
    text-decoration: none;
  }

  h1 {
    font-weight: normal;
    margin: 15px 0;
  }

  p {
    margin: 0 0 15px 0;
  }

  .site-text {
    font-size: 0.995em;
    line-height: 1.6;
  }

  strong {
    font-weight: bold;
  }

  a.btn {
    display: inline-block;
  }

  .btn {
    cursor: pointer;
    padding: 8px 16px;
    background-color: transparent;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
  }

  .btn.btn-primary {
    background-color: #0057ff;
    color: #fff;
  }

  .btn.btn-primary:hover {
    background-color: #0046cc;
  }

  .btn.btn-outline {
    border: 2px solid #161b2e;
  }

  .btn.btn-outline:hover {
    color: #0057ff;
    border: 2px solid #0057ff;
  }

  .btn.btn-white-outline {
    color: #fff;
    border: 2px solid #fff;
  }

  .btn.btn-white-outline:hover {
    color: #fff;
    border: 2px solid #dd3030;
  }

  .site-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 30;
    background-color: #161b2e;

    box-shadow: 0 30px 25px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 768px) {
    .site-header {
      height: 60px;
    }
  }

  @media (min-width: 768px) {
    .site-brand {
      float: left;
    }
  }

  .brand {
    display: inline-block;
    font-size: 0;
    padding: 12px 0;
  }

  .brand-uri {
    display: block;
  }

  .nav {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    .nav {
      float: right;
    }
  }

  .nav ul {
    display: none;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav li {
    position: relative;
  }

  @media (min-width: 768px) {
    .nav li {
      float: left;
    }
  }

  .nav li .i,
  .nav li span {
    display: inline-block;
    vertical-align: middle;
  }

  .nav a {
    color: #fff;
    font-weight: bold;
    display: block;
    text-decoration: none;
  }

  .nav a .i {
    margin-right: 6px;
    fill: #fff;
  }

  @media (min-width: 768px) {
    .nav a .i {
      fill: #333;
    }
  }

  .nav-menu {
    padding: 14px 0;
  }

  .nav-menu:before,
  .nav-menu:after {
    content: ' ';
    display: table;
  }

  .nav-menu:after {
    clear: both;
  }

  @media (min-width: 768px) {
    .nav-menu {
      padding: 0;
    }
  }

  .nav-menu > li > a {
    padding: 10px;
  }

  @media (min-width: 768px) {
    .nav-menu > li > a {
      height: 60px;
      line-height: 60px;
      padding: 0 10px;
      display: block;
    }
  }

  .nav-menu > li > a > span {
    vertical-align: middle;
  }

  .sub-menu {
    z-index: 99999;
  }

  .nav ul.sub-menu {
    padding: 0 15px;
    display: none;
  }

  @media (min-width: 768px) {
    .nav ul.sub-menu {
      padding: 10px;
      float: right;
      border-bottom: 4px solid #161b2e;
      border-left: 4px solid #161b2e;
      border-right: 4px solid #161b2e;
      background-color: #fff;
      position: absolute;
      top: 100%;
      right: -999em;
      z-index: 99999;
    }
  }

  .nav ul.sub-menu a {
    padding: 8px;
  }

  .nav ul.sub-menu a:hover {
    color: #dd3030;
  }

  .nav ul.sub-menu a:hover .i {
    fill: #dd3030;
  }

  @media (min-width: 768px) {
    .nav ul.sub-menu a {
      width: 180px;
      color: #161b2e;
      line-height: 1;
    }
  }

  .nav .nav-menu > li:hover > ul.sub-menu,
  .nav .nav-menu > li.focus > ul.sub-menu {
    display: block;
    z-index: 99999;
  }

  @media (min-width: 768px) {
    .nav .nav-menu > li:hover > ul.sub-menu,
    .nav .nav-menu > li.focus > ul.sub-menu {
      right: 0;
    }
  }

  .menu-toggle {
    float: right;
    background: none;
    border: none;
    padding: 19px 10px;
  }

  .menu-toggle > span {
    display: block;
    width: 30px;
    height: 4px;
    background-color: #dd3030;
  }

  .menu-toggle > span + span {
    margin-top: 5px;
  }

  .menu-toggle,
  .nav.toggled .nav-menu {
    display: block;
  }

  @media (min-width: 768px) {
    .menu-toggle {
      display: none;
    }

    .nav ul.nav-menu {
      display: block;
    }
  }

  .caret {
    display: inline-block;
    width: 0;
    height: 0;
    border-top: 4px dashed;
    border-top: 4px solid;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
  }

  .site-content {
    position: relative;
    z-index: 10;
  }

  .collapse {
    display: none;
  }

  .text-btn {
    text-align: center;
  }

  .text-intro {
    font-size: 1.3em;
    line-height: 1.5;
    font-weight: 400;
    color: #dd3030;
  }

  .site-block {
    margin: 20px 0;
    padding-bottom: 15px;
    border-bottom: 2px solid #eaeaea;
  }

  .site-block > h2 {
    margin: 0 0 20px 0;
    font-size: 34px;
    font-weight: normal;
  }

  .site-title {
    margin-bottom: 15px;
  }

  .site-title > h1 {
    line-height: 1;
    margin: 0;
  }

  .page__title-ttd {
    display: block;
    margin-bottom: 5px;
    color: #dd3030;
    font-size: 17px;
    font-weight: bold;
    text-transform: uppercase;
  }

  .page__title-e {
    display: inline-block;
    font-size: 40px;
    vertical-align: middle;
    padding-right: 10px;
    padding-bottom: 5px;
  }

  .page__title-e > span {
    font-size: 28px;
    color: #a4b0c5;
  }

  .page__title-vid {
    display: inline-block;
    background-color: #dd3030;
    color: #fff;
    font-weight: bold;
    padding: 5px 8px;
    font-size: 14px;
    vertical-align: middle;
  }

  .page__title-vid a {
    display: block;
    color: inherit !important;
  }

  .site-bb {
    font-size: 16px;
    margin-top: 15px;
    margin-bottom: 25px;
  }

  .site-bb ul {
    list-style-type: none;
    padding-left: 0px;
  }

  .site-bb li {
    display: inline-block;
    padding-right: 10px;
    margin-right: 10px;
    border-right: 2px solid #999;
  }

  .site-bb li a {
    color: #999;
  }

  .site-bb li a:hover {
    color: #dd3030;
  }

  .site-bb li:last-of-type {
    border-right: none;
  }

  .site-bb li:last-of-type a {
    color: #000;
  }

  .page__video {
    margin-left: -15px;
    margin-right: -15px;
  }

  @media (min-width: 768px) {
    .page__video {
      margin-left: 0;
      margin-right: 0;
    }
  }

  .page__video .text-info {
    font-size: 20px;
  }

  .page__video-wrp {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    background-color: #333;
    margin-bottom: 15px;
  }

  .page__video-wrp > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  img:not([src]) {
    visibility: hidden;
  }

  img[data-src],
  img[data-srcset] {
    display: block;
    min-height: 1px;
  }

  .galleria-theme-azur .galleria-info {
    opacity: 1 !important;
    bottom: 0 !important;
  }

  .ttde-gallery {
    position: relative;
    margin-bottom: 15px;
    margin-left: -15px;
    margin-right: -15px;
  }

  .ttde-gallery img {
    object-fit: cover;
  }

  .ttde-gallery.sugg .ttde-gallery-inner {
    height: auto;
    padding-bottom: 0;
  }

  @media (min-width: 767px) {
    .ttde-gallery {
      margin-left: 0px;
      margin-right: 0px;
    }
  }

  .ttde-gallery-inner {
    height: 0;
    padding-bottom: 70%;
  }

  .ttde-gallery-top {
    width: 100%;
    height: 0;
    padding-bottom: 40%;
    position: relative;
  }

  .ttde-gallery-top-inner {
    position: absolute;
    top: 0;
    bottom: 10px;
    left: 0;
    right: 0;
    background-color: #e4e4e4;
  }

  .ttde-gallery-bottom {
    width: 100%;
    height: 0;
    padding-bottom: 30%;
    position: relative;
  }

  .ttde-gallery-col {
    width: 33.333%;
    height: 0;
    padding-bottom: 30%;
    float: left;
    position: relative;
  }

  .ttde-gallery-col-inner {
    position: absolute;
    top: 0;
    bottom: 0;
    background-color: #cecece;
  }

  .ttde-gallery-col-1 > .ttde-gallery-col-inner {
    left: 0;
    right: 5px;
  }

  .ttde-gallery-col-2 > .ttde-gallery-col-inner {
    left: 5px;
    right: 5px;
  }

  .ttde-gallery-col-3 > .ttde-gallery-col-inner {
    left: 5px;
    right: 0;
  }

  .smallery-item-uri:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(230, 51, 51, 0.6);
    opacity: 0;
    -webkit-transition: opacity 0.03s linear;
    transition: opacity 0.03s linear;
    cursor: pointer;
  }

  .smallery-item-uri:hover:after {
    opacity: 0.6;
  }

  .ttde-gallery-url {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  .ttde-gallery-url:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(230, 51, 51, 0.6);
    opacity: 0;
    -webkit-transition: opacity 0.03s linear;
    transition: opacity 0.03s linear;
  }

  .ttde-gallery-url:hover:after {
    opacity: 0.6;
  }

  .ttde-gallery-url .gatsby-image-wrapper {
    height: 100%;
    width: 100%;
  }

  .ttde-gallery-url > img {
    width: 100%;
    height: 100%;
    border: none;
  }

  .ttde-gallery-open .ttde-gallery-url {
    z-index: 5;
  }

  .ttde-gallery-open-btn {
    z-index: 1;
    text-align: center;
    vertical-align: middle;
    position: absolute;
    top: 45%;
    left: 0;
    right: 0;
    bottom: 0;
    background: -moz-linear-gradient(
      top,
      transparent 0%,
      rgba(0, 0, 0, 0.65) 100%
    );
    background: -webkit-linear-gradient(
      top,
      transparent 0%,
      rgba(0, 0, 0, 0.65) 100%
    );
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.65) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#a6000000', GradientType=0);
  }

  .ttde-gallery-open-btn > span {
    color: #fff;
    font-weight: bold;
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 15px;
    line-height: 1.2;
    display: block;
  }

  .smallery {
    max-width: 240px;
    margin: 0 auto;
  }

  .smallery img {
    object-fit: cover;
  }

  .smallery-item-wrp {
    margin-bottom: 10px;
    padding-bottom: 77%;
    height: 0;
    position: relative;
  }

  .smallery-item-psn {
    background-color: #ececec;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .smallery-item-uri {
    width: 100%;
    height: 100%;
    display: block;
  }

  .smallery-item-img {
    width: 100%;
    height: 100%;
  }

  .site-text {
    position: relative;
  }

  .site-text img {
    @media (min-width: 900px) {
      width: 32%;
    }
    @media (max-width: 900px) {
      width: 49%;
    }
    @media (max-width: 380px) {
      width: 100%;
    }
  }

  .site-text table {
    width: 90%;
    margin: 1rem auto 2rem auto;
    border-collapse: collapse;
    border-spacing: 0;
    text-align: center;
  }

  .site-text td,
  .site-text th {
    font-family: Arial, sans-serif;
    font-size: 16px;
    padding: 10px 5px;
    border-style: solid;
    border-width: 2px;
    border-color: lightgray;
    overflow: hidden;
    word-break: normal;
  }

  .site-text h3,
  .site-text h2 {
    color: #dd3030;
    font-weight: 400;
    margin-top: 0;
  }

  .site-text h4 {
    color: #23527c;
    font-weight: normal;
    font-size: 1.17em;
  }

  .site-text li a,
  .site-text h3 a {
    border-bottom: #e53132 dotted 2px;
    color: #23527c;
  }

  .site-text-less {
    position: relative;
    z-index: 5;
    height: 550px;
    overflow: hidden;
    -webkit-transition: height 0.5s linear;
    -moz-transition: height 0.5s linear;
    -ms-transition: height 0.5s linear;
    -o-transition: height 0.5s linear;
    transition: height 0.5s linear;
  }

  .site-text-less.auto {
    height: auto;
  }

  .site-text-less.auto + .site-text-more {
    display: none;
  }

  .site-text-more {
    padding-top: 150px;
    text-align: center;
    position: absolute;
    z-index: 20;
    bottom: 0;
    left: 0;
    right: 0;
    background: -moz-linear-gradient(top, rgba(255, 255, 255, 0) 0%, #fff 100%);
    background: -webkit-linear-gradient(
      top,
      rgba(255, 255, 255, 0) 0%,
      #fff 100%
    );
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      #fff 100%
    );
  }

  .site-text-more .btn {
    display: inline-block;
    width: 100%;
    max-width: 400px;
    transition: all 0.2s ease-in-out;
  }

  .site-text-more .btn:hover {
    /* color: #333; */
    border: 2px solid #161b2e;
    color: #e53132;
    /* border: 2px solid #e53132; */
    transform: scale(1.02);
  }

  .block__meta-val {
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
    color: #dd3030;
  }

  .youtube-player {
    overflow: hidden;
  }

  .youtube-player img {
    bottom: 0;
    display: block;
    left: 0;
    margin: auto;
    max-width: 100%;
    width: 100%;
    position: absolute;
    right: 0;
    top: 0;
    border: none;
    height: auto;
    cursor: pointer;
    -webkit-transition: 0.4s all;
    -moz-transition: 0.4s all;
    transition: 0.4s all;
  }

  .youtube-player .play {
    height: 72px;
    width: 72px;
    left: 50%;
    top: 50%;
    margin-left: -36px;
    margin-top: -36px;
    position: absolute;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
  }

  .youtube-player .play .i {
    width: 30px;
    height: 30px;
    fill: #dd3030;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -15px;
    margin-left: -12px;
  }

  .site-sidebar {
    height: auto;
    z-index: 15;
  }

  .site-sidebar .container {
    height: inherit;
    padding: 0;
  }

  .site-sidebar .container .row {
    height: inherit;
  }

  @media (min-width: 768px) {
    .site-sidebar {
      height: 0;
      position: fixed;
      left: 0;
      right: 0;

      animation: fadeInAnimation ease-in-out 1.5s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
    }

    @keyframes fadeInAnimation {
      0% {
        opacity: 0;
        right: -300px;
      }

      100% {
        opacity: 1;
        right: 0;
      }
    }

    @keyframes fadeOutAnimation {
      0% {
        opacity: 1;
      }

      100% {
        opacity: 0;
      }
    }

    .site-sidebar > .container {
      height: inherit;
      padding-left: 15px;
      padding-right: 15px;
    }

    .site-sidebar > .container > .row {
      height: inherit;
    }
  }

  .list-group {
    margin: 20px 0;
  }

  .list-group-item-heading > p {
    margin: 0;
  }

  .list-group-item {
    position: relative;
    display: block;
    padding: 12px 15px;
    margin-bottom: -1px;
    background-color: #fff;
    border: 1px solid #ddd;
    color: #333;
    font-size: 18px;
    font-weight: normal;
  }

  .list-group-item .i {
    fill: #dd3030;
    vertical-align: middle;
    margin-right: 5px;
  }

  .list-group-item .i + span {
    vertical-align: middle;
  }

  .list-group-item:hover {
    color: #dd3030;
  }

  .list-group-item h4,
  .list-group-item h5 {
    font-weight: inherit;
    margin: 0;
  }

  .list-group-item.active,
  .list-group-item.active:focus,
  .list-group-item.active:hover {
    z-index: 2;
    color: #333;
    background-color: #f2f7ff;
    border-color: #e53132;
    border-width: 2px;
    font-weight: bold;
    border-bottom-width: 1px;
  }

  .list-group-item:first-of-type,
  .list-group-item:first-of-type:focus,
  .list-group-item:first-of-type:hover {
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    border-bottom-width: 2px;
  }

  .list-group-item:last-child,
  .list-group-item:last-child:focus,
  .list-group-item:last-child:hover {
    border-bottom-width: 2px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .adsbygoogle-wrp {
    margin: 15px 0;
  }

  .site-footer {
    position: relative;
    z-index: 20;
    background-color: #161b2e;
    padding-top: 25px;
  }

  .site-footer .container.footer-link-container {
    text-align: center;
  }

  .site-footer .container.footer-link-container a:hover {
    color: #e53132 !important;
  }

  @media only screen and (min-width: 770px) {
    .site-footer .container.footer-link-container {
      width: 800px;
    }

    .site-footer .container.footer-link-container .col-sm-3:after {
      content: '';
      border-right: 2px solid #e53132;
      position: absolute;
      top: 20%;
      bottom: 20%;
      right: 0px;
    }

    .site-footer .container.footer-link-container .col-sm-3:last-child:after {
      content: '';
      border-right: none;
      position: absolute;
    }
  }

  .site-footer .btn {
    display: block;
    text-align: center;
    margin-bottom: 15px;
  }

  .site-footer .container + .container {
    margin-top: 25px;
  }

  .related-wrp {
    margin: 15px 0;
    padding-bottom: 15px;
    border-bottom: 2px solid #eaeaea;
  }

  .related-wrp h4 {
    margin: 0 0 15px 0;
  }

  .iconrelated {
    text-align: center;
  }

  .iconrelated-uri {
    border: 2px solid;
    border-radius: 10px;
    display: inline-block;
    padding: 5px;
    margin-bottom: 30px;
    min-height: 150px;
    color: #0c1b52;
    width: 100%;
    max-width: 250px;
    background-color: rgba(0, 87, 255, 0.05);
    border-color: #dd3030;
    -webkit-transition: background-color 200ms;
    transition: background-color 200ms;
  }

  .iconrelated-uri:hover {
    text-decoration: none;
    color: #dd3030;
    background-color: rgba(0, 87, 255, 0.2);
  }

  .iconrelated-uri:hover .iconrelated-name {
    color: #dd3030;
  }

  .iconrelated-uri:hover .iconrelated-name > .glyphicon {
    color: #dd3030;
  }

  @media (min-width: 768px) {
    .iconrelated-uri {
      padding: 15px;
      min-height: 185px;
    }
  }

  .iconrelated-name {
    margin-top: 20px;
    font-size: 14px;
    line-height: 1.2;
    color: #dd3030;
    font-weight: normal;
    color: inherit;
  }

  @media (min-width: 768px) {
    .iconrelated-name {
      font-size: 25px;
      line-height: 1.2;
      color: #dd3030;
      font-weight: normal;
      color: inherit;
    }
  }

  .iconrelated-icon {
    margin-top: 15px;
  }

  .iconrelated-icon .i {
    fill: #dd3030;
  }

  .foomenu {
    color: #fff;
    padding: 0 5px;
  }

  .foomenu-hed {
    font-size: 14px;
    margin: 0 0 10px 0;
    color: #ef7677;
    text-transform: uppercase;
  }

  .foomenu-itms {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .foomenu-itms li {
    padding-left: 5px;
  }

  .foomenu-itms li a {
    display: inline-block;
    color: inherit;
    padding: 5px;
    font-size: 14px;
    color: #dbe2ff;
  }

  .foomenu-itms li a .i {
    fill: #dbe2ff;
    margin-right: 5px;
  }

  .foomenu-itms li a:hover {
    color: #fff;
  }

  .foomenu-itms li a:hover .i {
    fill: #fff;
  }

  .xs-hide {
    display: none;
  }

  @media (min-width: 768px) {
    .xs-hide {
      display: block;
    }
  }

  .fallery {
    list-style-type: none;
    padding: 0;
    margin: 0;
    text-align: center;
  }

  .fallery li {
    width: 150px;
    position: relative;
    display: inline-block;
    margin: 0 15px 15px 0;
  }

  .fallery-inner {
    position: relative;
    padding-bottom: 77%;
    height: 0;
  }

  .container {
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
  }

  @media (min-width: 768px) {
    .container {
      width: 750px;
    }
  }

  @media (min-width: 992px) {
    .container {
      width: 970px;
    }
  }

  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }

  .container-fluid {
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
  }

  .row {
    margin-left: -15px;
    margin-right: -15px;
  }

  .col-sm-3,
  .col-sm-9,
  .col-md-4,
  .col-sm-4 {
    position: relative;
    min-height: 1px;
    padding-left: 15px;
    padding-right: 15px;
  }

  .col-xs-4 {
    position: relative;
    min-height: 1px;
    padding-left: 10px;
    padding-right: 10px;
  }

  .col-xs-4 {
    width: 33.33333333%;
    float: left;
  }

  @media (min-width: 768px) {
    .col-sm-9,
    .col-sm-3,
    .col-sm-4 {
      float: left;
    }

    .col-sm-push-9 {
      left: 75%;
    }

    .col-sm-9 {
      width: 75%;
    }

    .col-sm-3 {
      width: 25%;
    }

    .col-sm-4 {
      width: 33.33333333%;
    }
  }

  @media (min-width: 992px) {
    .col-md-4 {
      float: left;
    }

    .col-md-4 {
      width: 33.33333333%;
    }
  }

  .container:before,
  .container:after,
  .container-fluid:before,
  .container-fluid:after,
  .row:before,
  .row:after {
    content: ' ';
    display: table;
  }

  .container:after,
  .container-fluid:after,
  .row:after {
    clear: both;
  }

  .text-subhead {
    color: #23527c;
    font-weight: 400;
    font-size: 1.2em;
    line-height: 0.8em;
  }

  blockquote {
    padding: 10px 20px;
    background-color: rgba(0, 87, 255, 0.05);
    border-left: red solid 4px;
    border-radius: 5px;
  }

  blockquote p:last-child {
    margin-bottom: 0;
  }

  .interesting {
    background-color: rgb(255, 249, 249);
    border: lightgrey 1px solid;
    border-radius: 15px;
    padding: 5px 15px;
    margin-bottom: 1rem;
  }

  .interesting h4 {
    color: #e53132;
    line-height: 0.8em;
    font-weight: 400;
    font-size: 1.2em;
  }

  .interesting h4 > p {
    display: inline;
  }

  .interesting h4 > img {
    width: 1em;
    margin-bottom: -1px;
  }

  .interesting p {
    font-family: Georgia, serif;
  }

  .interest {
    color: #e53132;
    font-family: Impact, Charcoal, sans-serif;
  }

  p > a {
    color: #23527c;
    border-bottom: #e53132 dotted 2px;
  }

  .social-svg-mask {
    fill: white !important;
  }

  .social-svg:hover .social-svg-mask {
    fill: #e53132 !important;
  }

  .stuck {
    animation: fadeOutAnimation ease-in-out 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  /* QUIZ PAGE CSS */

  .container2 {
    background-color: #ecf5ff;
    width: 100vw;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 23rem 0;
  }

  .container2 > * {
    width: 100%;
    padding: 0 1rem;
  }

  .flex-column {
    display: flex;
    max-width: 45rem;
    flex-direction: column;
  }

  .flex-center {
    justify-content: center;
    align-items: center;
  }

  .justify.center {
    justify-content: center;
  }

  .text-center {
    text-align: center;
  }

  .hidden {
    display: none;
  }

  .choice-container {
    display: flex;
    margin-bottom: 0.4rem;
    width: 100%;
    font-size: 1.1rem;
    border: 0.1rem solid rgb(86, 165, 235, 0.25);
    background-color: white;
  }

  .choice-container:hover {
    cursor: pointer;
    box-shadow: 0 0.4rem 1.4rem 0 rgba(85, 185, 235, 0.5);
    transform: translateY(-0.1rem);
    transition: transform 150ms;
  }

  .choice-prefix {
    padding: 1rem 1.3rem;
    background-color: #56a5eb;
    color: white;
    margin-bottom: 0;
  }

  .choice-text {
    padding: 1rem;
    width: 100%;
    margin-bottom: 0;
  }

  .choice-text > p {
    margin-bottom: 0px;
  }

  .correct {
    background-color: #28a745;
  }

  .incorrect {
    background-color: #e53132;
  }

  #hud {
    display: flex;
    justify-content: space-between;
  }

  .hud-prefix {
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 0;
  }

  .hud-main-text {
    text-align: center;
    color: #e53132;
  }

  #progressBar {
    width: 15rem;
    height: 2rem;
    border: 0.25rem solid #56a5eb;
    margin-top: 0.3rem;
  }

  #progressBarFull {
    height: 1.5rem;
    background-color: #e53132;
    width: 50%;
  }

  #score {
    font-size: 3rem;
    color: #e53132;
  }

  .i-arrow-right use {
    fill: #dd3030;
  }

  /* QUIZ PAGE END */

  /* LIGHTBOX CSS */

  /* The Modal (background) */
  .modal {
    display: none;
    position: fixed;
    z-index: 30;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.9);
  }

  /* Modal Content */
  .modal-content {
    position: relative;
    background-color: #fefefe;
    margin: auto;
    padding: 0;
    max-width: 70%;
    width: auto;
    height: 80vh;
    max-width: 900px;
  }

  /* The Close Button */
  .close {
    color: white;
    position: absolute;
    top: 10px;
    right: 25px;
    font-size: 35px;
    font-weight: bold;
    background-color: #ffffff00;
    border: none;
  }

  .close:hover,
  .close:focus {
    color: #999;
    text-decoration: none;
    cursor: pointer;
    outline: none;
  }

  .mySlides {
    display: none;
    width: auto;
    max-height: 80vh;
    background-color: rgba(0, 0, 0, 0.98);
  }

  .gallery-image-container {
    height: 77vh;
    object-fit: contain;

    position: relative;
    display: block;
    margin: 0 auto;
  }

  @media only screen and (max-width: 992px) {
    .modal {
      padding-top: 18vh;
    }

    .mySlides,
    .modal-content {
      max-height: 55vh;
    }

    .gallery-image-container {
      height: 52.3vh;
      max-height: 52.3vh;
    }
  }

  @media only screen and (min-width: 992px) {
    .modal {
      padding-top: 15vh;
    }

    .mySlides,
    .modal-content {
      max-height: 600px;
    }

    .gallery-image-container {
      height: 550px;
      max-width: 800px;
      width: auto;
      margin: 0 auto;
      display: block;
    }
  }

  .cursor {
    cursor: pointer;
  }

  /* Next & previous buttons */
  .prev,
  .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -50px;
    color: white;
    font-weight: bold;
    font-size: 20px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
    -webkit-user-select: none;
    background-color: #ffffff00;
    border: none;
  }

  .prev:focus,
  .next:focus {
    outline: none;
  }

  /* Position the "next button" to the right */
  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }

  /* On hover, add a black background color with a little bit see-through */
  .prev:hover,
  .next:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  /* Number text (1/3 etc) */
  .numbertext {
    color: #f2f2f2;
    font-size: 12px;
    padding: 8px 12px;
    position: absolute;
    top: 0;
  }

  img {
    margin-bottom: -4px;
  }

  .caption-container {
    text-align: center;
    background-color: rgba(0, 0, 0, 0.95);
    padding: 15px 16px 2px 16px;
    color: white;
  }

  .demo {
    opacity: 0.6;
  }

  .active,
  .demo:hover {
    opacity: 1;
  }

  img.hover-shadow {
    transition: 0.3s;
  }

  .hover-shadow:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  /* LIGHTBOX CSS END */

  /* Navbar background image display */
  .nav-image img {
    display: none;
  }

  .post-page .nav-image img {
    display: block;
  }

  /* Navbar end */

  /* CMS image carousel */

  .CMSImageContainer {
    width: 100%;
    height: 450px;
  }

  .CMSinfo {
    color: #f0f0f0;
    z-index: 15;

    position: absolute;
    left: 50px;
    width: 100%;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 1200px) {
      margin: 0 2rem 0 4rem;
    }

    @media (max-width: 1000px) {
      margin: 0 2rem 0 2rem;
    }

    @media (max-width: 700px) {
      margin: 0 1rem 0 1rem;

      span {
        font-size: 2.3rem;
      }
    }

    @media (min-width: 1200px) {
      width: 1150px;
      margin: 0 auto;
    }
  }

  .CMSinfo span {
    font-size: 2.6rem;
    max-width: 500px;
  }

  .CMStitle {
    margin-bottom: 0.6rem;
    color: #f3f3f380;
    font-weight: 400;
  }

  .CMScarouselImage {
    width: 100%;
    height: 450px;
    overflow: hidden;
    object-fit: cover;
  }

  .CMSoverlayBackground {
    position: absolute;
    width: 100%;
    height: 450px;
    left: 0;
    right: 0;
    background: linear-gradient(
      to left,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(0, 0, 0, 0.7) 80%,
      rgba(0, 0, 0, 0.8) 100%
    );
  }

  /* CMS Image Carousel End */

  .BrainhubCarouselItem {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .BrainhubCarouselItem.BrainhubCarouselItem--clickable {
    cursor: pointer;
  }

  .BrainhubCarouselItem .debug-number {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    font-size: 2em;
    text-shadow: 0px 0px 9px white;
  }

  .BrainhubCarousel__container {
    width: 100%;
    overflow: hidden;
  }

  .BrainhubCarousel {
    overflow: hidden;
    display: flex;
    align-items: center;
  }

  .BrainhubCarousel.BrainhubCarousel--isRTL {
    direction: rtl;
  }

  .BrainhubCarousel.BrainhubCarousel--isRTL
    .BrainhubCarousel__trackContainer
    .BrainhubCarousel__track {
    direction: rtl;
  }

  .BrainhubCarousel .BrainhubCarousel__trackContainer {
    overflow: hidden;
  }

  .BrainhubCarousel .BrainhubCarousel__trackContainer .BrainhubCarousel__track {
    display: flex;
    overflow: hidden;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .BrainhubCarousel
    .BrainhubCarousel__trackContainer
    .BrainhubCarousel__track.BrainhubCarousel__track--transition {
    transition: transform;
  }

  .BrainhubCarousel__arrows {
    cursor: pointer;
  }

  .BrainhubCarousel__dots {
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 0;
    line-height: 0;
  }

  .BrainhubCarousel__dots.BrainhubCarousel__dots--isRTL {
    direction: rtl;
  }

  .BrainhubCarousel__dots .BrainhubCarousel__dot {
    outline: 0;
    padding: 10px;
    border: none;
    opacity: 0.5;
    font-size: 0;
    cursor: pointer;
    -webkit-appearance: none;
  }

  .BrainhubCarousel__dots
    .BrainhubCarousel__dot.BrainhubCarousel__dot--selected {
    opacity: 1 !important;
  }

  .BrainhubCarousel__dots .BrainhubCarousel__dot:hover {
    opacity: 1;
  }

  .BrainhubCarousel__dots .BrainhubCarousel__dot:before {
    content: '';
    display: block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    padding: 0;
    border: none;
    background: #000;
  }

  .BrainhubCarousel__dots .BrainhubCarousel__thumbnail {
    outline: 0;
    padding: 10px;
    border: none;
    opacity: 0.5;
    font-size: 0;
    cursor: pointer;
  }

  .BrainhubCarousel__dots
    .BrainhubCarousel__thumbnail.BrainhubCarousel__thumbnail--selected {
    opacity: 1 !important;
  }

  .BrainhubCarousel__dots .BrainhubCarousel__thumbnail:hover {
    opacity: 1;
  }

  .BrainhubCarousel__thumbnail[type='button'] {
    -webkit-appearance: none;
  }

  .BrainhubCarousel--isRTL + .BrainhubCarousel__dots {
    direction: rtl;
  }

  .BrainhubCarousel__arrows {
    position: relative;
    padding: 21px;
    border: none;
    overflow: hidden;
    outline: 0;
    font-size: 0;
    line-height: 0;
    background-color: #7b59ff;
  }

  .BrainhubCarousel__arrows span {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    border-style: solid;
    border-color: #fff;
    border-width: 3px 3px 0 0;
    padding: 5px;
    transition: 0.3s;
    font-size: 0;
  }

  .BrainhubCarousel__arrows:hover {
    background-color: #8768ff;
  }

  .BrainhubCarousel__arrows:hover span {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    border-style: solid;
    border-color: #fff;
    border-width: 3px 3px 0 0;
    padding: 5px;
    transition: 0.3s;
    font-size: 0;
  }

  .BrainhubCarousel__arrows:hover:enabled {
    background-color: #8768ff;
  }

  .BrainhubCarousel__arrows:hover:enabled span {
    border-color: #fff;
    margin: 0;
  }

  .BrainhubCarousel__arrows:disabled {
    background-color: #ccc;
  }

  .BrainhubCarousel__arrowLeft span {
    transform: translate(-50%, -50%) rotate(-135deg);
    margin-left: 2.45px;
  }

  .BrainhubCarousel__arrowRight span {
    transform: translate(-50%, -50%) rotate(45deg);
    margin-left: -2.45px;
  }

  .BrainhubCarousel--isRTL .BrainhubCarousel__arrowLeft span {
    transform: translate(-50%, -50%) rotate(45deg);
    margin-left: -2.45px;
  }

  .BrainhubCarousel--isRTL .BrainhubCarousel__custom-arrowLeft span {
    transform: rotate(180deg);
  }

  .BrainhubCarousel--isRTL .BrainhubCarousel__arrowRight span {
    transform: translate(-50%, -50%) rotate(-135deg);
    margin-left: 2.45px;
  }

  .BrainhubCarousel--isRTL .BrainhubCarousel__custom-arrowRight span {
    transform: rotate(-180deg);
  }

  .BrainhubCarousel--isRTL .BrainhubCarousel__arrows:hover span {
    margin: 0;
  }

  .BrainhubCarousel__arrow--disable {
    pointer-events: none;
  }
`

export default styles
