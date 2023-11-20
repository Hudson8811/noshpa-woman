/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Elements
const tabsContent = document.querySelectorAll(".tabs__content"),
  tabBtns = document.querySelectorAll(".tabs__tab"),
  calcRes = document.querySelectorAll(".calc__res");

// Functions
const changeActiveElement = num => tabsContent.forEach((elem, i) => i == num ? elem.style.display = "block" : elem.style.display = "none");
changeActiveElement(0);
tabBtns.forEach(item => {
  item.addEventListener("click", () => changeActiveElement(item.getAttribute("data-age")));
});

// Calculator

const calcBlockWrap = document.querySelectorAll(".calc__test_block_wrap"),
  resultBtn = document.querySelector(".calc__result"),
  calcResItem = document.querySelectorAll(".calc__res_item"),
  calcResReturn = document.querySelectorAll(".calc__res_return");
calcResItem.forEach(item => item.style.right = "-100%");
calcResItem.forEach(item => item.classList.remove('calc__res_item-active'));
calcRes.forEach(item => item.style.zIndex = "-100");

// const deleteClassItem = (item, className) => item.classList.remove(className);

function main(element = calcBlockWrap) {
  element.forEach((item, i) => {
    let calcTestItem = item.querySelectorAll(".calc__test_item");
    calcTestItem.forEach(item => item.classList.remove("calc__test_item-active"));
    calcTestItem.forEach(item => {
      item.addEventListener("click", e => {
        calcTestItem.forEach(item => item.classList.remove("calc__test_item-active"));
        item.classList.add("calc__test_item-active");
      });
    });
  });
}
main();
let countA;
let countB;
let countC;
resultBtn.addEventListener("click", function () {
  testBlock.forEach((item, i) => {
    item.style.right = "100%";
  });
  countA = 0;
  countB = 0;
  countC = 0;
  const itemNums = document.querySelectorAll(".calc__test_item");
  let bigCount = false;
  let bigCount1 = false;
  itemNums.forEach(item => {
    if (item.classList.contains("calc__test_item-active")) {
      if (Number(item.getAttribute("data-calc")) == 1) {
        countA++;
      }
      if (Number(item.getAttribute("data-calc")) == 2) {
        countB++;
      }
      if (Number(item.getAttribute("data-calc")) == 3) {
        countC++;
      }
    }
  });
  calcResItem.forEach(item => item.style.right = "-100%");
  calcResItem.forEach(item => item.classList.remove('calc__res_item-active'));
  calcRes.forEach(item => item.style.zIndex = "1");
  if (countA > countB && countA > countC) {
    calcResItem[0].style.display = "flex";
    calcResItem[0].classList.add("calc__res_item-active");
  }
  if (countA == countB && countA > countC) {
    bigCount = true;
    calcResItem[0].style.display = "flex";
    calcResItem[0].classList.add("calc__res_item-active");
  }
  if (countA > countB && countA == countC) {
    bigCount = true;
    if (!bigCount1) {
      calcResItem[0].style.display = "flex";
      calcResItem[0].classList.add("calc__res_item-active");
    }
  }
  if (countB > countA && countB > countC) {
    calcResItem[1].classList.add("calc__res_item-active");
  }
  if (countB == countA && countB > countC) {
    if (!bigCount) {
      calcResItem[1].classList.add("calc__res_item-active");
    }
  }
  if (countB > countA && countB == countC) {
    bigCount1 = true;
    calcResItem[1].classList.add("calc__res_item-active");
  }
  if (countC > countA && countC > countB) {
    calcResItem[2].classList.add("calc__res_item-active");
  }
  if (countC == countA && countC > countB) {
    if (!bigCount) {
      calcResItem[2].classList.add("calc__res_item-active");
    }
  }
  if (countC > countA && countC == countB) {
    if (!bigCount1) {
      calcResItem[2].classList.add("calc__res_item-active");
    }
  }
});
const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const blockID = anchor.getAttribute('href').substr(1);
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}
const testBlock = document.querySelectorAll(".calc__test_block");
testBlock.forEach((item, i) => i == 0 ? item.style.right = "0" : item.style.right = "-100%");
let right = 20;
testBlock.forEach((item, i) => {
  item.addEventListener("click", function () {
    if (testBlock[i + 1]) {
      item.style.right = "100%";
      item.style.scale = "0";
      testBlock[i + 1].style.right = `${right}%`;
      testBlock[i + 1].style.scale = "1";
      right = right + 20;
    } else {
      resultBtn.style.display = "block";
    }
  });
});
calcResReturn.forEach(item => {
  item.addEventListener("click", function () {
    countA = 0;
    countB = 0;
    countC = 0;
    calcResItem.forEach(item => item.style.right = "-100%");
    calcResItem.forEach(item => item.classList.remove('calc__res_item-active'));
    calcRes.forEach(item => item.style.zIndex = "-100");
    resultBtn.style.display = "none";
    testBlock.forEach((item, i) => i == 0 ? item.style.right = "0" : item.style.right = "-100%");
    testBlock.forEach((item, i) => {
      if (i == 0) {
        item.style.scale = "1";
      } else {
        item.style.scale = "0";
      }
    });
    main();
    right = 20;
  });
});

/***/ })

/******/ });
//# sourceMappingURL=script.js.map