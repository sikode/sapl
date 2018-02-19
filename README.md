<div align="center">
    <a href="https://github.com/Logustra/sapl">
      <img src="http://ultraimg.com/images/2018/02/19/nsjq.png" width="175px"
        alt="Sapl - The Sass Boilerplate">
    </a>
</div>

# Sapl - The Sass Boilerplate
[![Build Status](https://travis-ci.org/Logustra/sapl.svg?branch=master)](https://travis-ci.org/Logustra/sapl)
[![License](https://img.shields.io/github/license/Logustra/sapl.svg)](https://raw.githubusercontent.com/Logustra/sapl/master/LICENSE.md)
[![GitHub issues](https://img.shields.io/github/issues/Logustra/sapl.svg)](https://github.com/Logustra/sapl/issues)
[![GitHub stars](https://img.shields.io/github/stars/Logustra/sapl.svg)](https://github.com/Logustra/sapl/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Logustra/sapl.svg)](https://github.com/Logustra/sapl/network)

Sapl - The Sass Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.

* Sass with Gulp : [Here](https://github.com/Logustra/sapl/tree/sass-with-gulp)
* Sass with Grunt : [Here](https://github.com/Logustra/sapl/tree/sass-with-grunt)
* Sass with Webpack : [Here](https://github.com/Logustra/sapl/tree/sass-with-webpack)

## Architecture Sass
Properly architecting your Sass project is a crucial starting point to having a maintainable, scalable, and well-organized project. Sass makes separating your project into logical “modules” simple with the `@import` directive, which acts differently than the native CSS `@import` directive in that it **includes** `.scss` **or** `.sass` **files before the final CSS output.**

You can [read the documentation on the](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#import) `@import` [directive](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#import) to get a good idea of how you can use it to include partial files.

There are many project architectures that you can employ in your project, and each might have their pros and cons. The important thing is that you **choose one and stick with it**. In this article, The **7-1 Pattern** by Hugo Giraudel will be used. To summarize, there are **seven** folders and **one** `main.scss` file for output:

- `base/` – contains global styles, such as resets, typography, colors, etc.
- `components/` – contains each self-contained component in its own .scss partial
- `layout/` – contains styling for larger layout components; e.g. nav, header, footer, etc.
- `pages/` – contains page-specific styling, if necessary
- `themes/` – contains styling for different themes
- `utils/` – contains global mixins, functions, helper selectors, etc.
- `vendors/` – contains 3rd-party styles, mixins, etc.
- `main.scss` – output file that brings together all of the above parts

Reference : [scotch.io](https://scotch.io/tutorials/aesthetic-sass-1-architecture-and-style-organization)

## License
[MIT](https://github.com/Logustra/sass-boilerplate/blob/master/LICENSE.md) &copy; [Logustra](https://github.com/Logustra)
