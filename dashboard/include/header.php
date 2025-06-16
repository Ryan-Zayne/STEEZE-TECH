<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="x-ua-compatible" content="ie=edge" />
		<title>Student Dashboard - SteezTech</title>
		<meta name="robots" content="noindex, follow" />
		<meta name="description" content="" />
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

		<!-- Favicon & Manifest -->
		<link rel="shortcut icon" type="image/x-icon" href="assets/images/favicon.png" />
		<link rel="manifest" href="manifest.json" />

		<!-- CSS -->
		<link rel="stylesheet" href="../../assets/css/vendor/bootstrap.min.css" />
		<link rel="stylesheet" href="../../assets/css/vendor/slick.css" />
		<link rel="stylesheet" href="../../assets/css/vendor/slick-theme.css" />
		<link rel="stylesheet" href="../../assets/css/app.min.css" />
		<link rel="stylesheet" href="../../assets/css/icons.min.css" />
		<link rel="stylesheet" href="../../assets/css/plugins/sal.css" />
		<link rel="stylesheet" href="../../assets/css/plugins/feather.css" />
		<link rel="stylesheet" href="../../assets/css/plugins/fontawesome.min.css" />
		<link rel="stylesheet" href="../../assets/css/plugins/euclid-circulara.css" />
		<link rel="stylesheet" href="../../assets/css/plugins/swiper.css" />
		<link rel="stylesheet" href="../../assets/css/plugins/odometer.css" />
		<link rel="stylesheet" href="../../assets/css/plugins/animation.css" />
		<link rel="stylesheet" href="../../assets/css/plugins/bootstrap-select.min.css" />
		<link rel="stylesheet" href="../../assets/css/plugins/jquery-ui.css" />
		<link rel="stylesheet" href="../../assets/css/plugins/magnigy-popup.min.css" />
		<link rel="stylesheet" href="../../assets/css/plugins/plyr.css" />
		<link rel="stylesheet" href="../../assets/css/plugins/jodit.min.css" />
		<link rel="stylesheet" href="../../assets/css/sidebar.css" />
		<link rel="stylesheet" href="../../assets/css/styles.css" />
		<!-- <link rel="stylesheet" href="assets/css/pwa.css" /> -->
	</head>

	<body class="bg-dashboard">
		<div class="rbt-dashboard-area">
			<div class="container-fluid">
				<div class="row">
					<!-- Sidebar Column -->
					<div class="col-lg-3 px-0 dashboard-sidenav" id="sidebar">
						<!-- Start Dashboard Sidebar -->
						<div
							class="rbt-default-sidebar rbt-shadow-box border-0 py-1"
							style="min-height: 100vh; position: fixed; width: inherit; max-width: inherit"
						>
							<div class="inner">
								<div class="content-item-content">
									<div class="rbt-default-sidebar-wrapper">
										<div class="logo dashboard-logo mb--10 d-flex justify-content-between align-items-center">
											<a href="index.html">
												<img src="../../assets/images/logo/logo.png" alt="SteezTech Logo" />
											</a>

											<button class="dashboard-close" id="side-close">
												<i class="feather-x"></i>
											</button>
										</div>
										<div class="section-title mb--20">
											<h6 class="rbt-title-style-2">Welcome, Student Name</h6>
										</div>
										<nav class="mainmenu-nav">
											<ul class="dashboard-mainmenu rbt-default-sidebar-list">
												<li>
													<a href="student-dashboard.html" class="active">
														<i class="feather-home"></i>
														<span>Dashboard</span>
													</a>
												</li>
												<li>
													<a href="forum/forum.html">
														<i class="feather-user"></i>
														<span>Forum Community</span>
													</a>
												</li>

												<li>
													<a href="index.html">
														<i class="feather-log-out"></i>
														<span>Logout</span>
													</a>
												</li>
											</ul>
										</nav>
									</div>
								</div>
							</div>
						</div>
						<!-- End Dashboard Sidebar -->
					</div>

					<!-- Main Content Column -->
					<div class="col-lg-9 px-0">
						<!-- Header -->
						<header class="rbt-header-wrapper ptb--15 mb--10">
							<div class="rbt-header-area rbt-header-sticky">
								<div class="container-fluid">
									<div class="row justify-content-between align-items-center">
										<div class="col-lg-5 col-6 d-flex align-items-center">
											<button id="side-toggle" class="d-lg-none me-3">
												<i class="feather-menu"></i>
											</button>
											<form action="#" class="rbt-search-style-1">
												<input
													type="text"
													placeholder="Search Courses"
													style="border-radius: 50px"
												/>
												<button class="search-btn"><i class="feather-search"></i></button>
											</form>
										</div>

										<div class="col-lg-2 col-6 d-flex justify-content-end">
											<div class="rbt-header-right">
												<div class="rbt-user-wrapper">
													<div class="rbt-header-sec-col rbt-header-right">
														<div class="rbt-header-content">
															<div class="header-info">
																<ul class="quick-access">
																	<li
																		class="account-access rbt-user-wrapper right-align-dropdown d-none d-xl-block"
																	>
																		<a href="#"><i class="feather-user"></i>User</a>
																		<div class="rbt-user-menu-list-wrapper">
																			<div class="inner">
																				<div class="rbt-admin-profile">
																					<div class="admin-thumbnail">
																						<img
																							src="assets/images/team/avatar.jpg"
																							alt="User Images"
																						/>
																					</div>
																					<div class="admin-info">
																						<span class="name">PixcelsIT</span>
																						<a
																							class="rbt-btn-link color-primary"
																							href="profile.html"
																							>View Profile</a
																						>
																					</div>
																				</div>
																				<hr class="mb--10 mt--10" />
																				<ul class="user-list-wrapper">
																					<li>
																						<a href="#">
																							<i class="feather-book-open"></i>
																							<span>Getting Started</span>
																						</a>
																					</li>
																				</ul>
																				<hr class="mb--10 mt--10" />
																				<ul class="user-list-wrapper">
																					<li>
																						<a href="settings.html">
																							<i class="feather-settings"></i>
																							<span>Settings</span>
																						</a>
																					</li>
																					<li>
																						<a href="index.html">
																							<i class="feather-log-out"></i>
																							<span>Logout</span>
																						</a>
																					</li>
																				</ul>
																			</div>
																		</div>
																	</li>

																	<li
																		class="access-icon rbt-user-wrapper right-align-dropdown d-block d-xl-none"
																	>
																		<a class="rbt-round-btn" href="#"
																			><i class="feather-user"></i
																		></a>
																		<div class="rbt-user-menu-list-wrapper">
																			<div class="inner">
																				<div class="rbt-admin-profile">
																					<div class="admin-thumbnail">
																						<img
																							src="../../assets/images/team/avatar.jpg"
																							alt="User Images"
																						/>
																					</div>
																					<div class="admin-info">
																						<span class="name">PixcelsIT</span>
																						<a
																							class="rbt-btn-link color-primary"
																							href="profile.html"
																							>View Profile</a
																						>
																					</div>
																				</div>
																				<ul class="user-list-wrapper">
																					<li>
																						<a href="instructor-dashboard.html">
																							<i class="feather-home"></i>
																							<span>My Dashboard</span>
																						</a>
																					</li>
																					<li>
																						<a href="#">
																							<i class="feather-bookmark"></i>
																							<span>Bookmark</span>
																						</a>
																					</li>
																					<li>
																						<a
																							href="instructor-enrolled-courses.html"
																						>
																							<i class="feather-shopping-bag"></i>
																							<span>Enrolled Courses</span>
																						</a>
																					</li>
																					<li>
																						<a href="instructor-wishlist.html">
																							<i class="feather-heart"></i>
																							<span>Wishlist</span>
																						</a>
																					</li>
																					<li>
																						<a href="instructor-reviews.html">
																							<i class="feather-star"></i>
																							<span>Reviews</span>
																						</a>
																					</li>
																					<li>
																						<a
																							href="instructor-my-quiz-attempts.html"
																						>
																							<i class="feather-list"></i>
																							<span>My Quiz Attempts</span>
																						</a>
																					</li>
																					<li>
																						<a href="instructor-order-history.html">
																							<i class="feather-clock"></i>
																							<span>Order History</span>
																						</a>
																					</li>
																					<li>
																						<a href="instructor-quiz-attempts.html">
																							<i
																								class="feather-message-square"
																							></i>
																							<span>Question & Answer</span>
																						</a>
																					</li>
																				</ul>
																				<hr class="mb--10 mt--10" />
																				<ul class="user-list-wrapper">
																					<li>
																						<a href="#">
																							<i class="feather-book-open"></i>
																							<span>Getting Started</span>
																						</a>
																					</li>
																				</ul>
																				<hr class="mb--10 mt--10" />
																				<ul class="user-list-wrapper">
																					<li>
																						<a href="instructor-settings.html">
																							<i class="feather-settings"></i>
																							<span>Settings</span>
																						</a>
																					</li>
																					<li>
																						<a href="index.html">
																							<i class="feather-log-out"></i>
																							<span>Logout</span>
																						</a>
																					</li>
																				</ul>
																			</div>
																		</div>
																	</li>
																</ul>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</header>
						<!-- End Header -->