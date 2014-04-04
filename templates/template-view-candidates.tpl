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

	.candidates-section ul.candidates-list li .comment{
		display: block;
		float: left;
		margin: 18px 0 0 14px;
		font-style: italic;
		color: #666666;
	}

	@media screen and (max-width: 700px){
		.candidates-section ul.candidates-list li .comment{
			display: none;
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

	.candidates-section ul.candidates-list li .unarchive{
		display: block;
		float: right;
		width: 16px;
		height: 16px;
		margin: 12px 10px 0 0;
		background-image: url("images/icon-unarchive.png");
		background-position: 0 0;
		background-repeat: no-repeat;
		background-size: 16px 16px;
	}

	.candidates-section ul.candidates-list li .unarchive:hover{
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

{{#anyCandidates candidates}}
	<div class="toolbar">
		<button class="primary" id="request">Send Message</button>
		<button id="archive-bulk">Archive</button>
	</div>
	<div class="candidates-list-container">
		{{#each candidates}}
			{{#if_not_eq this.candidates.length 0}}
				<div class="candidates-section">
					<div class="section-header">{{jobName}}</div>
					<ul class="candidates-list"  data-job="{{guid}}">
						{{#each this.candidates}}
							{{#if_eq archived false}}
								<li>
									<div class="checkbox">
										<input type="checkbox" id="chk-{{guid}}"/>
										<label for="chk-{{guid}}"></label>
									</div>
									<div class="picture">
										{{#if_eq this.user.picture undefined}}
											<img src="images/default-avatar.png"/>
										{{else}}
											<img src="{{this.user.picture}}"/>
										{{/if_eq}}
									</div>
									<div class="info">
										<div class="name">{{this.user.firstname}} {{this.user.lastname}}</div>
										<div class="position">{{#if_eq this.user.position undefined}}Not Available{{else}}{{this.user.position}}@{{this.user.employer}}{{/if_eq}}</div>
									</div>
									<div class="comment">"Candidate's comment goes here"</div>
									<div class="archive" data-id="{{id}}" data-guid="{{guid}}"></div>
									<div class="rating {{this.user.rating}}"></div>
									<div class="actions">
										<a class="message">Send Message</a>
										<a class="interest">Showed Interest on {{dateConverter created}}</a>
									</div>
								</li>
							{{/if_eq}}
						{{/each}}
					</ul>
				</div>
				<!--
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
					</ul>
				</div>
				-->

				{{/if_not_eq}}
			{{/each}}
			
				<div class="candidates-section">
					<div class="section-header">Archived</div>
					<ul class="candidates-list">
					{{#each candidates}}
						{{#each this.candidates}}
							{{#if_eq archived true}}
								<li>
									<div class="checkbox">
										<input type="checkbox" id="chk-{{guid}}"/>
										<label for="chk-{{guid}}"></label>
									</div>
									<div class="picture">
										{{#if_eq this.user.picture undefined}}
											<img src="images/default-avatar.png"/>
										{{else}}
											<img src="{{this.user.picture}}"/>
										{{/if_eq}}
									</div>
									<div class="info">
										<div class="name">{{this.user.firstname}} {{this.user.lastname}}</div>
										<div class="position">{{#if_eq this.user.position undefined}}Not Available{{else}}{{this.user.position}}@{{this.user.employer}}{{/if_eq}}</div>
									</div>
									<div class="comment">"Candidate's comment goes here"</div>
									<div class="unarchive" data-id="{{id}}" data-guid="{{guid}}" data-job="{{../../guid}}"></div>
									<div class="rating {{this.user.rating}}"></div>
									<div class="actions">
										<a class="message">Send Message</a>
										<a class="interest">Showed Interest on {{dateConverter created}}</a>
									</div>
								</li>
							{{/if_eq}}
						{{/each}}
					{{/each}}
					</ul>
				</div>
			
		</div>
	{{else}}
		<div class="candidates-list-container">
			<div class="candidates-section">
				<ul class="candidates-list">
					<li>
						<div class="info">
							<div class="name">No Candidates</div>
							<div class="position">Do something about it</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	{{/anyCandidates}}