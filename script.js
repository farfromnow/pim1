'use strict';


function blankChange() {
    var x = document.getElementById("blank");
    let Colors = ["azure", "bisque", "seashell", "salmon", "powderblue"];
    var cNum = Math.floor(Math.random() * (Colors.length));
    let Loves = ["Kai of EXO", "Tattoos", "Typography", "Instagramming", "Rommance", "Movies", "Music Videos", "Webtoon"];
    var lNum = Math.floor(Math.random() * (Loves.length));
    x.style.color = Colors[cNum];
    x.innerHTML = Loves[lNum];
}

function changeToo() {
    var x = document.getElementById("category");
    var y = document.getElementById("blank");

    x.innerHTML = y.innerHTML;
}

$(window).load(function () {
            $('#load').hide();
});

module.exports = {
    "env": {
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [2, 2],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
    

console.clear();

const flameFrag = document.querySelector("#flame-frag").textContent;
const baseUrl = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/106114/";

const manifest = [
  { name: "noise", url: "noise-texture-11.png?v=9" }
];


//
// FLAME FILTER
// ===========================================================================
class FlameFilter extends PIXI.Filter {
  
  constructor(texture, time = 0.0) {    
    super(null, flameFrag);
       
    this.uniforms.dimensions = new Float32Array(2);   
    this.texture = texture;
    this.time = time;
  }
  
  get texture() {
    return this.uniforms.mapSampler;
  }
  
  set texture(texture) {
    texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    this.uniforms.mapSampler = texture;
  }
  
  apply(filterManager, input, output, clear) {
          
    this.uniforms.dimensions[0] = input.sourceFrame.width;
    this.uniforms.dimensions[1] = input.sourceFrame.height;    
    this.uniforms.time = this.time;

    filterManager.applyFilter(this, input, output, clear);
  }
}


//
// APPLICATION
// ===========================================================================
class Application extends PIXI.Application {
    
  constructor() {
    
    if (window.devicePixelRatio > 1) {
      PIXI.settings.RESOLUTION = 2;
    }
    
    PIXI.settings.PRECISION_FRAGMENT = "highp";
    
    super({
      view: document.querySelector("#view"),
      width: window.innerWidth,
      height: window.innerHeight,
      backgroundColor: 0x000000,
      autoResize: true
    });   
    
    this.isResized = true;    
    this.loader.baseUrl = baseUrl;   
  }
    
  load(manifest) {
    
    this.loader
      .add(manifest)
      .load((l, r) => this.init(r));   
  }
    
  init(resources) {     
        
    this.flame = new FlameFilter(resources.noise.texture);
       
    this.stage.filterArea = this.screen;
    this.stage.filters = [this.flame];
       
    this.ticker.add(this.update, this);                     
    window.addEventListener("resize", () => this.isResized = true);
  }
   
  update(delta) {
    
    if (this.isResized) {
      this.renderer.resize(window.innerWidth, window.innerHeight);
      this.isResized = false;
    }
    
    this.flame.time += 0.1 * delta;
  }
}

const app = new Application();
app.load(manifest);

  /* Demo purposes only */
  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );

$(".popup").click(function () {
    var $this = $(this);
    var $iframe = $("<iframe>").attr("src", $this.data("link")).css({"width": 400, "height": 300});
    var $title = $("<h1>").text($this.data("title"));
    $("#video-view").html($title).append($iframe);
    $iframe.wrap("<div class='class-video'>");
});