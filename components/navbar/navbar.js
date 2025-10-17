export function navbar() {
  const pathPrefix = window.location.pathname.includes("/pages/")
    ? "../components/Images/"
    : "./components/Images/";
  return `
  <div class="navbar-top">
    <div class="navbar-left">
      <div class="nav-checkbtn">
        <span class="material-symbols-outlined"> menu </span>
      </div>
    </div>
    <div class="navbar-center" role="presentation">
      <img
        src="${pathPrefix}navbar-hero.svg"
        alt="맛있는 치킨 60계 브랜드 이미지"
        id="navbar-kfc-logo"
        class="navbar-brand-banner"
      />
    </div>
    <div class="navbar-right">
      <img
        class="man-icon hide-item"
        id="navbar-man-icon"
        src="https://images.ctfassets.net/wtodlh47qxpt/6bJdGLRkksNvWP4LI9ZiFF/cb89d6393492fd093e0f99980abfa39e/Account_Icon.svg"
        alt="마이페이지"
      />
      <p id="navbar-account" class="account hide-item">마이페이지</p>
      <p id="navbar-price">₩0</p>
      <img
        id="navbar-cart-bucket"
        src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg"
        alt="장바구니"
      />
    </div>
  </div>
  <div class="navbar-bottom">
    <p id="navbar-menu" class="navbar-link hide-item">메뉴</p>
    <a class="navbar-link hide-item" href="#store-info">매장</a>
    <a class="navbar-link hide-item" href="#order">가맹문의</a>
    <a class="navbar-link hide-item" href="#store">보도자료</a>
    <a class="navbar-link hide-item" href="#benefit">이벤트</a>
    <a class="navbar-link hide-item" href="#footer">고객센터</a>
  </div>`;
}

document.querySelector(".navbar").innerHTML = navbar();

//import code sample

// import  {navbar} from "./demo.js"
// let na = document.querySelector(".navbar");
// na.innerHTML = navbar();


// 2. Dont' forget to add type="module" in your script tag
