// 兼容平台编辑拖动
export const DragMoveMixin = {
  data() {
    return {
      /* dragMoveItemObj: {
        mx: 0,
        my: 0,
        orix: 0,
        oriy: 0,
        isMove: false,
        mousemoveCbName: "mousemove",
        mouseupCbName: "mouseup",
      }, */
    };
  },

  methods: {
    mousedownEvt(e, actItem, moveDir, opt) {
      /* const { mousemoveCbName, mouseupCbName } = opt || {};
      document.onselectstart = function () {
        return false;
      };
  
      this.dragMoveItemObj.mousemoveCbName = mousemoveCbName || "mousemove";
      this.dragMoveItemObj.mouseupCbName = mouseupCbName || "mouseup";
      this.dragMoveItemObj.moveDir = moveDir;
      this.dragMoveItemObj.mx = e.clientX;
      this.dragMoveItemObj.my = e.clientY;
      this.dragMoveItemObj.curx = actItem.position.x;
      this.dragMoveItemObj.cury = actItem.position.y;
      if (moveDir) {
        this.dragMoveItemObj.curwidth = actItem.position.width;
        this.dragMoveItemObj.curheight = actItem.position.height;
      }
      if (!this.dragMoveItemObj.isMove) {
        document.addEventListener(
          "mousemove",
          this[this.dragMoveItemObj.mousemoveCbName]
        );
        document.addEventListener(
          "mouseup",
          this[this.dragMoveItemObj.mouseupCbName]
        );
      }
      this.dragMoveItemObj.isMove = true; */
    },
    mousemoveEvt(e, actItem, scale) {
      /* if (!this.dragMoveItemObj.isMove) {
        return;
      }
      const mmx = e.clientX - this.dragMoveItemObj.mx;
      const mmy = e.clientY - this.dragMoveItemObj.my;
      if (this.dragMoveItemObj.moveDir) {
        switch (this.dragMoveItemObj.moveDir) {
          case "rightBottom":
            {
              actItem.position.width = this.dragMoveItemObj.curwidth + mmx;
              actItem.position.height = this.dragMoveItemObj.curheight + mmy;

              actItem.position.oriheight = actItem.position.height / scale;
              actItem.position.oriwidth = actItem.position.width / scale;
            }
            break;
          case "leftBottom":
            {
              actItem.position.width = this.dragMoveItemObj.curwidth - mmx;
              actItem.position.height = this.dragMoveItemObj.curheight + mmy;

              actItem.position.oriheight = actItem.position.height / scale;
              actItem.position.oriwidth = actItem.position.width / scale;

              actItem.position.x = this.dragMoveItemObj.curx + mmx;
              actItem.position.orix = actItem.position.x / scale;
            }
            break;
          case "leftTop":
            {
              actItem.position.width = this.dragMoveItemObj.curwidth - mmx;
              actItem.position.height = this.dragMoveItemObj.curheight - mmy;

              actItem.position.oriheight = actItem.position.height / scale;
              actItem.position.oriwidth = actItem.position.width / scale;

              actItem.position.x = this.dragMoveItemObj.curx + mmx;
              actItem.position.y = this.dragMoveItemObj.cury + mmy;
              actItem.position.orix = actItem.position.x / scale;
              actItem.position.oriy = actItem.position.y / scale;
            }
            break;
          case "rightTop":
            {
              actItem.position.width = this.dragMoveItemObj.curwidth + mmx;
              actItem.position.height = this.dragMoveItemObj.curheight - mmy;

              actItem.position.oriheight = actItem.position.height / scale;
              actItem.position.oriwidth = actItem.position.width / scale;

              actItem.position.y = this.dragMoveItemObj.cury + mmy;
              actItem.position.oriy = actItem.position.y / scale;
            }
            break;
          case "rightCenter":
            {
              actItem.position.width = this.dragMoveItemObj.curwidth + mmx;
              actItem.position.oriwidth = actItem.position.width / scale;
            }
            break;
          case "leftCenter":
            {
              actItem.position.width = this.dragMoveItemObj.curwidth - mmx;
              actItem.position.oriwidth = actItem.position.width / scale;

              actItem.position.x = this.dragMoveItemObj.curx + mmx;
              actItem.position.orix = actItem.position.x / scale;
            }
            break;
          case "bottomCetner":
            {
              actItem.position.height = this.dragMoveItemObj.curheight + mmy;

              actItem.position.oriheight = actItem.position.height / scale;
            }
            break;
          case "topCetner":
            {
              actItem.position.y = this.dragMoveItemObj.cury + mmx;
              actItem.position.oriy = actItem.position.y / scale;

              actItem.position.height = this.dragMoveItemObj.curheight - mmx;
              actItem.position.oriheight = actItem.position.height / scale;
            }
            break;
        }
      } else {
        // console.log("keyile?", scale);
        actItem.position.x = this.dragMoveItemObj.curx + mmx;
        actItem.position.y = this.dragMoveItemObj.cury + mmy;

        actItem.position.oriy = actItem.position.y / scale;
        actItem.position.orix = actItem.position.x / scale;
      } */
    },
    mouseupEvt(movecb) {
      /* if (movecb) {
        movecb();
      }
      this.dragMoveItemObj.isMove = false;
      this.dragMoveItemObj.moveDir = null;
      document.onselectstart = function () {
        return true;
      };
      // console.log("fff", this.dragMoveItemObj.mousemoveCbName);
      document.removeEventListener(
        "mousemove",
        this[this.dragMoveItemObj.mousemoveCbName]
      );
      document.removeEventListener(
        "mouseup",
        this[this.dragMoveItemObj.mouseupCbName]
      ); */
    },
  },
};
