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

	@media screen and (max-width: 620px){
		
	}

	@media screen and (max-width: 600px){
		.panel .body .full .field-container.floating{
			width: calc(100% - 40px);
			margin: 10px 0 0 10px;
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
			<div class="head">Add Your Business</div>
			<div class="body">
				<div class="full">
					<p>Add information about your business below. We review  each submission, which may take  a few days. If your listing is approved, you will be able to create a fan page for your business.</p>
					<div class="field-container floating">
						<label for="name">Business Name</label>
						<input type="text" placeholder="Business Name" id="name"/>
					</div>
					<div class="field-container floating">
						<label for="emailaddress">Email Address</label>
						<input type="text" placeholder="Email Address" id="emailaddress"/>
					</div>
					<div class="field-container floating">
						<label for="streetaddress">Street Address</label>
						<input type="text" placeholder="Street Address" id="streetaddress"/>
					</div>
					<div class="field-container floating">
						<label for="city">City</label>
						<input type="text" placeholder="City" id="city"/>
					</div>
					<div class="field-container floating">
						<label for="state">State</label>
						<input type="text" placeholder="State" id="state"/>
					</div>
					<div class="field-container floating">
						<label for="zip">Zip</label>
						<input type="text" placeholder="Zip" id="zip"/>
					</div>
					<div class="field-container floating">
						<label for="country">Country</label>
						<input type="text" placeholder="Country" id="country"/>
					</div>
					<div class="field-container floating">
						<label for="phone">Phone</label>
						<input type="text" placeholder="Phone" id="phone"/>
					</div>
					<div class="link-container">
						<button class="primary" id="add-business">Add My Business</button>
					</div>
				</div>
			</div>
			<div class="foot">
				<a class="left" id="dont-add">Never mind, don't add business</a>
			</div>
		</div>
	</div>
</div>
<div id="app-toasts" class="app-toasts"></div>