<style type="text/css">
	#signup-form-container{
		position: absolute;
		display: block;
		float: left;
		width: 450px;
		height: 336px;
		top: 50%;
		left: 50%;
		margin: -170px 0 0 -225px;
		background-color: #f8f8f8;
		border-radius: 4px;
		border: 1px solid #b6b9bd;
		box-shadow: 0 4px 10px 0 rgba(0,0,0,0.20);
		overflow: hidden;
	}
	#signup-form-container #header{
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
	#signup-form-container .name-fields-container{
		display: block;
		float: left;
		clear: both;
		width: 450px;
		margin: 24px 0 0 22px;
	}
	#signup-form-container input#firstname,
	#signup-form-container input#lastname{
		float: left;
		width: 180px;
		margin: 0 7px 10px 0;
	}
	#signup-form-container input#emailaddress,
	#signup-form-container input#password{
		float: left;
		clear: both;
		width: 388px;
		margin: 0px 0 10px 22px;
	}
	#signup-form-container button#register{
		float: left;
		clear: both;
		width: 408px;
		margin: 10px 0 0 22px;	
	}
	#signup-form-container a#cancel{
		float: left;
		clear: both;
		width: 408px;
		text-align: center;
		color: #666666;
		margin: 24px 0 0 22px;
		text-decoration: none;
	}
	#signup-form-container a#cancel:hover{
		color: #444444;
		text-decoration: underline;
	}
	#error-pointer-wrapper{
		position: absolute;
		display: none;
		float: left;
		z-index: 1;
	}
	#error-pointer-wrapper .pointer{
		display: block;
		float: left;
		width: 0;
		height: 0;
		margin: 10px 0 0 0;
		border-top: 6px solid transparent;
		border-bottom: 6px solid transparent;
		border-right: 6px solid #ff4040;
	}
	#error-pointer-wrapper .label{
		display: block;
		float: left;
		padding: 0 10px 0 10px;
		color: #ffffff;
		line-height: 32px;
		background-color: #ff4040;
	}
	span.load{
		margin-left:-30px;
		margin-right:10px;
	}
	span.hint{
		position: absolute;
		left: 0;
		top: 1px;
		z-index: 1;
	}
	label{
		
		margin: 0 0 6px 22px;
		font-weight: bold;
	}
	.name-fields-container label{
		margin: 0 0 6px 0;
		width: 206px;
	}
	label.bad{
		color: #bf2b1b;
		background: none;
	}
</style>
<div id="modal-loading" class="loading modal-bg ease-out"></div>
<h1 id="brushfire">Brushfire</h1>
<div id="signup-form-container">
	<div id="header">Sign Up</div>
	<div class="name-fields-container">
		<label for="firstname">First Name</label>
		<label for="lastname">Last Name</label>
		<input type="text" placeholder="First Name" id="firstname"/>
		<input type="text" placeholder="Last Name" id="lastname"/>
	</div>
	<label for="emailaddress">Email Address</label>
	<input type="text" placeholder="Email Address" id="emailaddress"/>
	<label for="password" style="display:table;">Password</label>
	<input type="password" placeholder="Password" id="password"/>
	<button id="register" class="primary">Sign Up</button>
	<a id="cancel">Nevermind, cancel sign up</a>
</div>
<div id="app-toasts" class="app-toasts"></div>