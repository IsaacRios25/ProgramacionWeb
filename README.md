<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8"> <!--Para entender todos los caracteres-->
	<meta name="autor" content="universidad politecnica ">
	<link rel="icon" type="image/jpg" href="imagenes/logo-ITI.jpg"> <!--Fabicon-->
	<title>Mi primera página</title>
</head>
<body>
	<header>
		<h1>Titulo 1</h1> <!--Tamaño de los titulos-->
		<h2>Titulo 2</h2>
		<h3>Titulo 3</h3>
		<h4>Titulo 4</h4>
		<h5>Titulo 5</h5>
		<h6>Titulo 6</h6>
	</header>
	<nav>
		<ol type="a" start="5" > <!--Lista ordenada-->
			<a href="index.html" alt="ir a la pagina UPSLP"><li>Inicio</li></a>
			<a href="informacion.html"><li>Elemento 2</li></a>
			<li>Elemento 3</li>
			<li>Elemento 4</li>
			<li>Elemento 5</li>
		</ol>
	</nav>
	<hr width="50%" size="10px" noshade color="#456123" /> <!--noshade sirve para quitar la sombra -->
		<ul type="square"> <!--Lista desordenda--> 
			<li>Tema 1</li>
			<ol>			<!--Lista anidada-->
				<li>Subtema 1</li>
				<ul type="circle">
					<li>Concepto 1</li>
					<li>Concepto 2</li>
				</ul>
				<li>Subtema 2</li>
				<li>Subtema 3</li>
				<ul type="disc">
					<li>Tabla 1</li>
					<li>Tabla 2</li>
				</ul>
			</ol>
			<li>Tema 2</li>
			<li>Tema 3</li>
			<li>Tema 4</li>
			<li>Tema 5</li>
		</ul>
		<section>
			<h2>Titulo de la sección</h2>
			<p align="center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo<br/>
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non<br><br>
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				
			</p><!--Para generar parrafos de texto-->
			<p align="right">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				
			</p>
			<p  align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				
			</p>
			<h2>Titulo de la seccion 2</h2>
			<p>Lorem &nbsp; ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
			proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p><!--nbsp es una entidad para tener espacios-->
		</section>
		<aside>
			<blockquote>Inserta texto con una tabulacion o sangria </blockquote><br>
			<blockquote>Inserta texto con una tabulacion o sangria </blockquote>
		</aside>
		<footer> <!--etiquta del pie de pagina -->
			<h4>Pie de pagina. Todos los derechos reservados.  &copy; 2024</h4>  <!--El copy es un simpolo de entidad en html-->
		</footer>
</body>
</html>
