# Markdown Extensions

___

## Table of Contents { #markdown data-toc-label='Table of Contents Alternative Label' }
[toc](https://python-markdown.github.io/extensions/toc/)

[TOC]

The above index was automatically generated with the marker [TOC]

___

## CodeHilite
[codehilite](https://python-markdown.github.io/extensions/code_hilite/)


```javascript hl_lines="4"
function recurse(startingPlace, otherFunc, callback_one) {
    // code you may have ...
    if (your_terminating_criterion === true) {
         return callback_one(val); // where val is potentially some value you want to return (or a json object with results)
    }
    // more code you may have
}
```

    #!javascript hl_lines="4"
    function recurse(startingPlace, otherFunc, callback_one) {
        // code you may have ...
        if (your_terminating_criterion === true) {
            return callback_one(val); // where val is potentially some value you want to return (or a json object with results)
        }
        // more code you may have
    }

For some reason I didn't get the line numbers to align correctly. I added the extra CSS according to instructions but it didn't change anything AFAIK. Turning off all other extensions and switching themes didn't work either.

___

## SmartyPants 
[smarty](https://python-markdown.github.io/extensions/smarty/)

'single quotes', "quotes", << angle quotes >>, ... (ellipsis) and dashes  -- and --- are converted to their HTML entity equivalents.

___

## Footnotes
[footnotes](https://python-markdown.github.io/extensions/footnotes/)
Click on this[^1] or this[^2] footnotes and be taken to additional text at the bottom of the page.

[^1]:
    For convenience, in the markdown file this additional block follows that first line with the footnotes.

    > Although in the actual HTML
    > it drops to the end.

    ```
    a code block
    ```

    A final paragraph.
[^2]: Notice the arrow at the end of this note: "2".

___

## Attribute Lists
[attr_list](https://python-markdown.github.io/extensions/attr_list/)

___

## Definition Lists
[def_list](https://python-markdown.github.io/extensions/definition_lists/)

Apple
:   Pomaceous fruit of plants of the genus Malus in
    the family Rosaceae.

Orange
:   The fruit of an evergreen tree of the genus Citrus.

___

## Abbreviations
[abbr](https://python-markdown.github.io/extensions/abbreviations/)

The HTML specification
is maintained by the W3C.

*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium

___

## New-Line-to-Break Extension
[nl2br](https://python-markdown.github.io/extensions/nl2br/)

Will cause newlines to be treated as hard breaks; like StackOverflow and GitHub flavored Markdown do.

___

## Admonition
[admonition](https://python-markdown.github.io/extensions/admonition/)

!!! attention
    This is an attention box

!!! caution
    This is a caution box

!!! danger
    This is a danger box

!!! error
    This is an error box

!!! hint
    This is a hint box

!!! important
    This is an important box

!!! note
    This is a note box

!!! tip
    This is a tip box

!!! warning
    This is a warning box

