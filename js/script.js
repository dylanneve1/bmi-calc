
function calculateBmi(){
	let weight = $("#weight").val();
	let height = $("#height").val();

	if(weight > 0 && height > 0){	
		let finalBmi = weight/(height/100*height/100)
		$("#bmi").val(finalBmi);

		
		switch(true){
			case (finalBmi < 18.5):
				$("#feedback").html("You are too thin.");
				break;

			case (finalBmi > 18.5 && finalBmi < 25):
				$("#feedback").html("You are healthy.");
				break;

			case (finalBmi > 25):
				$("#feedback").html("You are overweight.");
				break;
		}
	}
	else{
		//alert("Please Fill in everything correctly")
		$("#feedback").html("Please fill in everything correctly");
	}
}
