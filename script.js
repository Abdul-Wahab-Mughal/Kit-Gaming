/**
 * Dark theme
 */
document.getElementById("dark").addEventListener("click", (e) => {
  if (e.currentTarget.checked) {
    document.body.classList.remove("dark-mode");
    document.querySelector(".logo-dark i").classList.add("fa-moon");
  } else {
    document.body.classList.add("dark-mode");
    document.querySelector(".logo-dark i").classList.remove("fa-moon");
  }
});

/**
 * Menu size
 */
{
  var menu = document.querySelector("menu");
  var body = document.querySelector("body");
  document
    .getElementById("icon-menu")
    .addEventListener("click", () => menu.classList.toggle("hover"));

  document.getElementById("mobile-icon-menu").addEventListener("click", () => {
    menu.classList.add("hover");
    body.classList.add("mobile");
  });
  document.getElementById("m-icon-menu").addEventListener("click", () => {
    menu.classList.remove("hover");
    body.classList.remove("mobile");
  });
  window.addEventListener(
    "resize",
    () => {
      if (body.clientWidth > 575) {
        menu.classList.remove("hover");
        body.classList.remove("mobile");
      }
    },
    true
  );
}

/**
 * menu feeds click
 */
{
  //
  //
  //
  //
  {
    var feed_hover = document.querySelectorAll(".feeds-button");
    for (fh of feed_hover) {
      /**
       *  mouse enter
       */
      fh.addEventListener("mouseenter", (e) => {
        e.target.addEventListener("click", (Null, os = e.target.offsetTop) => {
          document.getElementsByClassName(
            "feeds-hover"
          )[0].style = `top:${os}px`;

          document
            .querySelector(".feeds-select")
            .classList.remove("feeds-select");

          e.target.classList.add("feeds-select");
        });

        // console.log(e);

        document.getElementsByClassName(
          "feeds-hover-blur"
        )[0].style = `top:${e.target.offsetTop}px`;
      });
      /**
       *  mouse Leave
       */
      fh.addEventListener("mouseleave", () => {
        document.getElementsByClassName("feeds-hover-blur")[0].style = `top: ${
          document.getElementsByClassName("feeds-select")[0].offsetTop
        }px`;
      });
    }
  }
}
/**
 * Following
 */
{
  var following = [
    {
      name: "Dylan Hodges",
      status: "on",
    },
    {
      name: "Vincent Parks",
      status: "off",
    },
    {
      name: "Richard Bowers",
      status: "on",
    },
    {
      name: "Isaac Lambert",
      status: "off",
    },
    {
      name: "lillie nash",
      status: "on",
    },
    {
      name: "Editch Cain",
      status: "off",
    },
    {
      name: "Jerry Sherman",
      status: "on",
    },
  ];

  var foll = "";
  following.map((e) => {
    foll += `
      <div class="d-flex gap-4 align-items-center position-relative overflow-hidden text-nowrap text-capitalize px-3 me-1 h-60px">
          <i class="fa-solid fa-circle-user fa-xl"></i>
          <div class="flex-1 fs-6">${e.name}</div>
          <div>
          ${
            e.status == "on"
              ? '<i class="fa-solid fa-circle fa-2xs  position-absolute me-1"></i>'
              : '<i class="fa-solid fa-wifi"></i>'
          }
          </div>
      </div>`;
  });

  document.getElementById("following").innerHTML = foll;
}

/**
 * slider top
 */
{
  var c = 0;
  var slider_card = [
    {
      img: "https://images.hindustantimes.com/tech/img/2022/03/29/960x540/7up-v2-3840x2160-e11fc91a84d6_1645094832714_1648525798539.jpg",
      name: "fortnite",
      info: "Renegades vs spiderman <br /> League Season 26 - Playoff",
    },
    {
      img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202102/pubgmobile_1200x768.jpeg?size=690:388",
      name: "pubg",
      info: " spiderman <br /> League Season 12 - Playoff",
    },
    {
      img: "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/wzmobile/home/hero/WZM_Home_Hero-BG_LG.webp",
      name: "call of duty",
      info: "Renegades vs spiderman <br /> League Season 6 - Playoff",
    },
    {
      img: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iL8FvWpNWEAE/v1/1400x788.jpg",
      name: "God of War",
      info: "Renegades vs spiderman <br /> League Season 22 - Playoff",
    },
    {
      img: "https://miro.medium.com/v2/resize:fit:828/format:webp/0*UX3dgOTddd9mTtQK.jpg",
      name: "League of Lengends",
      info: " spiderman <br /> League Season 9 - Playoff",
    },
  ];
  var card_select = [...slider_card];
  card_select.shift();
  card_select.push(slider_card[0]);
  display();
  // left
  document.getElementById("c-left").addEventListener("click", () => {
    card_select.unshift(slider_card[c]);
    c--;
    if (c == -1) c = slider_card.length - 1;
    display();

    let card_list = document.getElementById("car-lis").classList;

    card_list.add("tran");
    setTimeout(() => {
      card_list.remove("tran");
      card_list.add("tran-res");
    }, 50);
    setTimeout(() => {
      card_list.remove("tran-res");
      card_select.pop();
      display();
    }, 400);
  });

  // right
  document.getElementById("c-right").addEventListener("click", () => {
    c++;
    if (c == slider_card.length) c = 0;
    card_select.push(slider_card[c]);

    display();
    setTimeout(() => {
      document.getElementById("car-lis").classList.add("tran");
    }, 50);
    setTimeout(() => {
      card_select.shift();
      display();
      document.getElementById("car-lis").classList.remove("tran");
    }, 400);
  });

  /**
   * display
   */
  function display() {
    var cardimg = [];
    // console.log(card_select);
    for (s in card_select) {
      cardimg += `<div class="ca-li">
        <img id="${s}"
          class="object-fit-cover rounded-3" role="button"
          src="${card_select[s].img}" alt="game" width="100px" height="60px" />
      </div>`;
    }
    document.getElementById("car-lis").innerHTML = cardimg;
    document.getElementById("c-img").src = slider_card[c].img;
    document.getElementById("c-name").innerHTML = slider_card[c].name;
    document.getElementById("c-info").innerHTML = slider_card[c].info;
  }

  /**
   *
   */
  // console.log(card_select);
  // var card_img = document.querySelectorAll("#car-lis img");
  // for (ci of card_img) {
  //   ci.addEventListener("click", (e) => {
  //     c = e.target.id;
  //     display();
  //   });
  // }
}

gsap.to(".main", {
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    // markers: true,
    start: "top -30%",
    end: "bottom -90%",
    scrub: 2,
  },
});

gsap.from("#live-show .live-card", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#live-show",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "bottom 90%",
    scrub: 5,
  },
});

gsap.from(".story_list", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#story",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 90%",
    scrub: 3,
  },
});

gsap.from(".Popular .pop-left-card", {
  x: -250,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".Popular .Popular-left",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "50% 70%",
    scrub: 3,
  },
});

gsap.from(" .Popular .Popular-card", {
  x: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".Popular",
    scroller: "body",
    // markers: true,
    start: "10% 70%",
    end: "bottom 90%",
    scrub: 3,
  },
});

gsap.from(" #Recommended-show .live-card", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#Recommended-show",
    scroller: "body",
    // markers: true,
    start: "top 90%",
    end: "50% 100%",
    scrub: 5,
  },
});
