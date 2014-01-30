<style type="text/css">
	.app-layout{
		overflow-y: auto;
	}
	.content-wrapper{
		display: block;
		width: 100%;
		max-width: 600px;
		min-width: 320px;
		height: 100%;
		margin: auto;
	}
	.panel-container{
		display: block;
		width: 100%;
		float: left;
	}
	.panel{
		display: block;
		float: left;
		margin: 10px;
		width: calc(100% - 20px);
		border-radius: 4px;
		border: 1px solid #b6b9bd;
		background-color: #f8f8f8;
		box-shadow: 0 4px 10px 0 rgba(0,0,0,0.05);
		overflow: hidden;
	}
	.panel .head{
		display: block;
		float: left;
		clear: both;
		width: 100%;
		height: 40px;
		line-height: 40px;
		text-align: center;
		color: #7d7d7d;
		font-size: 16px;
		background-color: #eeeeee;
		border-bottom:1px solid #cccccc;
		box-shadow: inset 0 1px 0 0 rgba(255,255,255,1);
		text-shadow: 0 1px 0 #ffffff;
		overflow: hidden;
	}
	.panel .body{
		display: block;
		float: left;
		clear: both;
		width: 100%;
	}
	.panel .body .full{
		display: block;
		float: left;
		width: 100%;
		height: 100%;
		padding: 10px 0;
		overflow: hidden;
	}
	.panel .body .full .field-container{
		display: block;
		float: left;
		width: calc(100% - 40px);
		margin: 10px 0 0 10px;
	}
	.panel .body .full .field-container.floating{
		width: calc(50.8% - 40px);
		margin: 10px 20px 0 10px;
	}
	.panel .body .full .field-container label{
		font-weight: bold;
	}
	.panel .body .full .link-container{
		display: block;
		float: left;
		width: 100%;
		margin: 10px 0 10px 10px;
	}
	.panel .body .full .link-container button{
		float: right
	}
	.panel .body .full .link-container a{
		line-height: 20px;
		margin: 10px 0 0 0;
		float: left;
		color: #7d7d7d;
	}
	.panel .body .full .link-container a:hover{
		color: #555555;
	}

	.panel .foot{
		display: block;
		float: left;
		clear: both;
		width: 100%;
		height: 39px;
		line-height: 40px;
		border-top:1px solid #cccccc;
		box-shadow: inset 0 -1px 0 0 rgba(255,255,255,1);
		overflow: hidden;
	}
	.panel .foot .left{
		float: left;
		line-height: 40px;
		color: #7d7d7d;
		text-shadow: 0 1px 0 #ffffff;
		margin: 0 0 0 10px;
	}
	.panel .foot .left:hover{
		color: #555555;
	}

	p{
		color: #626970;
		line-height: 14px;
		margin:10px;
	}

	.panel .body .full.search-result{
		padding-top: 0;
	}

	.search-result p{
		clear: both;
		color: #39454c;
		font-weight: bold;
		padding: 0;
		margin: 0 0 0 10px;
		width: calc(100% - 40px);
	}

	.search-result p span{
		color: #39454c;
		font-weight: normal;
		font-style: italic;
	}

	.business-search-result{
		display: block;
		float: left;
		clear: both;
		width: calc(100% - 10px);
		margin: 10px 0 0 5px;
		border-top:1px dotted #cccccc;
	}

	.business-search-result li{
		display: block;
		float: left;
		clear: both;
		width: calc(100% - 40px);
		padding: 20px;
		border-bottom:1px dotted #cccccc;
	}

	.business-search-result li:nth-child(odd){
		background-color: #ffffff;
	}

	.business-search-result li div{
		line-height: 18px;
	}

	.business-search-result li .info{
		display: block;
		float: left;
		width: 60%;
	}

	.business-search-result li .action{
		display: block;
		float: left;
		width: 40%;
		text-align: right;
	}

	.business-search-result li .action a{
		line-height: 36px;
		text-decoration: underline;
	}

	.business-search-result li .action button{
		margin: 0;
		margin-top: 6px;
	}

	.business-search-result li div.line1{
		font-size: 14px;
		font-weight: bold;
		color: #333333;
	}

	.business-search-result li div.line2{
		font-size: 14px;
		color: #666666;
	}

	.business-search-result li.no-result .info{
		width: 100%;
	}

	.business-search-result li.no-result div.line1{
		font-size: 16px;
		font-weight: bold;
		color: #cb3a3a;
	}

	.business-search-result li.no-result  div.line2{
		font-size: 12px;
		color: #666666;
	}
	#modal-claimed .modal.window{
		width: 100%;
		max-width: 390px;
		min-width: 280px;
	}
	#modal-claimed .modal.window p{
		font-size: 14px;
		line-height: 18px;
		color:#666666;
	}
	#modal-claimed .modal.window p span{
		font-weight: bold;
		font-size: 16px;
		color:#444444;
	}
	#modal-claimed .modal.window p a{
		font-size: 14px;
	}

	@media screen and (max-width: 600px){
		.panel .body .full .field-container.floating{
			width: calc(100% - 40px);
			margin: 10px 0 0 10px;
		}
		#modal-claimed .modal.window{
			margin: 0 10px;
			width: calc(100% - 40px);
		}
	}
	@media screen and (max-width: 520px){
		.business-search-result li .action a{
			line-height: 54px;
		}

		.business-search-result li .action button{
			margin: 0;
			margin-top: 14px;
		}
	}
	@media screen and (max-height: 480px){
		.app-layout{
			overflow-y: auto;
		}
	}
</style>
<div id="modal-loading" class="loading modal-bg ease-out"></div>
<div id="modal-claimed" class="modal-bg ease-out">
	<div class="modal window">
		<h1>Already Claimed</h1>
		<p><span>Jimmy John’s</span><br/>601 W Martin Luther King Jr Blvd Austin, TX is already claimed. What can you do?</p>
		<p>Is this your business? <a href="#" class="claimedSignin">Sign In</a><br/><a href="#">Request</a> admin access to this page<br/>If you think this business is falsely claimed, <a href="#">report here</a></p>
	</div>
</div>
<div class="content-wrapper">
	<h1 id="brushfire">Brushfire</h1>
	<div class="panel-container">
		<div class="panel">
			<div class="head">Find Your Business</div>
			<div class="body">
				<div class="full">
					<p>Is your business already on Brushfire? Search now. Or create a new page if we don’t have it.</p>
					<div class="field-container floating">
						<label for="name">Business Name</label>
						<input type="text" placeholder="Business Name" id="name" value="Jimmy John's"/>
					</div>
					<div class="field-container floating">
						<label for="address">Business Address</label>
						<input type="text" placeholder="Business Address" id="address" value="Austin"/>
					</div>
					<div class="link-container">
						<button class="primary" id="find">Find My Business</button>
					</div>
				</div>
				{{#if_not_eq businesses undefined}}
					<div class="full search-result">
						<p>Business Matches for <span class="name"></span> near <span class="address"></span></p>
						<ul class="business-search-result">
							{{#if_gt businesses.length 0}}
								{{#each businesses}}
									<li>
										<div class="info">
											<div class="line1">{{this.name}}</div>
											<div class="line2">{{this.location.address.[0]}} {{this.location.city}}</div>
										</div>
										<div class="action">
											<button id="{{this.id}}" class="claim">Claim</button>
										</div>
									</li>
								{{/each}}
								<li>
									<div class="info">
										<div class="line1">Jimmy's John</div>
										<div class="line2">601 W Martin Luther King Jr Blvd Austin, TX</div>
									</div>
									<div class="action">
										<a href="#" id="" class="already-claimed">Already Claimed</a>
									</div>
								</li>
							{{else}}
								<li class="no-result">
									<div class="info">
										<div class="line1">Sorry, there were no matches</div>
										<div class="line2">Please try adjusting your search</div>
									</div>
								</li>
							{{/if_gt}}
						</ul>
					</div>
				{{/if_not_eq}}
			</div>
			<div class="foot">
			{{#if_not_eq businesses undefined}}
				<a class="left" id="add-business">Can't find your business? Add now</a>
			{{/if_not_eq}}
			</div>
		</div>
	</div>
</div>
<div id="app-toasts" class="app-toasts"></div>