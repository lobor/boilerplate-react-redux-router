import React from 'react'
import styled from 'styled-components';

var common = styled.div`
	width: 5vh;
	height: 5vh;
	border-radius: 50%;
	background: #222;
	position: absolute;
	top: 35%;
	left: 50%;
	transform: translate(-50%, -50%);
`

var LeftEye = common.extend`
	animation: leftEyeAnimation 3s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);
	@keyframes leftEyeAnimation {
	  0% {
	    width: 5vh;
	    height: 5vh;
	    transform: translate(-50%, -50%);
	  }
	  50% {
	    width: 5vh;
	    height: 5vh;
	    transform: translate(-50%, -50%);
	  }
	  60% {
	    width: 2vh;
	    height: 2vh;
	    transform: translate(-150%, -50%);
	  }
	  90% {
	    width: 2vh;
	    height: 2vh;
	    transform: translate(-150%, -50%);
	  }
	  100% {
	    width: 5vh;
	    height: 5vh;
	    transform: translate(-50%, -50%);
	  }
	}
`;

var RightEye = common.extend`
	animation: rightEyeAnimation 3s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);
	@keyframes rightEyeAnimation {
	  0% {
	    width: 5vh;
	    height: 5vh;
      transform: translate(-50%, -50%);
	  }
	  50% {
	    width: 5vh;
	    height: 5vh;
      transform: translate(-50%, -50%);
	  }
	  60% {
	    width: 2vh;
	    height: 2vh;
      transform: translate(50%, -50%);
	  }
	  70% {
	    width: 2vh;
	    height: 2vh;
      transform: translate(50%, -50%);
	  }
	  75% {
	    width: 2vh;
	    height: 2px;
      transform: translate(50%, -50%);
	  }
	  80% {
	    width: 2vh;
	    height: 2vh;
      transform: translate(50%, -50%);
	  }
	  90% {
	    width: 2vh;
	    height: 2vh;
      transform: translate(50%, -50%);
	  }
	  100% {
	    width: 5vh;
	    height: 5vh;
      transform: translate(-50%, -50%);
	  }
	}
`;

var Mouth = styled.div`
	width: 10vh;
	height: 10vh;
	border-radius: 50%;
	border: solid 1.3vh #222;
	border-right: solid 1.3vh rgba(223,223,194,0);
	border-left: solid 1.3vh rgba(223,223,194,0);
	border-bottom: solid 1.3vh rgba(223,223,194,0);
	position: absolute;
	top: 35%;
	left: 50%;
	transform: translate(-50%, -50%) rotate(360deg);
	animation: mouthAnimation 3s infinite cubic-bezier(0.455, 0.03, 0.515, 0.955);
	@keyframes mouthAnimation {
	  0% {
	    transform: translate(-50%, -50%) rotateX(180deg);
	  }
	  10% {
	    transform: translate(-50%, -50%) rotateZ(360deg);
	  }
	  40% {
	    transform: translate(-50%, -50%) rotateZ(320deg);
	  }
	  60% {
	    transform: translate(-50%, -50%) rotateZ(900deg);
	  }
	  100% {
	    transform: translate(-50%, -50%) rotateZ(900deg);
	  }
	}
`;

export default () => (
	<div style={{ margin: 'auto', marginTop: '35%' }}>
		<LeftEye />
		<RightEye />
		<Mouth />
	</div>
)
