const message = `happy birthday, i hope today feels a little different for you, in a good way.\ni dont know how to say this without making it sound like too much, but you matter to me more than i usually show, and more than i probably know how to explain.\n\nout of everything, im just really glad i get to know you and be around you like this.\n\ni hope this year gives you more calm days, more clarity, and less things that weigh on you. \n\n and even if things arent always easy, i hope you know theres someone out here who genuinely cares about you, in a way thats not light or temporary.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
