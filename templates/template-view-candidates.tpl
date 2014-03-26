<style type="text/css">

	.app-body-content{
		overflow: auto;		
	}

	.toolbar{
		display: block;
		float: left;
		clear: both;
		width: 100%;
		margin: 10px 0;
	}
	.toolbar button{
		margin: 0 6px 0 0;
	}

	.candidates-list-container{
		display: block;
		float: left;
		width: 100%;
	}

	.candidates-section{
		display: block;
		float: left;
		width: 100%;
		margin: 10px 0;
	}

	.candidates-section .section-header{
		display: block;
		float: left;
		clear: both;
		width: 100%;
		margin: 0 0 10px 0;
		line-height: 30px;
		font-size: 14px;
		font-weight: bold;
		border-bottom: 1px dotted #bbbbbb;
	}

	.candidates-section ul.candidates-list{
		display: block;
		float: left;
		clear: both;
		width: 100%;
	}

	.candidates-section ul.candidates-list li{
		display: block;
		float: left;
		clear: both;
		padding: 10px 0;
		width: 100%;
		border-bottom: 1px dotted #dddddd;
	}

	.candidates-section ul.candidates-list li .checkbox{
		display: block;
		float: left;
	}

	.candidates-section ul.candidates-list li .checkbox label{
		padding: 0;
		margin: 8px 4px 0 8px;
	}

	.candidates-section ul.candidates-list li:hover{
		background-color: #fcfcfc;
	}

	.candidates-section ul.candidates-list li .picture{
		display: block;
		float: left;
		width: 40px;
		height: 40px;
		border-radius: 20px;
		background-color: #dddddd;
		overflow: hidden;
	}

	.candidates-section ul.candidates-list li .picture img{
		display: block;
		float: left;
		width: 40px;
		height: 40px;
	}

	.candidates-section ul.candidates-list li .info{
		display: block;
		float: left;
		margin: 4px 0 0 6px;
	}
	
	.candidates-section ul.candidates-list li .info .name{
		display: block;
		float: left;
		clear: both;
		line-height: 16px;
		font-weight: bold;
	}

	.candidates-section ul.candidates-list li .info .position{
		display: block;
		float: left;
		clear: both;
		line-height: 16px;
		color: #888888;
	}

	@media screen and (max-width: 400px){
		.candidates-section ul.candidates-list li .info .name{
			max-width: 100px;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}

		.candidates-section ul.candidates-list li .info .position{
			max-width: 100px;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
	}

	.candidates-section ul.candidates-list li .rating{
		display: block;
		float: right;
		width: 62px;
		height: 12px;
		margin: 14px 10px 0 0;
		background-image: url("images/icon-stars.png");
		background-position: 0 0;
		background-repeat: no-repeat;
		background-size: 124px 12px;
	}

	.candidates-section ul.candidates-list li .rating.five{
		background-position: 0 0;
	}

	.candidates-section ul.candidates-list li .rating.four{
		background-position: -13px 0;
	}

	.candidates-section ul.candidates-list li .rating.three{
		background-position: -25px 0;
	}

	.candidates-section ul.candidates-list li .rating.two{
		background-position: -37px 0;
	}

	.candidates-section ul.candidates-list li .rating.one{
		background-position: -49px 0;
	}

	.candidates-section ul.candidates-list li .rating.zero{
		background-position: -61px 0;
	}

	.candidates-section ul.candidates-list li .archive{
		display: block;
		float: right;
		width: 16px;
		height: 16px;
		margin: 12px 10px 0 0;
		background-image: url("images/icon-archive.png");
		background-position: 0 0;
		background-repeat: no-repeat;
		background-size: 16px 16px;
	}

	.candidates-section ul.candidates-list li .archive:hover{
		background-image: url("images/icon-archive-hover.png");
	}

	.candidates-section ul.candidates-list li .actions{
		display: block;
		float: left;
		clear: both;
		margin: 6px 0 0 36px;
	}

	.candidates-section ul.candidates-list li .actions a{
		display: block;
		float: left;
		margin: 0 10px 0 0;
		line-height: 20px;
	}

	.candidates-section ul.candidates-list li .actions a.message{
		text-indent: 24px;
		background-image: url("images/icon-connections.png");
		background-position: 0 0;
		background-repeat: no-repeat;
		background-size: 20px 20px;
	}

	.candidates-section ul.candidates-list li .actions a.connections{
		text-indent: 24px;
		background-image: url("images/icon-connections.png");
		background-position: 0 0;
		background-repeat: no-repeat;
		background-size: 20px 20px;
	}

	.candidates-section ul.candidates-list li .actions a.referrer{
		color: #aaaaaa;
		text-indent: 20px;
		background-image: url("images/default-avatar.png");
		background-position: 0 1px;
		background-repeat: no-repeat;
		background-size: 14px 14px;
	}

	.candidates-section ul.candidates-list li .actions a.interest{
		color: #aaaaaa;
		text-indent: 20px;
		background-image: url("images/icon-time.png");
		background-position: 0 1px;
		background-repeat: no-repeat;
		background-size: 16px 16px;
	}

	@media screen and (max-width: 600px){
		.candidates-section ul.candidates-list li .actions{
			display: none;
		}
	}

</style>

<div class="toolbar">
	<button class="primary" id="request">Send Message</button>
	<button id="email">Archive</button>
</div>
<div class="candidates-list-container">
	<div class="candidates-section">
		<div class="section-header">Recent Candidates (6 New)</div>
		<ul class="candidates-list">
			<li>
				<div class="checkbox">
					<input type="checkbox" id="chk1"/>
					<label for="chk1"></label>
				</div>
				<div class="picture">
					<img src="images/Christi.jpg"/>
				</div>
				<div class="info">
					<div class="name">Brittney Smith</div>
					<div class="position">Cook @ Roaring Fork</div>
				</div>
				<div class="archive"></div>
				<div class="rating zero"></div>
				<div class="actions">
					<a class="message">Send Message</a>
					<a class="connections">20 (4 shared)</a>
					<a class="referrer">Refered by Dennis Laughin for Bartender</a>
					<a class="interest">Showed Interest on 3/21/2014</a>
				</div>
			</li>
			<li>
				<div class="checkbox">
					<input type="checkbox" id="chk2"/>
					<label for="chk2"></label>
				</div>
				<div class="picture">
					<img src="images/Jake.jpg"/>
				</div>
				<div class="info">
					<div class="name">Cliff Williams</div>
					<div class="position">Cook @ Roaring Fork</div>
				</div>
				<div class="archive"></div>
				<div class="rating one"></div>
				<div class="actions">
					<a class="message">Send Message</a>
					<a class="connections">25 (0 shared)</a>
					<a class="referrer">Refered by Dennis Laughin for Bartender</a>
					<a class="interest">Showed Interest on 3/21/2014</a>
				</div>
			</li>
			<li>
				<div class="checkbox">
					<input type="checkbox" id="chk3"/>
					<label for="chk3"></label>
				</div>
				<div class="picture">
					<img src="images/default-avatar.png"/>
				</div>
				<div class="info">
					<div class="name">Dave Evans</div>
					<div class="position">Bartender @ P.F. Changs</div>
				</div>
				<div class="archive"></div>
				<div class="rating two"></div>
				<div class="actions">
					<a class="message">Send Message</a>
					<a class="connections">5 (0 shared)</a>
					<a class="interest">Showed Interest on 3/21/2014</a>
				</div>
			</li>
		</ul>
	</div>

	<div class="candidates-section">
		<div class="section-header">Servers MWF 2:00PM - 8:00PM</div>
		<ul class="candidates-list">
			<li>
				<div class="checkbox">
					<input type="checkbox" id="chk4"/>
					<label for="chk4"></label>
				</div>
				<div class="picture">
					<img src="images/Christi.jpg"/>
				</div>
				<div class="info">
					<div class="name">Smamatha McLean</div>
					<div class="position">Cook @ Roaring Fork</div>
				</div>
				<div class="archive"></div>
				<div class="rating three"></div>
				<div class="actions">
					<a class="message">Send Message</a>
					<a class="connections">12 (2 shared)</a>
					<a class="referrer">Refered by Dennis Laughin for Bartender</a>
					<a class="interest">Showed Interest on 3/21/2014</a>
				</div>
			</li>
			<li>
				<div class="checkbox">
					<input type="checkbox" id="chk5"/>
					<label for="chk5"></label>
				</div>
				<div class="picture">
					<img src="images/Jake.jpg"/>
				</div>
				<div class="info">
					<div class="name">Fred Tarbucks</div>
					<div class="position">Cook @ Roaring Fork</div>
				</div>
				<div class="archive"></div>
				<div class="rating four"></div>
				<div class="actions">
					<a class="message">Send Message</a>
					<a class="connections">12 (0 shared)</a>
					<a class="interest">Showed Interest on 3/21/2014</a>
				</div>
			</li>
			<li>
				<div class="checkbox">
					<input type="checkbox" id="chk3"/>
					<label for="chk3"></label>
				</div>
				<div class="picture">
					<img src="images/default-avatar.png"/>
				</div>
				<div class="info">
					<div class="name">Dave Evans</div>
					<div class="position">Bartender @ P.F. Changs</div>
				</div>
				<div class="archive"></div>
				<div class="rating five"></div>
				<div class="actions">
					<a class="message">Send Message</a>
					<a class="connections">5 (0 shared)</a>
					<a class="interest">Showed Interest on 3/21/2014</a>
				</div>
			</li>
		</ul>
	</div>
</div>