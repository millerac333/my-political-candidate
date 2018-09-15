# Practice
You're going to create an HTML component to represent a political candidate. Specifically, the representative of your Congressional district. Visit the GovTrack site link below, enter in your home address, and you'll find basic information about your representative.

GovTrack - Congressional District Map

1. In your HTML, create an article tag that will serve as your main representative component. Give the element a unique identifier.
2. In this component, create a sub-component for basic information using the section tag. In this section create elements for the representative's image, name, district info, and political affiliation.
3. Beneath the basic information, you will create a sub-component, using a section tag, to list any committees the candidate is serving on.
4. The last component will hold links to any legislation that your representative has enacted.

Make sure you use good BEM-style class names for each element in your components. Put a comment above each component explaining what it is.

# Challenge
With JavaScript, use document.querySelector() to obtain a programmatic reference to your DOM <article> element that you created. With that reference, update its contents with another sub-component that displays a fictitious mission statement for your representative.

# Advanced Challenge
In JavaScript, there is a method that creates a new attribute node for any DOM element. Discover that method and use it to create a custom attribute named congressional-district and its value should be your congressional district number. Then attach that attribute to the <article> container you made for your representative component.
