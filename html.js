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