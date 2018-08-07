import {ResourcesLoader} from './js/base/ResourcesLoader.js'
import {Director} from './js/Director.js'
import {BackGround} from './js/runtime/BackGround.js'
import {Land} from './js/runtime/Land.js'
import {Birds} from './js/player/Birds.js'
import {StartButton} from './js/player/StartButton.js'
import {DataStore} from './js/base/DataStore.js'
import {Score} from './js/player/Score.js'
// 游戏开始入口
export class Main{
  constructor() {
    this.canvas = document.getElementById('game_canvas');
    this.ctx = this.canvas.getContext('2d');
    this.dataStore = DataStore.getInstance();
    this.director = Director.getInstance();
    const loader = ResourcesLoader.create();
    loader.onLoaded(map => this.onResourcesFirstLoaded(map));
  }

  onResourcesFirstLoaded(map) {
    this.dataStore.ctx = this.ctx;
     this.dataStore.res = map;
    this.init();
  }
  init() {
    // 游戏结束状态
    this.director.isGameOver = false;
    this.dataStore
        .put('pencils',  [])
        .put('background', new BackGround())
        .put('land',new Land())
        .put('birds',new Birds())
        .put('score',new Score())
        .put('startButton',new StartButton());
    this.registerEvent();
    // 创建铅笔在游戏逻辑运行之前
    this.director.createPencil();
    this.director.run();
  }
  registerEvent() {
    this.canvas.addEventListener('touchstart', e => {
      e.preventDefault();
      if(this.director.isGameOver){
        this.init();
      }else {
        this.director.birdsEvent()
      }
    })
  }
}