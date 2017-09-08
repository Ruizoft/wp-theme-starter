<?php
/**
 * Header file common to all
 * templates
 *
 */
?>
<!doctype html>
<html class="site no-js" <?php language_attributes(); ?>>
<head>
	<!--[if lt IE 9]>
		<script src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.2/html5shiv.min.js"></script>
	<![endif]-->

	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta http-equiv="X-UA-Compatible" content="IE=Edge"/>
	<meta name="viewport" content="width=device-width, initial-scale=1"/>

  <meta name="author" content="http://seiseje.co/">
  <meta name="description" content="">
   <meta property="image" content="" />

  <meta property="og:image" content="" />
  <meta property="og:description" content=""/>

  <meta property="og:title" content="" />

	<title> </title>


	<?php // replace the no-js class with js on the html element ?>
	<script>document.documentElement.className=document.documentElement.className.replace(/\bno-js\b/,'js')</script>

	<?php wp_head(); ?>
</head>
<body class="site__body">
<div class="modal fade bs-example-modal-lg" id="video" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        </div>
        <div class="modal-body">

        </div>
      </div>
    </div>
  </div>
<div class="root">
<nav class="navbar navbar-expand-lg fixed-top nav_container">
<div class="collapse navbar-collapse collapse_container" id="navbarNavAltMarkup">
    <div class="navbar-nav main_nav">
      <a class="nav-item nav-link active link" href="http://uptradingvirtual.com/" target="_blank">Educación <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">Contacto</a>
    </div>
  </div>
  <a href="/" class="link">
    <span class="h1 navbar-brand mb-0 brand_title">
      <div class="name">
        <?php MOZ_SVG::svg( 'uptrading' ); ?>
      </div>
      <div class="logo">
      <?php MOZ_SVG::svg( 'logoAzul' ); ?>
      </div>

    </span>
  </a>
    <div class="navbar-nav right_nav">
      <a class="nav-item nav-link active" href="/inscripciones">Inscripciones <span class="sr-only">(current)</span></a>
    </div>
</nav>
