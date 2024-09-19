// HTML 
// HTML stands for Hyper Text Markup Language. 
// HTML is the standard markup language for creating Web pages. 
// HTML describes the structure of a Web page. 

// HTML5
// HTML5: HTML5 is the latest version of HTML
// HTML5: Introduces new elements like <video>, <audio>, <canvas>, <svg>, <article>, <section>,
// <header>, <footer>, <nav>, <article>, <section>

///////////////////////////////////////////////////////////////////////////////////////
// div vs section
// Both <div> and <section> are HTML elements used for structuring and organizing 
// content on web pages, but they serve different purposes and have different semantic meanings:

// div
// Purpose: The <div> (division) element is a generic container used to group and 
// logically divide content within a webpage.

// section
// Purpose: The <section> element is used to define a thematic grouping of 
// content within a document or webpage.
///////////////////////////////////////////////////////////////////////////////////////
// Input Tag

//  <input type="text">
//  <input type="password">
//  <input type="checkbox" value="option1"> Option 1
//  <input type="radio" name="gender" value="male"> Male
//  <input type="radio" name="gender" value="female"> Female
//  <input type="submit" value="Submit">

//  <!-- Text input -->
//  <input type="text" name="username" placeholder="Enter your username">
//  
//  <!-- Password input -->
//  <input type="password" name="password" placeholder="Enter your password">
//  
//  <!-- Email input -->
//  <input type="email" name="email" placeholder="Enter your email">
//  
//  <!-- Number input with min and max values -->
//  <input type="number" name="quantity" min="1" max="10">
//  
//  <!-- Date input -->
//  <input type="date" name="birthdate">
//  
//  <!-- File upload -->
//  <input type="file" name="myfile">
//  
//  <!-- Checkbox -->
//  <input type="checkbox" name="agree" value="yes"> I agree to the terms
//  
//  <!-- Radio buttons -->
//  <input type="radio" name="gender" value="male"> Male
//  <input type="radio" name="gender" value="female"> Female
//  
//  <!-- Submit button -->
//  <input type="submit" value="Submit">



//////////////////////////////////////////////////////////////////////////////////////

// //CSS
// CSS is the acronym of “Cascading Style Sheets”. 
// CSS is a computer language for laying out and structuring 
// web pages (HTML or XML).

/////////////////////////////////////////////////////////////////////

// CSS (Cascading Style Sheets) and SCSS (Sassy CSS) are both 
// styling languages used to describe the presentation of HTML and XML documents. 
// However, they differ significantly in terms of their syntax, capabilities, and 
// how they are used in web development:

// ### CSS (Cascading Style Sheets):

// 1. **Syntax**:
//    - **Plain CSS**: Uses a simple syntax with selectors, properties, and values.
//    - **Example**:
    //  ```css
    //  body {
    //      font-family: Arial, sans-serif;
    //      background-color: #f0f0f0;
    //  }
     
    //  .container {
    //      width: 80%;
    //      margin: 0 auto;
    //  }
    //  ```

// 2. **Variables and Preprocessing**:
//    - **No Variables**: CSS traditionally does not support variables. Styles are repeated or hardcoded.
//    - **Limited Functions**: Basic functionality for selecting elements, applying styles, and handling media queries.

// 3. **File Extension**:
//    - `.css`: Standard file extension for CSS files.

// 4. **Usage**:
//    - Directly linked to HTML files using `<link>` tags.
//    - Can be used inline within HTML `<style>` tags.

// ### SCSS (Sassy CSS):

// 1. **Syntax**:
//    - **SCSS**: A syntax extension of CSS, using curly braces `{}` and semicolons `;`, similar to CSS.
//    - **Example**:
//      ```scss
//      $primary-color: #3498db;
     
//      body {
//          font-family: Arial, sans-serif;
//          background-color: #f0f0f0;
//      }
     
//      .container {
//          width: 80%;
//          margin: 0 auto;
//          padding: 20px;
//          background-color: lighten($primary-color, 20%);
//      }
//      ```

// 2. **Variables and Preprocessing**:
//    - **Variables**: SCSS supports variables, allowing developers to define reusable values throughout the stylesheet.
//    - **Mixins and Functions**: SCSS introduces mixins (reusable blocks of styles) and functions, enhancing code reusability and maintainability.
//    - **Example**:
//      ```scss
//      @mixin button-styles {
//          display: inline-block;
//          padding: 10px 20px;
//          background-color: $primary-color;
//          color: white;
//          border: none;
//          border-radius: 4px;
//          cursor: pointer;
//      }
     
//      .btn-primary {
//          @include button-styles;
//      }
//      ```

// 3. **File Extension**:
//    - `.scss`: Standard file extension for SCSS files.

// 4. **Compilation**:
//    - SCSS files need to be compiled into regular CSS using tools like Sass (Syntactically Awesome Style Sheets) preprocessor before being used in a web application.

// 5. **Usage**:
//    - SCSS files are linked to HTML or compiled into CSS and then linked.
//    - Provides more flexibility, modularity, and maintainability compared to plain CSS.

// ### Key Differences Summary:

// - **Syntax**: CSS uses basic selectors and properties, while SCSS extends CSS with variables, mixins, and nested rules.
// - **Variables**: SCSS supports variables for reusable values, improving maintainability.
// - **Preprocessing**: SCSS requires compilation into CSS, whereas CSS is used directly.
// - **Functionality**: SCSS provides additional features like mixins and functions, enhancing code organization and reusability.

// In summary, SCSS is an extension of CSS that offers more advanced features and improves the developer experience by adding variables, mixins, and other programming-like constructs, which are compiled into standard CSS for use in web projects.


//////////////////////////////////////////////////////////////////

// What are tags and attributes in HTML?    

// Tags are the primary component of the HTML that defines how 
// the content will be structured/ formatted, whereas Attributes are used along with 
// the HTML tags to define the characteristics of the element. For example, 

{/*   <img src="path/to/image.jpg" alt="A description of the image" width="300" height="200"> */}

/////////////////////////////////////////////////////////////////////

// What are void elements in HTML
// HTML elements which do not have closing tags or do not need to be closed are Void elements. 
// For Example <br />, <img />, <hr />, etc.

/////////////////////////////////////////////////////////////////////////

// What is the ‘class’ attribute in HTML?

// The class attribute is used to specify the class name for an HTML element. 
// Multiple elements in HTML can have the same class value. Also, 
// it is mainly used to associate the styles written in the stylesheet with the HTML elements.


////////////////////////////////////////////////////////////////////////////

// What is the difference between the ‘id’ attribute and the ‘class’ attribute of HTML elements?


// Multiple elements in HTML can have the same class value, 
// whereas a value of id attribute of one element cannot be associated with another HTML element.

///////////////////////////////////////////////////////////////////////////
// What are the various formatting tags in HTML?

// HTML has various formatting tags:
{/* <b> - makes text bold */}
{/* <i> - makes text italic */}
{/* <small> - decreases the font size of the text by one unit */}
{/* <strong> - marks the text as important */}
{/* <mark> - highlights the text */}

/////////////////////////////////////////////////////////////////////////////

// What is the difference between <strong>, <b> tags

{/* <strong> Tag */}
// Purpose: The <strong> tag is used to indicate that the text it encloses is of 
// strong importance or emphasis. It is semantic, meaning it provides meaning 
// beyond just visual presentation.
// Effect: By default, browsers render text within <strong> tags in bold. However, 
// the key point is that it implies that the text has strong importance.


{/* <b> Tag */}
{/* Purpose: The <b> tag is used purely for styling purposes, to make text bold. 
    It does not convey any special meaning or importance beyond its appearance.
Effect: It simply makes the text bold, without implying any extra importance or emphasis. */}


///////////////////////////////////////////////////////////////////////////////

// How is Cell Padding different from Cell Spacing?

// Cell Spacing is the space or gap between two consecutive cells. 
// Whereas, Cell Padding is the space or gap between the text/ content 
// of the cell and the edge/ border of the cell. Please refer to the above 
// figure example to find the difference.


////////////////////////////////////////////////////////////////////////////////

// To highlight the last <p> tag among multiple paragraphs, 
// you can use CSS to apply styling specifically to that element. 
// Here’s a simple way to do it:

// p:last-of-type {
//     background-color: yellow; /* Highlight color */
//     font-weight: bold;         /* Optional: make the text bold */
// }

// <p>Paragraph 1</p>
// <p>Paragraph 2</p>
// <p>Paragraph 3</p>
// <p>Paragraph 4</p>
// <p>Paragraph 5</p>
// <p>Paragraph 6</p>


//////////////////////////////////////////////////////////////////////////////////

    // In HTML, a block-level element is a type of element that starts on a new line and occupies 
    // the full width available to it, extending from the left edge to the right edge of its 
    // containing element. Block-level elements typically contain other elements and are used to 
    // structure the main parts of a web page. Here are some key characteristics and examples of 
    // block-level elements:


// <div>: A generic container often used for styling and layout purposes.
// <p>: Represents a paragraph of text.
// <h1>, <h2>, <h3>, <h4>, <h5>, <h6>: Headings of various levels, with <h1> being the highest and <h6> being the lowest.
// <ul>, <ol>: Unordered and ordered lists, respectively.
// <li>: List items within <ul> or <ol>.
// <header>: Represents the introductory content or a set of navigational links.
// <footer>: Represents the footer for a section or page.
// <section>: Represents a standalone section of content.
// <article>: Represents a self-contained piece of content that could be distributed independently.


////////////////////////////////////////////////////////////////////////////////////

// In HTML, an inline element is one that does not start on a new line and only takes up 
// as much width as necessary. Inline elements are generally used to style or structure 
// parts of text within block-level elements, and they do not break the flow of content. 
// Here are some key characteristics and examples of inline elements:

{/* <span>: A generic container used for styling or grouping a portion of text or inline elements.
<a>: Defines a hyperlink.
<strong>: Indicates that its contents are of strong importance (typically rendered in bold).
<em>: Indicates emphasized text (typically rendered in italics).
<img>: Embeds an image.
<abbr>: Represents an abbreviation or acronym.
<code>: Represents a fragment of computer code.
<br>: Inserts a line break within text.
<small>: Represents smaller text, often used for fine print or legal disclaimers. */}

////////////////////////////////////////////////////////////////////////////////////////

// What is the difference between “display: none” and “visibility: hidden”, when used as 
// attributes to the HTML element.
// When we use the attribute “visibility: hidden” for an HTML element then 
// that element will be hidden from the webpage but still takes up space. Whereas, 
// if we use the “display: none” attribute for an HTML element then the element will be hidden, 
// and also it won’t take up any space on the webpage.

////////////////////////////////////////////////////////////////////////////////////////

// In how many ways can we specify the CSS styles for the HTML element?
// There are three ways in which we can specify the styles for HTML elements:

// Inline: Here we use the ‘style’ attribute inside the HTML element.

// Internal: Here we use the <style> tag inside the <head> tag. 
// To apply the style we bind the elements using ‘id’ or ‘class’ attributes.

// External: Here we use the <link> tag inside <head> tag to reference the CSS file into our HTML code. 
// Again the binding between elements and styles is done using ‘id’ or ‘class’ attributes.

///////////////////////////////////////////////////////////////////////////////////////

// HTML and HTML5 

// Introduces new semantic elements that provide meaning and improve accessibility. These include:
// <header>: Represents introductory content or navigational links.
// <footer>: Represents footer content for a section or page.
// <article>: Represents a self-contained piece of content.
// <section>: Represents a thematic grouping of content.
// <nav>: Represents a navigation menu.
// <aside>: Represents content tangentially related to the content around it.


// Multimedia Support

// Provides native support for audio and video through the <audio> and <video> elements. 
// This means you can embed media without needing external plugins.

///////////////////////////////////////////////////////////////////////////////////////////

// What are raster images and vector images?
// Raster Images - The raster image is defined by the arrangement of pixels in a grid with exactly what color the pixel should be. Few raster file formats include PNG(.png), JPEG(.jpg), etc.
// Vector Images - The vector image is defined using algorithms with shape and path definitions that can be used to render the image on-screen written in a similar markup fashion. The file extension is .svg

///////////////////////////////////////////////////////////////////////////////////////////
//  css vs scss

// css

// Features: CSS is the basic styling language for the web and includes rules for colors, 
// fonts, layouts, and other visual elements.
// Compilation: No compilation is needed; the CSS code is ready to be used immediately.

// scss

// Variables: SCSS allows you to define variables to store colors, fonts, or any CSS values that you want to reuse.
// Nesting: SCSS supports nesting rules within other rules, making it easier to read and manage complex styles.
// Mixins: SCSS mixins enable you to create reusable chunks of styles.
// Inheritance: SCSS includes a feature called “extend” for inheriting styles from other selectors.
// Partials and Imports: SCSS allows you to break your stylesheet into smaller files (partials) and import them into a main stylesheet, promoting modularity and maintainability.


// Compilation: You need a tool (such as a build tool like Webpack or a Sass compiler) 
// to convert SCSS code into CSS. 
// This adds a build step to your development process.



