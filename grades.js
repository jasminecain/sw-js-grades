var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
for(let i =0; i < scores.length; i++) {
  console.log("scores.length");
}

let gradeA = "";
let gradeB = "";
let gradeC = "";
let gradeD = "";
let gradeF = "";

for (i = 0; i < scores.length; i++) {

  // Check score range and increment by 1
  if (scores[i] <= 60) {
    gradeF = gradeF + 1;
  } else if (scores[i] <= 70) {
    gradeD = gradeD + 1;
  } else if (scores[i] <= 80) {
    gradeC = gradeC + 1;
  } else if (scores[i] <= 90) {
    gradeB = gradeB + 1;
  } else if (scores[i] <= 100) {
    gradeA = gradeA + 1;
  }
}
//Recording number of each grade range
console.log("how many A's", gradeA.length, "how many B's", gradeB.length, "how many C's", gradeC.length, "how many D's", gradeD.length, "how many F's", gradeF.length);
