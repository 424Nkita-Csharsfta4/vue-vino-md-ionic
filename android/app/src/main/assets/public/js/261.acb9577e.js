"use strict";(self["webpackChunkvino_md"]=self["webpackChunkvino_md"]||[]).push([[261],{4261:(t,e,n)=>{n.r(e),n.d(e,{MENU_BACK_BUTTON_PRIORITY:()=>a,OVERLAY_BACK_BUTTON_PRIORITY:()=>o,blockHardwareBackButton:()=>r,startHardwareBackButton:()=>i});
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const r=()=>{document.addEventListener("backbutton",(()=>{}))},i=()=>{const t=document;let e=!1;t.addEventListener("backbutton",(()=>{if(e)return;let n=0,r=[];const i=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register(t,e){r.push({priority:t,handler:e,id:n++})}}});t.dispatchEvent(i);const o=async t=>{try{if(null===t||void 0===t?void 0:t.handler){const e=t.handler(a);null!=e&&await e}}catch(e){console.error(e)}},a=()=>{if(r.length>0){let t={priority:Number.MIN_SAFE_INTEGER,handler:()=>{},id:-1};r.forEach((e=>{e.priority>=t.priority&&(t=e)})),e=!0,r=r.filter((e=>e.id!==t.id)),o(t).then((()=>e=!1))}};a()}))},o=100,a=99}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvMjYxLmFjYjk1NzdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFhQSxNQUFNQSxFQUEwQixLQUM5QkMsU0FBU0MsaUJBQWlCLGNBQWMsUUFBVSxFQUU5Q0MsRUFBMEIsS0FDOUIsTUFBTUMsRUFBTUgsU0FDWixJQUFJSSxHQUFPLEVBQ1hELEVBQUlGLGlCQUFpQixjQUFjLEtBQ2pDLEdBQUlHLEVBQ0YsT0FFRixJQUFJQyxFQUFRLEVBQ1JDLEVBQVcsR0FDZixNQUFNQyxFQUFLLElBQUlDLFlBQVksZ0JBQWlCLENBQzFDQyxTQUFTLEVBQ1RDLE9BQVEsQ0FDTkMsU0FBU0MsRUFBVUMsR0FDakJQLEVBQVNRLEtBQUssQ0FBRUYsV0FBVUMsVUFBU0UsR0FBSVYsS0FDekMsS0FHSkYsRUFBSWEsY0FBY1QsR0FDbEIsTUFBTVUsRUFBZ0JDLE1BQU9DLElBQzNCLElBQ0UsR0FBd0IsT0FBcEJBLFFBQWdELElBQXBCQSxPQUE2QixFQUFTQSxFQUFnQk4sUUFBUyxDQUM3RixNQUFNTyxFQUFTRCxFQUFnQk4sUUFBUVEsR0FDekIsTUFBVkQsU0FDSUEsQ0FFVixDQUlGLENBRkEsTUFBT0UsR0FDTEMsUUFBUUMsTUFBTUYsRUFDaEIsR0FFSUQsRUFBa0IsS0FDdEIsR0FBSWYsRUFBU21CLE9BQVMsRUFBRyxDQUN2QixJQUFJQyxFQUFrQixDQUNwQmQsU0FBVWUsT0FBT0MsaUJBQ2pCZixRQUFTLEtBQWUsRUFDeEJFLElBQUssR0FFUFQsRUFBU3VCLFNBQVNoQixJQUNaQSxFQUFRRCxVQUFZYyxFQUFnQmQsV0FDdENjLEVBQWtCYixFQUNwQixJQUVGVCxHQUFPLEVBQ1BFLEVBQVdBLEVBQVN3QixRQUFRakIsR0FBWUEsRUFBUUUsS0FBT1csRUFBZ0JYLEtBQ3ZFRSxFQUFjUyxHQUFpQkssTUFBSyxJQUFPM0IsR0FBTyxHQUNwRCxHQUVGaUIsR0FBaUIsR0FDakIsRUFFRVcsRUFBK0IsSUFDL0JDLEVBQTRCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aW5vLW1kLy4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2NvbXBvbmVudHMvaGFyZHdhcmUtYmFjay1idXR0b24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiAoQykgSW9uaWMgaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbSAtIE1JVCBMaWNlbnNlXG4gKi9cbi8qKlxuICogV2hlbiBoYXJkd2FyZUJhY2tCdXR0b246IGZhbHNlIGluIGNvbmZpZyxcbiAqIHdlIG5lZWQgdG8gbWFrZSBzdXJlIHdlIGFsc28gYmxvY2sgdGhlIGRlZmF1bHRcbiAqIHdlYnZpZXcgYmVoYXZpb3IuIElmIHdlIGRvbid0IHRoZW4gaXQgd2lsbCBiZVxuICogcG9zc2libGUgZm9yIHVzZXJzIHRvIG5hdmlnYXRlIGJhY2t3YXJkIHdoaWxlXG4gKiBhbiBvdmVybGF5IGlzIHN0aWxsIG9wZW4uIEFkZGl0aW9uYWxseSwgaXQgd2lsbFxuICogZ2l2ZSB0aGUgYXBwZWFyYW5jZSB0aGF0IHRoZSBoYXJkd2FyZUJhY2tCdXR0b25cbiAqIGNvbmZpZyBpcyBub3Qgd29ya2luZyBhcyB0aGUgcGFnZSB0cmFuc2l0aW9uXG4gKiB3aWxsIHN0aWxsIGhhcHBlbi5cbiAqL1xuY29uc3QgYmxvY2tIYXJkd2FyZUJhY2tCdXR0b24gPSAoKSA9PiB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JhY2tidXR0b24nLCAoKSA9PiB7IH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG59O1xuY29uc3Qgc3RhcnRIYXJkd2FyZUJhY2tCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IGRvYyA9IGRvY3VtZW50O1xuICBsZXQgYnVzeSA9IGZhbHNlO1xuICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignYmFja2J1dHRvbicsICgpID0+IHtcbiAgICBpZiAoYnVzeSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGxldCBoYW5kbGVycyA9IFtdO1xuICAgIGNvbnN0IGV2ID0gbmV3IEN1c3RvbUV2ZW50KCdpb25CYWNrQnV0dG9uJywge1xuICAgICAgYnViYmxlczogZmFsc2UsXG4gICAgICBkZXRhaWw6IHtcbiAgICAgICAgcmVnaXN0ZXIocHJpb3JpdHksIGhhbmRsZXIpIHtcbiAgICAgICAgICBoYW5kbGVycy5wdXNoKHsgcHJpb3JpdHksIGhhbmRsZXIsIGlkOiBpbmRleCsrIH0pO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBkb2MuZGlzcGF0Y2hFdmVudChldik7XG4gICAgY29uc3QgZXhlY3V0ZUFjdGlvbiA9IGFzeW5jIChoYW5kbGVyUmVnaXN0ZXIpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChoYW5kbGVyUmVnaXN0ZXIgPT09IG51bGwgfHwgaGFuZGxlclJlZ2lzdGVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBoYW5kbGVyUmVnaXN0ZXIuaGFuZGxlcikge1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGhhbmRsZXJSZWdpc3Rlci5oYW5kbGVyKHByb2Nlc3NIYW5kbGVycyk7XG4gICAgICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgICAgICBhd2FpdCByZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgcHJvY2Vzc0hhbmRsZXJzID0gKCkgPT4ge1xuICAgICAgaWYgKGhhbmRsZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IHNlbGVjdGVkSGFuZGxlciA9IHtcbiAgICAgICAgICBwcmlvcml0eTogTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVIsXG4gICAgICAgICAgaGFuZGxlcjogKCkgPT4gdW5kZWZpbmVkLFxuICAgICAgICAgIGlkOiAtMSxcbiAgICAgICAgfTtcbiAgICAgICAgaGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgIGlmIChoYW5kbGVyLnByaW9yaXR5ID49IHNlbGVjdGVkSGFuZGxlci5wcmlvcml0eSkge1xuICAgICAgICAgICAgc2VsZWN0ZWRIYW5kbGVyID0gaGFuZGxlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBidXN5ID0gdHJ1ZTtcbiAgICAgICAgaGFuZGxlcnMgPSBoYW5kbGVycy5maWx0ZXIoKGhhbmRsZXIpID0+IGhhbmRsZXIuaWQgIT09IHNlbGVjdGVkSGFuZGxlci5pZCk7XG4gICAgICAgIGV4ZWN1dGVBY3Rpb24oc2VsZWN0ZWRIYW5kbGVyKS50aGVuKCgpID0+IChidXN5ID0gZmFsc2UpKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHByb2Nlc3NIYW5kbGVycygpO1xuICB9KTtcbn07XG5jb25zdCBPVkVSTEFZX0JBQ0tfQlVUVE9OX1BSSU9SSVRZID0gMTAwO1xuY29uc3QgTUVOVV9CQUNLX0JVVFRPTl9QUklPUklUWSA9IDk5OyAvLyAxIGxlc3MgdGhhbiBvdmVybGF5IHByaW9yaXR5IHNpbmNlIG1lbnUgaXMgZGlzcGxheWVkIGJlaGluZCBvdmVybGF5c1xuXG5leHBvcnQgeyBNRU5VX0JBQ0tfQlVUVE9OX1BSSU9SSVRZLCBPVkVSTEFZX0JBQ0tfQlVUVE9OX1BSSU9SSVRZLCBibG9ja0hhcmR3YXJlQmFja0J1dHRvbiwgc3RhcnRIYXJkd2FyZUJhY2tCdXR0b24gfTtcbiJdLCJuYW1lcyI6WyJibG9ja0hhcmR3YXJlQmFja0J1dHRvbiIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0YXJ0SGFyZHdhcmVCYWNrQnV0dG9uIiwiZG9jIiwiYnVzeSIsImluZGV4IiwiaGFuZGxlcnMiLCJldiIsIkN1c3RvbUV2ZW50IiwiYnViYmxlcyIsImRldGFpbCIsInJlZ2lzdGVyIiwicHJpb3JpdHkiLCJoYW5kbGVyIiwicHVzaCIsImlkIiwiZGlzcGF0Y2hFdmVudCIsImV4ZWN1dGVBY3Rpb24iLCJhc3luYyIsImhhbmRsZXJSZWdpc3RlciIsInJlc3VsdCIsInByb2Nlc3NIYW5kbGVycyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJsZW5ndGgiLCJzZWxlY3RlZEhhbmRsZXIiLCJOdW1iZXIiLCJNSU5fU0FGRV9JTlRFR0VSIiwiZm9yRWFjaCIsImZpbHRlciIsInRoZW4iLCJPVkVSTEFZX0JBQ0tfQlVUVE9OX1BSSU9SSVRZIiwiTUVOVV9CQUNLX0JVVFRPTl9QUklPUklUWSJdLCJzb3VyY2VSb290IjoiIn0=