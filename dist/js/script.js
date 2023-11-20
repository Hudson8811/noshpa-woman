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
  tabBtns = document.querySelectorAll(".tabs__tab");

// Functions
const changeActiveElement = num => tabsContent.forEach((elem, i) => i == num ? elem.style.display = "block" : elem.style.display = "none");
changeActiveElement(0);
tabBtns.forEach(item => {
  item.addEventListener("click", () => changeActiveElement(item.getAttribute("data-age")));
});

// Calculator

const calcBlockWrap = document.querySelectorAll(".calc__test_block_wrap"),
  resultBtn = document.querySelector(".calc__result"),
  calcResItem = document.querySelectorAll(".calc__res_item");
calcResItem.forEach(item => item.style.display = "none");

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
resultBtn.addEventListener("click", function () {
  const itemNums = document.querySelectorAll(".calc__test_item");
  let countA = 0;
  let countB = 0;
  let countC = 0;
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
  calcResItem.forEach(item => item.style.display = "none");
  if (countA > countB && countA > countC) {
    calcResItem[0].style.display = "flex";
  }
  if (countA == countB && countA > countC) {
    bigCount = true;
    calcResItem[0].style.display = "flex";
  }
  if (countA > countB && countA == countC) {
    if (!bigCount1) {
      calcResItem[0].style.display = "flex";
    }
  }
  if (countB > countA && countB > countC) {
    calcResItem[1].style.display = "flex";
  }
  if (countB == countA && countB > countC) {
    if (!bigCount) {
      calcResItem[1].style.display = "flex";
    }
  }
  if (countB > countA && countB == countC) {
    bigCount1 = true;
    calcResItem[1].style.display = "flex";
  }
  if (countC > countA && countC > countB) {
    calcResItem[2].style.display = "flex";
  }
  if (countC == countA && countC > countB) {
    if (!bigCount) {
      calcResItem[2].style.display = "flex";
    }
  }
  if (countC > countA && countC == countB) {
    if (!bigCount1) {
      calcResItem[2].style.display = "flex";
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

/***/ })

/******/ });
//# sourceMappingURL=script.js.map