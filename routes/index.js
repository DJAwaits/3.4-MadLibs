var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    verb1: "run",
    noun1: "dog",
    adjective1: "large",
    verb2: "dancing",
    noun2: "Joe",
    adjective2: "hairy"
  });
});


router.post('/story', function(req, res){
  let body = req.body;
  let newStory = getStory(body);
  res.render('story', {
    newStory: newStory
  });
})



module.exports = router;

function getStory(formData){
  if (formData.storyChoice === "1") {
    return generateStory1(formData);
  }else if (formData.storyChoice === "2") {
    return generateStory2(formData);
  }else if (formData.storyChoice === "3") {
    return generateStory3(formData);
  }else if (formData.storyChoice === "4") {
    return generateRandomStory
  }else {
    return "invalid";
  }
}


function generateStory1(formData) {
  return `There was a ${formData.adjective1} ${formData.noun1} named ${formData.noun2} that was very ${formData.adjective2}.
  The ${formData.noun1} was ${formData.verb1} in their house. The ${formData.noun1} was very good at ${formData.verb2} and
  always did it in their house during the afternoon.`
}

function generateStory2(formData){
  return `There was a ${formData.adjective1} ${formData.noun1} named ${formData.noun2} that was very ${formData.adjective2}.
      The ${formData.noun1} was ${formData.verb1} in their house. The ${formData.noun1} was very bad at ${formData.verb2} and
  always ended up breaking something whenever they tried.`
}

function generateStory3(formData){
  return `There was a ${formData.adjective1} ${formData.noun1} named ${formData.noun2} that was very ${formData.adjective2}.
      The ${formData.noun1} was ${formData.verb1} at the lake. The ${formData.noun1} was decent at ${formData.verb2} and
  always tried their best to get better at it.`
}

function generateRandomStory(formData) {

}
