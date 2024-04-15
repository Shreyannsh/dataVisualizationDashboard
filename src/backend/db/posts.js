import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    Day: "4/10/2022",
    Age: "15-25",
    Gender: "Male",
    A: 749,
    B: 14,
    C: 126,
    D: 963,
    E: 615,
    F: 712,
  },
  {
    Day: "4/10/2022",
    Age: ">25",
    Gender: "Male",
    A: 668,
    B: 39,
    C: 893,
    D: 389,
    E: 316,
    F: 126,
  },
  {
    Day: "4/10/2022",
    Age: "15-25",
    Gender: "Female",
    A: 390,
    B: 910,
    C: 994,
    D: 664,
    E: 944,
    F: 111,
  },
  {
    Day: "4/10/2022",
    Age: ">25",
    Gender: "Female",
    A: 140,
    B: 38,
    C: 550,
    D: 750,
    E: 977,
    F: 601,
  },
  {
    Day: "5/10/2022",
    Age: "15-25",
    Gender: "Male",
    A: 632,
    B: 692,
    C: 147,
    D: 604,
    E: 530,
    F: 963,
  },
  {
    Day: "5/10/2022",
    Age: ">25",
    Gender: "Male",
    A: 158,
    B: 263,
    C: 235,
    D: 628,
    E: 221,
    F: 701,
  },
  {
    Day: "5/10/2022",
    Age: "15-25",
    Gender: "Female",
    A: 531,
    B: 984,
    C: 267,
    D: 401,
    E: 196,
    F: 494,
  },
  {
    Day: "5/10/2022",
    Age: ">25",
    Gender: "Female",
    A: 479,
    B: 447,
    C: 232,
    D: 544,
    E: 567,
    F: 468,
  },
  {
    Day: "6/10/2022",
    Age: "15-25",
    Gender: "Male",
    A: 740,
    B: 153,
    C: 516,
    D: 88,
    E: 694,
    F: 774,
  },
  {
    Day: "6/10/2022",
    Age: ">25",
    Gender: "Male",
    A: 335,
    B: 633,
    C: 806,
    D: 547,
    E: 829,
    F: 995,
  },
  {
    Day: "6/10/2022",
    Age: "15-25",
    Gender: "Female",
    A: 466,
    B: 714,
    C: 162,
    D: 535,
    E: 181,
    F: 934,
  },
  {
    Day: "6/10/2022",
    Age: ">25",
    Gender: "Female",
    A: 113,
    B: 986,
    C: 727,
    D: 982,
    E: 602,
    F: 945,
  },
  {
    Day: "7/10/2022",
    Age: "15-25",
    Gender: "Male",
    A: 577,
    B: 683,
    C: 885,
    D: 142,
    E: 565,
    F: 342,
  },
  {
    Day: "7/10/2022",
    Age: ">25",
    Gender: "Male",
    A: 809,
    B: 473,
    C: 204,
    D: 526,
    E: 253,
    F: 567,
  },
  {
    Day: "7/10/2022",
    Age: "15-25",
    Gender: "Female",
    A: 452,
    B: 860,
    C: 720,
    D: 489,
    E: 960,
    F: 398,
  },
  {
    Day: "7/10/2022",
    Age: ">25",
    Gender: "Female",
    A: 213,
    B: 885,
    C: 602,
    D: 677,
    E: 932,
    F: 118,
  },
  {
    Day: "8/10/2022",
    Age: "15-25",
    Gender: "Male",
    A: 413,
    B: 11,
    C: 268,
    D: 606,
    E: 492,
    F: 312,
  },
  {
    Day: "8/10/2022",
    Age: ">25",
    Gender: "Male",
    A: 230,
    B: 226,
    C: 808,
    D: 192,
    E: 71,
    F: 13,
  },
  {
    Day: "8/10/2022",
    Age: "15-25",
    Gender: "Female",
    A: 599,
    B: 504,
    C: 604,
    D: 682,
    E: 89,
    F: 873,
  },
  {
    Day: "8/10/2022",
    Age: ">25",
    Gender: "Female",
    A: 790,
    B: 948,
    C: 997,
    D: 334,
    E: 751,
    F: 573,
  },
  {
    Day: "9/10/2022",
    Age: "15-25",
    Gender: "Male",
    A: 358,
    B: 539,
    C: 784,
    D: 382,
    E: 380,
    F: 997,
  },
  {
    Day: "9/10/2022",
    Age: ">25",
    Gender: "Male",
    A: 457,
    B: 646,
    C: 589,
    D: 81,
    E: 173,
    F: 14,
  },
  {
    Day: "9/10/2022",
    Age: "15-25",
    Gender: "Female",
    A: 556,
    B: 738,
    C: 952,
    D: 140,
    E: 560,
    F: 615,
  },
  {
    Day: "9/10/2022",
    Age: ">25",
    Gender: "Female",
    A: 270,
    B: 264,
    C: 105,
    D: 412,
    E: 100,
    F: 157,
  },
  {
    Day: "10/10/2022",
    Age: "15-25",
    Gender: "Male",
    A: 403,
    B: 359,
    C: 769,
    D: 326,
    E: 110,
    F: 636,
  },
  {
    Day: "10/10/2022",
    Age: ">25",
    Gender: "Male",
    A: 193,
    B: 910,
    C: 799,
    D: 900,
    E: 981,
    F: 756,
  },
  {
    Day: "10/10/2022",
    Age: "15-25",
    Gender: "Female",
    A: 348,
    B: 602,
    C: 136,
    D: 502,
    E: 630,
    F: 133,
  },
  {
    Day: "10/10/2022",
    Age: ">25",
    Gender: "Female",
    A: 278,
    B: 860,
    C: 195,
    D: 987,
    E: 584,
    F: 545,
  },
  {
    Day: "11/10/2022",
    Age: "15-25",
    Gender: "Male",
    A: 457,
    B: 808,
    C: 312,
    D: 66,
    E: 243,
    F: 439,
  },
  {
    Day: "11/10/2022",
    Age: ">25",
    Gender: "Male",
    A: 340,
    B: 265,
    C: 190,
    D: 689,
    E: 580,
    F: 191,
  },
  {
    Day: "11/10/2022",
    Age: "15-25",
    Gender: "Female",
    A: 186,
    B: 349,
    C: 364,
    D: 777,
    E: 39,
    F: 69,
  },
  {
    Day: "11/10/2022",
    Age: ">25",
    Gender: "Female",
    A: 427,
    B: 305,
    C: 957,
    D: 50,
    E: 553,
    F: 536,
  },
  {
    Day: "12/10/2022",
    Age: "15-25",
    Gender: "Male",
    A: 258,
    B: 665,
    C: 212,
    D: 235,
    E: 647,
    F: 766,
  },
  {
    Day: "12/10/2022",
    Age: ">25",
    Gender: "Male",
    A: 261,
    B: 904,
    C: 494,
    D: 336,
    E: 553,
    F: 863,
  },
  {
    Day: "12/10/2022",
    Age: "15-25",
    Gender: "Female",
    A: 20,
    B: 552,
    C: 35,
    D: 847,
    E: 224,
    F: 909,
  },
  {
    Day: "12/10/2022",
    Age: ">25",
    Gender: "Female",
    A: 135,
    B: 510,
    C: 296,
    D: 825,
    E: 486,
    F: 522,
  },
  {
    Day: "13/10/2022",
    Age: "15-25",
    Gender: "Male",
    A: 244,
    B: 914,
    C: 696,
    D: 549,
    E: 145,
    F: 878,
  },
  {
    Day: "13/10/2022",
    Age: ">25",
    Gender: "Male",
    A: 807,
    B: 377,
    C: 668,
    D: 696,
    E: 153,
    F: 956,
  },
  {
    Day: "13/10/2022",
    Age: "15-25",
    Gender: "Female",
    A: 375,
    B: 968,
    C: 745,
    D: 164,
    E: 228,
    F: 45,
  },
  {
    Day: "13/10/2022",
    Age: ">25",
    Gender: "Female",
    A: 789,
    B: 323,
    C: 106,
    D: 182,
    E: 799,
    F: 205,
  },
  {
    Day: "14/10/2022",
    Age: "15-25",
    Gender: "Male",
    A: 152,
    B: 197,
    C: 44,
    D: 492,
    E: 208,
    F: 168,
  },
  {
    Day: "14/10/2022",
    Age: ">25",
    Gender: "Male",
    A: 188,
    B: 263,
    C: 791,
    D: 34,
    E: 13,
    F: 849,
  },
  {
    Day: "14/10/2022",
    Age: "15-25",
    Gender: "Female",
    A: 775,
    B: 355,
    C: 665,
    D: 563,
    E: 985,
    F: 307,
  },
  {
    Day: "14/10/2022",
    Age: ">25",
    Gender: "Female",
    A: 50,
    B: 114,
    C: 173,
    D: 948,
    E: 116,
    F: 405,
  },
  {
    Day: "15/10/2022",
    Age: "15-25",
    Gender: "Male",
    A: 145,
    B: 709,
    C: 431,
    D: 88,
    E: 983,
    F: 585,
  },
  {
    Day: "15/10/2022",
    Age: ">25",
    Gender: "Male",
    A: 756,
    B: 773,
    C: 569,
    D: 659,
    E: 740,
    F: 661,
  },
  {
    Day: "15/10/2022",
    Age: "15-25",
    Gender: "Female",
    A: 675,
    B: 643,
    C: 785,
    D: 361,
    E: 525,
    F: 432,
  },
  {
    Day: "15/10/2022",
    Age: ">25",
    Gender: "Female",
    A: 774,
    B: 205,
    C: 137,
    D: 665,
    E: 872,
    F: 796,
  },
  {
    Day: "16/10/2022",
    Age: "15-25",
    Gender: "Male",
    A: 714,
    B: 282,
    C: 854,
    D: 417,
    E: 693,
    F: 293,
  },
  {
    Day: "16/10/2022",
    Age: ">25",
    Gender: "Male",
    A: 318,
    B: 614,
    C: 115,
    D: 337,
    E: 599,
    F: 203,
  },
  {
    Day: "16/10/2022",
    Age: "15-25",
    Gender: "Female",
    A: 340,
    B: 916,
    C: 161,
    D: 197,
    E: 442,
    F: 391,
  },
  {
    Day: "16/10/2022",
    Age: ">25",
    Gender: "Female",
    A: 744,
    B: 861,
    C: 342,
    D: 404,
    E: 188,
    F: 468,
  },
  {
    Day: "17/10/2022",
    Age: "15-25",
    Gender: "Male",
    A: 501,
    B: 865,
    C: 47,
    D: 60,
    E: 543,
    F: 267,
  },
  {
    Day: "17/10/2022",
    Age: ">25",
    Gender: "Male",
    A: 866,
    B: 783,
    C: 46,
    D: 588,
    E: 3,
    F: 314,
  },
  {
    Day: "17/10/2022",
    Age: "15-25",
    Gender: "Female",
    A: 583,
    B: 736,
    C: 878,
    D: 167,
    E: 645,
    F: 671,
  },
  {
    Day: "17/10/2022",
    Age: ">25",
    Gender: "Female",
    A: 437,
    B: 598,
    C: 484,
    D: 314,
    E: 157,
    F: 518,
  },
  {
    Day: "18/10/2022",
    Age: "15-25",
    Gender: "Male",
    A: 419,
    B: 406,
    C: 648,
    D: 631,
    E: 762,
    F: 584,
  },
  {
    Day: "18/10/2022",
    Age: ">25",
    Gender: "Male",
    A: 510,
    B: 892,
    C: 965,
    D: 969,
    E: 650,
    F: 751,
  },
  {
    Day: "18/10/2022",
    Age: "15-25",
    Gender: "Female",
    A: 597,
    B: 185,
    C: 927,
    D: 838,
    E: 29,
    F: 804,
  },
  {
    Day: "18/10/2022",
    Age: ">25",
    Gender: "Female",
    A: 111,
    B: 702,
    C: 200,
    D: 932,
    E: 14,
    F: 248,
  },
  {
    Day: "19/10/2022",
    Age: "15-25",
    Gender: "Male",
    A: 158,
    B: 412,
    C: 679,
    D: 897,
    E: 389,
    F: 709,
  },
  {
    Day: "19/10/2022",
    Age: ">25",
    Gender: "Male",
    A: 956,
    B: 258,
    C: 82,
    D: 278,
    E: 964,
    F: 700,
  },
  {
    Day: "19/10/2022",
    Age: "15-25",
    Gender: "Female",
    A: 394,
    B: 861,
    C: 548,
    D: 688,
    E: 893,
    F: 305,
  },
  {
    Day: "19/10/2022",
    Age: ">25",
    Gender: "Female",
    A: 302,
    B: 102,
    C: 434,
    D: 13,
    E: 840,
    F: 342,
  },
  {
    Day: "20/10/2022",
    Age: "15-25",
    Gender: "Male",
    A: 504,
    B: 212,
    C: 124,
    D: 778,
    E: 334,
    F: 632,
  },
  {
    Day: "20/10/2022",
    Age: ">25",
    Gender: "Male",
    A: 805,
    B: 860,
    C: 882,
    D: 859,
    E: 833,
    F: 127,
  },
  {
    Day: "20/10/2022",
    Age: "15-25",
    Gender: "Female",
    A: 447,
    B: 201,
    C: 470,
    D: 578,
    E: 643,
    F: 252,
  },
  {
    Day: "20/10/2022",
    Age: ">25",
    Gender: "Female",
    A: 671,
    B: 896,
    C: 306,
    D: 268,
    E: 413,
    F: 625,
  },
  {
    Day: "21/10/2022",
    Age: "15-25",
    Gender: "Male",
    A: 498,
    B: 203,
    C: 202,
    D: 741,
    E: 879,
    F: 482,
  },
  {
    Day: "21/10/2022",
    Age: ">25",
    Gender: "Male",
    A: 654,
    B: 849,
    C: 867,
    D: 930,
    E: 787,
    F: 516,
  },
  {
    Day: "21/10/2022",
    Age: "15-25",
    Gender: "Female",
    A: 548,
    B: 416,
    C: 960,
    D: 257,
    E: 728,
    F: 709,
  },
  {
    Day: "21/10/2022",
    Age: ">25",
    Gender: "Female",
    A: 875,
    B: 81,
    C: 184,
    D: 605,
    E: 670,
    F: 155,
  },
  {
    Day: "22/10/2022",
    Age: "15-25",
    Gender: "Male",
    A: 978,
    B: 485,
    C: 135,
    D: 628,
    E: 65,
    F: 19,
  },
  {
    Day: "22/10/2022",
    Age: ">25",
    Gender: "Male",
    A: 102,
    B: 137,
    C: 210,
    D: 809,
    E: 446,
    F: 415,
  },
  {
    Day: "22/10/2022",
    Age: "15-25",
    Gender: "Female",
    A: 881,
    B: 240,
    C: 84,
    D: 336,
    E: 157,
    F: 575,
  },
  {
    Day: "22/10/2022",
    Age: ">25",
    Gender: "Female",
    A: 610,
    B: 339,
    C: 950,
    D: 448,
    E: 426,
    F: 476,
  },
  {
    Day: "23/10/2022",
    Age: "15-25",
    Gender: "Male",
    A: 694,
    B: 226,
    C: 748,
    D: 785,
    E: 788,
    F: 348,
  },
  {
    Day: "23/10/2022",
    Age: ">25",
    Gender: "Male",
    A: 474,
    B: 72,
    C: 33,
    D: 720,
    E: 999,
    F: 850,
  },
  {
    Day: "23/10/2022",
    Age: "15-25",
    Gender: "Female",
    A: 303,
    B: 996,
    C: 298,
    D: 720,
    E: 440,
    F: 554,
  },
  {
    Day: "23/10/2022",
    Age: ">25",
    Gender: "Female",
    A: 653,
    B: 872,
    C: 733,
    D: 197,
    E: 129,
    F: 204,
  },
  {
    Day: "24/10/2022",
    Age: "15-25",
    Gender: "Male",
    A: 836,
    B: 806,
    C: 975,
    D: 91,
    E: 482,
    F: 931,
  },
  {
    Day: "24/10/2022",
    Age: ">25",
    Gender: "Male",
    A: 300,
    B: 991,
    C: 561,
    D: 837,
    E: 916,
    F: 657,
  },
  {
    Day: "24/10/2022",
    Age: "15-25",
    Gender: "Female",
    A: 479,
    B: 683,
    C: 858,
    D: 253,
    E: 466,
    F: 948,
  },
  {
    Day: "24/10/2022",
    Age: ">25",
    Gender: "Female",
    A: 263,
    B: 494,
    C: 204,
    D: 105,
    E: 748,
    F: 934,
  },
  {
    Day: "25/10/2022",
    Age: "15-25",
    Gender: "Male",
    A: 152,
    B: 398,
    C: 81,
    D: 491,
    E: 102,
    F: 129,
  },
  {
    Day: "25/10/2022",
    Age: ">25",
    Gender: "Male",
    A: 357,
    B: 290,
    C: 501,
    D: 617,
    E: 484,
    F: 305,
  },
  {
    Day: "25/10/2022",
    Age: "15-25",
    Gender: "Female",
    A: 20,
    B: 102,
    C: 857,
    D: 795,
    E: 302,
    F: 834,
  },
  {
    Day: "25/10/2022",
    Age: ">25",
    Gender: "Female",
    A: 184,
    B: 995,
    C: 741,
    D: 643,
    E: 507,
    F: 462,
  },
  {
    Day: "26/10/2022",
    Age: "15-25",
    Gender: "Male",
    A: 730,
    B: 235,
    C: 258,
    D: 366,
    E: 470,
    F: 782,
  },
  {
    Day: "26/10/2022",
    Age: ">25",
    Gender: "Male",
    A: 817,
    B: 54,
    C: 861,
    D: 964,
    E: 894,
    F: 828,
  },
  {
    Day: "26/10/2022",
    Age: "15-25",
    Gender: "Female",
    A: 600,
    B: 559,
    C: 669,
    D: 515,
    E: 462,
    F: 113,
  },
  {
    Day: "26/10/2022",
    Age: ">25",
    Gender: "Female",
    A: 197,
    B: 172,
    C: 152,
    D: 741,
    E: 212,
    F: 791,
  },
  {
    Day: "27/10/2022",
    Age: "15-25",
    Gender: "Male",
    A: 980,
    B: 719,
    C: 155,
    D: 990,
    E: 927,
    F: 557,
  },
  {
    Day: "27/10/2022",
    Age: ">25",
    Gender: "Male",
    A: 443,
    B: 740,
    C: 7,
    D: 821,
    E: 217,
    F: 861,
  },
  {
    Day: "27/10/2022",
    Age: "15-25",
    Gender: "Female",
    A: 146,
    B: 217,
    C: 78,
    D: 456,
    E: 432,
    F: 44,
  },
  {
    Day: "27/10/2022",
    Age: ">25",
    Gender: "Female",
    A: 145,
    B: 814,
    C: 529,
    D: 10,
    E: 69,
    F: 633,
  },
  {
    Day: "28/10/2022",
    Age: "15-25",
    Gender: "Male",
    A: 167,
    B: 846,
    C: 653,
    D: 736,
    E: 186,
    F: 543,
  },
  {
    Day: "28/10/2022",
    Age: ">25",
    Gender: "Male",
    A: 119,
    B: 637,
    C: 427,
    D: 656,
    E: 719,
    F: 682,
  },
  {
    Day: "28/10/2022",
    Age: "15-25",
    Gender: "Female",
    A: 749,
    B: 694,
    C: 8,
    D: 175,
    E: 130,
    F: 338,
  },
  {
    Day: "28/10/2022",
    Age: ">25",
    Gender: "Female",
    A: 407,
    B: 711,
    C: 373,
    D: 859,
    E: 914,
    F: 596,
  },
  {
    Day: "29/10/2022",
    Age: "15-25",
    Gender: "Male",
    A: 142,
    B: 322,
    C: 696,
    D: 596,
    E: 597,
    F: 844,
  },
  {
    Day: "29/10/2022",
    Age: ">25",
    Gender: "Male",
    A: 203,
    B: 796,
    C: 851,
    D: 950,
    E: 242,
    F: 924,
  },
  {
    Day: "29/10/2022",
    Age: "15-25",
    Gender: "Female",
    A: 138,
    B: 228,
    C: 983,
    D: 602,
    E: 921,
    F: 292,
  },
  {
    Day: "29/10/2022",
    Age: ">25",
    Gender: "Female",
    A: 409,
    B: 70,
    C: 590,
    D: 11,
    E: 148,
    F: 131,
  },
];
