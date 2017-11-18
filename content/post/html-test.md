---
title: "Html Test"
date: 2017-11-18T07:53:57+01:00
draft: false
---

#  HTML Test

In the Atom Styleguide I found some interesting style snippets.
I wonder if they will work on static sites as well.
If they work the checkboxes would be especially nice. To follow along with a tutorial and check off steps.

Update: I just reviewed gfm-markdown also enables you to toggle checkboxes.

- [ ] my gfm checkbox

## HTML snippets

Keyboard keys:

<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>A</kbd>

Progress:
<div class='block'>
    <progress class='inline-block' max='100' value='75'></progress>
    <span class='inline-block'>75% progress</span>
</div>

Panel:
<atom-panel class='modal'>
    <div class='select-list'>
        <ol class='list-group mark-active'>
            <li class='selected'>Selected &mdash; user is arrowing through the list.</li>
            <li class='active'>This is the active item</li>
            <li class='selected active'>Selected AND Active!</li>
        </ol>
    </div>
</atom-panel>

Panel with icons:
<atom-panel class='modal'>
    <div class='select-list'>
        <ol class='list-group'>
            <li class='selected'>
                <div class='status status-added icon icon-diff-added'></div>
                <div class='icon icon-file-text'>Some file</div>
            </li>
            <li>
                <div class='status status-modified icon icon-diff-modified'></div>
                <div class='icon icon-file-text'>Another file</div>
            </li>
            <li>
                <div class='status status-removed icon icon-diff-removed'></div>
                <div class='icon icon-file-text'>Yet another file</div>
            </li>
        </ol>
    </div>
</atom-panel>

Colored list:
<ul class='list-group'>
    <li class='list-item'>Normal item</li>
    <li class='list-item selected'>This is the Selected item</li>
    <li class='list-item text-subtle'>Subtle</li>
    <li class='list-item text-info'>Info</li>
    <li class='list-item text-success'>Success</li>
    <li class='list-item text-warning'>Warning</li>
    <li class='list-item text-error'>Error</li>
</ul>

Interactives:

<input class='input-color' type='color' value='#FF85FF' >
<input class='input-number' type='number' min='1' max='10' placeholder='1-10'>
<select class='input-select'><option>Option 1</option><option>Option 2</option><option>Option 3</option></select>

<label class='input-label'><input class='input-radio' type='radio' name='radio'> Radio</label>
<label class='input-label'><input class='input-radio' type='radio' name='radio' checked> Radio</label>
<label class='input-label'><input class='input-checkbox' type='checkbox' checked> Checkbox</label>
<label class='input-label'><input class='input-toggle' type='checkbox' checked> Toggle</label>
<input class='input-range' type='range'> Slider </input>

<br>
<span class='loading loading-spinner-medium inline-block'></span>
