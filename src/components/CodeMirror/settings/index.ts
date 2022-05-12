/*
 * @Author: Rv_Jiang
 * @Date: 2022-05-03 08:42:17
 * @LastEditors: Rv_Jiang
 * @LastEditTime: 2022-05-10 11:22:13
 * @Description:
 * @Email: Rv_Jiang@outlook.com
 */

// 风格对应的样式
import 'codemirror/theme/monokai.css';
import 'codemirror/theme/solarized.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/material-darker.css';
import 'codemirror/theme/material-ocean.css';
import 'codemirror/theme/material-palenight.css';

// highlightSelectionMatches
import 'codemirror/addon/scroll/annotatescrollbar.js';
import 'codemirror/addon/search/matchesonscrollbar.js';
import 'codemirror/addon/dialog/dialog.js';
import 'codemirror/addon/dialog/dialog.css';
import 'codemirror/addon/search/searchcursor.js';
import 'codemirror/addon/search/search.js';
import 'codemirror/addon/search/match-highlighter.js';

// mode
import 'codemirror/mode/clike/clike.js';
import 'codemirror/mode/python/python.js';
// import 'codemirror/mode/pascal/pascal.js'; //pascal
// import 'codemirror/mode/go/go.js'; //go
// import 'codemirror/mode/d/d.js'; //d
// import 'codemirror/mode/haskell/haskell.js'; //haskell
// import 'codemirror/mode/mllike/mllike.js'; //OCaml
// import 'codemirror/mode/perl/perl.js'; //perl
// import 'codemirror/mode/php/php.js'; //php
// import 'codemirror/mode/ruby/ruby.js'; //ruby
// import 'codemirror/mode/rust/rust.js'; //rust
import 'codemirror/mode/javascript/javascript.js'; //javascript
// import 'codemirror/mode/fortran/fortran.js'; //fortran

// active-line.js
import 'codemirror/addon/selection/active-line.js';

// foldGutter
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/fold/foldgutter.js';

import 'codemirror/addon/edit/matchbrackets.js';
import 'codemirror/addon/edit/matchtags.js';
import 'codemirror/addon/edit/closetag.js';
import 'codemirror/addon/edit/closebrackets.js';
import 'codemirror/addon/fold/brace-fold.js';
import 'codemirror/addon/fold/indent-fold.js';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/show-hint.js';
import 'codemirror/addon/hint/anyword-hint.js';
import 'codemirror/addon/selection/mark-selection.js';

// keyMap
import 'codemirror/keymap/sublime';

// lint
import 'codemirror/addon/lint/lint';
import 'codemirror/addon/lint/lint.css';
import 'codemirror/addon/lint/javascript-lint';
import 'codemirror/addon/display/autorefresh';
