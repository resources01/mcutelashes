function loadData(pageName) {
	$("#header").load('components/header.html');
	$("#footer").load('components/footer.html', function () {
		$.getJSON('config_data.json', function (cgf) {


			$("#storeAddressWard").html("Top Lashes Beauty Spa in " + cgf.info.salon.ward + ", " + cgf.info.salon.state);

			// $("#storeNameSpecialties").html(cgf.info.salon.store);
			$("#storeNameAndAddress").html(cgf.info.salon.store + " in " + cgf.info.salon.ward + ", " + cgf.info.salon.state);
			$("#storeFullAddressCity").html(cgf.info.salon.state);
			$("#storeFullAddress").html(cgf.info.salon.address);


			$("#storePhone").html(cgf.info.salon.phone);
			$("#storeEmail").html(cgf.info.salon.email);
			$("#storeTime").html(cgf.info.salon.time_1 + "<br>" + cgf.info.salon.time_2 + "<br>" + cgf.info.salon.time_3 + "<br>" + cgf.info.salon.time_4 + "<br>" + cgf.info.salon.time_5);
			$("#storeTime_1").html(cgf.info.salon.time_1);
			$("#storeTime_2").html(cgf.info.salon.time_2);
			$("#storeTime_3").html(cgf.info.salon.time_3);
			$("#storeTime_4").html(cgf.info.salon.time_4);
			$("#storeTime_5").html(cgf.info.salon.time_5);



			$("[name=storePhone]").each(function () {
				jQuery(this).html(cgf.info.salon.phone);
			});
			$("[name=storeName]").each(function () {
				jQuery(this).html(cgf.info.salon.store);
			});
			$("[name=storeEmail]").each(function () {
				jQuery(this).html(cgf.info.salon.email);
			});
			$("[name=storeFullAddress]").each(function () {
				jQuery(this).html(cgf.info.salon.address);
				// alert('aaa');
			});
			$("[name=storeNameAndAddress]").each(function () {
				jQuery(this).html(cgf.info.salon.store + " in " + cgf.info.salon.ward + ", " + cgf.info.salon.state);
			});
			$("[name=storeTime_1]").each(function () {
				jQuery(this).html(cgf.info.salon.time_1);
			});
			$("[name=storeTime_2]").each(function () {
				jQuery(this).html(cgf.info.salon.time_2);
			});
			$("[name=storeTime_3]").each(function () {
				jQuery(this).html(cgf.info.salon.time_3);
			});
			$("[name=storeTime_4]").each(function () {
				jQuery(this).html(cgf.info.salon.time_4);
			});
			$("[name=storeTime_5]").each(function () {
				jQuery(this).html(cgf.info.salon.time_5);
			});


			// menu page
			$("#storeTitleMenu").html(cgf.info.salon.store + " Services");


			$("[data-booking]").attr('href', cgf.info.social.booking);
			$("[data-facebook]").attr('href', cgf.info.social.facebook);
			$("[data-instagram]").attr('href', cgf.info.social.instagram);
			$("[data-google]").attr('href', cgf.info.social.google);
			$("[data-maps]").attr('src', cgf.info.social.maps);
			$("[data-phone]").attr('href', "tel:+1" + cgf.info.salon.phone);



			var parts = $(location).attr('href').split('/');
			var dir_image = parts.pop() || parts.pop();
			dir_image = dir_image.replace('.html', '')
			if (dir_image == '' || dir_image == 'index') { dir_image = "home"; }
			$("[pic_src]").each(function (index) {
				let name_pic = cgf.info.slug + '-' + $(this).attr('pic_src');
				let path_image = 'img/' + dir_image + '/' + name_pic + '.jpg';
				if (cgf.debug == 'on') { console.log(path_image) }
				if ($(this).is('[pic_bg]')) {
					$(this).css("background-image", "url('" + path_image + "')");
				} else { $(this).attr({ 'src': path_image, 'alt': name_pic }) }
			});

			if (pageName == "INDEX") {

				loadDataForIndex(cgf);
			} else if (pageName == "GALLERY") {
				loadDataForGallery(cgf);
			} else if (pageName == "MENU") {
				loadDataForMenu(cgf);
			} else if (pageName == "CONTACT") {
				loadDataForContact(cgf);
			}




		})
			.fail(function () { $('body').empty().append("Error 403: Can't Load Data Website"); })
	});

}

function loadDataForIndex(cgf) {
	var isLeft = false;
	$.each(cgf.services, function (count, item) {
		if (item.home == true) {
			if (isLeft == false) {
				isLeft = true;
				$("#leftService").html(item.name);
				$("#leftPrice").html("$" + item.price);
				$("#leftServiceImage").attr('src', "./img/home/" + item.url);
			} else {
				$("#rightService").html(item.name);
				$("#rightPrice").html("$" + item.price);
				$("#rightServiceImage").attr('src', "./img/home/" + item.url);
			}
		}
	});
	var strCol = '<div class="menus d-flex align-items-center service_item">' +
		'    <div class="text-wrap">' +
		'        <div class="row align-items-start service_item display-row title-small">' +
		'            <div class="col-8">' +
		'                <h4 class="service_name">SERVICE_NAME</h4>' +
		'            </div>' +
		'            <div class="col-4">' +
		'                <h4 class="text-muted menu-price">SERVICE_PRICE</h4>' +
		'            </div>' +
		'        </div>' +
		'    </div>' +
		'</div>';

	// isLeft = false;
	// $.each(cgf.categories, function (count, cat) {
	// 	if (cat.home == true) {
	// 		if (isLeft == false) {
	// 			isLeft = true;
	// 			$("#leftCategoryName").html(cat.name);
	// 			$("#leftCategoryImage").attr('src', "./img/home/" + cat.src);
	// 			var srtLefts = "";
	// 			$.each(cgf.services, function (count1, srv) {
	// 				if (srv.category == cat.name) {
	// 					srtLefts = srtLefts + strCol.replace('SERVICE_NAME', srv.name).replace('SERVICE_PRICE', "$" + srv.price + (srv.plus ? " Up" : ""));
	// 				}
	// 			});

	// 			$("#leftServices").html(srtLefts);


	// 		} else {
	// 			$("#rightCategoryName").html(cat.name);
	// 			$("#rightCategoryImage").attr('src', "./img/home/" + cat.src);

	// 			var srtRights = "";
	// 			$.each(cgf.services, function (count1, srv) {
	// 				if (srv.category == cat.name) {
	// 					srtRights = srtRights + strCol.replace('SERVICE_NAME', srv.name).replace('SERVICE_PRICE', "$" + srv.price + (srv.plus ? " Up" : ""));
	// 				}
	// 			});

	// 			$("#rightServices").html(srtRights);
	// 		}
	// 	}
	// });

	var srtCols = "";
	$.each(cgf.categories, function (count, cat) {
		if (cat.home == true) {
			var strColElement = '<div class="col-md-6 col-lg-6 col-xl-5 menu-wrap">' +
				'                            <div class="heading-menu mb-4">' +
				'                                <h3 id="categoryName" class="text-center mb-3 mt-3">CAT_NAME</h3>' +
				'                                <div class="menu-img rounded-circle m-auto">' +
				'                                    <img class="img-fluid" src="CAT_SRC"  alt="">' +
				'                                </div>' +
				'                            </div>' +
				'                            <div>SERVICES_LIST</div>' +
				'                        </div>';

			srtCols = srtCols + strColElement.replace('CAT_SRC', "./img/home/" + cat.src).replace('CAT_NAME', cat.name);
			var strServices = "";
			$.each(cgf.services, function (count1, srv) {
				var strServiceElement =
					'<div class="menus d-flex align-items-center service_item">' +
					'    <div class="text-wrap">' +
					'        <div class="row align-items-start service_item display-row title-small">' +
					'            <div class="col-8">' +
					'                <h4 class="service_name">SERVICE_NAME</h4>' +
					'            </div>' +
					'            <div class="col-4">' +
					'                <h4 class="text-muted menu-price">SERVICE_PRICE</h4>' +
					'            </div>' +
					'        </div>' +
					'    </div>' +
					'</div>';

				if (srv.category == cat.name) {
					strServices = strServices + strServiceElement.replace('SERVICE_NAME', srv.name).replace('SERVICE_PRICE', "$" + srv.price + (srv.plus ? " Up" : ""));
				}
			});

			srtCols = srtCols.replace('SERVICES_LIST', strServices);
		}
	});
	$("#servicesOfCate").html(srtCols);




	var strGalleryElement = '<div class="col-md-6 col-lg-4 py-3 wow zoomIn">' +
		'                                    <div class="card-doctor">' +
		'                                        <div class="header">' +
		'                                            <img src="IMAGE_SRC" alt="">' +
		'                                           ' +
		'                                            <div class="meta">' +
		'                                                <a target=_blank href="FB_SRC"><i' +
		'                                                        class="fab fa-facebook"></i></a>' +
		'                                                <a target=_blank href="IS_SRC"><i' +
		'                                                        class="fab fa-instagram"></i></a>' +
		'                                                <a target=_blank href="GG_SRC"><i class="fab fa-google"></i></a>' +
		'                                            </div>' +
		'                                        </div>' +
		'                                    </div>' +
		'                                </div>';



	/* services page */
	var strGalleries = "";
	$.each(cgf.gallery, function (count1, gal) {
		if (gal.home == true) {
			var strSrc = "./img/home/" + gal.url;
			strGalleries = strGalleries + strGalleryElement.replace('IMAGE_SRC', strSrc).replace('FB_SRC', cgf.info.social.facebook).replace('IS_SRC', cgf.info.social.instagram).replace('GG_SRC', cgf.info.social.google);
		}
	});

	$("#galleries").html(strGalleries);


	var catElement = '<div class="col-md-4">' +
		'                                <div class="team-card mb-5">' +
		'                                    <img class="img-fluid" src="CAT_SRC" alt="#">' +
		'                                    <div class="team-desc">' +
		'                                        <h4 class="mb-0">CAT_NAME</h4>' +
		'                                        <p class="mb-1">See more</p>' +
		'                                        <ul class="list-inline mb-0 team-social-links">' +
		'                                            <li class="list-inline-item">' +
		'                                                <a target="_blank" href="CAT_FB" >' +
		'                                                    <i class="fab fa-facebook-f"></i>' +
		'                                                </a>' +
		'                                            </li>' +
		'                                            <li class="list-inline-item">' +
		'                                                <a target="_blank" href="CAT_IS">' +
		'                                                    <i class="fab fa-instagram"></i>' +
		'                                                </a>' +
		'                                            </li>' +
		'                                            <li class="list-inline-item">' +
		'                                                <a target="_blank" href="CAT_GG">' +
		'                                                    <i class="fab fa-google"></i>' +
		'                                                </a>' +
		'                                            </li>' +
		'                                        </ul>' +
		'                                    </div>' +
		'                                </div>' +
		'                            </div>';


	var strCategories = "";
	$.each(cgf.categories, function (count1, cat) {
		if (cat.special == true) {
			var strSrc = "./img/home/" + cat.src;
			strCategories = strCategories + catElement.replace('CAT_SRC', strSrc).replace('CAT_NAME', cat.name).replace('CAT_FB', cgf.info.social.facebook).replace('CAT_IS', cgf.info.social.instagram).replace('CAT_GG', cgf.info.social.google);
		}
	});

	$("#specialCategories").html(strCategories);
}

function loadDataForGallery(cgf) {
	var strGalleryElement = '<div class="col-md-6 col-lg-4 py-3 wow zoomIn">' +
		'                                    <div class="card-doctor">' +
		'                                        <div class="header">' +
		'                                            <img src="IMAGE_SRC" alt="">' +
		'                                           ' +
		'                                            <div class="meta">' +
		'                                                <a target=_blank href="FB_SRC"><i' +
		'                                                        class="fab fa-facebook"></i></a>' +
		'                                                <a target=_blank href="IS_SRC"><i' +
		'                                                        class="fab fa-instagram"></i></a>' +
		'                                                <a target=_blank href="GG_SRC"><i class="fab fa-google"></i></a>' +
		'                                            </div>' +
		'                                        </div>' +
		'                                    </div>' +
		'                                </div>';




	var strGalleries = "";
	$.each(cgf.gallery, function (count1, gal) {
		var strSrc = "./img/home/" + gal.url;
		strGalleries = strGalleries + strGalleryElement.replace('IMAGE_SRC', strSrc).replace('FB_SRC', cgf.info.social.facebook).replace('IS_SRC', cgf.info.social.instagram).replace('GG_SRC', cgf.info.social.google);

	});

	$("#galleries").html(strGalleries);

}

function loadDataForMenu(cgf) {

	var srtCols = "";
	$.each(cgf.categories, function (count, cat) {
		var strColElement = '<div class="col-md-6 col-lg-6 col-xl-5 menu-wrap">' +
			'                            <div class="heading-menu mb-4">' +
			'                                <h3 id="categoryName" class="text-center mb-3 mt-3">CAT_NAME</h3>' +
			'                                <div class="menu-img rounded-circle m-auto">' +
			'                                    <img class="img-fluid" src="CAT_SRC"  alt="">' +
			'                                </div>' +
			'                            </div>' +
			'                            <div>SERVICES_LIST</div>' +
			'                        </div>';

		srtCols = srtCols + strColElement.replace('CAT_SRC', "./img/home/" + cat.src).replace('CAT_NAME', cat.name);
		var strServices = "";
		$.each(cgf.services, function (count1, srv) {
			var strServiceElement =
				'<div class="menus d-flex align-items-center service_item">' +
				'    <div class="text-wrap">' +
				'        <div class="row align-items-start service_item display-row title-small">' +
				'            <div class="col-8">' +
				'                <h4 class="service_name">SERVICE_NAME</h4>' +
				'            </div>' +
				'            <div class="col-4">' +
				'                <h4 class="text-muted menu-price">SERVICE_PRICE</h4>' +
				'            </div>' +
				'        </div>' +
				'    </div>' +
				'</div>';

			if (srv.category == cat.name) {
				strServices = strServices + strServiceElement.replace('SERVICE_NAME', srv.name).replace('SERVICE_PRICE', "$" + srv.price + (srv.plus ? " Up" : ""));
			}
		});

		srtCols = srtCols.replace('SERVICES_LIST', strServices);
	});
	$("#servicesOfCate").html(srtCols);
}
