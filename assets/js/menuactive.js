// $(function () {
//   SetNavBarActive();
// });

function SetNavBarActive() {
  var pageName = document.location.pathname;
  var navs = $(".main-menu .menu-list li");

  // var mobileNav = $(
  //   "#sticky-header.tg-header__area .tgmobile__menu .navigation li"
  // );
  var mobileNav = $("mobile-logo-area .tgmobile__menu .navigation li");
  if (pageName.indexOf("index") > -1) {
    $(navs).eq(0).addClass("active");

    $(mobileNav).eq(0).addClass("active");
  } else if (pageName.indexOf("about") > -1) {
    $(navs).eq(1).addClass("active");

    // $(navs).eq(1).find("a").eq(1).addClass("active");
    // $(mobileNav).eq(1).addClass("active");
  } else if (pageName.indexOf("testimonoals") > -1) {
    $(navs).eq(21).addClass("active");

    // $(navs).eq(1).find("a").eq(2).addClass("active");
    // $(mobileNav).eq(1).addClass("active");
  } else if (pageName.indexOf("contact") > -1) {
    $(navs).eq(22).addClass("active");

    $(navs).eq(1).find("a").eq(3).addClass("active");
    // $(mobileNav).eq(1).addClass("active");
  }
  // 6
  else if (pageName.indexOf("dubai") > -1) {
    $(navs).eq(2).addClass("active");
  } else if (pageName.indexOf("turkiye") > -1) {
    $(navs).eq(2).addClass("active");
  } else if (pageName.indexOf("turkey") > -1) {
    $(navs).eq(2).addClass("active");
  } else if (pageName.indexOf("turkiye") > -1) {
    $(navs).eq(2).addClass("active");
  } else if (pageName.indexOf("Europe") > -1) {
    $(navs).eq(2).addClass("active");
  } else if (pageName.indexOf("turkiye") > -1) {
    $(navs).eq(2).addClass("active");
  }
  //dubai
  else if (pageName.indexOf("dubai_travel-package-detail_01") > -1) {
    $(navs).eq(2).addClass("active");
  } else if (pageName.indexOf("dubai_travel-package-detail_02") > -1) {
    $(navs).eq(2).addClass("active");
  } else if (pageName.indexOf("dubai_travel-package-detail_03") > -1) {
    $(navs).eq(2).addClass("active");
  } else if (pageName.indexOf("dubai_travel-package-detail_04") > -1) {
    $(navs).eq(2).addClass("active");
  } else if (pageName.indexOf("dubai_travel-package-detail_05") > -1) {
    $(navs).eq(2).addClass("active");
  } else if (pageName.indexOf("dubai_travel-package-detail_06") > -1) {
    $(navs).eq(2).addClass("active");
  }
  //europe
  else if (pageName.indexOf("europe_travel-package-detail_01") > -1) {
    $(navs).eq(2).addClass("active");
  } else if (pageName.indexOf("europe_travel-package-detail_02") > -1) {
    $(navs).eq(2).addClass("active");
  } else if (pageName.indexOf("europe_travel-package-detail_03") > -1) {
    $(navs).eq(2).addClass("active");
  } else if (pageName.indexOf("europe_travel-package-detail_04") > -1) {
    $(navs).eq(2).addClass("active");
  } else if (pageName.indexOf("europe_travel-package-detail_05") > -1) {
    $(navs).eq(2).addClass("active");
  } else if (pageName.indexOf("europe_travel-package-detail_06") > -1) {
    $(navs).eq(2).addClass("active");
  }

  //malaysia
  else if (pageName.indexOf("malaysia_travel-package-detail_01") > -1) {
    $(navs).eq(2).addClass("active");
  } else if (pageName.indexOf("malaysia_travel-package-detail_02") > -1) {
    $(navs).eq(2).addClass("active");
  } else if (pageName.indexOf("malaysia_travel-package-detail_03") > -1) {
    $(navs).eq(2).addClass("active");
  } else if (pageName.indexOf("malaysia_travel-package-detail_04") > -1) {
    $(navs).eq(2).addClass("active");
  } else if (pageName.indexOf("malaysia_travel-package-detail_05") > -1) {
    $(navs).eq(2).addClass("active");
  } else if (pageName.indexOf("malaysia_travel-package-detail_06") > -1) {
    $(navs).eq(2).addClass("active");
  }

  //singapore
  else if (pageName.indexOf("singapore_travel-package-detail_01") > -1) {
    $(navs).eq(2).addClass("active");
  } else if (pageName.indexOf("singapore_travel-package-detail_02") > -1) {
    $(navs).eq(2).addClass("active");
  } else if (pageName.indexOf("singapore_travel-package-detail_03") > -1) {
    $(navs).eq(2).addClass("active");
  } else if (pageName.indexOf("singapore_travel-package-detail_04") > -1) {
    $(navs).eq(2).addClass("active");
  } else if (pageName.indexOf("singapore_travel-package-detail_05") > -1) {
    $(navs).eq(2).addClass("active");
  } else if (pageName.indexOf("singapore_travel-package-detail_06") > -1) {
    $(navs).eq(2).addClass("active");
  }

  //thailand
  else if (pageName.indexOf("thailand_travel-package-detail_01") > -1) {
    $(navs).eq(2).addClass("active");
  } else if (pageName.indexOf("thailand_travel-package-detail_02") > -1) {
    $(navs).eq(2).addClass("active");
  } else if (pageName.indexOf("thailand_travel-package-detail_03") > -1) {
    $(navs).eq(2).addClass("active");
  } else if (pageName.indexOf("thailand_travel-package-detail_04") > -1) {
    $(navs).eq(2).addClass("active");
  } else if (pageName.indexOf("thailand_travel-package-detail_05") > -1) {
    $(navs).eq(2).addClass("active");
  } else if (pageName.indexOf("thailand_travel-package-detail_06") > -1) {
    $(navs).eq(2).addClass("active");
  }

  //turkiye
  else if (pageName.indexOf("turkiye_travel-package-detail_01") > -1) {
    $(navs).eq(2).addClass("active");
  } else if (pageName.indexOf("turkiye_travel-package-detail_02") > -1) {
    $(navs).eq(2).addClass("active");
  } else if (pageName.indexOf("turkiye_travel-package-detail_03") > -1) {
    $(navs).eq(2).addClass("active");
  } else if (pageName.indexOf("turkiye_travel-package-detail_04") > -1) {
    $(navs).eq(2).addClass("active");
  } else if (pageName.indexOf("turkiye_travel-package-detail_05") > -1) {
    $(navs).eq(2).addClass("active");
  } else if (pageName.indexOf("turkiye_travel-package-detail_06") > -1) {
    $(navs).eq(2).addClass("active");
  }
}
