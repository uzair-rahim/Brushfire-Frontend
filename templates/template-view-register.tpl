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
	.panel .body .manual{
		display: block;
		float: left;
		width: 62%;
		height: 100%;
		padding: 10px 0;
		border-right: 1px dotted #cccccc;
		overflow: hidden;
	}
	.panel .body .manual .field-container{
		display: block;
		float: left;
		width: calc(100% - 40px);
		margin: 10px 0 0 10px;
	}
	.panel .body .manual .field-container.floating{
		width: calc(51.2% - 40px);
		margin: 10px 20px 0 10px;
	}
	.panel .body .manual .field-container label{
		font-weight: bold;
	}
	.panel .body .manual .link-container{
		display: block;
		float: left;
		width: 100%;
		margin: 10px 0 10px 10px;
	}
	.panel .body .manual .link-container button{
		float: right
	}
	.panel .body .manual .link-container a{
		line-height: 20px;
		margin: 10px 0 0 0;
		float: left;
		color: #7d7d7d;
	}
	.panel .body .manual .link-container a:hover{
		color: #555555;
	}
	.panel .body .hotschedules{
		display: block;
 		float: left;
		width: calc(38% - 2px);
		height: 100%;
		padding: 20px 0;
		border-left: 1px dotted #ffffff;
		overflow: hidden;
	}

	.panel .body .hotschedules .container{
		width: 202px;
		margin: auto;
		margin-top: 70px;
		text-align: center;
	}
	.panel .body .hotschedules .container label{
		font-weight: bold;
		margin: 0 0 5px 0;
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
	#modal-hotschedules .modal.window{
		width: 100%;
		max-width: 400px;
		min-width: 280px;
	}
	#modal-hotschedules .field-container{
		width: calc(100% - 20px);
		margin: 0 0 10px 0;
	}
	#modal-hotschedules .field-container label{
		font-weight: bold;
	}
	#modal-hotschedules .link-container button{
		margin: 0 0 0 10px;
		float: right;
	}
	@media screen and (max-width: 600px){
		.panel .body .manual{
			width: 100%;
			border-right: none;
			border-bottom: 1px dotted #dddddd;
		}
		.panel .body .manual .field-container.floating{
			width: calc(100% - 40px);
			margin: 10px 0 0 10px;
		}
		.panel .body .hotschedules{
			width: 100%;
			border-left: none;
			border-top: 1px dotted #ffffff;
		}
		.panel .body .hotschedules .container{
			margin-top: 0;
			margin-bottom: 10px;
		}
		#modal-hotschedules .modal.window{
			margin: 0 10px;
			width: calc(100% - 40px);
		}
	}
</style>
<div id="modal-hotschedules" class="modal-bg ease-out">
	<div class="modal window">
		<h1>Sign Up With HotSchedules</h1>
		<div class="field-container">
			<label for="hsusername">Username</label>
			<input type="text" id="hsusername" placeholder="Username"/>
		</div>
		<div class="field-container">
			<label for="hspassword">Password</label>
			<input type="text" id="hspassword" placeholder="Password"/>
		</div>
		<div class="link-container">
			<button id="cancelHS">Cancel</button>
			<button class="primary" id="authorizehs">Authorize</button>
		</div>
	</div>
</div>
<div class="content-wrapper">
	<h1 id="brushfire">{{language.appName}}</h1>
	<div class="panel-container">
		<div class="panel">
			<div class="head">Sign Up</div>
			<div class="body">
				<div class="manual">
					<div class="field-container floating">
						<label for="firstname">{{language.firstName}}</label>
						<input type="text" placeholder="First Name" id="firstname"/>
					</div>
					<div class="field-container floating">
						<label for="lastname">{{language.lastName}}</label>
						<input type="text" placeholder="Last Name" id="lastname"/>
					</div>
					<div class="field-container">
						<label for="emailaddress">{{language.emailAddress}}</label>
						<input type="text" placeholder="Email Address" id="emailaddress"/>
					</div>
					<div class="field-container">
						<label for="password">{{language.password}}</label>
						<input type="password" placeholder="Password" id="password" />
					</div>
					<div class="link-container">
						<button class="primary" id="register">Sign Up</button>
					</div>
				</div>
				<div class="hotschedules">
					<div class="container">
					<label>Or</label>
						<button class="green" id="signupHS">Sign Up With HotSchedules</button>
					</div>
				</div>
			</div>
			<div class="foot">
				<a class="left" id="cancel">{{language.cancelSignUp}}</a>
			</div>
		</div>
	</div>
</div>