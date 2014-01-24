<style type="text/css">
	#login-form-container{
		position: absolute;
		display: block;
		float: left;
		width: 300px;
		height: 270px;
		top: 50%;
		left: 50%;
		margin: -148px 0 0 -150px;
		background-color: #f8f8f8;
		border-radius: 4px;
		border: 1px solid #b6b9bd;
		box-shadow: 0 4px 10px 0 rgba(0,0,0,0.20);
		overflow: hidden;
	}
	#login-form-container #header{
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
	}
	#login-form-container .input-fields-container{
		float: left;
		clear: both;
		width: 100%;
		margin: 25px 0 0 0;
	}
	#login-form-container .input-fields-container input{
		float: left;
		clear: both;
		width: 240px;
		margin: 0 0 10px 22px;
	}

	#login-form-container button#login{
		float: left;
		clear: both;
		width: 258px;
		margin: 0 0 0 22px;
	}
	#login-form-container a#signup{
		float: left;
		clear: both;
		width: 258px;
		text-align: center;
		color: #666666;
		margin: 24px 0 0 22px;
		text-decoration: none;
	}
	#login-form-container a#signup:hover{
		color: #444444;
		text-decoration: underline;
	}
	span.load{
		margin-left:-30px;
		margin-right:10px;
	}
	label{
		display: block;
		margin: 0 0 6px 22px;
		font-weight: bold;
		clear: both;
	}
	label.bad{
		color: #bf2b1b;
		background: none;
	}
</style>
<div id="modal-loading" class="loading modal-bg ease-out"></div>
<h1 id="brushfire">Brushfire</h1>
<div id="login-form-container">
	<div id="header">Sign In</div>
	<div class="input-fields-container">
		<label for="emailaddress">Email Address</label>
		<input type="text" placeholder="Email Address" id="emailaddress" value="uzair.rahim@redbookconnect.com"/>
		<label for="password">Password</label>
		<input type="password" placeholder="Password" id="password" value="password"/>
	</div>
	<button id="login" class="primary">Sign In</button>
	<a id="signup">Sign up now, it's easy and free!</a>
</div>
<div id="app-toasts" class="app-toasts"></div>