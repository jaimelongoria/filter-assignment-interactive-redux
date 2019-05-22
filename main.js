//GET WHAT IS SELECTED:
$(document).ready(function () { // we must wait for the DOM to be ready as the browser can take a little while to read all of the HTML and build the elements

	let person_template = _.template($("#person_template").html()), //outside to save processing and need to rebuild that variable each time. Could be inside the bind, but wastes processing.
		option_template = _.template($("#select_template").html()),

		year = _.uniqBy(data, "occur_year"),
		boros = _.uniqBy(data, "boro"),
		death = _.uniqBy(data, "statistical_murder_flag"),
		age = _.uniqBy(data, "vic_age_group"),
		gender = _.uniqBy(data, "vic_sex"),
		race = _.uniqBy(data, "vic_race");

	year = _.sortBy(year, "occur_year"),
		boros = _.sortBy(boros, "boro"),
		death = _.sortBy(death, "statistical_murder_flag"),
		age = _.sortBy(age, "vic_age_group"),
		gender = _.sortBy(gender, "vic_sex"),
		race = _.sortBy(race, "vic_race");



	_.each(year, function (person) {
		$("#occur_year").append(option_template({ shot: person.occur_year }));
	});

	_.each(boros, function (person) {
		$("#boro").append(option_template({ shot: person.boro }));
	});

	_.each(death, function (person) {
		$("#statistical_murder_flag").append(option_template({ shot: person.statistical_murder_flag }));
	});

	_.each(age, function (person) {
		$("#vic_age_group").append(option_template({ shot: person.vic_age_group }));
	});

	_.each(gender, function (person) {
		$("#vic_sex").append(option_template({ shot: person.vic_sex }));
	});

	_.each(race, function (person) {
		$("#vic_race").append(option_template({ shot: person.vic_race }));
	});



	$("body").on("change", ".choice", function () {
		console.log("this.value");
		console.log(this.value);

		$("span").addClass("fadein");
		setTimeout(function () {
			$("span").removeClass("fadein");
		}, 2000);

		//set up an empty object to store your filters in
		let filters = {};

		//look at each dropdown
		$(".choice").each(function () {
			const $this_choice = $(this),
				value = $this_choice.val(),
				property = $this_choice.attr("id");

			//if this dropdown has been used, add its value to the filter
			if (value !== "") {
				filters[property] = value;
			}
		});

		//filter the data by the selections
		let results = _.filter(data, filters);
		const outof = " out of 20,659 victims match this demographic."
		array = results
		let percent = (array.length / 20659) * 100
		let pretotal = parseFloat(percent)
		let pertotal = "This is " + pretotal.toPrecision(3) + "% of shooting victims between 2006 and 2018."
		let arraylength = array.length;
		let finalarraylength = arraylength.toLocaleString('US');


		console.log("pertotal");
		console.log(pertotal);


		var tot = $(".total").find("span").text(finalarraylength).append(outof);
		var per = $(".percent_total").find("span").text(pertotal);


		$("#rstbtn").on("mousedown", function () {
			console.log("clicked");

			$("#firsttotal").addClass("fadein");
			setTimeout(function () {
				$("#firsttotal").removeClass("fadein");
			}, 2000);

			// $(per).hide();
			var initialgraph = "According to NYPD data 20,659 people were shot between 2006 and 2018. Use the filter below to narrow the demographics of each victim."
			$("#firsttotal").find("span").text(initialgraph);
			$(".percent_total").find("span").text("");

		});




		// result = _.chain(data)
		// 	.filter({ "boro": this.value })
		// 	.value();

		//result = _.filter(data, { boro: this.value });


		// $("#shootings").html(person_template({ person: result }));



		// console.log("result");
		console.log(results);

	});



	//	$("#killed").on("change", function () {
	//		console.log("this.value");
	//		console.log(this.value);

	//		result = _.filter(data, { statistical_murder_flag: this.value });

	//		$("#shootings").html(person_template({ person: result }));

	//		console.log("result");
	//		console.log(result);

	//	});

	//	$("#old").on("change", function () {
	//		console.log("this.value");
	//		console.log(this.value);

	//		result = _.filter(data, { vic_age_group: this.value });

	//		$("#shootings").html(person_template({ person: result }));

	//		console.log("result");
	//		console.log(result);

	//	});

	//	$("#sex").on("change", function () {
	//		console.log("this.value");
	//		console.log(this.value);

	//		result = _.filter(data, { vic_sex: this.value });

	//		$("#shootings").html(person_template({ person: result }));

	//		console.log("result");
	//		console.log(result);

	//	});

	//	$("#racial").on("change", function () {
	//		console.log("this.value");
	//		console.log(this.value);

	//		result = _.filter(data, { vic_race: this.value });

	//		$("#shootings").html(person_template({ person: result }));

	//		console.log("result");
	//		console.log(result);

	//	});





	//	$('#enter').on("click", function (e) {
	//		e.preventDefault(); //disable the button's default behavior
	// DO STUFF...
	//		persons_boro = $("#borough").val();
	//		result = _.find(data, { shot: persons_boro });



	//		$("#shootings").html(person_template({ person: result }));



	//	});


	console.log("year");
	console.log(year);

	console.log("boros");
	console.log(boros);

	console.log("deaths");
	console.log(death);

	console.log("ages");
	console.log(age);

	console.log("gender");
	console.log(gender);

	console.log("race");
	console.log(race);
});



//var result = _(data)
//.groupBy('boro')
//	.map((items, boro) => ({ boro, count: items.length }))
//.value();

//	console.log(_.includes('vic_race')); // false


//console.log(result);

//	var result = _(data)
//.groupBy('statistical_murder_flag')
//	.map((items, statistical_murder_flag) => ({ statistical_murder_flag, count: items.length }))
//	.value();

//	console.log(result);

//	var result = _(data)
//	.groupBy('statistical_murder_flag', 'vic_race')
//	.map((items, statistical_murder_flag, vic_race) => ({ statistical_murder_flag, vic_race, count: items.length }))
//	.value();

//	console.log(result);


//	var result = _(data)
//	.groupBy('vic_age_group')
//	.map((items, vic_age_group) => ({ vic_age_group, count: items.length }))
//	.value();

//	console.log(result);


//	var result = _(data)
//	.groupBy('precinct')
//	.map((items, precinct) => ({ precinct, count: items.length }))
//	.value();

//console.log(result);


//var result = _(data)
//.groupBy('vic_age_group')
//.map((items, vic_age_group) => ({ vic_age_group, count: items.length }))
//	.value();

//console.log(result);


//var result = _(data)
//	.groupBy('vic_sex')
//	.map((items, vic_sex) => ({ vic_sex, count: items.length }))
//	.value();

//	console.log(result);


//var result = _(data)
//	.groupBy('vic_race')
//	.map((items, vic_race) => ({ vic_race, count: items.length }))
//	.value();


//	console.log(result);

//document.write('<pre>' + JSON.stringify(result, 0, 4) + '</pre>');



// closes document ready