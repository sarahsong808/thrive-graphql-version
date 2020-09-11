function ajax_get(url, callback) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      console.log("responseText:" + xmlhttp.responseText);
      try {
        var data = JSON.parse(xmlhttp.responseText);
      } catch (err) {
        console.log(err.message + " in " + xmlhttp.responseText);
        return;
      }
      callback(data);
    }
  };

  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
ajax_get("https://api.thecatapi.com/v1/images/search?breed_ids=acur", function (
  data
) {
  const dataBreeds = data[0]["breeds"][0];
  //origin
  document.getElementById("first-cat-origin").innerHTML = dataBreeds["origin"];
  //name
  document.getElementById("first-cat-name").innerHTML = dataBreeds["name"];
  //image
  var html = '<img src="' + data[0]["url"] + '" alt="cat image">';
  document.getElementById("first-cat-image").innerHTML = html;
  //description
  document.getElementById("first-cat-description").innerHTML =
    dataBreeds["description"];
});

//acur
//amis

ajax_get("https://api.thecatapi.com/v1/images/search?breed_ids=amis", function (
  data
) {
  const dataBreeds = data[0]["breeds"][0];
  //origin
  document.getElementById("second-cat-origin").innerHTML = dataBreeds["origin"];
  //name
  document.getElementById("second-cat-name").innerHTML = dataBreeds["name"];
  //image
  var html =
    '<img src="' + data[0]["url"] + '" height="275vh" alt="cat image">';
  document.getElementById("second-cat-image").innerHTML = html;
  //description
  document.getElementById("second-cat-description").innerHTML =
    dataBreeds["description"];
});

//https://api.thecatapi.com/v1/breeds/search?name
/* {
    "weight": {
        "imperial": "5 - 10",
        "metric": "2 - 5"
    },
    "id": "first-cat",
    "name": "American Curl",
    "cfa_url": "http://cfa.org/Breeds/BreedsAB/AmericanCurl.aspx",
    "vetstreet_url": "http://www.vetstreet.com/cats/american-curl",
    "vcahospitals_url": "https://vcahospitals.com/know-your-pet/cat-breeds/american-curl",
    "temperament": "Affectionate, Curious, Intelligent, Interactive, Lively, Playful, Social",
    "origin": "United States",
    "country_codes": "US",
    "country_code": "US",
    "description": "Distinguished by truly unique ears that curl back in a graceful arc, offering an alert, perky, happily surprised expression, they cause people to break out into a big smile when viewing their first Curl. Curls are very people-oriented, faithful, affectionate soulmates, adjusting remarkably fast to other pets, children, and new situations.",
    "life_span": "12 - 16",
    "indoor": 0,
    "lap": 1,
    "alt_names": "",
    "adaptability": 5,
    "affection_level": 5,
    "child_friendly": 4,
    "dog_friendly": 5,
    "energy_level": 3,
    "grooming": 2,
    "health_issues": 1,
    "intelligence": 3,
    "shedding_level": 3,
    "social_needs": 3,
    "stranger_friendly": 3,
    "vocalisation": 3,
    "experimental": 0,
    "hairless": 0,
    "natural": 0,
    "rare": 0,
    "rex": 0,
    "suppressed_tail": 0,
    "short_legs": 0,
    "wikipedia_url": "https://en.wikipedia.org/wiki/American_Curl",
    "hypoallergenic": 0
},

{
        "weight": {
            "imperial": "7 - 15",
            "metric": "3 - 7"
        },
        "id": "second-cat",
        "name": "Australian Mist",
        "temperament": "Lively, Social, Fun-loving, Relaxed, Affectionate",
        "origin": "Australia",
        "country_codes": "AU",
        "country_code": "AU",
        "description": "The Australian Mist thrives on human companionship. Tolerant of even the youngest of children, these friendly felines enjoy playing games and being part of the hustle and bustle of a busy household. They make entertaining companions for people of all ages, and are happy to remain indoors between dusk and dawn or to be wholly indoor pets.",
        "life_span": "12 - 16",
        "indoor": 0,
        "lap": 1,
        "alt_names": "Spotted Mist",
        "adaptability": 5,
        "affection_level": 5,
        "child_friendly": 4,
        "dog_friendly": 5,
        "energy_level": 4,
        "grooming": 3,
        "health_issues": 1,
        "intelligence": 4,
        "shedding_level": 3,
        "social_needs": 4,
        "stranger_friendly": 4,
        "vocalisation": 3,
        "experimental": 0,
        "hairless": 0,
        "natural": 0,
        "rare": 0,
        "rex": 0,
        "suppressed_tail": 0,
        "short_legs": 0,
        "wikipedia_url": "https://en.wikipedia.org/wiki/Australian_Mist",
        "hypoallergenic": 0
    },
*/
