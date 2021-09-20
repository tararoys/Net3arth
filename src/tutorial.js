let tutorialState = 0;

let tutorials = [
`/*
 This is the Net3arth tutorial
 The goal of these tutorials are to teach you
 how to use Net3arth & program in 3arthLang.

 All of these tutorials are written in runnable
 3arthLang code. You can run the code by
 clicking the Run button in the top left,
 typing Ctrl-R (Cmd-R on Mac),
 or typing F1, searching for "run" and ENTER.

 Try it now!

 You should see a white circle appear.
 */

body: blurCircle()
  -> scale(0.5);

/*
 The above code is defining the body of the code
 and applying a circle function which is curried
 into a scale function.
 */
`,
`/*
 That was a fine circle, but it'll be
 much better once we start using some
 iteration. We do this most simply with "choose".
*/

body:
choose{
  1: blurCircle()
    -> scale(0.25);
  1: rotate(0.5)
    -> arcsinh()
    -> scale(0.7853981633974)
    -> trigTanh()
    -> circleInv()
    -> scale(0.25);
};
`,
`/*
 In addition to the body, there's the camera
 The camera is run before the points are
 drawn, and then discarded.
*/

body: blurCircle();

camera: scale(0.5);
`,
`/*
 And to top it all of, there's the shader.
 The shader runs on the pixels and is given
 a normalized brightness, which lets you do
 things like change the gamma.
*/

body:
choose{
  1: blurCircle()
  -> scale(0.5)
  -> gradient([
    colorRGB(0, 0, 1),
    colorRGB(0, 1, 1)
  ]);
  1: translate(0.2, 0);
};

camera:
translate(-4, 0)
-> scale(0.1);

shader:
gamma(10);
`,
];

function tutorial() {
  let pos = editor.getCursorPosition();

  editor.setValue(tutorials[tutorialState]);
  editor.moveCursorToPosition({row:0, pos:0});
  editor.clearSelection();

  tutorialState = (tutorialState+1)%tutorials.length;
}
