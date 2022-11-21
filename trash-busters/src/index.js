import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/App.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
(function()
{
  const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))
  return;
  for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>
    {
      for(const t of e)if(t.type==="childList")
      for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)
    }).observe(document,{
      childList:!0,subtree:!0
    });
    function i(e)
    {
      const t={};
      return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),
      e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t
    }
    function n(e){if(e.ep)
      return;
      e.ep=!0;const t=i(e);
      fetch(e.href,t)
    }
  })();

function l()
{
  new google.maps.Map(document.getElementById("map"),
  {center:{lat:-34.397,lng:150.644},zoom:8})
}
  window.initMap=l;

//reportWebVitals();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
