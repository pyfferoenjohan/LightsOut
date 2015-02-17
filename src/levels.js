define(function() {
  'use strict';

  /*
  {
    blueprint: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    minMoves: 0
  }
  */

  var levels = [
    {
      blueprint: [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0]
      ],
      minMoves: 1
    },
    {
      blueprint: [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 1, 0, 0],
        [1, 1, 1, 0, 0]
      ],
      minMoves: 2
    },
    {
      blueprint: [
        [1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0],
        [1, 0, 0, 0, 1],
        [0, 0, 0, 1, 1],
        [0, 0, 0, 0, 1]
      ],
      minMoves: 2
    },
    {
      blueprint: [
        [0, 1, 0, 0, 0],
        [1, 1, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0]
      ],
      minMoves: 3
    },
    {
      blueprint: [
        [1, 1, 0, 1, 1],
        [0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0]
      ],
      minMoves: 3
    },
    {
      blueprint: [
        [1, 0, 0, 0, 1],
        [0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
      ],
      minMoves: 4
    }
  ];


  return levels;
});
