// ハンバーガー
const ham = $("#js-hamburger");
const nav = $("#js-nav");

ham.on("click", function () {
  ham.toggleClass("active");
  nav.toggleClass("active");
});

// スキルページ
$(function () {
  $(".skill_explain").hover(
    function () {
      $(".skill_explain-text").fadeIn();
    },
    function () {
      $(".skill_explain-text").fadeOut();
    }
  );
});

// ローディングスピナー
window.onload = function () {
  const loader = document.querySelector(".m_load");
  loader.classList.add("m_load-after");

  const content = document.querySelector(".l_content-visible");
  content.style.visibility = "visible";
};

gsap.fromTo(
  ".top_kv__title",
  {
    duration: "1",
    autoAlpha: "0",
    x: "-500",
  },
  {
    x: "0",
    autoAlpha: "1",
    duration: "3",
  }
);

gsap.from(".js_top_about-profile", {
  duration: "0.8",
  autoAlpha: "0",
  x: "-500",
  scrollTrigger: {
    trigger: ".top_title",
    start: "top center",
  },
  stagger: {
    each: "0.3",
    from: "end",
  },
});
gsap.from(".js_top_about-career-detail", {
  duration: "1",
  autoAlpha: "0",
  y: "200",
  scrollTrigger: {
    trigger: ".top_about-tit",
    start: "top top",
  },
  stagger: {
    each: "0.3",
    from: "start",
  },
});

let skillExplain = document.querySelectorAll(".skill_explain-text");
gsap.from(skillExplain, {
  duration: 2,
  autoAlpha: 0,
  scrollTrigger: {
    trigger: "skillExplain.parentNode",
  },
  stagger: {
    each: 1,
    from: "start",
  },
});

// 実績ページのモーダル

$(function () {
  let jsWorks = $(".js_works");
  let jsModal = $(".js_modal");

  jsWorks.on("click", function () {
    $(this).children(jsModal).toggleClass("is-active");
  });
});

// アコーディオン
const faq = document.querySelectorAll(".js_faq");

faq.forEach((element) => {
  const faqA = element.querySelector(".js_faq-a");
  const mark = element.querySelector(".js_faq_mark");

  element.addEventListener("click", () => {
    if (element.classList.contains("is-active")) {
      // ①アコーディオンを閉じるときの処理を記述してください
      // ②アイコン操作用クラスを切り替える(クラスを取り除く)処理を記述してください
      // ③GSAPで作成したアニメーションを実行する関数を記述してくだい
      // ①の処理
      faqA.classList.toggle("is-active");
      //②の処理
      mark.classList.toggle("is-open");
    } else {
      // ①アコーディオンを開くときの処理を記述してください
      // ②アイコン操作用クラスを切り替える(クラスを付与)処理を記述してください
      //③GSAPで作成したアニメーションを実行する関数を記述してください
      // ①の処理
      faqA.classList.toggle("is-active");
      // ②の処理
      mark.classList.toggle("is-open");
    }
  });
});

// トップページの実績
gsap.from(".top_work-item", {
  duration: "1.5",
  autoAlpha: "0",
  y: "400",
  scrollTrigger: {
    trigger: ".top_work-list",
    start: "top center",
  },
  stagger: {
    each: "0.5",
    from: "start",
  },
});

let mySwiper = new Swiper(".swiper", {
  // オプション設定
  loop: true,
  autoplay: {
    delay: 3000,
  },
  // 以下のコードは省略可能
  //ページネーション表示設定
  pagination: {
    el: ".swiper-pagination", //ページネーション要素
    type: "bullets", //ページネーションの種類
    clickable: true, //クリックに反応させる
  },

  //ナビゲーションボタン（矢印）表示の設定
  navigation: {
    nextEl: ".swiper-button-next", //「次へボタン」要素の指定
    prevEl: ".swiper-button-prev", //「前へボタン」要素の指定
  },

  //スクロールバー表示の設定
  scrollbar: {
    el: ".swiper-scrollbar", //要素の指定
  },
  //ここまで省略可能
});
