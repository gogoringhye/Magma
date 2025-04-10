function loco() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    },

    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
loco()
//---------------------------------------------

function scrollToTop() {
  window.scrollTo(0, 0);
}

// 페이지가 로드된 후에 호출할 수 있도록 이벤트 리스너 등록
window.onload = function () {
  // 페이지 로드 후에  맨 위로 스크롤하는 예시
  setTimeout(scrollToTop, 10);
};


//page2
let clutter = "";

//.textContent --> 텍스트 콘텐츠를 가져옴
let page2_h2 = document.querySelector('#page2>h2').textContent.split("");
page2_h2.forEach((dets) => {
  clutter += `<span>${dets}</span>`;
  document.querySelector('#page2>h2').innerHTML = clutter;
})

gsap.to("#page2>h2>span", {
  scrollTrigger: {
    trigger: "#page2>h2>span",
    start: "top bottom",
    end: "bottom top",
    scroller: "#main",
    scrub: .5,
  },
  stagger: 0.2,
  color: "#fff"
})

gsap.to("#page2>.background", {
  scrollTrigger: {
    trigger: "#page2",
    start: "top top",
    end: "bottom bottom",
    scroller: "#main",
    scrub: true,
  },
  opacity: 0
})

//page3
function canvas() {
  const canvas = document.querySelector("#page3>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
./img/frames00007.png
./img/frames00010.png
./img/frames00013.png
./img/frames00016.png
./img/frames00019.png
./img/frames00022.png
./img/frames00025.png
./img/frames00028.png
./img/frames00031.png
./img/frames00034.png
./img/frames00037.png
./img/frames00040.png
./img/frames00043.png
./img/frames00046.png
./img/frames00049.png
./img/frames00052.png
./img/frames00055.png
./img/frames00058.png
./img/frames00061.png
./img/frames00064.png
./img/frames00067.png
./img/frames00070.png
./img/frames00073.png
./img/frames00076.png
./img/frames00079.png
./img/frames00082.png
./img/frames00085.png
./img/frames00088.png
./img/frames00091.png
./img/frames00094.png
./img/frames00097.png
./img/frames00100.png
./img/frames00103.png
./img/frames00106.png
./img/frames00109.png
./img/frames00112.png
./img/frames00115.png
./img/frames00118.png
./img/frames00121.png
./img/frames00124.png
./img/frames00127.png
./img/frames00130.png
./img/frames00133.png
./img/frames00136.png
./img/frames00139.png
./img/frames00142.png
./img/frames00145.png
./img/frames00148.png
./img/frames00151.png
./img/frames00154.png
./img/frames00157.png
./img/frames00160.png
./img/frames00163.png
./img/frames00166.png
./img/frames00169.png
./img/frames00172.png
./img/frames00175.png
./img/frames00178.png
./img/frames00181.png
./img/frames00184.png
./img/frames00187.png
./img/frames00190.png
./img/frames00193.png
./img/frames00196.png
./img/frames00199.png
./img/frames00202.png
`;
    return data.split("\n")[index];
  }

  const frameCount = 67;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  console.log(images)

  gsap.to(imageSeq, {
    frame: frameCount - 1, //애니메이션의 마지막 프레임
    snap: "frame", //스크롤 위치에 따라 프레임이 변경
    ease: `none`,
    scrollTrigger: {
      scrub: .5,
      trigger: `#page3`,
      start: `top top`,
      end: `250% top`,
      scroller: `#main`, // 스크롤을 감지하는 컨테이너 엘리먼트
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    //console.log(imageSeq)
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({

    trigger: "#page3",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `250% top`,
  });
}
canvas()

// page4
let clutter2 = "";
let page4_h2 = document.querySelector('#page4>h2').textContent.split("");
page4_h2.forEach((dets) => {
  clutter2 += `<span>${dets}</span>`;
  document.querySelector('#page4>h2').innerHTML = clutter2;
})

gsap.to("#page4>h2>span", {
  scrollTrigger: {
    trigger: "#page4>h2>span",
    start: "top bottom",
    end: "bottom top",
    scroller: "#main",
    scrub: .5,
  },
  stagger: 0.2,
  color: "#fff"
})

gsap.to("#page4>.background", {
  scrollTrigger: {
    trigger: "#page4",
    start: "top top",
    end: "bottom bottom",
    scroller: "#main",
    scrub: true,
  },
  opacity: 0
})

//page5
function canvas5() {
  const canvas = document.querySelector("#page5>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `./img/bridges00004.png
./img/bridges00007.png
./img/bridges00010.png
./img/bridges00013.png
./img/bridges00016.png
./img/bridges00019.png
./img/bridges00022.png
./img/bridges00025.png
./img/bridges00028.png
./img/bridges00031.png
./img/bridges00034.png
./img/bridges00037.png
./img/bridges00040.png
./img/bridges00043.png
./img/bridges00046.png
./img/bridges00049.png
./img/bridges00052.png
./img/bridges00055.png
./img/bridges00058.png
./img/bridges00061.png
./img/bridges00064.png
./img/bridges00067.png
./img/bridges00070.png
./img/bridges00073.png
./img/bridges00076.png
./img/bridges00079.png
./img/bridges00082.png
./img/bridges00085.png
./img/bridges00088.png
./img/bridges00091.png
./img/bridges00094.png
./img/bridges00097.png
./img/bridges00100.png
./img/bridges00103.png
./img/bridges00106.png
./img/bridges00109.png
./img/bridges00112.png
./img/bridges00115.png
./img/bridges00118.png
./img/bridges00121.png
./img/bridges00124.png
./img/bridges00127.png
./img/bridges00130.png
./img/bridges00133.png
./img/bridges00136.png
./img/bridges00139.png
./img/bridges00142.png
./img/bridges00145.png
./img/bridges00148.png
./img/bridges00151.png
./img/bridges00154.png
./img/bridges00157.png
./img/bridges00160.png
./img/bridges00163.png
./img/bridges00202.png
`;
    return data.split("\n")[index];
  }

  const frameCount = 55;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  console.log(images)

  gsap.to(imageSeq, {
    frame: frameCount - 1, //애니메이션의 마지막 프레임
    snap: "frame", //스크롤 위치에 따라 프레임이 변경
    ease: `none`,
    scrollTrigger: {
      scrub: .5,
      trigger: `#page5`,
      start: `top top`,
      end: `250% top`,
      scroller: `#main`, // 스크롤을 감지하는 컨테이너 엘리먼트
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    //console.log(imageSeq)
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page5",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `250% top`,
  });
}
canvas5()

//page6
let clutter3 = "";
let page6_h2 = document.querySelector('#page6>h2').textContent.split("");
page6_h2.forEach((dets) => {
  clutter3 += `<span>${dets}</span>`;
  document.querySelector('#page6>h2').innerHTML = clutter3;
})

gsap.to("#page6>h2>span", {
  scrollTrigger: {
    trigger: "#page6>h2>span",
    start: "top bottom",
    end: "bottom top",
    scroller: "#main",
    scrub: .5,
  },
  stagger: 0.2,
  color: "#fff"
})

//page7
function canvas7() {
  const canvas = document.querySelector("#page7>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `./img/lore/1.webp
  ./img/lore/2.webp
  ./img/lore/3.webp
  ./img/lore/4.webp
  ./img/lore/5.webp
  ./img/lore/6.webp
  ./img/lore/7.webp
  ./img/lore/8.webp
  ./img/lore/9.webp
  ./img/lore/10.webp
  ./img/lore/11.webp
  ./img/lore/12.webp
  ./img/lore/13.webp
  ./img/lore/14.webp
  ./img/lore/15.webp
  ./img/lore/16.webp
  ./img/lore/17.webp
  ./img/lore/18.webp
  ./img/lore/19.webp
  ./img/lore/20.webp
  ./img/lore/21.webp
  ./img/lore/22.webp
  ./img/lore/23.webp
  ./img/lore/24.webp
  ./img/lore/25.webp
  ./img/lore/26.webp
  ./img/lore/27.webp
  ./img/lore/28.webp
  ./img/lore/29.webp
  ./img/lore/30.webp
  ./img/lore/31.webp
  ./img/lore/32.webp
  ./img/lore/33.webp
  ./img/lore/34.webp
  ./img/lore/35.webp
  ./img/lore/36.webp
  ./img/lore/37.webp
  ./img/lore/38.webp
  ./img/lore/39.webp
  ./img/lore/40.webp
  ./img/lore/41.webp
  ./img/lore/42.webp
  ./img/lore/43.webp
  ./img/lore/44.webp
  ./img/lore/45.webp
  ./img/lore/46.webp
  ./img/lore/47.webp
  ./img/lore/48.webp
  ./img/lore/49.webp
  ./img/lore/50.webp
  ./img/lore/51.webp
  ./img/lore/52.webp
  ./img/lore/53.webp
  ./img/lore/54.webp
  ./img/lore/55.webp
  ./img/lore/56.webp
  ./img/lore/57.webp
  ./img/lore/58.webp
  ./img/lore/60.webp
  ./img/lore/61.webp
  ./img/lore/62.webp
  ./img/lore/63.webp
  ./img/lore/64.webp
  ./img/lore/65.webp
  ./img/lore/66.webp
  ./img/lore/67.webp
  ./img/lore/68.webp
  ./img/lore/69.webp
  ./img/lore/70.webp
  ./img/lore/71.webp
  ./img/lore/72.webp
  ./img/lore/73.webp
  ./img/lore/74.webp
  ./img/lore/75.webp
  ./img/lore/76.webp
  ./img/lore/77.webp
  ./img/lore/78.webp
  ./img/lore/79.webp
  ./img/lore/80.webp
  ./img/lore/81.webp
  ./img/lore/82.webp
  ./img/lore/83.webp
  ./img/lore/84.webp
  ./img/lore/85.webp
  ./img/lore/86.webp
  ./img/lore/87.webp
  ./img/lore/88.webp
  ./img/lore/89.webp
  ./img/lore/90.webp
  ./img/lore/91.webp
  ./img/lore/92.webp
  ./img/lore/93.webp
  ./img/lore/94.webp
  ./img/lore/95.webp
  ./img/lore/96.webp
  ./img/lore/97.webp
  ./img/lore/98.webp
  ./img/lore/99.webp
  ./img/lore/100.webp
  ./img/lore/102.webp
  ./img/lore/103.webp
  ./img/lore/104.webp
  ./img/lore/105.webp
  ./img/lore/106.webp
  ./img/lore/107.webp
  ./img/lore/108.webp
  ./img/lore/109.webp
  ./img/lore/110.webp
  ./img/lore/111.webp
  ./img/lore/112.webp
  ./img/lore/113.webp
  ./img/lore/114.webp
  ./img/lore/115.webp
  ./img/lore/116.webp
  ./img/lore/117.webp
  ./img/lore/118.webp
  ./img/lore/119.webp
  ./img/lore/120.webp
  ./img/lore/121.webp
  ./img/lore/123.webp
  ./img/lore/124.webp
  ./img/lore/125.webp
  ./img/lore/126.webp
  ./img/lore/127.webp
  ./img/lore/128.webp
  ./img/lore/129.webp
  ./img/lore/130.webp
  ./img/lore/131.webp
  ./img/lore/132.webp
  ./img/lore/133.webp
  ./img/lore/134.webp
  ./img/lore/135.webp
  ./img/lore/136.webp
  `;
    return data.split("\n")[index];
  }

  const frameCount = 136;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  console.log(images)

  gsap.to(imageSeq, {
    frame: frameCount - 1, //애니메이션의 마지막 프레임
    snap: "frame", //스크롤 위치에 따라 프레임이 변경
    ease: `none`,
    scrollTrigger: {
      scrub: .5,
      trigger: `#page7`,
      start: `top top`,
      end: `250% top`,
      scroller: `#main`, // 스크롤을 감지하는 컨테이너 엘리먼트
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    //console.log(imageSeq)
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page7",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `250% top`,
  });
}
canvas7()

gsap.to("#page7", {
  scrollTrigger: {
    trigger: `#page7`,
    start: `top top`,
    end: `bottom 40%`,
    scroller: `#main`,
    scrub: true
  },
  opacity: 1
})
gsap.to(".page7-cir", {
  scrollTrigger: {
    trigger: `.page7-cir`,
    start: `top center`,
    end: `bottom 40%`,
    scroller: `#main`,
    scrub: 0.5
  },
  scale: 1.5,
  //circle이 커지고 난뒤 할일
  onComplete: () => {
    gsap.to(".page7-cir", {
      scrollTrigger: {
        trigger: `.page7-cir`,
        start: `bottom 20%`,
        end: `bottom top`,
        scroller: `#main`,
        scrub: 1
      },
      opacity: 0
    })

  }
})

gsap.to(".page7-cir-inner", {
  scrollTrigger: {
    trigger: `.page7-cir-inner`,
    start: `top center`,
    end: `bottom 40%`,
    scroller: `#main`,
    scrub: true
  },
  backgroundColor: `#0a3bce91`,
})

//page8
gsap.to("#page8", {
  scrollTrigger: {
    trigger: "#page8",
    start: "top top",
    end: "+=300% top",
    scroller: "#main",
    pin: true
  },

})

let clutter4 = "";

document.querySelector("#page8 h2").textContent.split("").forEach(function (dets) {
  clutter4 += `<span>${dets}</span>`

  document.querySelector("#page8 h2").innerHTML = clutter4;
})

gsap.fromTo("#page8 h2>span", {
  y: '100%',
  rotate: 30
}, {
  scrollTrigger: {
    trigger: '#page8 h2>span',
    start: 'top 80%',
    end: 'bottom center',
    scroller: "#main",
    scrub: 5
  },
  stagger: 0.2,
  rotate: 0,
  y: 0
})

gsap.fromTo('.page8-inner', {
  opacity: 0
}, {
  scrollTrigger: {
    trigger: '.page8-inner',
    start: 'top top',
    end: '+=50% top',
    scroller: "#main",
    scrub: 1,
  },
  opacity: 1,
  onComplete: () => {
    gsap.to("#page8 video", {
      scale: 1
    });
  }
})

//page11
function canvas11() {
  const canvas = document.querySelector("#page11 canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth / 5;
  canvas.height = window.innerHeight / 3.5;


  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth / 5;
    canvas.height = window.innerHeight / 3.5;
    render();
  });

  function files(index) {
    var data = `./img/roadmap/1.webp
  ./img/roadmap/2.webp
  ./img/roadmap/3.webp
  ./img/roadmap/4.webp
  ./img/roadmap/5.webp
  ./img/roadmap/6.webp
  ./img/roadmap/7.webp
  ./img/roadmap/8.webp
  ./img/roadmap/9.webp
  ./img/roadmap/10.webp
  ./img/roadmap/11.webp
  ./img/roadmap/12.webp
  ./img/roadmap/13.webp
  ./img/roadmap/14.webp
  ./img/roadmap/15.webp
  ./img/roadmap/16.webp
  ./img/roadmap/17.webp
  ./img/roadmap/18.webp
  ./img/roadmap/19.webp
  ./img/roadmap/20.webp
  ./img/roadmap/21.webp
  ./img/roadmap/22.webp
  ./img/roadmap/23.webp
  ./img/roadmap/24.webp
  ./img/roadmap/25.webp
  ./img/roadmap/26.webp
  ./img/roadmap/27.webp
  ./img/roadmap/28.webp
  ./img/roadmap/29.webp
  ./img/roadmap/30.webp
  ./img/roadmap/31.webp
  ./img/roadmap/32.webp
  ./img/roadmap/33.webp
  ./img/roadmap/34.webp
  ./img/roadmap/35.webp
  ./img/roadmap/36.webp
  ./img/roadmap/37.webp
  ./img/roadmap/38.webp
  ./img/roadmap/39.webp
  ./img/roadmap/40.webp
  ./img/roadmap/41.webp
  ./img/roadmap/42.webp
  ./img/roadmap/43.webp
  ./img/roadmap/44.webp
  ./img/roadmap/45.webp
  ./img/roadmap/46.webp
  ./img/roadmap/47.webp
  ./img/roadmap/48.webp
  ./img/roadmap/49.webp
  ./img/roadmap/50.webp
  ./img/roadmap/51.webp
  ./img/roadmap/52.webp
  ./img/roadmap/53.webp
  ./img/roadmap/54.webp
  ./img/roadmap/55.webp
  ./img/roadmap/56.webp
  ./img/roadmap/57.webp
  ./img/roadmap/58.webp
  ./img/roadmap/59.webp
  ./img/roadmap/60.webp
  ./img/roadmap/61.webp
  ./img/roadmap/62.webp
  ./img/roadmap/63.webp
  ./img/roadmap/64.webp
  ./img/roadmap/65.webp
  ./img/roadmap/66.webp
  ./img/roadmap/67.webp
  ./img/roadmap/68.webp
  ./img/roadmap/69.webp
  ./img/roadmap/70.webp
  ./img/roadmap/71.webp
  ./img/roadmap/72.webp
  ./img/roadmap/73.webp
  ./img/roadmap/74.webp
  ./img/roadmap/75.webp`;
    return data.split("\n")[index];
  }

  const frameCount = 75;

  const images = [];
  const imageSeq = {
    frame: 1,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  console.log(images)

  gsap.to(imageSeq, {
    frame: frameCount - 1, //애니메이션의 마지막 프레임
    snap: "frame", //스크롤 위치에 따라 프레임이 변경
    ease: `none`,
    scrollTrigger: {
      scrub: .2,
      trigger: `#page11 .mg-roadmap-right`,
      start: `top top`,
      end: `bottom 80%`,
      scroller: `#main`, // 스크롤을 감지하는 컨테이너 엘리먼트
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    //console.log(imageSeq)
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page11 .mg-roadmap-right",
    pin: true,
    scroller: `#main`,
    start: `top top`,
    end: `bottom 80%`,
  });
}
canvas11()

//sticky영역의 left
let mgi = document.querySelectorAll('.mg-roadmap-item');

mgi.forEach((item) => {
  let item_count = item.querySelector('.mg-roadmap-count');
  let item_title = item.querySelector('.mg-roadmap-title');
  let item_text = item.querySelector('.mg-roadmap-text');
  gsap.fromTo([item_count, item_title, item_text], {
    opacity: 0
  }, {
    scrollTrigger: {
      trigger: item,
      start: "top center",
      end: "bottom center",
      scrub: 0.5,
      scroller: "#main"
    },
    opacity: 1,
    stagger: 0.2
  })
})

//전체 background
gsap.fromTo("#main", {
  backgroundColor: "#093dcc"
}, {
  scrollTrigger: {
    trigger: "#page9",
    start: "top top",
    end: "bottom center",
    scroller: "#main",
    scrube: true,
  },
  backgroundColor: "#03268e"
})
