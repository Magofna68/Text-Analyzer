function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function (element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurencesInText(word, text) {
  debugger;
  if (text.trim().length === 0) {
    return 0;

  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function (element) {
    if (element.toLowerCase().includes(word.toLowerCase
      ())) {
      wordCount++
    }
  });
  return wordCount;
}

//UI Logic 

$(document).ready(function () {
  $("form#word-counter").submit(function (event) {
    event.preventDefault();
    const passage = $("#text-passage").val();
    console.log("This is what the user input for passage: " + passage)
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurencesOfWord = numberOfOccurencesInText
      (word, passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurencesOfWord);
  });
});


// function wordCounter(text) {
//   if (text.trim().length === 0) {
//     return 0;
//   }
//   function numberOfOccurrencesInText(word, text) {
//     if (text.trim().length === 0) {
//       return 0;
//     }
//     const wordArray = text.split(" ");
//     let wordCount = 0;
//     wordArray.forEach(function (word) {
//       if (word.toLowerCase() === Element.toLowerCase()) {
//         wordCount++
//       }
//     });
//     return wordCount;
//   }
// function numberOfOccurrencesInText(word, text) {
  // const wordArray = text.split(" ");
  // let wordCount = 0;
//   wordArray.forEach(function(element) {
//     if (word === element) {
//       wordCount++
//     }
//   });
//   return wordCount;
// }