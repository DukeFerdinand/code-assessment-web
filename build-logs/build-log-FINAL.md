### Build Log - FINAL!

Well here we are. At the end of the project. And I was starting to enjoy the code layout! Oh well, all things must come to an end, and this project is no different.

For this final pull request, I finished task #3, the API integration. This was probably the least challenging task on the list. That's not to say it was a walk in the park, but it was far easier than it could have been because I thought ahead when I integrated the snapshot testing (more on this [later](#testing-notes)).

Ultimately, I'm pretty happy with the project here. I'm not 100% satisfied with everything, but I'm happy to say it's my code. I learned a lot from this project and I'm grateful for the opportunity to display and grow my skills as a developer.

I hope this project has shown you the kind of developer I am, and I hope that it will influence you positively in my potential hiring.

Thank you for reading this, and thank you again for the opportunity!

Doug


P.S:

### Notes on Testing <a name="testing-notes">

The testing this round was _FAR_ easier than it could have been thanks to my snapshot testing.

To say what I mean, please see the following image: 

![snapshot example](/assets/snapshot.png)

You'll notice that the old price and title props are both there in the snapshot (green), and only the price is showing up in the update (red). If I had only been testing traditionally, I likely would have missed this bug and it could have lead to hours of wasted time. But since I used the snapshot testing, I was able to recognize bugs like this in multiple test suites and fix them fairly easily.

