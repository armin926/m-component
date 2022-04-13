<!--
 * @Descripttion: 首页
 * @Author: armin
 * @Date: 2022-01-05 10:19:38
 * @LastEditors: armin
 * @LastEditTime: 2022-02-25 17:15:49
-->
<template>
  <div class="table">
    <div class="table-body">
      <div class="table-col">
        <div class="table-row" style="top: 0; left: 0">
          <div class="participant top">
            <span>大罗</span>
            <svg class="poly-svg-right">
              <polyline
                points="120,15 130,15 130,55 120,55"
                class="poly-line"
              ></polyline>
            </svg>
          </div>
          <div class="participant">小罗</div>
          <svg class="across-svg-right">
            <line x1="0" y1="0" x2="16" y2="0" class="in-line"></line>
          </svg>
        </div>
        <div class="table-row" style="top: 89px; left: 0">
          <div class="participant top">
            <span>小小罗</span>
            <svg class="poly-svg-right">
              <polyline
                points="120,15 130,15 130,55 120,55"
                class="poly-line"
              ></polyline>
            </svg>
          </div>
          <div class="participant">迷你罗</div>
          <svg class="across-svg-right">
            <line x1="0" y1="0" x2="16" y2="0" class="in-line"></line>
          </svg>
        </div>
        <div class="table-row" style="top: 178px; left: 0">
          <div class="participant top">
            <span>大罗</span>
            <svg class="poly-svg-right">
              <polyline
                points="120,15 130,15 130,55 120,55"
                class="poly-line"
              ></polyline>
            </svg>
          </div>
          <div class="participant">小罗</div>
          <svg class="across-svg-right">
            <line x1="0" y1="0" x2="16" y2="0" class="in-line"></line>
          </svg>
        </div>
        <div class="table-row" style="top: 267px; left: 0">
          <div class="participant top">
            <span>小小罗</span>
            <svg class="poly-svg-right">
              <polyline
                points="120,15 130,15 130,55 120,55"
                class="poly-line"
              ></polyline>
            </svg>
          </div>
          <div class="participant">迷你罗</div>
          <svg class="across-svg-right">
            <line x1="0" y1="0" x2="16" y2="0" class="in-line"></line>
          </svg>
        </div>
      </div>
      <div class="table-col">
        <div class="table-row" style="top: 44.5px; left: 160px">
          <div>
            <svg class="across-svg-left">
              <line class="in-line" x1="0" y1="0" x2="15" y2="0"></line>
            </svg>
            <div class="participant top">
              <svg class="poly-svg-left">
                <polyline
                  points="12,15 2,15 2,55 12,55"
                  class="poly-line"
                ></polyline>
              </svg>
              <span>小罗</span>
              <svg class="poly-svg-right">
                <polyline
                  points="120,15 130,15 130,55 120,55"
                  class="poly-line"
                ></polyline>
              </svg>
            </div>
            <div class="participant">迷你罗</div>
            <svg class="across-svg-right">
              <line x1="0" y1="0" x2="16" y2="0" class="in-line"></line>
            </svg>
          </div>
          <div>
            <svg class="connect-svg" style="top: -18.5px; height: 89px">
              <line class="in-line" x1="0" y1="0" x2="0" y2="89"></line>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue"

const checkNum = (num: number) => {
  let count = 0
  while (num !== 1) {
    if (~~(num / 2)) {
      num = ~~(num / 2)
      count++
      console.log(count);
      
    } else {
      return count
    }
    return count
  }
}
onMounted(() => {
  const res = checkNum(4)
  console.log(res)
})
</script>

<style lang="scss">
.table {
  width: 800px;
  height: 800px;
  border: 1px solid #eee;
  overflow: hidden;
  padding-left: 16px;
  padding-top: 16px;
  &-body {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    display: flex;

    .participant {
      width: 110px;
      height: 25px;
      background: #fff;
      border: 1px solid #979797;
      border-left-color: #027aff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 7px;
      font-size: 12px;
      font-weight: 400;
      color: #333;
      line-height: 17px;
      position: relative;
      box-sizing: border-box;
    }
    .top {
      margin-bottom: 5px;
    }
  }
  &-col {
    margin-right: 60px;
  }
  &-row {
    position: absolute;
  }
}
.poly-svg-right {
  position: absolute;
  top: -8px;
  left: -11px;
}
.poly-svg-left {
  position: absolute;
  top: -8px;
  left: -13px;
}
.poly-line {
  fill: none;
  stroke: #cbcbcb;
  stroke-width: 1;
  shape-rendering: crispEdges;
}
.across-svg-right {
  position: absolute;
  top: 26px;
  left: 120px;
}
.in-line {
  fill: none;
  stroke: #cbcbcb;
  stroke-width: 2;
}
.across-svg-left {
  position: absolute;
  top: 26px;
  left: -25px;
}
.connect-svg {
  position: absolute;
  top: 0;
  left: -25px;
}
</style>
