Decide on a component structure: 1. Have Form control state and pass props to FormSection which will build inputs as FormItems 2. Build inputs directly in Form

    Leaning towards #2.  #1 is more scalable, but there is likely a library that does something similar to this, making this approach redundant unless using a library. Using a library does not display an ability to implement vanilla JS or HTML, which is the ultimate purpose of the project. Since state and props would all be contained in Form in either scenario, approach #1 would introduce unneccessary complexity and not improve readability.  As this project aims to submit a form to a website that has not changed in ~4 years, scalability is not an objective.

Complete form sections: 1. UserData 2. CallerData 3. ComplaintDetails? - May be packaged with #2


Save field data as json on submit - possibly package as 4 files to deal with each page of the CRTC website.


Apply CSS to make that form look usable and easy to read. Considder bootstrap.


Interface with headless browser to enter json info into CRTC form.

    Look into beautiful soup for form submission


Validate form fields

Create an automated testing framework using Selenium

    Something about web driver IO?


Implement config files for creating form fields

    Best to organize as formSections. Config files to be loaded into Form as config files will need to interact with state to have controlled forms. This may not be the case after learning about hooks, so be sure to do that first.