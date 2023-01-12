// ==UserScript==
// @name         AtJumpCanceler
// @namespace    AtJumpCanceler
// @version      0.0.1
// @description  Cancel AtJump on Niconico.
// @author       ymmtmdk
// @license      MIT License
// @match        https://www.nicovideo.jp/watch/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  const config = { attributes: true, childList: true, subtree: true };
  const targetNode = document.getElementsByClassName("VideoContainer")[0];
  console.debug(targetNode);
  const callback = function(mutationsList, observer) {
    for(const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        for(const node of mutation.addedNodes) {
          if (node.className == 'VideoChangeConfirmationContainer') {
            console.debug(node);
            const button = node.getElementsByClassName("AtJumpConfirmationView-cancelButton")[0];
            console.debug(button);
            button.click();
          }
        }
      }
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
})();

