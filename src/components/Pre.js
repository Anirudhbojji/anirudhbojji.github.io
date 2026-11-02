import React from "react";

function Pre(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      {props.load && (
        <div className="boot-box">
          <div className="boot-line boot-l1">
            <span className="boot-prompt">$</span> boot anirudh-os --target portfolio
          </div>
          <div className="boot-line boot-l2">
            [ <span className="boot-ok">ok</span> ] control-plane converged
          </div>
          <div className="boot-line boot-l3">
            [ <span className="boot-ok">ok</span> ] bgp: 4 peers established
          </div>
          <div className="boot-line boot-l4">
            [ <span className="boot-ok">ok</span> ] dataplane: forwarding enabled
          </div>
          <div className="boot-line boot-l5">
            [ <span className="boot-wait">..</span> ] rendering ui
            <span className="boot-cursor">▊</span>
          </div>
          <div className="boot-bar">
            <div className="boot-bar-fill" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Pre;
