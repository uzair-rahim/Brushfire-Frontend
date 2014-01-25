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
		margin-top: 64px;
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

	@media screen and (max-width: 620px){
		
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
			<div class="head">Sign Up</div>
			<div class="body">
				<div class="manual">
					<div class="field-container floating">
						<label for="firstname">First Name</label>
						<input type="text" placeholder="First Name" id="firstname" value="Uzair"/>
					</div>
					<div class="field-container floating">
						<label for="lastname">Last Name</label>
						<input type="text" placeholder="Last Name" id="lastname" value="Rahim"/>
					</div>
					<div class="field-container">
						<label for="emailaddress">Email Address</label>
						<input type="text" placeholder="Email Address" id="emailaddress" value="uzair.rahim@redbookconnect.com"/>
					</div>
					<div class="field-container">
						<label for="password">Password</label>
						<input type="password" placeholder="Password" id="password" value="password"/>
					</div>
					<div class="link-container">
						<button class="primary" id="register">Sign Up</button>
					</div>
				</div>
				<div class="hotschedules">
					<div class="container">
					<label>Or</label>
						<button class="green">Sign Up With HotSchedules</button>
					</div>
				</div>
			</div>
			<div class="foot">
				<a class="left" id="cancel">Never mind, don't sign up</a>
			</div>
		</div>
	</div>
</div>
<div id="app-toasts" class="app-toasts"></div>