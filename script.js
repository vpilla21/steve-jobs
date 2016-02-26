function positionFooter(){
	var footer = document.getElementById("footer");
	footerPos = footer.getBoundingClientRect();

	if(footerPos.bottom < window.innerHeight){
		footer.style.position = "absolute";
		footer.style.bottom = 0;
	}
}
function clearClass(){
	var intro = document.getElementById("intro").className="";
	var bio = document.getElementById("bio").className="";
	var gallery = document.getElementById("gallery").className="";
	var sources = document.getElementById("source").className="";
}
function setContent(type){
	var content = document.getElementById("content");
	var heading = document.getElementById("heading");
	var intro = document.getElementById("intro");
	var bio = document.getElementById("bio");
	var gallery = document.getElementById("gallery");
	var sources = document.getElementById("source");
	switch(type){
		case "bio":
			heading.innerHTML = "Biography";
			content.innerHTML = "<p>Steven Paul \"Steve\" Jobs was the the co-founder, chairman, and CEO of Apple Inc.. He was born on February 24, 1955. It was at Homestead High school where he met two of the most important people in his life, Steve Wozniak, a Homestead alumnus, and co-founder of Apple, and Chrisann Brennan, his girlfriend, and later mother of his first child, Lisa Brennan-Jobs. Jobs was a pioneer in microcomputer technology, and his wealth originated from the Apple II, a mass produced personal computer, that was one of the first successful microcomputer products. After seeing the Alto, he developed the Lisa, a significant document centric machine, which produce excellent prints, making it common in offices. The Lisa was followed by the Macintosh, which was the \"first mass-produced computer with a GUI\". However, Jobs was forced out of Apple in 1985. Soon after, Apple sales plummeted (Wikipedia).</p> \
			<p>Jobs then founded NeXT, a higher education and business computer company. The NeXT Computer, a low end workstation designed to be cheap enough for college students to use in their dorms, and still be powerful enough to run wet lab simulations. Tim Berners-Lee would create the first web browser, Nexus, and the first web server using a NeXT Computer. In 1996, Apple acquired NeXT, and Steve Jobs reclaimed his CEO position in 2000. His return resulted in the innovative design of the iMac, which popularized USB ports. The iPhone revolutionized cell phone technology, and was labeled Time magazine's Invention of the Year. it prompted touch-screen keyboards, and redefined mobile software distribution through the App Store. Previously apps had to be downloaded to a desktop, and loaded onto the phone, but due to its flawless design, \"it forced Apple-style App Stores on smart phone competitors and even desktop-software makers like Microsoft\" (Cult of Mac). It combined music and smartphone technology, which soon became standard. Its capacitive touchscreen, which relies on the electricity in the human body made push buttons and styluses obsolete.\
			</p>";
			clearClass();
			bio.className="active";
			break;
		case "gallery":
			heading.innerHTML = "Gallery";
			content.innerHTML = "<img src='img/apple1.jpg' alt='Apple Rainbow Logo'> <img src='img/steve1.jpg' alt='Steve Picture'> <img src='img/steve3.jpg' alt='Steve Jobs'><img src='img/steve1.jpg' alt='Steve Picture'> <img src='img/steve4.jpg' alt='Steve Apple'>\
			<video src='vid/iphonelaunch.mp4' controls>iPhone launch</video>";
			clearClass();
			gallery.className="active";
			break;
		case "source":
			heading.innerHTML = "Sources";
			content.innerHTML = "<a href='https://en.wikipedia.org/wiki/Steve_Jobs'>Wikipedia | Steve Jobs</a>\
			<a href='https://en.wikipedia.org/wiki/NeXT'>Wikipedia | Next</a>\
			<a href='http://www.cultofmac.com/103229/how-iphone-changed-the-world/'>How the iPhone Changed The World | Cult of Mac</a>";
			clearClass();
			source.className="active";
			break;
		default:
			heading.innerHTML="Introduction";
			content.innerHTML="<p>Steve Jobs was a genius and a revolutionary. His ideas and inventions have touched people all over the world. He built one of the greatest companies of all time, and will be remembered forever.</p>";
			clearClass();
			intro.className="active"
	}	
}
addEventListener("load", positionFooter);
addEventListener("load", setContent);