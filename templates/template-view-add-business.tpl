<style type="text/css">
	#app-content{
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
		float: left;
		clear: both;
		font-weight: bold;
	}
	.panel .body .full .field-container .btn-group{
		float: left;
		clear: both;
		width: calc(100% + 20px);
		margin: 2px 0 0 0;
	}
	.panel .body .full .field-container .btn-group button{
		width: 100%;
	}
	.panel .body .full .field-container .btn-group button:before{
		margin-right: 0;
	}
	.panel .body .full .field-container .btn-group .dropDown-menu{
		width: 100%;
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

	.dropDown-menu{
		max-height: 100px;
		overflow: auto;
	}

	p{
		color: #626970;
		line-height: 14px;
		margin:10px;
	}
	@media screen and (max-width: 600px){
		.panel .body .full .field-container.floating{
			width: calc(100% - 40px);
			margin: 10px 0 0 10px;
		}
	}
</style>
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
						<label for="emailaddress">{{language.emailAddress}}</label>
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
						<div class="btn-group">
							<button id="state" class="dropDown">Select State</button>
							<ul class="dropDown-menu">
								<li><a id="AL">Alabama</a></li>
								<li><a id="AK">Alaska</a></li>
								<li><a id="AZ">Arizona</a></li>
								<li><a id="AR">Arkansas</a></li>
								<li><a id="CA">California</a></li>
								<li><a id="CO">Colorado</a></li>
								<li><a id="CT">Connecticut</a></li>
								<li><a id="DE">Delaware</a></li>
								<li><a id="FL">Florida</a></li>
								<li><a id="GA">Georgia</a></li>
								<li><a id="HI">Hawaii</a></li>
								<li><a id="ID">Idaho</a></li>
								<li><a id="IL">Illinois</a></li>
								<li><a id="IA">Iowa</a></li>
								<li><a id="KS">Kansas</a></li>
								<li><a id="KY">Kentucky</a></li>
								<li><a id="LA">Louisiana</a></li>
								<li><a id="NE">Maine</a></li>
								<li><a id="MD">Maryland</a></li>
								<li><a id="MA">Massachusetts</a></li>
								<li><a id="MI">Michigan</a></li>
								<li><a id="MN">Minnesota</a></li>
								<li><a id="MS">Mississippi</a></li>
								<li><a id="MO">Missouri</a></li>
								<li><a id="MT">Montana</a></li>
								<li><a id="NE">Nebraska</a></li>
								<li><a id="NV">Nevada</a></li>
								<li><a id="NH">New Hampshire</a></li>
								<li><a id="NJ">New Jersey</a></li>
								<li><a id="NM">New Mexico</a></li>
								<li><a id="NY">New York</a></li>
								<li><a id="NC">North Carolina</a></li>
								<li><a id="ND">North Dakota</a></li>
								<li><a id="OH">Ohio</a></li>
								<li><a id="OK">Oklahoma</a></li>
								<li><a id="OR">Oregon</a></li>
								<li><a id="PA">Pennsylvania</a></li>
								<li><a id="RI">Rhode Island</a></li>
								<li><a id="SC">South Carolina</a></li>
								<li><a id="SD">South Dakota</a></li>
								<li><a id="TN">Tennessee</a></li>
								<li><a id="TX">Texas</a></li>
								<li><a id="UT">Utah</a></li>
								<li><a id="VT">Vermont</a></li>
								<li><a id="VA">Virginia</a></li>
								<li><a id="WA">Washington</a></li>
								<li><a id="WD">Washington DC</a></li>
								<li><a id="WV">West Virginia</a></li>
								<li><a id="WI">Wisconsin</a></li>
								<li><a id="WY">Wyoming</a></li>
							</ul>
						</div>
					</div>
					<div class="field-container floating">
						<label for="zip">Zip</label>
						<input type="number" placeholder="Zip" id="zip"/>
					</div>
					<div class="field-container floating">
						<label for="country">Country</label>
						<div class="btn-group">
							<button id="country" class="dropDown">Select Country</button>
							<ul class="dropDown-menu">
								<li><a id="US">United States of America</a></li>
							</ul>
						</div>
					</div>
					<div class="field-container floating">
						<label for="phone">Phone</label>
						<input type="number" placeholder="Phone" id="phone"/>
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