(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function a(r){r.addEventListener("click",()=>{const n=document.createElement("textarea");n.value=r.innerHTML,document.body.appendChild(n),n.select(),document.execCommand("copy"),n.remove();const o=r.innerHTML;r.innerHTML="Copied!",setTimeout(()=>{r.innerHTML=o},1e3)})}function l(r,n){const o=new URL(window.location.href);r.innerHTML=o.searchParams.get(n)||""}function d(){window.location.href.includes("?p=")&&(document.querySelector(".generate").style.display="none"),document.querySelector("#generate").addEventListener("click",()=>{window.location.href+="?p="+document.querySelector("#param").value})}document.querySelector("#app").innerHTML=`
<div class="container">
<p id="copy-content"></p>
</div>
<div class="generate">
  <input type="text" id="param" placeholder="<input text here!/>"/>
  <button id="generate">Generate</button>
</div>
<div class="footer">
  <span>Created by <a href="https://t.me/hexonstealer" target="_blank">Hexon</a></span>
</div>
  `;l(document.querySelector("#copy-content"),"p");a(document.querySelector("#copy-content"));d();
