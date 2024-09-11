import React, { useState } from 'react';
// import './index.css';

const App = () => {

	return (
		<div id="app">
			<header className="sideHeader">
				<div className="sideHeaderContent">
					<button className="menuBtn menuBtn--toggle">
						<span className="material-symbols-outlined iconPart">zoom_out_map</span>
					</button>
					<button className="menuBtn menuBtn--profile"></button>
				</div>
			</header>
			<div className="contentUnit">
				<div className="catchArea">
					<div className="catchSet">
						<div className="catchTitle">PORTFOLLIO</div>
						<div className="name">ryugo takagishi</div>
					</div>
					<ul className="skillList">
						<li className="skill">web design</li>
						<li className="skill">UI/UX design</li>
						<li className="skill">service design</li>
						<li className="skill">info architect</li>
						<li className="skill">design system</li>
					</ul>
					<ul className="skillList">
						<li className="skill">html/css</li>
						<li className="skill">javascript</li>
						<li className="skill">react</li>
						<li className="skill">gas</li>
					</ul>
					<div className="illustSet">
						<img src="imageFile/illust_gissy.svg" alt=""/>
					</div>
				</div>
				<div className="actionArea">
					<button className="actionBtn">
						<span className="btnText">contact</span>
						<span class="material-symbols-outlined iconPart">arrow_forward_ios</span>
					</button>
				</div>
				<div className="spotifyArea">
					<span className="dummy"></span>
				</div>
				<div className="articleArea">
					<div className="subArticleSet">
						<div className="panelImg panelImg001" panelIndex="panel001"><img src="imageFile/panelS001.png" alt="" /></div>
					</div>
					<div className="mainArticleSet">
						<div className="panelImg panelImg001" panelIndex="panel001"><img src="imageFile/panelL001.png" alt="" /></div>
					</div>
					<div className="controlSet">
						<div className="numSide">
							<span className="now">01</span>
							<span className="count">05</span>
						</div>
						<div className="arrowSide">
							<button className="controlBtn controlBtn--prev">
								<span class="material-symbols-outlined iconPart">arrow_upward</span>
							</button>
							<button className="controlBtn controlBtn--next">
								<span class="material-symbols-outlined iconPart">arrow_downward</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;

