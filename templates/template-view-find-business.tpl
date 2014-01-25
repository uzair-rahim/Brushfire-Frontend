<style type="text/css">
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
	}
	.panel{
		display: block;
		float: left;
		margin: 10px;
		width: calc(100% - 20px);
		border-radius: 4px;
		border: 1px solid #b6b9bd;
		background-color: #f8f8f8;
		box-shadow: 0 4px 10px 0 rgba(0,0,0,0.20);
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
		display: none;
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

	#add-business{
		display: none;
	}

	@media screen and (max-width: 620px){
		
	}

	@media screen and (max-width: 600px){
		.panel .body .full .field-container.floating{
			width: calc(100% - 40px);
			margin: 10px 0 0 10px;
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
						<input type="text" placeholder="Business Name" id="name" value="Jimmy's John"/>
					</div>
					<div class="field-container floating">
						<label for="address">Business Address</label>
						<input type="text" placeholder="Business Address" id="address" value="Austin"/>
					</div>
					<div class="link-container">
						<button class="primary" id="find">Find My Business</button>
					</div>
				</div>
				<div class="full search-result">
					<p>Business Matches for <span class="name">"Jimmy's John"</span> near <span class="address">"Austin"</span></p>
					<ul class="business-search-result">
						<li class="no-result">
							<div class="info">
								<div class="line1">Sorry, there were no matches</div>
								<div class="line2">Please try adjusting your search</div>
							</div>
						</li>
						<li>
							<div class="info">
								<div class="line1">Jimmy's John</div>
								<div class="line2">601 W Martin Luther King Jr Blvd Austin, TX</div>
							</div>
							<div class="action">
								<a href="#" id="" class="already-claimed">Already Claimed</a>
							</div>
						</li>
						<li>
							<div class="info">
								<div class="line1">Jimmy's John</div>
								<div class="line2">3203 Red River St Austin, TX</div>
							</div>
							<div class="action">
								<button id="" class="claim">Claim</button>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="foot">
				<a class="left" id="add-business">Can't find your business? Add now</a>
			</div>
		</div>
	</div>
</div>
<div id="app-toasts" class="app-toasts"></div>